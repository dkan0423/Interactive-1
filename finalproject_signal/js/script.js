$(document).ready(function(){  
	
	var textarray = ["<span style='color: red;'> Privacy is</span> a human right","Privacy is a human", " Privacy is a", " Privacy is", "Privacy", " " ];
	var textarray2 = ["Since then the government has gone through great lengths to monitor activity.", " Since then the government has <span style='color: red'>gone</span> through great lengths to monitor activity." ];
    var textarray3 = ["The FISA Amendment Act expanded the governments authority to monitor Americas electronic communications including roving wire taps, search of business records, and conducting surveillance of lone wolves or individuals suspected of terrorist-related activities not linked to terrorist groups. All communication international or domestic are vulnerable to spying.","The FISA Amendment Act expanded the governments authority to monitor American's electronic communications including roving wire taps, searches of business records, and conducting surveillance of lone wolves or <span style='color: red'> individuals </span> suspected of terrorist-related activities not linked to terrorist groups. All communication international or domestic <span style='color:red;'> are vulnerable </span> to spying" ]; 
    var textarray4 = ["An unknown quantity of purely domestic communications have been captured and read under the FISA Act. Between internationl borders, the rules of privacy don't apply. Our telephone lines, computer activity, and search histories are all subject to search.", " An unknown quantity of purely domestic communications have been captured and <span style='color: red;'>read</span> under the FISA Act. <span style='color: red;'> Between </span> international borders, <span style='color: red;'> the </span> rules of privacy don't apply. Our telephone <span style='color: red;'>lines </span>, computer activity, and search histories are all subject to search."]
    var textarray5 = ["How do we exist under the premise that we are always watched? Especially if the government must spy on us without particular warrants or meaningful review from impartial judges,", " How do <span style='color:red'> we </span> exist under the premise that we are always watched? Especially if the government <span style='color: red'> must</span> spy on us without particular warrants of meaningful review from impartial judges." ];
    var textarray6 = ["If the government can't serve and protect our data, how can we arm ourselves? By resigning the majority of our communication to online platforms and social media, users are vulnerable to surveillance and digital capitalism.", "If the government can't serve and <span style='color:red'> protect our data </span> how can we arm ourselves? <span style='color:red'>By </span> resigning the majority of our communication to online platforms and social media, users are vulnerable to surveillance and digital capitalism."];
	var textarray7 = ["Encryption, and protection of these assets are essential to maintaining our well being from government exploitation.", "<span style='color:red'> Encryption </span> and protection of these assets are essential to maintaining our well being from government exploitation. "]




	var n = 0;
	var m = 0;
	var o = 0;
	var p = 0;
	var r = 0;
	var s = 0;
	var t = 0;

	$('#bubble-1').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray[n]);	

	//var textarray = ["<span style='color: red;'> Doesn't</span> it bother you to know that the government can listen without permission from a federal court?","Doesn't it bother you to know that the government can listen without permission from a federal", " Doesn't it bother you to know that the government can listen without permission from a", " Privacy is", "Privacy", " " ];
	//var n = 0;

	//$('body').click(function() {
		// updates the body's html with a value from the colors array
		//$('.from-them').html(textarray[n]);

		// increments n
		n++;

		// if n is > 5, reset n
		if(n > 5) {
			n = 0;
		}
	});
  
	$('#bubble-2').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray2[m]);	

		// increments n
		m++;

		// if n is > 5, reset n
		if(m > 5) {
			m = 0;
		}
	});

$('#bubble-3').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray3[o]);	

		// increments n
		o++;

		// if n is > 5, reset n
		if(o > 5) {
			o = 0;
		}
	});


$('#bubble-4').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray4[p]);	

		// increments n
		p++;

		// if n is > 5, reset n
		if(p > 5) {
			p = 0;
		}
	});

$('#bubble-5').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray5[r]);	

		// increments n
		r++;

		// if n is > 5, reset n
		if(r > 5) {
			r = 0;
		}
	});

$('#bubble-6').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray6[s]);	

		// increments n
		s++;

		// if n is > 5, reset n
		if(s > 5) {
			s = 0;
		}
	});

$('#bubble-7').click(function() {
		// updates the body's html with a value from the colors array
		$(this).html(textarray7[t]);	

		// increments n
		t++;

		// if n is > 5, reset n
		if(t > 5) {
			t = 0;
		}
	});
  

});