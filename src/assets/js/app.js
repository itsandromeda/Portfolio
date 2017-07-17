$(".top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
});

$('.main-nav').click('a', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(".skip").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

$(window).scroll(_ = () => {
    if ($(window).scrollTop() >= 30) {
        $('.nav-text').addClass('drop-animate');
        $('.footer-text').addClass('lift-animate');
    } else {

        $('.nav-text').removeClass('drop-animate');
        $('.footer-text').removeClass('lift-animate');
    }
});