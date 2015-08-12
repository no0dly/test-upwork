
var app = (function(){
	var container = $('.destination__row');

	container.masonry({
		itemSelector: '.destination__block',
		columnWidth: 200,
		isResizable: true,
		isAnimated: true,
		isFitWidth:true,
		animationOptions: { 
			queue: false, 
			duration: 500 
		}
	});
}());
