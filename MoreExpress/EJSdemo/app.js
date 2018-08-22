// var express = require("express")();
var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.render("home.ejs");
})

// <%= %> --- return to html
// <% %> --- just run as javascript, purely to run logically 
app.get("/fallinlovewith/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
})

app.get("/posts", function(req,res){
    var posts = [
        {title:"Post 1", author:"Susy"},
        {title:"My adorable pet", author:"Charlie"},
        {title:"Can you believe this pomsky?", author:"Colt"},
    ];
    // {a:b} = b is variable, a is inside ejs
    res.render("posts.ejs", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
})