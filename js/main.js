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

    //custom JQuery fadein fadeout
    $('#logo').mouseenter(function () {
        $('img').fadeout('slow');
    }
    );

    $('#logo').mouseleave(function () {
        $('img').fadein('fast');
    }
    );
}
);
