$(function() {
    /* Проверка высоты для ограничения блока */
    /* START */
    $( ".reviews .uk-card" ).each(function() {
        if ($(this).children('.uk-card-body').height() >= 425){
            $(this).children('.uk-card-body').addClass('active');
        }
    });

    $( ".reviews .uk-card-body.active" ).click(function() {
        $(this).removeClass('active');
    });
    /* END */
});