var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mysql'
});

connection.connect();

let addSql = "INSERT INTO node_study(id,name,age) VALUES(3,?,?)";
let addSqlParams = ["jsliang", "213"];

connection.query(addSql, addSqlParams, function (err, res) {
  if (err) {
    console.log("新增错误：");
    console.log(err);
    return;
  } else {
    console.log("新增成功：");
    console.log(res);
  }
});

connection.end();
