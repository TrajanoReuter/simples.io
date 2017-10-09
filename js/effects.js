$(document).ready(function() {
    $('.stp0').on('mouseover',function(){
        $('section#how-we-do .container .how-we-do-box .ball-line .ball-line-colored').css({
            width: '0'
        });
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:first-child').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(2)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(3)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(4)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(5)').removeClass('active');
    });

    $('.stp1').on('mouseover',function(){
        $('section#how-we-do .container .how-we-do-box .ball-line .ball-line-colored').css({
            width: '24.5%'
        });
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:first-child').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(2)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(3)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(4)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(5)').removeClass('active');
    });

    $('.stp2').on('mouseover',function(){
        $('section#how-we-do .container .how-we-do-box .ball-line .ball-line-colored').css({
            width: '49%'
        });
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:first-child').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(2)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(3)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(4)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(5)').removeClass('active');
    });

    $('.stp3').on('mouseover',function(){
        $('section#how-we-do .container .how-we-do-box .ball-line .ball-line-colored').css({
            width: '74%'
        });
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:first-child').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(2)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(3)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(4)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(5)').removeClass('active');
    });

    $('.stp4').on('mouseover',function(){
        $('section#how-we-do .container .how-we-do-box .ball-line .ball-line-colored').css({
            width: '100%'
        });
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:first-child').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(2)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(3)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(4)').addClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(5)').addClass('active');
    });


    $('.how-we-do-box').on('mouseleave',function(){
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:first-child').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(2)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(3)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(4)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball:nth-child(5)').removeClass('active');
        $('section#how-we-do .container .how-we-do-box .ball-line .ball-line-colored').css({
            width: '0'
        });
    });

    $('.button-div').on('mouseover', function(){
        $(this).addClass('animated flipInX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $(this).removeClass('animated flipInX');
        });
    });

    $('.btn-mobile').on('click',function(){
        $('#menu-mobile').toggleClass('active');
        $('body').toggleClass('active');
    })

});