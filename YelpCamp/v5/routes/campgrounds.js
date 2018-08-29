var express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground");


// INDEX
router.get("/", function(req,res){
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
router.post("/", isLoggedIn, function(req,res){    
    // get data from form to add array
    var name = req.body.name;
    var image = req.body.image;
    var descrp = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCamp = {name: name, image: image, description: descrp, author: author};

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
router.get("/new", isLoggedIn, function(req,res){
    res.render("campground/new");
});

// SHOW
router.get("/:id", function(req, res){
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

// middleware
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;