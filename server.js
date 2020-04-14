// chamada ao express
const express = require("express");
// instâncio o o express na var app
const app = express();
// inicio o server na porta 3000 e recebo uma função de callback
app.listen(3000, function(){
    console.log("O servidor iniciou")
});