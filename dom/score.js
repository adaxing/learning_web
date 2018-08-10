var p1 = document.querySelector("#p1");
var p2 = document.getElementById("p2");
var h1 = document.querySelector("#p1ds");
var h2 = document.querySelector("#p2ds");
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var wds = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;

function addScore() {

}

p1.addEventListener("click",function() {
	if (!gameOver) {
		p1Score ++;
		if (p1Score == winScore) {
			h1.classList.add("winner");
			gameOver = true;
		}
		h1.textContent = p1Score;
	}		
});

p2.addEventListener("click",function() {
	if (!gameOver) {
		p2Score ++;
		if (p2Score == winScore) {
			h2.classList.add("winner");
			gameOver = true;
		}
		h2.textContent = p2Score;
	}
}); 

function rese() {
	p1Score = 0;
	p2Score = 0;
	h1.textContent = 0;
	h2.textContent = 0;
	h1.classList.remove("winner");
	h2.classList.remove("winner");
	gameOver = false;

}

reset.addEventListener("click", function(){
	rese();
})

input.addEventListener("change", function(){
	wds.textContent = this.value;
	winScore = this.value;
	rese();
})
