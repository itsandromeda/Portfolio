$(".top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$('.main-nav').click('a', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});