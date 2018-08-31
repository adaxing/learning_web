// all the middleware
var middlewareObj = {};
var Campground = require("../models/campground");
var Comment = require("../models/comment");

middlewareObj.checkCampOwnership = function(req,res,next){
    // is user logged in
    if (req.isAuthenticated()){
        Campground.findById(req.params.id, function(err,foundCamp){
            if (err){
                req.flash("error", "Campground not found");
                res.redirect("back");
            } else {
                // foundCamp.author.id is mongoose object
                // req.user._id is String
                if (foundCamp.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission");
                    res.redirect("back");
                }   
            }
        });
    } else{
        req.flash("error", "You need to be logged in to do that!");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req,res,next){
    // is user logged in
    if (req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err,foundComment){
            if (err){
                res.redirect("back");
            } else {

                if (foundComment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    req.flash("error", "You don't have permission");
                    res.redirect("back");
                }   
            }
        });
    } else{
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    // flash works on next page
    // just give capability to next request
    // add data before redirect
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
}

module.exports = middlewareObj;