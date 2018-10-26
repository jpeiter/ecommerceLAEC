$('.foto-menor-li').mouseover(function () {
    var imgSrc = $(this).children().attr('src');
    $('#foto-grande').attr('src', imgSrc.replace("-mini", ""));
    $(this).addClass('border-top-brown');
}).mouseout(function () {
    $(this).removeClass('border-top-brown');
});


