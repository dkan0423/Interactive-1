
$('document').ready(function(){

	var height = $(document).height();
	var winHeight = $(window).height();
	
	var width = $(document).width();
	var winWidth = $(window).width();

	// n is a counter that incrememnts each time swapImages runs
	n=1;
	function swapImages(){
		var randPosX = Math.floor((Math.random()*winWidth));
		var randPosY = Math.floor((Math.random()*winHeight));

		// add an image and use 'n' to give it a unique class 
		$('body').prepend('<Img src="Img/markzuckerberg.jpg" class="img-'+n+'" />')

		// adds a random position to the div just added to the page using its class
		$('.img-'+n).css('left', randPosX - 50);
		$('.img-'+n).css('top', randPosY - 50);
		
		// increment n (shorthand for n=n+1)	
		n++;
	}
	// run swapImages every 1000ms (1second)
	setInterval(swapImages, 1000);

});