var express = require("express"),
    router = express.Router(),
    Campground = require("../models/campground"),
    middleware = require("../middleware/index");


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
router.post("/", middleware.isLoggedIn, function(req,res){    
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
router.get("/new", middleware.isLoggedIn, function(req,res){
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

// EDIT  GET  /campground/:id/edit
router.get("/:id/edit", middleware.checkCampOwnership, function(req,res){
    Campground.findById(req.params.id, function(err, foundCamp){
        res.render("campground/edit", {campground:foundCamp});
    });
});
// UPDATE PUT   /campground/:id
router.put("/:id", middleware.checkCampOwnership, function(req,res){
    // find and update
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updateCamp){
        if(err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id);
        }
    })
    // redirect (show page)
});

// DESTORY DELETE /campground/:id
router.delete("/:id", middleware.checkCampOwnership, function(req,res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        } else{
            res.redirect("/campgrounds");
        }
    });
});

module.exports = router;