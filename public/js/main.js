/*---------------------------------------------
Template name:  Dirto
Version:        1.0
Author:         techydevs
Author Email:   contact@tecydevs.com

[Table of Content]

01: Preloader
02: side-widget-menu
02: Mobile Menu Open Control
03: Mobile Menu Close Control
04: Side user panel menu Open Control
05: Back to Top Button and Navbar Scrolling Effects
06: back to top button click control
07: most-visited-wrap
08: Client logo slider
09: client-testimonial
10: gallery-carousel
11: magnificpopup
12: Daterangepicker
13: MagnificPopup
14: Quantity number increment control
15: Quantity number decrement control
16: Tooltip
17: Nice Select
18: Counter up
----------------------------------------------*/

(function ($) {
    "use strict"; //use of strict

    $(document).on('ready', function () {

        /*==== Preloader =====*/
        $(window).on('load', function(){
            $('.loader-container').delay('500').fadeOut(2000);
        });

        /*====  side-widget-menu  =====*/
        $(document).on('click','.side-menu-wrap .side-menu-ul>li .la-angle-down', function () {
            $(this).closest('li').siblings().removeClass('active').find('.dropdown-menu-item').slideUp(200);
            $(this).closest('li').toggleClass('active').find('.dropdown-menu-item').slideToggle(200);
            return false;
        });

        /*=========== Mobile Menu Open Control ============*/
        $(document).on('click','.logo-right-content .side-menu-open', function () {
            $('.side-nav-container').addClass('active');
        });

        /*=========== Mobile Menu Close Control ============*/
        $(document).on('click','.humburger-menu .side-menu-close', function () {
            $(".side-nav-container, .side-user-panel").removeClass('active');
        });

        /*=========== Side user panel menu Open Control ============*/
        $(document).on('click','.logo-right-content .side-user-menu-open', function () {
            $('.side-user-panel').addClass('active');
        });

        /*===== Back to Top Button and Navbar Scrolling Effects ======*/
        $(window).on('scroll', function() {
            //header fixed animation and control
            if($(window).scrollTop() > 10) {
                $('.header-menu-wrapper').addClass('header-fixed');
            }else{
                $('.header-menu-wrapper').removeClass('header-fixed');
            }

            //back to top button control
            if ($(window).scrollTop() > 300) {
                $('#back-to-top').addClass('show-back-to-top');
            } else {
                $('#back-to-top').removeClass('show-back-to-top');
            }

            // skillbar
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:$(this).attr('data-percent')
                },6000);
            });

        });

       /*===== back to top button click control ======*/
        $(document).on("click", '#back-to-top', function() {
            $('html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        /*==== most-visited-wrap =====*/
        $('.most-visited-wrap').owlCarousel({
            loop: true,
            items: 3,
            nav: false,
            dots: true,
            smartSpeed: 700,
            autoplay: true,
            center: true,
            margin: 30,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 480 up
                480 : {
                    items: 1
                },
                // breakpoint from 600 up
                600 : {
                    items: 2
                },
                // breakpoint from 992 up
                992 : {
                    items: 3
                }
            }
        });

        /*==== Client logo =====*/
        $('.client-logo').owlCarousel({
            loop: true,
            items: 6,
            nav: false,
            dots: false,
            smartSpeed: 700,
            autoplay: true,
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 425 up
                425 : {
                    items: 2
                },
                // breakpoint from 480 up
                480 : {
                    items: 2
                },
                // breakpoint from 767 up
                767 : {
                    items: 4
                },
                // breakpoint from 992 up
                992 : {
                    items: 6
                }
            }
        });

        /*==== client-testimonial =====*/
        $('.client-testimonial').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 700,
            autoplay: true,
            stagePadding: 30,
            margin:80,
            navText: ["<span class=\"la la-caret-left\"></span>", "<span class=\"la la-caret-right\"></span>"]
        });


        /*==== gallery-carousel =====*/
        $('.gallery-carousel').owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 700,
            autoplay: false,
            dotsData: true,
            navText: ["<span class=\"la la-chevron-left\"></span>", "<span class=\"la la-chevron-right\"></span>"]
        });

        /*==== magnificpopup =====*/
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });

        /*==== Daterangepicker =====*/
        $('input[name="daterange"]').daterangepicker({
            opens: 'left',
            singleDatePicker: true
        });

        /*==== Quantity number increment control =====*/
        $(document).on('click', '.input-number-increment', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val + 1);

        });

        /*==== Quantity number decrement control =====*/
        $(document).on('click', '.input-number-decrement', function() {
            var $input = $(this).parents('.input-number-group').find('.input-number');
            var val = parseInt($input.val(), 10);
            $input.val(val - 1);
        });

        /*==== Nice select =====*/
        $('select').niceSelect();

        /*==== Counter up =====*/
        $('.counter').counterUp({
            delay: 20,
            time: 2000
        });

        /*====  Tooltip =====*/
        $('[data-toggle="tooltip"]').tooltip();

        /*==== showMore =====*/
        $('.listing-check-list-item').showMore({
            minheight: 244,
            buttontxtmore: 'Show More',
            buttontxtless: 'Show less',
            buttoncss: 'my-button-css',
            animationspeed: 250
        });

        /*======= ui price range slider ========*/
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 2, 290 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
            " - $" + $( "#slider-range" ).slider( "values", 1 ) );



        /*==== top-author-slider =====*/
        $('.top-author-slider').owlCarousel({
            loop: true,
            items: 5,
            nav: true,
            dots: false,
            smartSpeed: 700,
            autoplay: false,
            margin: 30,
            navText: ["<span class=\"la la-chevron-left\"></span>", "<span class=\"la la-chevron-right\"></span>"],
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1
                },
                // breakpoint from 767 up
                767 : {
                    items: 2
                },
                // breakpoint from 1199 up
                1199 : {
                    items: 3
                },
                // breakpoint from 1440 up
                1440 : {
                    items: 4
                },
                // breakpoint from 1440 up
                1920 : {
                    items: 5
                }
            }
        });

        /*=========== Google Map  ============*/
        var map;
        map = new GMaps({
            el: '#map',
            center: new google.maps.LatLng(40.728157, -74.077644),
            zoom: 12,
            // Google map background color style arrow on the below,
            // if you want to change the google map background style
            // then replace below arrow style with your own google map style
            styles: [
                {
                    "featureType" : "road",
                    "stylers" : [
                        {"color" : "#ffffff"}
                    ]
                }, {
                    "featureType" : "water",
                    "stylers" : [
                        {"color" : "#e9e9e9"}
                    ]
                }, {
                    "featureType" : "landscape",
                    "stylers" : [
                        {"color" : "#f5f5f5"}
                    ]
                }, {
                    "elementType" : "labels.text.fill",
                    "stylers" : [
                        {"color" : "transparent"}
                    ]
                }, {
                    "featureType" : "poi",
                    "stylers" : [
                        {"color" : "#fefefe"}
                    ]
                }, {
                    "elementType" : "labels.text",
                    "stylers" : [
                        {"saturation" : 1},
                        {"weight" : 0.1},
                        {"color" : "#737980"}
                    ]
                }
            ]
        });
        map.addMarker({
            lat: 40.7173503,
            lng: -74.0557994,
            icon: "images/map-marker.png",
            animation: google.maps.Animation.BOUNCE
        });

    });
})(jQuery);

