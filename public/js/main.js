
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

$('.owl-carousel').owlCarousel({
    items:2,
    margin:10,
    nav:true,
    // merge:true,
    loop:true,
    video:true,
    // lazyLoad:true,
    // center:false,
    videoWidth: 486, // Default false; Type: Boolean/Number
    videoHeight: 360, // Default false; Type: Boolean/Number
    // responsive:{
    //     480:{
    //         items:2
    //     },
    //     600:{
    //         items:4
    //     }
    // }
})