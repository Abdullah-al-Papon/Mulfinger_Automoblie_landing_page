/*
* Auther   : Abdullah Al Papon
* Website  : http://aapapon.com/
*/

$(document).ready(function(){


    
    $('.nav-tabs a').click(function (e) {
      
      $(this).tab('show');
      e.preventDefault();
    })  
    
    $('#Infoportal .nav-tabs a[data-toggle="tab"] ').on('shown.bs.tab', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 'slow');
        e.preventDefault();
    });


    $('#Fahrzeugfinder div[data-target="#Fahrzeugfinder"] ').on('click', function (e) {
        var href = $(this);
        $(href).addClass('in').siblings().removeClass('in');

        var loc = $('.offercar');
        $('html, body').animate({
            scrollTop: $(loc).offset().top
        }, 'slow');
        e.preventDefault();
    });

    /*Owl Carosel*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
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
    })

  

    
});


