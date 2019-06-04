var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "s.matthew.english",
  password: "s.matthew.english",
  port: "5432"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE heraklion", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});
