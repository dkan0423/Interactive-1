$('document').ready(function(){

	var height = $(document).height();
	var winHeight = $(window).height();
	
	var width = $(document).width();
	var winWidth = $(window).width();

	n=1;
	function swapImages(){
		var randPosX = Math.floor((Math.random()*winWidth));
		var randPosY = Math.floor((Math.random()*winHeight));

		$('body').prepend('<img src="img/markzuckerberg.jpg" class="img-'+n+'" />')

		$('img-'+n).css('left', randPosX - 50);
		$('img-'+n).css('top', randPosY - 50);
	
		n++;
	}

	//setInterval(swapImages, 1000);

});