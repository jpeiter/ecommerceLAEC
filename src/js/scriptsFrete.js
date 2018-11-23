$(document).ready(function () {
    $('.div-tipo-frete').click(function (e) {
        if (!($(this).hasClass('frete-selecionado'))) {
            $('.div-tipo-frete').toggleClass('tipo-frete frete-selecionado');
        }
    });
});