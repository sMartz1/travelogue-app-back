const config = require('./../../config')
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: config.S3_ID_ACCESSKEY,
    secretAccessKey: config.S3_SECRET_ACCESSKEY
})

/**
 * Documentation
 * https://docs.aws.amazon.com/AmazonS3/latest/API/API_Operations_Amazon_Simple_Storage_Service.html
 */

module.exports = s3