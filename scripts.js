jQuery(document).ready(function($) {
    $('#idade').mask('00/00/0000');
    $('.calcular').on('click', function(event) {
        event.preventDefault();
        $('.resposta').empty().hide(800);
        var form = $('#frmCalculaIdade');
        var dados = form.serialize();
        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: dados,
            dataType: "html",
        }).always(function(response) {
            $('.resposta').empty().append(response).show(800);
        });
    });
});