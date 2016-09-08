/// <reference path="../typings/jquery/jquery.d.ts" />
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true
});
 $('.control').click( function(){
   //  $(".container").css("position","inherit");
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
//var width = $(".slideWrap ul li")[0].getBoundingClientRect().width;
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
var say=0;
$("#kategori").click(function(){
    if(say==0)
    {
        $(".kategoriler").slideDown();
        say++;
    }
    else{
        $(".kategoriler").slideUp();
        say=0;
    }
    
});
var sayac=0;
$("#politika").click(function(){
    if(sayac==0)
    {
        $(".politikalar").slideDown();
        sayac++;
    }
    else{
        $(".politikalar").slideUp();
        sayac=0;
    }
    
});