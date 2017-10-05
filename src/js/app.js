var clock,
h = 0,
m = 0,
s = 0,
msj = 'Ha Finalizado!';

$(function() {
	$('#myModal').css('display','block');

	$("#hora").keyup(function() {
		h = $(this).val();
	});
	$("#minuto").keyup(function() {
		m = $(this).val();
	});
	$("#segundo").keyup(function() {
		s = $(this).val();
	});
	$("#mensaje").keyup(function() {
		msj = $(this).val();
	});

	$('.flat').click(function() {
		$(this).fadeOut();
		clock.start();
	});

	$('button[type=submit]').click(function(){
		if (h!='' || m!='' || s!='') {
			$('#myModal').css('display','none');
			$('.flat').focus();
			update();
		}
	});
});


function update(){
		
	var time = (h*3600)+(m*60)+(s*1);

	clock = $('.clock').FlipClock(time,{
		countdown: true,
		autoStart: false,
		clockFace: 'HourlyCounter',
		language: 'es',
		callbacks: {
                stop: function() {
                    $('.clock').html('<div class="msj">'+msj+'</div>');
                }
            }
	});
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slide-img");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	x[slideIndex-1].style.display = "block";  
	document.body.style.backgroundImage="url("+x[slideIndex-1].src+")"; 
} 
