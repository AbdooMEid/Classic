/*global $, alert, console */
$(function () {
    'use strict';
    //Adjust Header Height 
    var myheader = $('.header'),
        mySlider =$('.slider li');

    myheader.height($(window).height());

    $(window).resize(function () {
        myheader.height($(window).height());
        //adjust bsslider list item center
        mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - mySlider.height()) / 2)
    });
    });

    //links add active class
    $('.links li a').click(function () {

        $('.active').removeClass('active');
        $(this).parent().addClass('active');

    });
    //adjust bxslider list item center
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - mySlider.height()) / 2)
    });

    // trigeer bxslider
    
    $(document).ready(function () {
        $('.slider').bxSlider({ 
            pager: false
         });
    });

    //Smooth Scroll to div
    
    $(".links li a").click(function (){
        $("html , body").animate({
        scrollTop: $('#' +$(this).data('value')).offset().top
    }, 2000)

    });
    // our Auto slider code 
    (function autoSlider() {
        $('.slider-code .active').each(function (){
           if (!$(this).is(':last-child')){
               $(this).delay(3000).fadeOut(1000 , function (){
                   $(this).removeClass('active').next().addClass('active').fadeIn();

                   autoSlider()
               });
           }else{
               $(this).delay(3000).fadeOut(1000 , function () {

                    $(this).removeClass('active');
                    $('.slider-code div').eq(0).addClass('active').fadeIn();

                    autoSlider();

               });
           }
        });

    }());
    //trigger mixitup
    
    var mixer = mixitup('#container');
    
    //adjust shuffel links
    $('.shuffel li').click(function () {

        $(this).addClass('selected').siblings().removeClass('selected');

    })
    

});

