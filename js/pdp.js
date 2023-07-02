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

/*📌 PPT.8 버튼관련 단순 스크립트 
    *실제 적용시 삭제 요망
*/
function buttonCheck(){
    $('.total-buttons a').hide();
    if($('.buttonSelect li.active').hasClass('basic')){
        $('.total-buttons a.basic-button').show();
    }else if($('.buttonSelect li.active').hasClass('alarmButton')){
        $('.total-buttons a.alarm-button').show();
    }else if($('.buttonSelect li.active').hasClass('soldOutButton')){
        $('.total-buttons a.sold-out-button').show();
    }
}
buttonCheck()
$(".buttonSelect li").on("click", function(){
    $(".buttonSelect li").removeClass("active");
    $(this).addClass("active");
    buttonCheck();
});

/*📌 PPT.11 공유하기 팝업 */
$(".product-info .ico_share").on("click", function(){
    $(".click_pop").addClass("active");
});
$(".click_pop .click_pop-close").on("click", function(){
    $(".click_pop").removeClass("active");
});

/*📌 PPT.12, PPT.13  선택옵션, 컬러, 사이즈 선택
    *실제 적용시 삭제 요망
*/
function priceCheck(){
    $('.product-price .price-wrap').hide();
    if($('.priceSelect li.active').hasClass('basic')){
        $('.product-price .price-wrap.basic').show();
    }else if($('.priceSelect li.active').hasClass('selectOption')){
        $('.product-price .price-wrap.option').show();
    }else if($('.priceSelect li.active').hasClass('colorSize')){
        $('.product-price .price-wrap.colorSize').show();
    }
}
priceCheck();
$(".priceSelect li").on("click", function(){
    $(".priceSelect li").removeClass("active");
    $(this).addClass("active");
    priceCheck();
});

/*📌 PPT.13  컬러, 사이즈 스크립트 */
$(".price-color ul li").on("click", function(){
    if(!$(this).hasClass("active")){
        $(".price-color ul li").removeClass("active");
        $(this).addClass("active");
    }
});
$(".price-size ul li").on("click", function(){
    if(!$(this).hasClass("active")){
        $(".price-size ul li").removeClass("active");
        $(this).addClass("active");
    }
});

/*📌 PPT.16 장바구니 팝업 노출 */
popOpen(".cartConfirmPop", ".cartConfirmPop_bg", ".cartConfirmPop_open")
popClose(".cartConfirmPop", ".cartConfirmPop_bg", ".cartConfirmPop_close")

/*📌 PPT.17 사이즈가이드 팝업 노출 */
popOpen(".sizeGuidePop", ".sizeGuidePop_bg", ".sizeGuidePop_open")
popClose(".sizeGuidePop", ".sizeGuidePop_bg", ".sizeGuidePop_close")
$(".sizeGuidePop .size-tab li").on("click", function(){
    if(!$(this).hasClass("active")){
        $(".sizeGuidePop .size-tab li").removeClass("active");
        $(".sizeGuidePop .size-content li").removeClass("active");

        $(this).addClass("active");
        $(".sizeGuidePop .size-content li:nth-child("+($(this).index() + 1)+")").addClass("active");
    }
});

/*📌 PPT.18 재입고 알림신청 팝업 노출 */
popOpen(".restockPop", ".restockPop_bg", ".restockPop_open")
popClose(".restockPop", ".restockPop_bg", ".restockPop_close")

/*📌 PPT.20 상세정보 펼쳐보기 */
function itemHeightCheck(){
    if($(".detail-cont .detail").outerHeight() > 450){
        $(".detail-cont .detail").addClass("cutting");
    }else{
        $(".detail-cont .detail").removeClass("cutting");
    }
}
$(document).ready(function(){
    itemHeightCheck()
});
$(".detail-cont .detail_moreBtn").on("click", function(){
    $(".detail-cont .detail").removeClass("cutting");
});

/*📌 PPT.20 상세정보, 상품리뷰, 배송교환반품 스크롤 제어 */

$(window).on('scroll',function(){
    $(".product-cont-wrap .product-cont").each(function(idx,item){
        var productContOffsetTop = $(item).offset().top;
        var menuHeight = $(".product-content-tab").height();
        var windowScrollTop = $(window).scrollTop() + menuHeight;
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
        if( windowScrollTop >= productContOffsetTop ){
            $('.product-content-tab li').removeClass("active");
            $('.product-content-tab li').eq(idx).addClass("active");
        }else if (scrollBottom == 0 ){
            $('.product-content-tab li').removeClass("active");
            $('.product-content-tab li').eq(2).addClass("active");
        }

    });
});