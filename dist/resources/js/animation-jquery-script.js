$(document).ready(function () {
    $('.js--section-services').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '150px;'
    });


    /** scroll on buttons */
    $('.js--scroll-to-services').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-services').offset().top
        }, 1000);
    });


    /** Navigation scroll */
    // select all links with hashes
    $(function () {
        $('a[href*=#]').not('[href="#"]').not('[href="#0"]').click(function (event) {
            // on-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                // does a scroll target exist?
                if (target.length){
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

    })

    // animation on scroll
    $('.js--wp-1').waypoint(function ( ) {
        $('.js--wp-1').addClass('animated fadeIn');
     }, {
         offset: '50%'
     });

     $('.js--wp-2').waypoint(function ( ) {
        $('.js--wp-2').addClass('animated Pulse');
     }, {
         offset: '50%'
     });

     $('.js--wp-3').waypoint(function ( ) {
        $('.js--wp-3').addClass('animated Pulse');
     }, {
         offset: '50%'
     });
});
