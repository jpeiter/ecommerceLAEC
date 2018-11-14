$(function () {
    $('.foto-menor-li').click(function () {
        let imgSrc = $(this).children().attr('src');
        $('#foto-grande').attr('src', imgSrc.replace("-mini", ""));
    });

    $('#fav').click(function () {
        $(this).toggleClass('fa-heart-o fa-heart');
        $(this).toggleClass('yellow red');
        if ($(this).hasClass('red')) {
            localStorage.setItem('favoritado', "true");
        }
        else {
            localStorage.setItem('favoritado', "false");
        }
    });
})
