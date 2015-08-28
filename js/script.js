

$(document).ready(function(){

	function addItemToList(item){
		var li = '<li class="checkbox"><div class="row"><div class="col-xs-8"><label><input type="checkbox" value="">'+item+'</label></div><div class="col-xs-4"><button class="delete btn btn-warning btn-xs" type="submit">Delete</button></div></div></li>';
		$("#list").append(li);
	}

	$(".addition").submit(function(event){
		addItemToList($(".fooditem").val())
		event.preventDefault();
	});

	// $(".delete").each(function(){
	// $(this).click(function(e){
	// 	e.preventDefault();
	// 	$(this).parent().parent().parent().remove();
	// });	
});






// create a list item in js and set the text to the list item
// $('<li/>')
// how to create li in jq
// append li to ul...?
