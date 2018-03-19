/*
* Auther   : Abdullah Al Papon
* Website  : http://aapapon.com/
*/

$(document).ready(function(){
    "use strict";

    /*====Infoportal====*/
    $('#Infoportal .nav-tabs a[data-toggle="tab"] ').on('shown.bs.tab', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top-100
        }, 'slow');
        e.preventDefault();
    });

    /*====Fahrzeugfinder====*/
    $(function(){
        var href = $('#Fahrzeugfinder div[data-target="#Fahrzeugfinder"] ');

        $(href).parent(':first-child').addClass('in');
        $(href).on('click', function (e) {
            var href = $(this);
            $(href).parent().addClass('in').siblings().removeClass('in');

            var loc = $('.offercar');
            $('html, body').animate({
                scrollTop: $(loc).offset().top-100
            }, 'slow');
            e.preventDefault();
        });

    });

    /*Owl Carosel*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navText : ["",""],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });

    /*====Striky Navbar====*/
    $(window).scroll(function() {
    if ($(this).scrollTop() > 50){  
        $('header > nav').addClass("sticky");
      }
      else{
        $('header > nav').removeClass("sticky");
      }
    });


    /*====Smooth Scrolling====*/
   $("#carbonNavbar ul li a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
           scrollTop: $(hash).offset().top
        }, 1000, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });


  

    
});


