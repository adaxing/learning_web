window.setTimeout(function() {
	var input = prompt("What would you like to do?");
	var toDolist = [];
	var quit = false;


	while (!quit) {
		var input = prompt("What would you like to do?");
		if (input == "new") {
			var input = prompt("Enter a new todo");
			toDolist.push(input);
			console.log(input+" added to list");
		}
		if (input == "list") {				
			console.log("*************");
			toDolist.forEach(function(todo, index) {
				console.log(index+ ": "+ todo);
			});
			console.log("*************");
		}
		if (input =="quit") {
			quit = true;
		}
		if (input =="delete") {
			var index = prompt("Enter index of todo to delete");
			toDolist.splice(index,1);
			console.log("Deleted!");
		}
	}
	
},1000);