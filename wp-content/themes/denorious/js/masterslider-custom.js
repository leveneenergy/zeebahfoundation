(function($) {

"use strict";

jQuery(document).ready(function($){

// QUOTE CAROUSEL
    $('.quote-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: "<div class='left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='right'><i class='fa fa-angle-right'></i></div>"
    });
	
    // INFO CAROUSEL
    $('.info-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: "<div class='ic-prev'>Prev</div>",
        nextArrow: "<div class='ic-next'>Next</div>"
    });

    // SPONSORS CAROUSEL
    $('.sponsors-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        prevArrow: "<div class='left'><i class='fa fa-angle-left'></i></div>",
        nextArrow: "<div class='right'><i class='fa fa-angle-right'></i></div>",
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});	
}(jQuery));