require('dotenv').config()
module.exports = 
{
  "development": {
    "username": process.env.PG_USERNAME,
    "password": process.env.PG_PASSWORD,
    "database": process.env.PG_DB,
    "host": process.env.PG_HOST,
    "dialect": "postgres"
  }
}