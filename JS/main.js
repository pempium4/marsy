$('.icons li').click(function (){
    $('.icons li').css('background', '#0eb0a5');
    $(this).css('background', '#1fd0c4');
    let i = $(this).children();
    if(i.hasClass('fa-mobile-alt')){
        $('.container').css('display', 'none');
        $('#phone').fadeIn(500).css('display', 'flex');
    }else if(i.hasClass('fa-tablet-alt')){
        $('.container').css('display', 'none');
        $('#tablet').fadeIn(500).css('display', 'flex');
    }else if(i.hasClass('fa-desktop')){
        $('.container').css('display', 'none');
        $('#imac').fadeIn(500).css('display', 'flex');
    }
});