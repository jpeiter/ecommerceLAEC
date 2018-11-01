$(function () {
    $('.foto-menor-li').click(function () {
        var imgSrc = $(this).children().attr('src');
        $('#foto-grande').attr('src', imgSrc.replace("-mini", ""));
    });

    $('#fav').click(function () {
        $(this).toggleClass('fa-heart-o fa-heart');
        $(this).toggleClass('yellow red');
    });

    estadoSelecionado();
    displayBotao();


})

function estadoSelecionado() {
    var opcao = $('#combo-estados option:selected').text();

    if (opcao !== "Selecione um estado") {
        $('#combo-estados').css('color', '#353535 !important');
    }
}

function displayBotao() {
    $('.nav-link').click(function () {
        var abaAtiva = $('.nav-link').hasClass('active');
        if (abaAtiva == true) {
            setTimeout(() => {
                $('.botao-entrar').toggleClass('d-none d-block');
            }, 150);

        }

    });

}

