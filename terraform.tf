terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.50.0"
    }
  }

  backend "s3" {
    profile = "personal"
    region  = "us-west-2"

    bucket = "aaronshiels-state"
    key    = "scribblecards.net/terraform.tfstate"
  }
}
