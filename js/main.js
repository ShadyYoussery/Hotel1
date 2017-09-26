(function ($) {
	"use strict";


    jQuery(document).ready(function($) {

        // showcase slider
        $('.showcase_slider').owlCarousel({
            loop: true,
            autoHeight: true,
            autoplay: true,
            nav: false,
            margin: 0,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        });

        //bootstrap carousel
        $('.carousel').carousel({
            pause: true,
            interval: 2000
        });


    });
	
	/** start prelaoder js **/

	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#loader-wrapper').delay(300).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow-x':'hidden'});
	})

	/** end prelaoder js **/

}(jQuery));