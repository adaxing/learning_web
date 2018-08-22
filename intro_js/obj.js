var someObj = {
	friends: [
		{name: "Malfo"},
		{name: "Crabeb"},
		{name: "Goyle"}
	],
	color: "baby blue",
	isEvol: true
};

// retrive "Malfo"
someObj.friends[0].name;

var movie =  [
		{name: "In Bruges",
		rate: 5,
		watched : true },

		{name: "Frozen",
		rate: 4.5,
		watched: false},

		{name: "Mad Max Fury Road",
		rate: 5,
		watched: true},

		{name: "Les Miserables",
		rate: 3.5,
		watched: false}
];

for (var i=0; i<movie.length; i++) {
	if (movie[i].watched == true ) {
		console.log("You have watched "+ '"'+movie[i].name+'"'+" - "+ movie[i].rate + " stars");
	}
	else {
		console.log("You have not seen "+ '"'+movie[i].name+'"'+" - "+ movie[i].rate + " stars")
	}
}
// Another version!!!
movie.forEach(function(movie){
	var result = "You have ";
	if (movie.watched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name+ "\" - ";
	result += movie.rate + " stars";
	console.log(result)
})

// Another one..
function buildStr(movie) {
	var result = "You have ";
	if (movie.watched) {
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.name+ "\" - ";
	result += movie.rate + " stars";
	console.log(result)
}
movie.forEach(function(movie){
	console.log(buildStr(movie));
});