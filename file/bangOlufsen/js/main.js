$(document).ready(function(){



var swiper1 = new Swiper(".sdWrap", {
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
});

var swiper2 = new Swiper(".sdCanvas", {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  breakpoints: {
    480: {
        spaceBetween: 16,
    },
    768: {
        spaceBetween: 20,
        
    },
    1024: {
        spaceBetween: 40,
        
    }
},
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});

});//끝