// this version is
// ---- 1. add landing page
// ---- 2. add campgrounds page that list all campgrounds

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campground = [
        {name: "Salmon Greek", image: "https://assets.bedful.com/images/d2ad5d246449091eb0274e87b1f9206ffcb32c85/large/glamping-luxury-camping-%E2%80%93-best-boutique-outdoor-accommodation/glamping-luxury-camping.jpg"},
        {name: "Granite Hill", image: "https://assets.bedful.com/images/53c650a9dfb43344f4f67d28672c2981a27d3e2b/large/image.jpg"},
        {name: "Mountain view", image: "https://www.visitflorida.com/content/visitflorida/en-us/florida-beaches/tricks-tips-florida-camping/_jcr_content/editorial_hero/vf_image.img.1280.500.jpg"},
        {name: "Salmon Greek", image: "https://assets.bedful.com/images/d2ad5d246449091eb0274e87b1f9206ffcb32c85/large/glamping-luxury-camping-%E2%80%93-best-boutique-outdoor-accommodation/glamping-luxury-camping.jpg"},
        {name: "Granite Hill", image: "https://assets.bedful.com/images/53c650a9dfb43344f4f67d28672c2981a27d3e2b/large/image.jpg"},
        {name: "Mountain view", image: "https://www.visitflorida.com/content/visitflorida/en-us/florida-beaches/tricks-tips-florida-camping/_jcr_content/editorial_hero/vf_image.img.1280.500.jpg"},
        {name: "Salmon Greek", image: "https://assets.bedful.com/images/d2ad5d246449091eb0274e87b1f9206ffcb32c85/large/glamping-luxury-camping-%E2%80%93-best-boutique-outdoor-accommodation/glamping-luxury-camping.jpg"},
        {name: "Granite Hill", image: "https://assets.bedful.com/images/53c650a9dfb43344f4f67d28672c2981a27d3e2b/large/image.jpg"},
        {name: "Mountain view", image: "https://www.visitflorida.com/content/visitflorida/en-us/florida-beaches/tricks-tips-florida-camping/_jcr_content/editorial_hero/vf_image.img.1280.500.jpg"}
    ]
    
app.get("/", function(req,res){
    res.render("landing");
});

// each campground has array: name, image
// [ {}, {} ]
app.get("/campgrounds", function(req,res){
    res.render("campground", {campgrounds: campground});
});

// rest convection 
app.post("/campgrounds", function(req,res){    
    // get data from form to add array
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image};
    campground.push(newCamp);
    // redirect to page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started!!");
});