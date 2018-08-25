var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
// serve customer stylesheet
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// schema
// title, image, body, created
var blogSchema = new mongoose.Schema({
    title: String,
    image: String, 
    body: String,
    created: {type:Date, default: Date.now}
});

// model
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title:"Life of me and my friends",
//     image:"https://twistedsifter.files.wordpress.com/2016/02/manny-the-cat-takes-better-selfies-than-you-5.jpg?w=640&h=640",
//     body:"On weekend, we hang out together. The weather is perfect and the sun is so bright. We take selfie to record happy moment!"
// });


// restfull routes
app.get("/", function(req,res){
    res.redirect("/blogs");
});
// index route
app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if (err){
            console.log("ERROR!!!!");
            console.log(err);
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});
// new route
app.get("/blogs/new", function(req,res){
    res.render("new");
});
// create route
app.post("/blogs", function(req,res){
    // create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else{
            // then redirect to the index
            res.redirect("/blogs");
        }
    });
});
// show route
app.get("/blogs/:id", function(req,res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err){
            res.redirect("/blogs");
        } else{
            res.render("show", {blog:foundBlog});
        }
    });
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
