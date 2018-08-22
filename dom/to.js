var h1 = document.querySelector("h1");
var buttom = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;
h1.style.color = "pink";

function changeColor() {
	body.style.background = "purple";
}

// buttom.addEventListener("click", function() {
// 	if (isPurple) {
// 		body.style.background = "white";
// 	} else {
// 		body.style.background = "purple";
// 	}
// 	isPurple = !isPurple;
// });

buttom.addEventListener("click", function() {
	document.body.classList.toggle("purple");

});
