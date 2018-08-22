//text()-- get combined text contents of each element

//return h1
$("h1").text();
//change to new text
// $("h1").text("I am going to change h1");

//change all elements to new one
// $("li").text("change li");

//only change one
// $("ul").text("change ul");


//return "
// 	<li>Skittles</li>
// 	<li>Starbust</li>
// 	<li>Twix</li>
// "
$("ul").html();
// $("ul").html("<li>i hacked your ul</li");
// $("li").html("<a href='google.com'>Click me</a>");

// text VS. html
// text only returns text, not change html
// html can change content 

//attr() -- getter value of attribute for the first element --- setter to new value

$("img").css("width","200px");
$("img").attr("src","http://www.mokavecats.com/Images/Photos_72R/Xerc_Face.JPG");

// $("input").attr("type","checkbox");
// change first img to new img
$("img:first-of-type").attr("src", "https://s.hswstatic.com/gif/bengal-cat.jpg");
// change last img 
$("img").last().attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQza3_CkNpSVAln8b46Rubw7KxvHyzxTNpmDbAnM19unG3IIf_fnQ");

$("h1").addClass("correct");
$("h1").removeClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").addClass("correct");

$("li").toggleClass("correct");
$("li").toggleClass("correct");
$("li").first().toggleClass("done");

$("li").toggleClass("done");
$("button").click(function(){
	$(this).css("background","pink");
})
$("button").click(function(){
	$(this).css("background","pink");
})

$("input").keypress(function(event){
	if (event.which==13) {
		alert("enter");
	}
});

$("h1").on("click", function(){
	$(this).css("color","purple");
});

$("input").on("keypress", function(){
	console.log("keypress");
});

$("button").on("mouseenter", function(){
	$(this).css("font-size", "20px");
});

$("button").on("mouseleave", function(){
	$(this).css("font-size", "10px");
});

$("h1").fadeOut("slow"); 