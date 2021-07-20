const mysql = require("mysql");
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

pool.getConnection((err, connection) => {
  module.exports = pool;
});
