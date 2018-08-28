var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose");


var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// come after schema build, use this package to install other methods
// function as hashing; salting; storing
// salt is to unhash
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);