var menubtn = new EzenAddClass(".btn");


var topmenu = new EzenScrollClass("header",{
    baseline:10,
    //markers: true
}); 

const swiper = new Swiper('#mainvisual .swiper', {
    // Optional parameters
    spaceBetween: 30,
    loop: true,
    effect: "fade",//전환효과
    speed:800, //전환시간
    autoplay: {//autoplay 자동전환
    delay: 2500, //1.5초(=1500밀리초)마다 전환됨.
    disableOnInteraction: false,},
  
  
    // If we need pagination
    pagination: {
      el: '.page',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
});

var swipers = new Swiper("#magazine .mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
});


var A = new EzenScrollClass(".scroll",{
  baseline:"bottom",
  add:-0.08,
  //markers: true
});







