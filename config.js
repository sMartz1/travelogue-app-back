require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
    S3_ID_ACCESSKEY: process.env.S3_ID_ACCESSKEY,
    S3_SECRET_ACCESSKEY: process.env.S3_SECRET_ACCESSKEY
}