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

    $('#btn-add-carrinho').click(function (e) {
        e.preventDefault();
        if ($('#qtdeItens').val() >= 1) {
            $('#nitens').text(
                $('#qtdeItens').val()
            );
            localStorage.setItem('itensCarrinho', $('#qtdeItens').val());
            alert($('#qtdeItens').val() + " iten(s) adicionados ao carrinho!");
        }
    });

    $('#qtdeItens').click(function (e) {
        e.preventDefault();

        if ($('#qtdeItens').val() == "") {
            $('#aviso-qtde-zero').addClass('d-block');
            $('#aviso-qtde-zero').removeClass('d-none');
        }
        else if ($('#qtdeItens').val() == 10) {
            $('#aviso-vendas').addClass('d-block');
            $('#aviso-vendas').removeClass('d-none');
        }
        else {
            $('#aviso-qtde-zero').addClass('d-none');
            $('#aviso-qtde-zero').removeClass('d-block');
            $('#aviso-vendas').addClass('d-none');
            $('#aviso-vendas').removeClass('d-block');
        }
    });


    $('#calc-frete').click(function (e) {
        e.preventDefault();
        let estado = $('#combo-estados option:selected');

        if (estado.hasClass('norte')) {
            $('#aviso-frete').removeClass('d-block')
            $('#aviso-frete').addClass('d-none')
            $('#valor-frete').text('R$ 95,99');
        } else if (estado.hasClass('nordeste')) {
            $('#aviso-frete').removeClass('d-block')
            $('#aviso-frete').addClass('d-none')
            $('#valor-frete').text('R$ 75,99');
        } else if (estado.hasClass('centro-oeste')) {
            $('#aviso-frete').removeClass('d-block')
            $('#aviso-frete').addClass('d-none')
            $('#valor-frete').text('R$ 55,95');
        } else if (estado.hasClass('sudeste')) {
            $('#aviso-frete').removeClass('d-block')
            $('#aviso-frete').addClass('d-none')
            $('#valor-frete').text('R$ 35,99');
        } else if (estado.hasClass('sul')) {
            $('#aviso-frete').addClass('d-none')
            $('#valor-frete').text('GRÁTIS!!!');
        }
        else {
            if ($('#aviso-frete').hasClass('d-none')) {
                $('#aviso-frete').removeClass('d-block')
                $('#aviso-frete').removeClass('d-none')
            }

        }
    });


})