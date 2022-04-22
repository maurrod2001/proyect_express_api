const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });

app.get('/testing' ,function(req,res){
    res.send("hola esta funcionando?")
})

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});