const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 3000;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3307,
}); 

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();
app.get("/", function (req, res) {
  res.send("Saludos desde express");
});

app.get("/testing", function (req, res) {
  res.send("hola esta funcionando?");
});

app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`);
});
