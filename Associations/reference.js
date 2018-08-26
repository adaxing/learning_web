var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post");
var User = require("./models/user");

Post.create({
    title: "How to cook the best burger pt.7",
    content: "asdfdfcgvhbjnmxcvgbhjnkmvgbhn"
}, function(err, post){
    User.findOne({email:"bob@gmail.com"}, function(err, foundUser){
        if (err){
            console.log(err);
        } else{
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if (err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

// 1. find user by email, 2. find the user and find posts field, 3. execute into query
// User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if (err){
//         console.log(err)
//     } else {
//         console.log(user);
//     }
// });

// User.create({
//     email: "bob@gmail.com",
//     name: " Bob Belcher"
// });

