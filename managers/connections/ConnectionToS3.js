const config = require('./../../config')
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: config.S3_ID_ACCESSKEY,
    secretAccessKey: config.S3_SECRET_ACCESSKEY
})

module.exports = s3