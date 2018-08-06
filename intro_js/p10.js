
function printReverse(list) {
	// var size = list.length/2;
	// for (i=0;i<size; i++) {
	// 	temp= list[i];
	// 	list[i] = list[list.length-i-1];
	// 	list[list.length-i-1] =temp;
	// }
	// console.log(list);
	for (var i=list.length-1; i>=0;i--){
		console.log(list[i]);
	}
}

console.log("printReverse function: ");
printReverse([1,2,3,4]);

// console.log("isUnifrom function: ");
// var list=[1,2,3,4];
// var size = list.length;
// var check = true;
// list.forEach(function(el) {
// 	for (i=size-1; i>size/2 && check; i--) {
// 		console.log("i value "+ list[i]);
// 		console.log("el " + el);
// 		if (list[i] != el) {
// 			check = false;
// 			return check;
// 		}
// 		if (list[i] == el) {
// 			console.log("true");
// 		}
// 	}	
// }); 
function isUnform(list){
	var first=list[0];
	for (var i =1; i<list.length;i++) {
		if (list[i] != first) {
			return false;
		}
	}
	return true;
}
console.log("isUnifrom function: ");
isUnform([1,2,3,56]);
// isUnform([8,8,8,8]);
// isUnform(["a","a","a"]);
// isUnform(["b","a"]);


function sumArray(list) {
	var sum = 0;
	list.forEach(function(el){
		sum += el;
	})
	console.log(sum);
}

console.log("sumArray function: ");
sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

function max(list) {
	var max = list[0];
	for (var i=1; i <list.length;i++) {
		if (list[i]>max) {
			max = list[i];
		}
	}
	console.log(max);
}
console.log("max function: ");
max([1,2,3]);
max([3,8,1]);






