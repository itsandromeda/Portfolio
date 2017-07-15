/*global $, window, _, document*/
/*$(window).scroll(_ = () => {
    if ($(window).scrollTop() >= 5) {
        $('#navbar').addClass('nav-scroll');
    } else {
        $('#navbar').removeClass('nav-scroll');
    }
});*/

$('.work').click('a', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
/*
let lastScrollTop = 0;

$(window).scroll(_ = () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        //hacer
    } else {
        //hacer
        if (currentScroll <= 3) {
            //hacer
        }
    }
    lastScrollTop = currentScroll;
}, false);*/