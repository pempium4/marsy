$('.icons li').click(function (){
    $('.icons li').css('background', ''); //сброс к установленому в CSS
    $(this).css('background', '#2ee2d6');
    let i = $(this).children();
    let parent = $(this).parents();
    if(parent.is('header')){
        $('#slick .container').css('display', 'none');
    }else if(parent.is('div#gallery')){
        $('#gallery .container').css('display', 'none');
    }
    if(i.hasClass('fa-mobile-alt')){
        $('#phone').fadeIn(500).css('display', 'flex');
    }else if(i.hasClass('fa-tablet-alt')){
        $('#tablet').fadeIn(500).css('display', 'flex');
    }else if(i.hasClass('fa-desktop')){
        $('#imac').fadeIn(500).css('display', 'flex');
    }else{
        $('#gallery .container').fadeIn(500).css('display', 'flex'); //attention (
    }
});
$('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top - 80
    }, 500);
});