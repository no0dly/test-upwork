$(document).ready(function() {
	$('.destination__row').masonry({ //тут основной блок
	  // options
	  itemSelector: '.destination__block ', // тут блок который ездиет
	  columnWidth: 200,
	  isResizable: true,
	    // перестраивает блоки при изменении размеров окна
	  isAnimated: true,
	    // анимируем перестроение блоков
	  animationOptions: { 
	        queue: false, 
	        duration: 500 
	    }
	});
});
