/// <reference path="../typings/jquery/jquery.d.ts" />

 $('.control').click( function(){
     $(".container").css("position","inherit");
  $('body').addClass('searchMode');
  $('.input-search').focus();
});

$('.icon-close').click( function(){
  $('body').removeClass('searchMode');
});

  //$(".container").css("position","relative");