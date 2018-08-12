// $("li").click(function(){
// 	if ($(this).css("color") == "rgb(128, 128, 128)") {
// 		$(this).css({
// 			color: "black",
// 			textDecoration:"none"});
// 	} 
// 	else {
// 		$(this).css({
// 		color: "gray",
// 		textDecoration:"line-through"
// 	});
// 	}
// });

//when adding new one, it still work
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	// stop from other elements
	event.stopPropagation();
})

$("input[type='text']").on("keypress", function(event){
	if (event.which==13) {
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todo+ "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})