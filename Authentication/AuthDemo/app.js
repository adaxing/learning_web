var express = require("express"),
    app = express(),
    User = require("./models/user"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    session = require("express-session"),
    passport = require("passport"),
    passportLocal = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// ---------------------------------
app.use(session({
    secret: "i am not happy",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(User.authenticate()));
// read session, taking data from session that's encoded and un-encode
// serialize/deserialize come from passportlocalmongoose
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// -----------------------------------


// =============ROUTES================
app.get("/", function(req,res){
    res.render("home");
});

app.get("/secret",isLoggedIn, function(req,res){
    res.render("secret");
});

// show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
// handle user sign up
app.post("/register", function(req, res){
    // save new user with username and hashed password
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        } 
        // log user in
        // can have many different stragy
        passport.authenticate("local")(req, res , function(){
            res.redirect("/secret");
        });
        
    })
});

// render login form
app.get("/login", function(req,res){
    res.render("login");
});
// login logic
// middleware = code run before final raw callback function
// passport automatically take password to compare
app.post("/login",passport.authenticate("local",{
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req,res){
    
});

app.get("/logout", function(req,res){
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!!");
})


