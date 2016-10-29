jQuery(document).ready(function($) {
    'use strict';
    $(".email-signup-home").css("opacity", "1");
    /**
     * Sticky Header - scrolling
     */
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            $(".header").addClass("out-of-top");
        } else {
            $(".header").removeClass("out-of-top");
        }
    });

    /**
     * Sticky Header - header height
     */
    if ($("body").hasClass("header-sticky")) {
        if ($(window).width() >= 768) {
            var header = $('#header').height();
            $(".page-wrapper").css("margin-top",(header - 1) + "px");
        }

        $(window).resize(function() {
            if ($(window).width() < 768) {
                $(".page-wrapper").css("margin-top","0px");
            } else {
                var header = $('#header').height();
                $(".page-wrapper").css("margin-top",(header - 1) + "px");
            }
        });
    }





 $( function() {
    var resultJson;
    // $.ajax({
    //     url: "test-db.php",
    //     dataType: "jsonp",
    //     success: function( data ) {
    //         $( "#tags" ).autocomplete({
    //             source:data, 
    //             minLength:1,      
    //             classes: {
    //                 "ui-autocomplete": "highlight"
    //             }
    //         });
    //         // resultJson = data;
    //     }
    // });

    $( "#tags" ).autocomplete({
        source: function( request, response ) {
            $.ajax({
                url: "test-db.php",
                dataType: "jsonp",
                // data: {
                //     q: request.term
                // },
                success: function( data ) {
                    console.log('123');
                    response( data );
                }
            });
        },
        minLength:1,      
        classes: {
            "ui-autocomplete": "highlight"
        }
    });

 
    
  } );








    /**
     * Sidenav
     */
    $('.sidenav-toggle, .sidenav-close').on('click', function() {
        $('body').toggleClass('has-sidenav');
    });

    /**
     * Submenu table and phone fix
     */
    $('.sub-menu a').on('touchstart mouseenter focus', function(e) {
        if(e.type == 'touchstart') {            
            e.stopImmediatePropagation();
        }
    });

    /**
     * Navbar toggle
     */
    $('.navbar-toggle').on('click', function() {
        $('.header-navigation-wrapper').toggleClass('open');
    });

    $('.header-navigation-wrapper').on('click', function(e) {
        if (e.offsetX > 240) {
            $('.nav-main-wrapper').removeClass('open');
        }
    });

    /**
     * Compare
     */
    var has_compare = $('.sidenav #compare-controller').length;

    if( has_compare == 1) {
        $('.compare-add').on('click', function() {
            $('body').addClass('has-sidenav');
        })
    };

    /**
     * Favorites
     */
    var has_favorites = $('.sidenav #favorites-controller').length;

    if (has_favorites == 1) {
        $('.favorites-action').on('click', function() {
            $('body').addClass('has-sidenav');
        })
    };

    /**
     * Button animation
     */
    var ink, d, x, y;

    $(".btn, .btn-secondary, .header-action, .customizer-header, .nav-tabs li a").click(function(e){
        if($(this).find(".ink").length === 0){
            $(this).prepend("<span class='ink'></span>");
        }
             
        ink = $(this).find(".ink");
        ink.removeClass("animate");
         
        if(!ink.height() && !ink.width()){
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({height: d, width: d});
        }
         
        x = e.pageX - $(this).offset().left - ink.width()/2;
        y = e.pageY - $(this).offset().top - ink.height()/2;
         
        ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    });

    /**
     * Customizer
     */
    var customizer = $('.customizer');

    if (customizer.length !== 0) {
        $('li', customizer).on('click', function() {
            var rel = $(this).attr('rel');

            $('#realsite-css').attr('href', rel);
        });
    }

    /**
     * Sort form
     */
     var sort_form = $('#sort-form');
     $('select' , sort_form).change(function() {
        sort_form.submit();
     });

    /**
     * Bootstrap select
     
    $('select').selectpicker({
        size: 10
    });
*/
    /**
     * Input Group
     */
     $('.input-group .form-control').on('focus', function() {
         $(this).closest('.input-group').find('.input-group-addon').addClass('active');
     }).on('blur', function() {
         $(this).closest('.input-group').find('.input-group-addon').removeClass('active');
     });
     
    /**
     * Property detail map
     */
    var map_property = $('#map-position');
    
    if (map_property.length) {
        map_property.google_map({
            center: {
                latitude: map_property.data('latitude'),
                longitude: map_property.data('longitude')
            },
            markers: [{
                latitude: map_property.data('latitude'),
                longitude: map_property.data('longitude')
            }]
        });
    }

    /**
     * Scroll top
     */
    var scroll_top = $('.scroll-top');
    if(scroll_top.length != 0) {
        scroll_top.on('click', function() {
            $.scrollTo('body', 800);
        });
    }
     
    /**
     * Background image
     */
    $('*[data-background-image]').each(function() {
        $(this).css({
            'background-image': 'url(' + $(this).data('background-image') + ')'
        });
    });
       
    /**
     * Property colorbox
     */
    $("a[href$='png'], a[href$='jpg']").not('.ignore-colorbox').colorbox({
        rel: $(this).attr('rel'),
        maxWidth: '90%'
    });  

    /**
     * Property gallery
     */
    if ($('.property-gallery-list').length != 0) {
        $('.property-gallery-list').owlCarousel({
            items: 6,
            itemsDesktop : [1199, 5],
            itemsDesktopSmall : [979, 5],
            itemsTablet : [768, 3],
            itemsTabletSmall : [1, 3],
            itemsMobile : false,
            navigation: true,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });
    }

    $('.property-gallery-list-item a').on('click', function(e) {
        e.preventDefault();        

        $('.property-gallery-list-item').each(function() {
            $(this).removeClass('active');
        });

        $(this).closest('li').addClass('active');

        var link = $(this).attr('href');
        $('.property-gallery-preview img').attr('src', link);
        $('.property-gallery-preview a').attr('href', link);
    });

    /**
    * Property carousel
    */
    if ($('.property-carousel').length != 0) {
        $('.property-carousel').owlCarousel({
            items: 4,
            itemsDesktop : [1199, 5],
            itemsDesktopSmall : [979, 3],
            itemsTablet : [768, 2],
            itemsTabletSmall : [1, 2],
            itemsMobile : false,
            navigation: true,
            navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
        });
    }   

    /**
     * Autosize textarea
     */
    $('textarea').autosize();

    /**
     * Header animation
     */
     $('.header-navigation > div > ul > li.has-children').hover(function() {
         var el = $('> div', this);

         el.css({
             height: 'auto',
             overflow: 'visible',
             width: 'auto'
         });
     }, function() {
         var el = $('> div', this);

         el.css({
             height: 0,
             overflow: 'hidden',
             width: 0
         });
     });

     // Second level
     $('.header-navigation > div > ul > li.has-children > div > ul > li.has-children').hover(function() {
         var el = $('> div', this);

         $(this).closest('div').css('overflow', 'visible');

         el.css({
             height: 'auto',
             overflow: 'visible',
             width: 'auto'
         });
     }, function() {
         var el = $('> div', this);

         $(this).closest('div').css('overflow', 'hidden');

         el.css({
             height: 0,
             overflow: 'visible',
             width: 0
         });
     });

    /**
     * Social menu
     */

     $('.social-menu-wrapper').hover(function() {
        $('.social-menu').css({
            duration: 250,
            height: 135,
            width: 121        
        });
     }, function() {
        $('.social-menu').css({
            duration: 250,
            height: 0,
            width: 0
        });
     });

    /**
     * Customizer
     */
    $('.customizer-header').on('click', function() {
        if ($(this).hasClass('closed')) {
            $('.customizer-content').css({
                duration: 250,
                height: 387,
                width: 176       
            });
        } else {
            $('.customizer-content').css({
                duration: 250,
                height: 0,
                width: 0      
            })
        }

        $(this).toggleClass('closed');
    });

    /**
     * Dropdown
     */
    $('div.dropdown-menu').on('focusin', function() {
        $(this).css({
            height: 'auto',
            duration: 150,
            width: 'auto'
        });
    });

    $('div.dropdown-menu').on('focusout', function() {
        $(this).css({
            height: 0,
            duration: 250,
            width: 0
        });
    });

    /**
     * Mobile navigation
     */
    $('.navbar-toggle').on('click', function() {
        $('.header-navigation-wrapper').addClass('open');
    });

    $('body').on('click', function(e) {            
        if (e.offsetX > 240) {
            $('.header-navigation-wrapper.open').removeClass('open');
        }
    });

    /**
     * Google Map
     */
    var map = $('#fullscreen-map');

    if (map.length) {
        var url = '';
        if (window.location.search) {
            url = window.location.search + '&properties-feed=true';
        } else {
            url = '?properties-feed=true';
        }

        $.ajax({
            url: url,
            success: function(markers) {
                map.google_map({
                    infowindow: {
                        borderBottomSpacing: 0,
                        height: 120,
                        width: 424,
                        offsetX: 48,
                        offsetY: -87
                    },
                    zoom: map.data('zoom'),
                    marker: {
                        height: 56,
                        width: 56
                    },
                    cluster: {
                        height: 40,
                        width: 40,
                        gridSize: map.data('grid-size')
                    },
                    transparentMarkerImage: map.data('transparent-marker-image'),
                    transparentClusterImage: map.data('transparent-marker-image'),
                    markers: markers
                });
            }
        });
    }

    $("#s-1").on("click", function(){
        $("#value_search").val("any");
    });
    $("#s-2").on("click", function(){
         $("#value_search").val("sale");
    });
    $("#s-3").on("click", function(){
        $("#value_search").val("rent");
    });
    $("#s-4").on("click", function(){
          $("#value_search").val("homula");
    });

});