var body = document.querySelector("body"); 
var isBlue = false;

setInterval(function(){
	if (isBlue) {
		body.style.background = "white"; 
	} else {
		body.style.background = "red";
	}
	isBlue = lisBlue;
}, 1000);