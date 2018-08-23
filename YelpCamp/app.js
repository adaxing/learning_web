// this version is
// ---- 1. add landing page
// ---- 2. add campgrounds page that list all campgrounds

var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("landing");
});

// each campground has array: name, image
// [ {}, {} ]
app.get("/campgrounds", function(req,res){
    var campground = [
        {name: "Salmon Greek", image: "https://assets.bedful.com/images/d2ad5d246449091eb0274e87b1f9206ffcb32c85/large/glamping-luxury-camping-%E2%80%93-best-boutique-outdoor-accommodation/glamping-luxury-camping.jpg"},
        {name: "Granite Hill", image: "https://assets.bedful.com/images/53c650a9dfb43344f4f67d28672c2981a27d3e2b/large/image.jpg"},
        {name: "Mountain view", image: "https://www.visitflorida.com/content/visitflorida/en-us/florida-beaches/tricks-tips-florida-camping/_jcr_content/editorial_hero/vf_image.img.1280.500.jpg"}
    ]
    res.render("campground", {campgrounds: campground});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started!!");
});