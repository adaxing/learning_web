
function printReverse(list) {
	var size = list.length/2;
	for (i=0;i<size; i++) {
		temp= list[i];
		list[i] = list[list.length-i-1];
		list[list.length-i-1] =temp;
	}
	console.log(list);
}

console.log("printReverse function: ");
printReverse([1,2,3,4]);

console.log("isUnifrom function: ");
[1,1,1,1].forEach(function(el) {
	for (i=0; ) {
		console.log(c);
	}
	
}); 