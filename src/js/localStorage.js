$(document).ready(function () {


    let object = localStorage.getItem('favoritado');
    if (object === 'true') {

        $('#fav').removeClass('fa-heart-o');
        $('#fav').removeClass('yellow');
        $('#fav').addClass('fa-heart');
        $('#fav').addClass('red');
    }
    else {
        $('#fav').removeClass('fa-heart');
        $('#fav').removeClass('red');
        $('#fav').addClass('fa-heart-o');
        $('#fav').addClass('yellow');
    }
});
