$("input[type='text']").on("keypress", function(event){
	if (event.which == "13") {
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+ todo+ "</li");
	}
})

$("ul").on("click","li", function(){
	$(this).toggleClass("finished");
})

$("ul").on("click","span", function(){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});	
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})

$("h1").on("click",'#edit', function(){
  $('#edit').hide();
  $('li').each(function(){
    var content = $(this).text();
    $(this).html('<li><span><i class="far fa-trash-alt"></i></span>' + '<textarea>'+ content + '</textarea>');
  });  
  $('#save').show();
});

$("h1").on("click",'#save',function(){
  $('#save').hide();
  $('textarea').each(function(){
    var content = $(this).val();//.replace(/\n/g,"<br>");
    $(this).html(content);
    $(this).contents().unwrap();    
  }); 

  $('#edit').show(); 
});

