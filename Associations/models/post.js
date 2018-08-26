var mongoose = require("mongoose");

//POST -title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// if not export, then even use this file, will return nothing
module.exports = mongoose.model("Post", postSchema);