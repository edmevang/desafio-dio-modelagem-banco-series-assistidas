// const mysql = require('mysql');

// const Connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'movies-controll'
// })

// module.exports = Connection;


const sql = require('mssql')

const ConnectionConfig = {
  user: 'sa',
  password: 'coloque_sua_senha_do_db_aqui!',
  database: 'movies_controll',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

module.exports = ConnectionConfig;