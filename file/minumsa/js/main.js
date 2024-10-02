$(document).ready(function(){

// header topfamily
const swiper = new Swiper(".familyWrap", {
    slidesPerView: "auto",
});

//메뉴 버튼
$('.menuBtn').click(function(){
    $('nav').toggleClass('active');
    $(this).toggleClass('active');
});

//메뉴 닫힘 - 모바일
$('.closeBtn').click(function(){
  if (window.innerWidth < 1025) {
    $('nav').removeClass('active');
    $('.menuBtn').removeClass('active');
  }
});

//검색
$('.searchBtn').on('click', function(){
  $('.searchView').toggleClass('active');
});


//메뉴
$('.list').click(function(){
  if (window.innerWidth < 1025) {
      $(this).siblings('.listmenu')
      .stop().slideToggle();

      $(this).parents('.menubox').siblings()
      .find('.listmenu').stop().slideUp();

      $(this).toggleClass('open');
      $(this).parents('.menubox').siblings()
      .find('.list').removeClass('open');
  }
});

//배너
const swiper2 = new Swiper(".bn_slider", {
  loop: true,
  navigation: {
    nextEl: ".bn-next",
    prevEl: ".bn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
},
});

//container - tab
$('.category li').click(function(){
    let i = $(this).index();
    $('.tab_slide').eq(i).css({
      'display':'block'
    }).siblings().css({
      'display':'none'
    });
    $(this).addClass('active')
    .siblings().removeClass('active')
  });

// container - 책소개 slider
const swiper3 = new Swiper(".tab_slide", {
    loop: true,
    centeredSlides: false,
    spaceBetween: 25,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.tab-next',
        prevEl: '.tab-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// container - 북로그 slider
const swiper4 = new Swiper(".booklogSlide", {
  slidesPerView:'auto',
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "fraction",
    },
    breakpoints: {
        320: {
          centeredSlides: true,
        },
        768: {
          centeredSlides: true,
            
        },
        1025: {
          centeredSlides: false,
        }
    },
    // autoplay: {
    //     delay: 5000,
    // },

});

// 유튜브
const swiper5 = new Swiper(".youtubeWrap", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// 이벤트
const swiper6 = new Swiper(".eventwrap", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    
  });

//알림 탭
$('.notinceTab ul li').click(function(){
    
    $(this).addClass('active')
    .siblings().removeClass('active');
  
    let i = $(this).index();
    $('.noticeCon .tab').eq(i).css({
        'display':'block',
    }).siblings().css({
        'display':'none'
    });
  });

  //팝업
  const swiper7 = new Swiper(".popupSlide", {
    loop: true,
    slidesPerView:'auto',
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $('.popupWrap .close').click(function(){
    $('.popupWrap').addClass('active');
  });


  //헤더 메뉴
    const setSticky = function() {
      const stickStart = $("header").height();
      const scr = $(window).scrollTop();
      const isAnim = $(".headerWrap").is(":animated");
      const statusWrap = $(".headerWrap").css("position");
      // console.log(scr, isAnim, statusWrap)
      if(scr > stickStart && statusWrap !== "fixed") {
          $(".headerWrap").css({
              position: "fixed",
              top: 0,
              left: 0,
              display: "none"
          });
          $(".headerWrap").stop().slideDown();
      } else if(scr <= stickStart) {
          $(".headerWrap").css("position", "unset");
      }
    }

    const responsiveSticky = function() {
        const winWidth = $(window).width();
        if(winWidth >= 1025){
            setSticky();
        } else {
            $(".headerWrap").css({
              position: "unset",
              // display: "block"
            });
        }
    }

    $(window).on("scroll", function(){
        responsiveSticky();
    });

    $(window).on("resize", function() {
        responsiveSticky();
    });
    responsiveSticky();

//TOP
$(window).scroll(function() {
  let scr = $(window).scrollTop();
  let windowHeight = $(window).height();
  let viewTop = $('.container').offset().top;
  
  if (scr + windowHeight >= viewTop) {
      $('.top').fadeIn();
  } else {
      $('.top').fadeOut();
  }
});

$('.top').click(function() {
  $('html,body').animate({'scrollTop': 0}, 1500);
});

});//끝