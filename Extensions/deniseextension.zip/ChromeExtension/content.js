// replace images when the page loads
$('img').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/b5/9f/87/b59f8728480231a869b262c5df1978d9.jpg');

// replace text in the page when it loads
$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,':)') );
});

// when you click on an image hide it using CSS
$('img').click(function() {
	$(this).addClass('hide');
});

// when you click on the page 'body' apply .gradient to it from the CSS
$('body').click(function() {
	$(this).addClass('gradient');
});



