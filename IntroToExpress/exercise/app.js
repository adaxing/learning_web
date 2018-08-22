var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "Meow",
        goldfish:"bollon bollon"
    }
    var animalNa = req.params.animal.toLowerCase();
    var sound = sounds[animalNa];
    res.send("The "+ animalNa+ " says '"+ sound+ " '");
})

app.get("/repeat/:whatever/:number", function(req, res){
    var word = req.params.whatever;
    var repeatTime = req.params.number;
    var message = "";
    for (var i=0; i<parseInt(repeatTime); i++) {
        message += word +" ";
    }
    res.send(message);

})

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
})
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
})