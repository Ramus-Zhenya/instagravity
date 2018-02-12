$('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 800);
return false;
});

$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
    loop:false,
	margin:30,
	items:3,
    responsive:{
        0:{
            items:1,
			nav:true,
			dots: false,
        },
		467:{
            items:1,
			dots: false,
			 navText: ["<", ">"],
			nav:true,
			margin:10,
        },
        767:{
            items:2
        },
        1000:{
            items:3,
//			loop:true
        }
    }
});
});
























