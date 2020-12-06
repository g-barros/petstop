$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 90 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});