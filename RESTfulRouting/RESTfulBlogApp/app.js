var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer");

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
// serve customer stylesheet
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
// "_method" as parameter can be used for put, get, delete, update as .... request
app.use(methodOverride("_method"));

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
    req.body.blog.body = req.sanitize(req.body.blog.body);
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
// edit route: /blogs/:id/edit GET
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    });
});
// update route: /blogs/:id  PUT
app.put("/blogs/:id", function(req,res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // req.body.blog can be seen as whole part: has title, image url, content, date
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs/"+ req.params.id);
        }
    })
});
// destroy route: /blogs/:id DELETE
app.delete("/blogs/:id", function(req,res){
    // callback function does not have any data come back since it has already deleted
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
