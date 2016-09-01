$(function() {
    $('.btn-ripple').on('click', function(e) {
        $(this).append(' <span class="ripple show"></span>');
        var ripple = $('.ripple');
        var elemH = $(this).outerHeight();
        var elemW = $(this).outerWidth();
        var buttonPos = e.target.getBoundingClientRect();
        var rippleTop = e.pageY - buttonPos.top - ripple.outerHeight() / 2 - document.body.scrollTop;
        var rippleLeft = e.pageX - buttonPos.left - ripple.outerWidth() / 2 - document.body.scrollLeft;

        function sizeSelect() {
            if (elemW > elemH) {
                return elemW;
            } else {
                return elemH;
            }
        }
        ripple.css({
            'height': sizeSelect() * 1.5 + 'px',
            'width': sizeSelect() * 1.5 + 'px',
            'left': rippleLeft + 'px',
            'top': rippleTop + 'px'
        });
        setTimeout(function() {
            ripple.remove();
        }, 500)
    });
})



$('.btn-ripple').on('click', function(e) {
    $(this).append(' <span class="ripple show"></span>');
    var ripple = $('.ripple');
    var elemH = $(this).outerHeight();
    var elemW = $(this).outerWidth();
    var buttonPos = e.target.getBoundingClientRect();
    var rippleTop = e.pageY - buttonPos.top - ripple.outerHeight() / 2 - document.body.scrollTop;
    var rippleLeft = e.pageX - buttonPos.left - ripple.outerWidth() / 2 - document.body.scrollLeft;

    function sizeSelect() {
        if (elemW > elemH) {
            return elemW;
        } else {
            return elemH;
        }
    }
    ripple.css({
        'height': sizeSelect() * 1.5 + 'px',
        'width': sizeSelect() * 1.5 + 'px',
        'left': rippleLeft + 'px',
        'top': rippleTop + 'px'
    });
    setTimeout(function() {
        ripple.remove();
    }, 500)
});

//kullanımı class'a btn-ripple eklemek yeterli'
// 
// stick
$.fn.sticky = function(id) {
    var sticky = $(id);
    sticky.css('z-index', '2147483647')
    var stickyTop = sticky.offset().top;
    var stickyHeight = sticky.outerHeight();
    $('body').prepend('<div id="stkFix" style="display:none;width:100%;height:' + stickyHeight + 'px;' + '"></div>');
    $(window).scroll(function() {
        var deger = $(this).scrollTop();
        if (deger >= stickyTop) {
            $(id).addClass('sticked');
            $('#stkFix').show();
        } else {
            $(id).removeClass('sticked');
             $('#stkFix').hide();
        }
    });
};


$(function() {



});
/* kullanımı sadece fixed olacak dive id="sticky"  ata. ve css te
.sticked {
    position: fixed !important;
    top: 0;
}    */ // OLMAK ZORUNDA
////////////////////////////////////

// Parallax Paral Container Parallax Alanın 2 katı olacak Şekilde Yazıldı 
// √ pxTop   1 -  parallax alanın scrollTop ' ını bul;
// √ winH    2 - window inner height bul 

var parallax = $('#parallax');
var paralEffect = parallax.find('.paralContainer');
var pxTop = parallax.offset().top;
var pxHeight = parseInt(parallax.css('height'));
var winH = $(window).innerHeight();
var pxStart = pxTop - winH;
var pxStop = pxTop + pxHeight;
var pxControl; //parallax Aktif Pasif
var pxDirection; // parallax yönü
var scrollDirection; // scroll 
var step = (pxStop - pxStart) / pxHeight;

/// STYLES

parallax.css({
    'overflow': 'hidden',
    'display': 'block',
    'background-color': 'transparent !important',
    'position': 'relative',
})


paralEffect.attr('style', '');
/////////////////////////////////////
var lastScrollTop = 0;

$(window).scroll(function(event) {
    var st = $(this).scrollTop();
    // pixfix split 
    var tut = $('.paralContainer').attr('style');
    var tut2 = tut.split(':');
    var pixfix = parseInt(tut2[1]);
    /////////  ENGINE /////
    if (st > pxStart && st < pxStop && pixfix < 0) {
        pxControl = true;
    } else {
        pxControl = false;
    }
    if (!pxControl && st < pxStart) {
        pxDirection = 'UP';
    } else if (!pxControl && st > pxStop) {
        pxDirection = 'DOWN'
    }
    if (st > lastScrollTop) {
        scrollDirection = "ScrollUP"
    } else {
        scrollDirection = "ScrollDOWN"
    }
    if (pxControl === false && pxDirection === 'DOWN') {
        paralEffect.css('top', '-600px')
    }
    if (pxControl === false && pxDirection === 'UP') {
        paralEffect.css('top', '-1px');
    }

    if (pxControl === true && scrollDirection === 'ScrollUP') {
        paralEffect.css('top', '-=' + step + 'px');
    } else if (pxControl === true && scrollDirection === 'ScrollDOWN') {
        paralEffect.css('top', '+=' + step + 'px');
    }
    lastScrollTop = st;
    ////////////////////////////
});