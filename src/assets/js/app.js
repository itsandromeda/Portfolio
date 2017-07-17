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

$.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=40427461.890df3d.70cb025431904ddf8f46a57ac32cbb2e', (data, status) => {
    if (data === null) {
        console.log("error");
        //reject(new Error("Error al obtener datos"));
    } else {
        console.log(data);
        //resolve(response);
    }
});