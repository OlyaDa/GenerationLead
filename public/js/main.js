

//input mask

$('.phoneidcl').inputmask('+38(999) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//mobile menu (header)

$(function(){
    $('.toggle-menu').on('click',function(){
        $('.main-nav').toggleClass('open');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

//slider for "look video review about our projects"

$('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});

//slider for "our cases"

$('.cases-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});

//slider for "our team"

$('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});

//slider for "our portfolio"

$('.portfolio-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow:'<button class="slick-arrow slick-prev"> <i class="fas fa-chevron-left"></i> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <i class="fas fa-chevron-right"></i> </button>',
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
    ]
});

//tabs

(function($) {
    $(function() {
        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);

//scroll

$('.nav-link-new').mPageScroll2id();

$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

//accardion for mobile version section "services"

const accardionToggle = (slideMenu) => (e) => {
    slideMenu.forEach((links) => {
        const hidePanel = links.nextElementSibling;
        if (links === e.currentTarget) {
            e.currentTarget.classList.toggle('active');
            hidePanel.classList.toggle('active-block');
        } else {
            links.classList.remove('active');
            hidePanel.classList.remove('active-block');
        }
    });
};

const slideMenu = document.querySelectorAll('.accardion-link');

slideMenu.forEach((links) => {
    links.addEventListener('click', accardionToggle(slideMenu))
});