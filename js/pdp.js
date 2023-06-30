//상단 작은 썸네일 슬라이드
var smallSwiper = new Swiper(".small-image", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 4,
    touchRatio: 0,
    watchSlidesProgress: true,
    loopedSlides: 4,
    draggable: false,
    breakpoints: {
        350: {
            spaceBetween: 10,
        },
        480: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 15,
        },
    },
});

//상단 큰 썸네일 슬라이드
var bigSwiper = new Swiper(".big-image", {
    loop: true,
    spaceBetween: 15,
    navigation: {
        nextEl: ".product-image .swiper-button-next",
        prevEl: ".product-image .swiper-button-prev",
    },
    thumbs: {
        swiper: smallSwiper,
    },
});

/*📌 PPT.11 공유하기 팝업 */
$(".product-info .ico_share").on("click", function(){
    $(".click_pop").addClass("active");
});
$(".click_pop .click_pop-close").on("click", function(){
    $(".click_pop").removeClass("active");
});