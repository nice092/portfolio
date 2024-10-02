$(document).ready(function(){

  $(window).on("scroll", function() {
    var scr = $(this).scrollTop();

    // section1
    var sec2 = $(".con1").offset().top;
    if(scr >= sec2) {
      $(".subnav").addClass("view");
    } else {
      $(".subnav").removeClass("view");
    }

    // section2
    var fixStart = $(".con2").offset().top;
    var fixEnd = $(".con3").offset().top - $(window).height();

    if(scr < fixStart) {
      $(".con2 .txtBox").css({
        position: "absolute",
        top : 0,
      });
      $("#bg_video").css({
        position: "absolute",
        top : 0,
        bottom: 'unset'
      });
    } else if(scr >= fixStart && scr < fixEnd) {
      $(".con2 .txtBox").css({
        position: "fixed",
        top : 0,
        left: 0
      });
      $("#bg_video").css({
        position: "fixed",
        top : 0,
        bottom: 'unset'
      });
    } else if(scr >= fixEnd) {
      $(".con2 .txtBox").css({
        position: "absolute",
        top : $(".con2").height() - $(window).height(),
      });
      $("#bg_video").css({
        position: "absolute",
        top : 'unset',
        bottom: 0
      });
    }

    if(scr >= $(".con2 .imgbox div").eq(0).offset().top - $(window).height() / 2 && scr < $(".con2 .imgbox div").eq(1).offset().top - $(window).height() / 2) {
      $(".txtBox span").removeClass("on");
      $(".txtBox span").eq(0).addClass("on");
    } else if(scr >= $(".con2 .imgbox div").eq(1).offset().top - $(window).height() / 2 && scr < $(".con2 .imgbox div").eq(2).offset().top - $(window).height() / 2) {
      $(".txtBox span").removeClass("on");
      $(".txtBox span").eq(1).addClass("on");
    } else if(scr >= $(".con2 .imgbox div").eq(2).offset().top - $(window).height() / 2) {
      $(".txtBox span").removeClass("on");
      $(".txtBox span").eq(2).addClass("on");
    } 
  });
  


// con4 특징 슬라이드
var swiper1 = new Swiper(".sdWrap", {
      slidesPerView: 'auto',
      spaceBetween: 40,
      loop: true,
});

// con6 캔버스 슬라이드
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

// infoWrap 제품세부정보
$('.listCon .tit').click(function(){

  $(this).toggleClass('active');
   $(this).parent()
   .siblings().children('.tit').removeClass('active');

  $(this).siblings('.list').stop().slideToggle();
  $(this).parent().stop().siblings().children('.list').slideUp();


});

});//끝