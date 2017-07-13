/*global $, window, _, document*/
$(window).scroll(_ = () => {
    if ($(window).scrollTop() >= 5) {
        $('#navbar').addClass('nav-scroll');
    } else {
        $('#navbar').removeClass('nav-scroll');
    }
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