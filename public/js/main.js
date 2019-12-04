
$('.phoneidcl').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.main-nav').toggleClass('open');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
});

$('.cases-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
});

$('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
});

$('.portfolio-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
});


(function($) {
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
