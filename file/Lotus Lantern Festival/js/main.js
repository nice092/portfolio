$(document).ready(function(){


//올라오는 효과
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.transform = 'translateY(102%)';
            entry.target.style.opacity = 0;
        }
    });
});

let upMotion = document.querySelectorAll('.upMotion');
upMotion.forEach(element => observer.observe(element));



//메뉴
$('.menuBtn').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
});

$('.gnb>li>a').click(function(){
    $(this).siblings('.lnb').stop().slideToggle();
    $(this).parent().siblings()
    .children('.lnb').stop().slideUp();
    
});


NavHover();
$(window).resize(function() {
    NavHover();
    });
    function NavHover() {
    if ($(window).width() >= 1025) {
        $('.gnb').off('mouseover mouseout').on('mouseover', function() {
            $('.nav_bg, .lnb').stop().slideDown();
        }).on('mouseout', function() {
            $('.nav_bg, .lnb').stop().slideUp();
        });
    } else {
        $('.gnb').off('mouseover mouseout');
    }
}



// 축제정보
var swiper = new Swiper(".festivalWrap .infoWrap", {
    loop: true,
    centeredSlides: true,
    breakpoints: {
        768: {
            loop: false, 
            allowSlidePrev: false, 
            allowSlideNext: false, 
            allowTouchMove: false,
            autoplay: false,
            
        },
        1024: {
            loop: false, 
            allowSlidePrev: false, 
            allowSlideNext: false, 
            allowTouchMove: false,
            autoplay: false,
            
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

});

// 축제정보 - 좌우 이동 효과
let sideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.opacity = 1;
        } else {
            if (entry.target.classList.contains('leftbox')) {
                entry.target.style.transform = 'translateX(-100%)';
            } else if (entry.target.classList.contains('rightbox')) {
                entry.target.style.transform = 'translateX(100%)';
            }
            entry.target.style.opacity = 0;
        }
    });
});


let sideMotion = document.querySelectorAll('.sideMotion');
sideMotion.forEach(element => sideObserver.observe(element));


// 프로그램 정보
var swiper = new Swiper(".programWrap .infoWrap", {
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    breakpoints: {
        480: {
            slidesPerView: '1',
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    // autoplay: {
    //     delay: 3000,
    // },
});

// 축제광장

$('.square .tab li').click(function(){
    let i = $(this).index();
    $('.tabcon').children('.item').eq(i).css({
      'display':'block'
    }).siblings().css({
      'display':'none'
    });
    $(this).addClass('active')
    .siblings().removeClass('active')
});


var swiper1 = new Swiper('.row1', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
});

var swiper2 = new Swiper('.row2', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 10,
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },
});
    
// 열린마당
$('.tabconBox .tab li').click(function(){
    let i = $(this).index();
    $('.tabconBox').find('.item').eq(i).css({
      'display':'block'
    }).siblings().css({
      'display':'none'
    });
    $(this).addClass('active')
    .siblings().removeClass('active')
});

//팝업
$('.popup .btn').click(function(){
    $('.popupWrap').addClass('active')
});

//top 버튼
$(window).scroll(function() {
    let scr = $(window).scrollTop();
    let windowHeight = $(window).height();
    let viewTop = $('section').eq(1).offset().top;
    
    if (scr + windowHeight >= viewTop) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

$('.top').click(function() {
    $('html,body').animate({'scrollTop': 0}, 1500);
});



});/* 끝 */
    