const mysql = require("mysql");
const util = require("util");
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

const query = util.promisify(pool.query).bind(pool);

module.exports = query;
