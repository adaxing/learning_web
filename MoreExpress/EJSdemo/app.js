// var express = require("express")();
var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.render("dogs.html");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
})