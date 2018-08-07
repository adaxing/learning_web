function myforEach(list,func) {
	for (var i=0;i<list.length; i++) {
		func(list[i]);
	}
}

var color=[1,2,3,4];
myforEach(color,function(i){console.log(i)});

Array.prototype.myforeach = function(func) {
	for (var i=0; i<this.length; i++) {
		func(this[i]);
	}
}

color.myforeach(function(c){
	console.log("I love "+ c);
})