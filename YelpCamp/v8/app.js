var express   = require("express"),
    app       = express(),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    methodOverride = require("method-override"),
    session = require("express-session"),
    bodyParser= require("body-parser"),
    mongoose  = require("mongoose"),
    flash = require("connect-flash"),
    User = require("./models/user"),
    seedDB = require("./seeds");
    
// Schema setup
var Campground = require("./models/campground");
var Comment = require("./models/comment"); 
// Routes setup
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");
    
// ----------------------------------------------------------------------------

mongoose.connect("mongodb://localhost/yelp_camp_v3");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
// __dirname more safer, in case it will change direction of file
app.use(express.static(__dirname+"/public"));
//seedDB();
app.use(methodOverride("_method"));
app.use(flash());
app.locals.moment = require("moment");
// --------------- password ----------------
app.use(session({
    secret:"This is secret",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// -------------------------------

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has started!!");
});