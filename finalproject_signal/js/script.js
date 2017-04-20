$(document).ready(function(){
	
	var colors = ["Privacy doesn't matter to me","Privacy doesn't matter to", " Privacy doesn't matter", " Privacy doesn't", "Privacy", " " ];
	var n = 0;

	$('body').click(function() {
		// updates the body's html with a value from the colors array
		$('#test').html(colors[n]);	
		
		// increments n
		n++;

		// if n is > 5, reset n
		if(n > 5) {
			n = 0;
		}
	});

});