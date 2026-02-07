# =============================================================================
# Infrastructure Documentation — jhosetpfrancisco.com
# This Terraform file documents the AWS infrastructure.
# Resources were created via AWS CLI. This file is for reference only.
# =============================================================================

terraform {
  required_version = ">= 1.5"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

# =============================================================================
# Variables
# =============================================================================

locals {
  domain     = "jhosetpfrancisco.com"
  www_domain = "www.jhosetpfrancisco.com"
}

# =============================================================================
# S3 — Static site bucket
# =============================================================================

resource "aws_s3_bucket" "web" {
  bucket = var.s3_bucket
}

resource "aws_s3_bucket_website_configuration" "web" {
  bucket = aws_s3_bucket.web.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "web" {
  bucket = aws_s3_bucket.web.id

  block_public_acls       = false
  ignore_public_acls      = false
  block_public_policy     = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_policy" "web" {
  bucket = aws_s3_bucket.web.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.web.arn}/*"
      }
    ]
  })
}

# =============================================================================
# CloudFront Function — Redirect apex → www (301)
# =============================================================================

resource "aws_cloudfront_function" "redirect_apex_to_www" {
  name    = "redirect-jhosetpfrancisco-apex-to-www"
  runtime = "cloudfront-js-2.0"
  comment = "Redirect jhosetpfrancisco.com to www.jhosetpfrancisco.com"
  publish = true
  code    = <<-EOF
    function handler(event) {
      var request = event.request;
      var host = request.headers.host.value;
      if (host === 'jhosetpfrancisco.com') {
        return {
          statusCode: 301,
          statusDescription: 'Moved Permanently',
          headers: {
            location: { value: 'https://www.jhosetpfrancisco.com' + request.uri }
          }
        };
      }
      return request;
    }
  EOF
}

# =============================================================================
# CloudFront — Single distribution (both apex + www aliases)
# =============================================================================

resource "aws_cloudfront_distribution" "web" {
  comment             = "jhosetpfrancisco.com - Portfolio"
  enabled             = true
  http_version        = "http2and3"
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  aliases             = [local.domain, local.www_domain]

  origin {
    domain_name = "${var.s3_bucket}.s3.us-east-1.amazonaws.com"
    origin_id   = "S3-${var.s3_bucket}"

    s3_origin_config {
      origin_access_identity = ""
    }
  }

  default_cache_behavior {
    target_origin_id       = "S3-${var.s3_bucket}"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    min_ttl                = 0
    default_ttl            = 86400
    max_ttl                = 31536000

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.redirect_apex_to_www.arn
    }
  }

  custom_error_response {
    error_code            = 403
    response_page_path    = "/index.html"
    response_code         = 200
    error_caching_min_ttl = 10
  }

  custom_error_response {
    error_code            = 404
    response_page_path    = "/index.html"
    response_code         = 200
    error_caching_min_ttl = 10
  }

  viewer_certificate {
    acm_certificate_arn      = var.acm_cert_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

# =============================================================================
# Route53 — DNS Records (both apex + www → single CloudFront)
# =============================================================================

resource "aws_route53_record" "apex_a" {
  zone_id = var.hosted_zone_id
  name    = local.domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = "Z2FDTNDATAQYW2" # CloudFront hosted zone ID (global)
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "apex_aaaa" {
  zone_id = var.hosted_zone_id
  name    = local.domain
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_a" {
  zone_id = var.hosted_zone_id
  name    = local.www_domain
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_aaaa" {
  zone_id = var.hosted_zone_id
  name    = local.www_domain
  type    = "AAAA"

  alias {
    name                   = aws_cloudfront_distribution.web.domain_name
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}
