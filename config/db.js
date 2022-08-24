const { Client } = require('pg');

const client = new Client({
  user: 'admin01@sde-s',
  host: 'sde-s.postgres.database.azure.com',
  database: 'todo',
  password: 'Database@123',
  port: 5432
})
client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = client;