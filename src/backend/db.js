const mariadb = require('mariadb');
const fs = require('fs');
require('dotenv').config();

// Supprimer ou commenter la lecture du certificat SSL
// const sslCert = fs.readFileSync(process.env.DB_SSL_CA, 'utf8');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  connectionLimit: 10

  // Si un jour tu remets SSL, tu peux réactiver ceci :
  // ssl: { ca: sslCert }
});

// Expose the Pool object within this module
module.exports = Object.freeze({
  pool: pool
});
