

$(document).ready(function(){

	function addItemToList(item){
		// var li = '<li class="checkbox"><div class="row"><div class="col-xs-8"><label><input type="checkbox" value="">'+item+'</label></div><div class="col-xs-4"><button class="delete btn btn-warning btn-xs" type="submit">Delete</button></div></div></li>';
		var li = DOM.buildNode({
	    	el: 'l1',
	    	kids: [
	    		{
			    	el: 'div',
			    	_className: 'row'
	    		}
	    		kids: [
		    		{
		    			el:'div',
		    			_className: 'col-xs-8'
		    		}
	    			]
	    	]
		});
	    	]
		});
		$("#list").append(li);
	}

	$(".addition").submit(function(event){
		addItemToList($(".fooditem").val())
		event.preventDefault();
	});

	$(document).on("click", ".delete", function(e){
		e.preventDefault();
		$(this).parent().parent().parent().remove();
	});	

	var li = DOM.buildNode({
    	kids: 'li'
	});
});






// create a list item in js and set the text to the list item
// $('<li/>')
// how to create li in jq
// append li to ul...?
