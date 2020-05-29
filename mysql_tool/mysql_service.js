var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

connection.connect();

connection.query('SELECT * FROM node_study', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
