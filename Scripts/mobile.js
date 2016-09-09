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
    sliderWrapper.click(function(event){
    event.stopPropagation();
    });

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
        $("#kategori").css("color","#ec2142");
        $(".kategoriler").slideDown();
        say++;
    }
    else{
        $("#kategori").css("color","#555555");
        $(".kategoriler").slideUp();
        say=0;
    }
    
});
var sayac=0;
$("#politika").click(function(){
    if(sayac==0)
    {
        $("#politika").css("color","#ec2142");
        $(".politikalar").slideDown();
        sayac++;
    }
    else{
        $("#politika").css("color","#555555");
        $(".politikalar").slideUp();
        sayac=0;
    }
    
});