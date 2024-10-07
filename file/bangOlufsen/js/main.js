$(document).ready(function(){

  //메뉴
  $('.mainheader .menuBtn').click(function(){
    $('nav').animate({'left':0});
  });

  $('nav .closeBtn').click(function(){
    $('nav').animate({'left':'-100%'});
  });

  //모바일 특징 제품사양
  $('.subnav .icon').click(function(){
    $(this).toggleClass('rotate');
    $('.subnav .mbclick').slideToggle();
  });

  // 특징 이동
$('.move1').click(function() {
  $('html, body').animate({
      scrollTop: $('.container').offset().top
  }, 500); // 0.5초 동안 부드럽게 이동
});

// 제품사양 이동
$('.move2').click(function() {
  $('html, body').animate({
      scrollTop: $('.infoWrap').offset().top - 50
  }, 500);
});


  $(window).on("scroll", function() {
    var scr = $(this).scrollTop();

    // header 보이게
    var sec2 = $(".con1").offset().top;
    if(scr >= sec2) {
      $(".subnav").addClass("view");
    } else {
      $(".subnav").removeClass("view");
    }

    //banner
    const scrPos = $(this).scrollTop();
    const banner = $('.banner h3');
    const moveTxt = scrPos * 0.9;

    banner.css('transform', `translateX(-${moveTxt}px)`);

    // .con2
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
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
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
$('.infoWrap .listCon .tit').click(function(){

  $(this).toggleClass('rotate');
  $(this).siblings('.list').stop().slideToggle();
  $(this).parent().stop().siblings().children('.list').slideUp();

});

$('.f_info .listCon .tit').click(function(){
  if (window.innerWidth < 1025) {
    $(this).toggleClass('rotate');
    $(this).siblings('.list').stop().slideToggle();
    $(this).parent().stop().siblings().children('.list').slideUp();
  }
});

});//끝