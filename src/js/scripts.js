

$(document).ready(function () {
    $("#cep", e).mask("00000-000")
});

function mudaFotoHover() {
    $('.foto-menor-li').mouseover(function () {
        var imgSrc = $(this).children().attr('src');
        $('#foto-grande').attr('src', imgSrc.replace("-mini", ""));
        $(this).addClass('border-top-brown');
    }).mouseout(function () {
        $(this).removeClass('border-top-brown');
    });
}

function favoriteClick() {
    $('#fav').click(function () {
        $(this).toggleClass('fa-heart-o fa-heart');
        $(this).toggleClass('yellow red');
    });
}

mudaFotoHover();
favoriteClick();