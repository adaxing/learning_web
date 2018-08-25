var express   = require("express"),
    app       = express(),
    bodyParser= require("body-parser"),
    mongoose  = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({name: "Mountain view", image: "https://www.visitflorida.com/content/visitflorida/en-us/florida-beaches/tricks-tips-florida-camping/_jcr_content/editorial_hero/vf_image.img.1280.500.jpg", description: "This is huge granite hill."}, function(err, camp){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Newly created campground: ");
//         console.log(camp);
//     }
// });

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    // Get all campground from DB
    Campground.find({}, function(err, allCamp){
        if(err){
            console.log(err);
        }else {
            res.render("index", {campgrounds: allCamp});
        }
    })
});

// rest convection 
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

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    // find the campground with provided Id
    Campground.findById(req.params.id, function(err,foundCamp){
        if (err){
            console.log(err);
        } else {
            // render show template with campground
            res.render("show", { campground: foundCamp});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started!!");
});