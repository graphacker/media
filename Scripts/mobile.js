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


index=0;	
var width = $(".slideWrap ul li")[0].getBoundingClientRect().width;
	$("#sag").click(function(){
		if(index<4)index++;
		
		
		$(".slideWrap ul").stop().animate({marginLeft:'-' + (index*width)},300);
		
		return false;
	});
	$("#sol").click(function(){
		if(index>0)index--;
		
		
		$(".slideWrap ul").stop().animate({marginLeft:'-' + (index*width)},300);
		
		return false;
	});
    $(".SearchButton").click(function(){
        $(this).css("transform","scale(80)");
    });
    $(".icon-close").click(function(){
        $(".SearchButton").css("transform","scale(1)");
    });