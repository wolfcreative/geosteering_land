$(function() {
    /* Проверка высоты для ограничения блока */
    /* START */
    $( ".reviews .uk-card" ).each(function() {
        let cardBody = $(this).children('.uk-card-body');
        if (cardBody.height() >= 425){
            cardBody.addClass('active');
            cardBody.append('<a href="#" class="uk-button uk-button-smallblue uk-position-bottom-center uk-margin-bottom uk-hidden@s" style="z-index:3">Читать полностью</a>');
        }
    });

    $( ".reviews .uk-card-body .uk-button-smallblue" ).click(function(e) {
        e.preventDefault();
        $(this).closest('.uk-card-body').removeClass('active');
        $(this).remove();
    });

    $( ".reviews .uk-card-body.active" ).click(function(e) {
        e.preventDefault();
        $(this).removeClass('active');
        $(this).find('.uk-button-smallblue').remove();
    });
    /* END */
});