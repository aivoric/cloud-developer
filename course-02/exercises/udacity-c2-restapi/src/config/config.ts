export const config = {
  "dev": {
    "username": process.env.POSTGRES_DEV_USERNAME,
    "password": process.env.POSTGRES_DEV_PASSWORD,
    "database": process.env.POSTGRES_DEV_DATABASE,
    "host": process.env.POSTGRES_DEV_HOST,
    "dialect": process.env.POSTGRES_DEV_DIALECT,
    "aws_region": process.env.AWS_DEV_REGION,
    "aws_profile": process.env.AWS_DEV_PROFILE,
    "aws_media_bucket": process.env.AWS_DEV_S3_BUCKET_NAME
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}