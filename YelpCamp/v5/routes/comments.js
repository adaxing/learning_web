var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

// NEW  campgrounds/:id/comments/new GET
router.get("/new", isLoggedIn,function(req,res){
    Campground.findById(req.params.id, function(err, campground){
        if (err){
            console.log(err);
        } else{
            res.render("comment/newComment", {campground: campground});
        }
    });
});
// CREATE campgrounds/:id/comments  POST
router.post("/", isLoggedIn,function(req, res){
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
                    // add username and id to comment
                    comment.auther.username = req.user.username;
                    comment.author.id = req.user._id;
                    console.log("===========");
                    console.log("comment");
                    // save comment
                    comment.save();
                    campground.comments.push(comment);   
                    campground.save();
                    res.redirect("/campgrounds/"+ campground._id);
                }
            });
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