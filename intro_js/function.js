// 1
function isEven(num) {
	if (num%2 == 0) {
		return true;
	} else {
		return false;
	}

}
console.log("isEven function:");
console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(num) {
	// if (num <=1 ){
	// 	return 1;
	// } else {
	// 	return num*factorial(num-1); }

	var result = 1;
	for (var i =2; i<=num; i++) {
		result *= i;
	} return result;
}

console.log("factorical function:");
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(2));
console.log(factorial(0));

function kebabToSnake(src) {
	// asrc = src;
	// while (asrc.indexOf("-") != -1) {
	// 	asrc = asrc.replace("-","_");
	// }
	// return asrc;

	var newSrc = src.replace(/-/g, "_");
	return newSrc;

}

console.log("kebabToSnake function:");
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-welcome"));
console.log(kebabToSnake("blah"));