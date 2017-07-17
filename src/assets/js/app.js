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

const settings = {
    'data' = {},

};

/*utils*/
const getImages = () => {
    return new Promise((resolve, reject) => {
    $.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=40427461.890df3d.70cb025431904ddf8f46a57ac32cbb2e', (response, req, estado) => {
        console.log(response);
        /*if (estado.status != 200) {
            reject(new Error("Error al obtener datos"));
        } else {
            resolve(response);
        }*/
    });
};


const render = (root, data) => {
    root.empty();
    console.log(data);
    const wrapper = $('<div class="wrap"></div>');
    root.append(wrapper);
}
const state = {
    page: "main",
    user: null,
    data: {},
    pin: {}
};
$(_ => {
    const root = $("#root");
    state.user = 'itsandromeda';
    getImages(state.user).then((response) => {
        if (response.data == null) {
            console.log("Error al obtener data del usuario");
        } else {
            state.data.foto = response.data.image['60x60'].url;
            getInfo(state.user).then((response) => {
                //console.log(response,source);
                state.data.pins = response.data.counts.pins;
                state.data.followers = response.data.counts.followers;
                state.data.name = response.data.name;
            });
            getBoards(state.user).then((response) => {
                state.data.boards = response.data;
                render(root, state.data);
            });

        }
    });
    $('#myModal').modal('toggle');
});