var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));

app.get("/", function(req,res){
    res.render("home");
});

// index
app.get("/list", function(req,res){
    res.render("list");
});

app.get("/register", function(req,res){
    res.render("register");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});