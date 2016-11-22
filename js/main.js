$(document).ready(function () {
    // responsive nav
    var nav = responsiveNav('.nav-collapse');

    //skill bar
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        },
                6000);
    }
    );

    //custom JQuery mouseenter mouseleave
    $('h2').mouseenter(function () {
        $(this).addClass('hover');
    }
    );

    $('h2').mouseleave(function () {
        $(this).removeClass('hover');
    }
    );
}
);
