/// <reference path="../typings/jquery/jquery.d.ts" />

 $('.control').click( function(){
     $(".container").css("position","inherit");
  $('body').addClass('searchMode');
  $('.input-search').focus();
});

$('.icon-close').click( function(){
  $('body').removeClass('searchMode');
});


    var overlay = $('.navOverlay');
    var sliderWrapper = overlay.find('#navSlideWrapper');

    $('#collapseItem').on('click', function() {
        overlay.toggleClass('navOverlayProp');
        sliderWrapper.toggleClass('navSlideWrapperTransform');
    })

    overlay.on('click', function() {
        overlay.toggleClass('navOverlayProp');
        sliderWrapper.toggleClass('navSlideWrapperTransform');
    })

