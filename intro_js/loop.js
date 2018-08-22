// var num = -10;
// console.log("1. Print all numbers between -10 and 19");
// while (num < 20) {
// 	console.log(num);
// 	num ++;	
// }

// var num1 = 10;
// console.log("2.Print all even numbers between 10 amd 40");
// while (num1 < 41) {
// 	if (num1%2 == 0) {
// 		console.log(num1);
// 	}
// 	num1++;
// }

// var num2 = 300;
// console.log("3.Print all odd numbers between 300 and 333");
// while (num2 < 334) {
// 	if (num2%2 != 0) {
// 		console.log(num2);	
// 	} 
// 	num2 ++;
// } 

// var num3 = 5;
// console.log("4.Print all numbers divisible by 5 and 3 between 5 and 50");
// while (num3 < 51) {
// 	if (num3%5==0 && num3%3==0) {
// 		console.log(num3);
// 	}
// 	num3++;
// }


//translate to for loop version
console.log("1. Print all numbers between -10 and 19");
for (var i=-10; i<20; i++) {
	console.log(i);
}

console.log("2.Print all even numbers between 10 amd 40");
for (var i=10; i<41; i++) {
	if (i%2 == 0) {
	console.log(i);
	}
}

console.log("3.Print all odd numbers between 300 and 333");
for (var i=300; i<334; i++) {
	if (i%2 != 0) {
	console.log(i);
	}
}

console.log("4.Print all numbers divisible by 5 and 3 between 5 and 50");
for (var i=5; i<51; i++) {
	if (i%5==0 && i%3==0) {
		console.log(i);
	}
}