
var header = new EzenScrollClass("header",{
	
	baseline :50
}); 

var sub = new EzenAddClass(".sub"); 


var swiper1 = new Swiper("#main-banner .swiper", {
	effect: "fade",
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	autoplay: {
	  delay: 3000,
	  disableOnInteraction: false,
	},
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });

  var swiper2 = new Swiper("#favorite-menu .favorite-Swiper", {
	slidesPerView: 7,
	spaceBetween: 30,
	freeMode: true,

	navigation: {
		nextEl: "#favorite-menu .swiper-button-next",
		prevEl: "#favorite-menu .swiper-button-prev",
	  },
  });

  var swiper3 = new Swiper("#footer-banner .footer-Swiper", {
	slidesPerView: 6,
	spaceBetween: 30,
	loop: true,
	freeMode: true,

	navigation: {
		nextEl: "#footer-banner .next",
		prevEl: "#footer-banner .prev",
	  },
  });

  function showCountry(obj) {

	var target = "#select-country"+obj;
	var box = document.querySelector(target);
	box.style.display = "inline-block";
	box.previousElementSibling.style.display = "none";
	box.nextElementSibling.style.display = "none";
  }