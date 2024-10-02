$(document).ready(function(){

//좌우 이동 효과
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

// 올라오는 효과
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = 1;
            }, index * 200); // 각 요소에 200ms 지연 시간 추가
        } else {
            entry.target.style.transform = 'translateY(40%)';
            entry.target.style.opacity = 0;
        }
    });
});

let upMotion = document.querySelectorAll('.upMotion');
    upMotion.forEach(element => observer.observe(element));


// header - search
$('.searchBtn').on('click', function(){
    $('.searchPage').addClass('active');
});

$('.close').on('click', function(){
    $('.searchPage').removeClass('active');
    $('nav').removeClass('active');
});

// header - menu
$('.menuBtn').on('click', function(){
    $('nav').addClass('active');
});

$('nav .menu').on('click', function(){
    $(this).parent()
    .children('.sub').stop().slideToggle();

    $(this).parent()
    .siblings().children('.sub').stop().slideUp();

    $(this).toggleClass('open');
    $(this).parent().siblings()
    .children('.menu').removeClass('open');
});


// container
//커지는 효과
let scaleserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scale');
        } else {
            entry.target.classList.remove('scale');
        }
    });
});

let scale = document.querySelectorAll('.imgbox img');
scale.forEach(element => scaleserver.observe(element));


// 로고 스크롤
window.addEventListener('scroll', () => {
    const rollingImage = document.querySelector('.rollingimg');
    const scrollPosition = window.scrollY;
    rollingImage.style.backgroundPosition = `-${scrollPosition}px 0`;
});



//슬라이드
var swiper = new Swiper(".conSlider", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
        481: {
            slidesPerView: '2',
        },
        1024: {
            slidesPerView: '5',
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            
        }
    },
  });

// 팝업
$('.popupWrap .close').click(function(){
    $('.popupWrap').addClass('active');
  });

//TOP
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

});//끝