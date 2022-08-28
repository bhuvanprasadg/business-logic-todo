const { Client } = require('pg');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: fs.readFileSync('/home/azureuser/ssl-certificate.pem')
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = client;
