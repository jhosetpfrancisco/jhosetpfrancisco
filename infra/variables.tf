variable "hosted_zone_id" {
  description = "Route53 hosted zone ID"
  type        = string
}

variable "acm_cert_arn" {
  description = "ACM certificate ARN for the domain"
  type        = string
  sensitive   = true
}

variable "cf_distribution_id" {
  description = "CloudFront distribution ID"
  type        = string
}

variable "cf_distribution_domain" {
  description = "CloudFront distribution domain name"
  type        = string
}

variable "s3_bucket" {
  description = "S3 bucket name for the static site"
  type        = string
}
