var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'node'
});

connection.connect();

connection.query('SELECT * FROM node_study', function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();
