var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Clouds'Rest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTo0BDt_IzRs-Z2LbGUBdOL7-Si5SBpgCfzWHCPLC_Sy3-MADB",
        description: "bla bla fssdsds"
    },
    {
        name:"Family fun",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXUjmcIaLw9knJvgAfuk1e_iRPZ4wIilqVKRf9mp9FlQurjnH",
        description: "bla bla fssdfdsjhbdhjbahsjsds"
    },
    {
        name:"Forest'Rest",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62bjhfnUJNZxBB80h3TtkGYNeGPvAJip9TJE8cjMbCkPLCofTMQ",
        description: "blddsdsdfa bla fssdsds"
    },
    
    ]
function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
    if(err) {
        console.log(err);
    } 
    console.log("remove!!!");    
    // add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if (err){
                console.log(err);
            } else {
                console.log("added a campground");
                // create a comment
                Comment.create({
                    text:"This place is great, but I wish there was internet",
                    author:"Homer"
                }, function(err, comment){
                    if (err){
                        console.log(err);
                    } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log("Created new comment");
                    }
                });
            }
        });
    });
    });
    
};

module.exports = seedDB;

