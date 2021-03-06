var numSquare = 6;
var colors = generateColor(6);
var square = document.querySelectorAll(".square");
var picked = newColor();
var ds = document.getElementById("ds");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
ds.textContent = picked;
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");


var modeButtons = document.querySelectorAll(".mode");
for (var i=0;i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		if (this.textContent == "Easy") {
			numSquare = 3;
		} else {
			numSquare = 6;
		}
		rese()

	});
}

function rese() {
	colors = generateColor(numSquare);
	picked = newColor();
	ds.textContent = picked;
	this.textContent = "new colors";
	message.textContent = "";
	for (var i=0; i<square.length; i++) {
		if (colors[i]) {
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}
reset.addEventListener("click", function(){
	rese()});
// easy.addEventListener("click",function(){
// 	hard.classList.remove("selected");
// 	easy.classList.add("selected");
// 	colors = generateColor(3);
// 	picked = newColor();
// 	ds.textContent = picked;
// 	for (var i=0;i<square.length;i++) {
		// if (colors[i]) {
		// 	square[i].style.backgroundColor = colors[i];
		// } else {
		// 	square[i].style.display = "none";
		// }
// 	}
// })

// hard.addEventListener("click",function(){
// 	hard.classList.remove("selected");
// 	easy.classList.add("selected");
// 	colors = generateColor(6);
// 	picked = newColor();
// 	ds.textContent = picked;
// 	for (var i=0;i<square.length;i++) {
// 		square[i].style.backgroundColor = colors[i];
// 		square[i].style.display = "block";
		
// 	}
// })

// reset.addEventListener("click", function(){
// 	colors = generateColor(6);
// 	picked = newColor();
// 	ds.textContent = picked;
// 	this.textContent = "new colors";
// 	message.textContent = "";
// 	for (var i=0; i<square.length; i++) {
// 		square[i].style.backgroundColor = colors[i];
// 	}
// 	h1.style.backgroundColor = "steelblue";
// })

for (var i=0; i<square.length; i++) {
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
		var clicked = this.style.backgroundColor;
		if (clicked == picked) {
			message.textContent = "Correct!!";
			reset.textContent = "Play Again?";
			changeColor(clicked);
			h1.style.backgroundColor = clicked;
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again!!";
		}
	});
}

function changeColor(color) {
	for (var i=0; i<square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function newColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}

function generateColor(num) {
	var colorli = [];
	for (var i=0; i<num; i++) {
		colorli.push(randomColor(i));
	}
	return colorli;
}

function randomColor() {
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " +green +", "+ blue+")";
}