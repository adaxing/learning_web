var express   = require("express"),
    app       = express(),
    bodyParser= require("body-parser"),
    mongoose  = require("mongoose"), 
    seedDB = require("./seeds");
    
mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// __dirname more safer, in case it will change direction of file
app.use(express.static(__dirname+"/public"));
seedDB();

// Schema setup
var Campground = require("./models/campground");
var Comment = require("./models/comment");

app.get("/", function(req,res){
    res.render("landing");
});
// INDEX
app.get("/campgrounds", function(req,res){
    // Get all campground from DB
    Campground.find({}, function(err, allCamp){
        if(err){
            console.log(err);
        }else {
            res.render("campground/index", {campgrounds: allCamp});
        }
    })
});

// rest convection 
// CREATE
app.post("/campgrounds", function(req,res){    
    // get data from form to add array
    var name = req.body.name;
    var image = req.body.image;
    var descrp = req.body.description;
    var newCamp = {name: name, image: image, description:descrp};
    // Create a new campground and save to DB
    Campground.create(newCamp, function(err,newCreate){
        if(err){
            console.log(err);
        } else{
            res.redirect("/campgrounds");
        }
    });
});
// NEW
app.get("/campgrounds/new", function(req,res){
    res.render("campground/new");
});

// SHOW
app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided Id
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCamp){
        if (err){
            console.log(err);
        } else {
            // render show template with campground
            res.render("campground/show", { campground: foundCamp});
        }
    });
});

// =========================================
// COMMENTS ROUTES
// =========================================
// NEW  campgrounds/:id/comments/new GET
app.get("/campgrounds/:id/comments/new", function(req,res){
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
        } else{
            res.render("comment/newComment", {campground: campground});
        }
    });
});
// CREATE campgrounds/:id/comments  POST
app.post("/campgrounds/:id/comments", function(req, res){
    // look up campground using ID 
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            Comment.create(req.body.comments, function(err, comment){
                if(err){
                    console.log(err);
                } else{
                    campground.comments.push(comment);   
                    campground.save();
                    res.redirect("/campgrounds/"+ campground._id);
                }
            });
        }
    });
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started!!");
});