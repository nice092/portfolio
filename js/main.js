$(document).ready(function(){
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height(); 
        const secondSectionTop = $('.About').offset().top; 
        
        if (scrollPosition >= secondSectionTop) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
        
        let viewTop = $('section').eq(1).offset().top; 
        
        if (scrollPosition + windowHeight >= viewTop) {
            $('.top').fadeIn(); 
        } else {
            $('.top').fadeOut();
        }
    });

    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0}, 1500); 
    });
/*
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

*/

$('header .menuBtn').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
});

$('.menu li').click(function(){
    let i = $(this).index();
    let offTop = $('#Wrap section').eq(i).offset().top;
    $('html,body').animate({'scrollTop':offTop});
});

$(window).on('scroll', function() {
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    
    $('#Wrap section').each(function(i) {
        var sectionTop = $(this).offset().top - 70; 
        var sectionBottom = sectionTop + $(this).outerHeight();
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            $('.menu li').removeClass('active');
            $('.menu li').eq(i).addClass('active');
        }

        if (scrollPos + windowHeight >= documentHeight - 5) {
            $('.menu li').removeClass('active');
            $('.menu li:last-child').addClass('active');
        }
    });
});


// Publishing 작업 페이지
$('.Publishing .item').click(function(){
    $(this).siblings('.view').stop().fadeIn();
});

$('.Publishing .close').click(function(){
    $(this).parent('.view').stop().fadeOut();
});


//Design
function imgPop(img){
    img1 = new Image();
    img1.src = img;
    imgControll(img);
}

function imgControll(img){
    if(img1.width != 0 && img1.height != 0){
        viewImage(img);
    } else {
        controller = "imgControll('" + img + "')";
        setTimeout(controller, 20);
    }
}

function viewImage(img){
    const W = img1.width * 1.1;
    const H = screen.height / 1;
    const O = "width=" + W + ",height=" + H + ",scrollbars=yes";
    const imgWin = window.open("", "", O);
    imgWin.document.write("<html><head><title>포트폴리오 이미지 원본 사이즈</title></head>");
    imgWin.document.write("<body topmargin=20 leftmargin=20>");
    imgWin.document.write("<img src='" + img + "' onclick='self.close()' style='cursor:pointer;' title='클릭하시면 창이 닫힙니다.'>");
    imgWin.document.close();
}

$('.container .con').click(function(){
    const imgSrc = $(this).find('img').attr('src');
    imgPop(imgSrc);
});

    $('.conBox').hide();
    $('.conBox').slice(0, 8).show();

    $('.more').click(function(e) {
        e.preventDefault();
        $('.conBox:hidden').slice(0, 4).slideDown();

        if ($('.conBox:hidden').length == 0) {
            $('.more').fadeOut('slow');
        }
    });

    
    
});//끝

