var mongoose = require("mongoose");

// connect to mongodb database
mongoose.connect("mongodb://localhost/cat_app");

// tells moogoose/js to add cats to database
// not defining table; define a pattern of data; can add new things
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// Cat.remove / update/ create/ find
// " " --> singular versio of collection 
// overall is to take all methods
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var george = new Cat({
//     name: "Mrs.Narris",
//     age: 7,
//     temperament: "Evil"
// });

// add to database
// use callback function incase there is something wrong
// it can use without callback function
// .save() -- .find() -- 

// george in JS is trying to save to database
// cat is to send back from database

// george.save(function(err, cat){
//     if(err) {
//         console.log("Something went wrong");
//     } else {
//         console.log("We just saved a cat to the DB");
//         console.log(cat);
//     }
// });

// another version includes create and save
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err,cat){
    if(err){
        console.log(err);
    } else{
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one
// callback function waits for fronter one, then execute later one
Cat.find({},function(err, cats){
    if (err){
        console.log("ERROR!!!");
        console.log(err);
    } else{
        console.log("ALL THE CATS----");
        console.log(cats);
    }
});