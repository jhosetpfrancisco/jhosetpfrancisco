# =============================================================================
# Deploy Portfolio to S3 + CloudFront (Windows)
# Usage: .\scripts\deploy.ps1
# =============================================================================

$ErrorActionPreference = "Stop"

# Load .env from project root
$envFile = Join-Path $PSScriptRoot "../.env"
if (Test-Path $envFile) {
  Get-Content $envFile | ForEach-Object {
    if ($_ -match '^\s*([^#][^=]+)=(.*)$') {
      [System.Environment]::SetEnvironmentVariable($Matches[1].Trim(), $Matches[2].Trim(), "Process")
    }
  }
}

$S3_BUCKET = $env:S3_BUCKET
$CLOUDFRONT_DISTRIBUTION_ID = $env:CLOUDFRONT_DISTRIBUTION_ID
$BUILD_DIR = "dist/apps/web/browser"

if (-not $S3_BUCKET) { Write-Host "Missing S3_BUCKET — set it in .env" -ForegroundColor Red; exit 1 }
if (-not $CLOUDFRONT_DISTRIBUTION_ID) { Write-Host "Missing CLOUDFRONT_DISTRIBUTION_ID — set it in .env" -ForegroundColor Red; exit 1 }

Write-Host "Deploying jhosetpfrancisco.com" -ForegroundColor Green
Write-Host "=================================="

# Check AWS credentials
try {
  aws sts get-caller-identity | Out-Null
} catch {
  Write-Host "AWS credentials not configured" -ForegroundColor Red
  Write-Host "Run: aws configure"
  exit 1
}

# Build
Write-Host "Building production bundle..." -ForegroundColor Yellow
npx nx build web --configuration=production

if (-not (Test-Path -Path $BUILD_DIR)) {
  Write-Host "Build directory not found: $BUILD_DIR" -ForegroundColor Red
  exit 1
}

# Upload hashed assets with long cache (JS, CSS, images, fonts)
Write-Host "Uploading assets to S3..." -ForegroundColor Yellow

$syncAssetsArgs = @(
  "s3", "sync", $BUILD_DIR, "s3://$S3_BUCKET",
  "--delete",
  "--cache-control", "public, max-age=31536000",
  "--exclude", "*.html",
  "--exclude", "*.json",
  "--exclude", "*.xml",
  "--exclude", "*.txt"
)
aws @syncAssetsArgs

# Upload HTML/JSON/XML/TXT with no-cache (always fresh)
$syncHtmlArgs = @(
  "s3", "sync", $BUILD_DIR, "s3://$S3_BUCKET",
  "--cache-control", "no-cache, no-store, must-revalidate",
  "--exclude", "*",
  "--include", "*.html",
  "--include", "*.json",
  "--include", "*.xml",
  "--include", "*.txt"
)
aws @syncHtmlArgs

Write-Host "Upload complete" -ForegroundColor Green

# Invalidate CloudFront
if ($CLOUDFRONT_DISTRIBUTION_ID) {
  Write-Host "Invalidating CloudFront cache..." -ForegroundColor Yellow
  $invalidateArgs = @(
    "cloudfront", "create-invalidation",
    "--distribution-id", $CLOUDFRONT_DISTRIBUTION_ID,
    "--paths", "/*"
  )
  aws @invalidateArgs
  Write-Host "Cache invalidation started" -ForegroundColor Green
} else {
  Write-Host "CLOUDFRONT_DISTRIBUTION_ID not set, skipping invalidation" -ForegroundColor Yellow
  Write-Host "Set it with: `$env:CLOUDFRONT_DISTRIBUTION_ID = 'XXXXX'"
}

Write-Host ""
Write-Host "Deploy complete!" -ForegroundColor Green
Write-Host "https://www.jhosetpfrancisco.com"
