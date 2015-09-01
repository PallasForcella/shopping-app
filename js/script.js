 $(document).ready(function(){
 
 	function addItemToList(item){
		// var li = '<li class="checkbox"><div class="row"><div class="col-xs-8"><label><input type="checkbox" value="">'+item+'</label></div><div class="col-xs-4"><button class="delete btn btn-warning btn-xs" type="submit">Delete</button></div></div></li>';
 		var li = DOM.buildNode({

			el: 'li',
			kids: [{
				_className: 'row',
				kids: [
					{
						_className: 'col-xs-8',
						kids: [{
							el: 'label',
							kids: [
								{
									el: 'input',
									type: 'checkbox'
								},
								item
							]
						}]
					},
					{
						_className: 'col-xs-4',
						kids: [{
							el: 'button',
							_className: 'delete btn btn-warning btn-xs',
							kids: ['Delete']
						}]
					}
				]
			}]
 		});
 		$("#list").append(li);
 	}
 @@ -29,13 +40,9 @@ $(document).ready(function(){
 		event.preventDefault();
 	});
 

	$(".delete").click(function(){
		$(li).remove();
		// event.preventDefualt isn't needed 'cause this button doesn't submit a form
 	});
 });
 
