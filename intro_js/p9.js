var age= prompt("what is your age?");

if (age < 0) {
	console.log("it's impossible");
}

if (age === 21) {
	console.log("happy 21st birthday");
}

if (age%2 != 0) {
	console.log("your age is odd");
}

if (age % Math.sqrt(age) == 0 ) {
	console.log("perfect square");
}
