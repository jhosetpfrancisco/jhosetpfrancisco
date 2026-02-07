#!/bin/bash
# =============================================================================
# Deploy Portfolio to S3 + CloudFront
# Usage: ./scripts/deploy.sh
# =============================================================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Load .env from project root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"
if [ -f "$ENV_FILE" ]; then
    set -a
    source "$ENV_FILE"
    set +a
fi

S3_BUCKET="${S3_BUCKET:?Missing S3_BUCKET — set it in .env}"
CLOUDFRONT_DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:?Missing CLOUDFRONT_DISTRIBUTION_ID — set it in .env}"
BUILD_DIR="dist/apps/web/browser"

echo -e "${GREEN}Deploying jhosetpfrancisco.com${NC}"
echo "=================================="

# Check AWS credentials
if ! aws sts get-caller-identity &>/dev/null; then
    echo -e "${RED}AWS credentials not configured${NC}"
    echo "Run: aws configure"
    exit 1
fi

# Build
echo -e "${YELLOW}Building production bundle...${NC}"
npx nx build web --configuration=production

if [ ! -d "$BUILD_DIR" ]; then
    echo -e "${RED}Build directory not found: $BUILD_DIR${NC}"
    exit 1
fi

# Upload hashed assets with long cache (JS, CSS, images, fonts)
echo -e "${YELLOW}Uploading assets to S3...${NC}"
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET" \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "*.html" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt"

# Upload HTML/JSON/XML/TXT with no-cache (always fresh)
aws s3 sync "$BUILD_DIR" "s3://$S3_BUCKET" \
    --cache-control "no-cache, no-store, must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --include "*.json" \
    --include "*.xml" \
    --include "*.txt"

echo -e "${GREEN}Upload complete${NC}"

# Invalidate CloudFront
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${YELLOW}Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text
    echo -e "${GREEN}Cache invalidation started${NC}"
else
    echo -e "${YELLOW}CLOUDFRONT_DISTRIBUTION_ID not set, skipping invalidation${NC}"
    echo "Set it with: export CLOUDFRONT_DISTRIBUTION_ID=XXXXX"
fi

echo ""
echo -e "${GREEN}Deploy complete!${NC}"
echo "   https://www.jhosetpfrancisco.com"
