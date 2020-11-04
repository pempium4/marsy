if($(window).width() < 560){
    $('header .container').css('display', 'flex');
    $('header .icons').css('display', 'none');
    $('#slick').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
}