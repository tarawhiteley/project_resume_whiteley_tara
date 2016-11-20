$(document).ready(function () {
    // responsive nav
    var nav = responsiveNav(".nav-collapse");

    //skill bar
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        },
        6000);
    });
});
