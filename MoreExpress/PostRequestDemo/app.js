var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
var friends = ["Tony", "Lily", "Micheal", "Justin","Colt"];

app.get("/", function(req,res){
    res.render("home");
});


app.post("/addfriend", function(req, res){
    var newFriends = req.body.friendName;
    friends.push(newFriends);
    res.redirect("/friends");
})

app.get("/friends", function(req, res){
    res.render("friends", {friend: friends});
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
})