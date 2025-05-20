require (`dotenv`).config();
const mysql = require(`mysql2`);

const pool = mysql.createPool({
  host: `localhost`,
  user: `matias_bravo`,
  password: `matias_pass`,
  database: `tp-utn-2025`,
  port: process.env.DB_PORT,  
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();