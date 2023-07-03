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


//함께 본 상품
var recommandSwiper = new Swiper('.recommand-slider .items-wrap', {
    observer: true, 
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 1000,
    allowTouchMove:true,
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination : {
		el : '.recommand-slider .swiper-pagination',
		clickable : true, 
	},
    navigation: {
        nextEl: ".recommand-slider .swiper-button-next",
        prevEl: ".recommand-slider .swiper-button-prev",
    },
    breakpoints: {
        350:{
            slidesPerView:2,
            spaceBetween:15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween:15,                            
        },
        991:{
            slidesPerView: 3,
            spaceBetween:30,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween:15, 
        }
    }
});

//주목할 상품
var attentionSwiper = new Swiper('.attention-slider .items-wrap', {
    observer: true, 
    observeParents: true,
    slidesPerView: 3,
    spaceBetween: 15,
    speed: 1000,
    allowTouchMove:true,
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination : {
		el : '.attention-slider .swiper-pagination',
		clickable : true, 
	},
    navigation: {
        nextEl: ".attention-slider .swiper-button-next",
        prevEl: ".attention-slider .swiper-button-prev",
    },
    breakpoints: {
        350:{
            slidesPerView:2,
            spaceBetween:15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween:15,                            
        },
        991:{
            slidesPerView: 3,
            spaceBetween:30,
        },
        1200:{
            slidesPerView: 4,
            spaceBetween:15, 
        }
    }
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
/*📌 PPT.20 상세정보, 상품리뷰, 배송교환반품 클릭 시 탭 이동 */
$('.product-content-tab li').each(function(idx){
    $(this).on('click',function(){
        var menuHeight = $(".product-content-tab").height();
        var tabCont = $('.product-cont-wrap .product-cont').eq(idx).offset().top - menuHeight + 1;
        $('html,body').animate({scrollTop:tabCont},0);
        $('.product-content-tab li').removeClass('active');
        $(this).addClass('active');
    });
});

/*📌 PPT.25 신고사유 팝업 노출 */
popOpen(".badCommentPop", ".badCommentPop_bg", ".badCommentPop_open")
popClose(".badCommentPop", ".badCommentPop_bg", ".badCommentPop_close")
$("input[name='report']").on("change", function(){
    if($(this).val() === 'etc'){
        $(".badCommentPop .badCommentPop_textarea textarea").attr('disabled',false);
        $(".badCommentPop .badCommentPop_textarea textarea").focus();
    }else{
        $(".badCommentPop .badCommentPop_textarea textarea").attr('disabled',true);
        //$(".badCommentPop .badCommentPop_textarea textarea").val('');
    }
});
$(".badCommentPop_open").on("click", function(){
    //신고사유 팝업 노출 시, 리뷰 상세 팝업이 켜져있다면
    $(".reviewDetailPop.active").removeClass("active");
    $(".reviewDetailPop_bg.active").removeClass("active");
});

/*📌 PPT.26 리뷰상세 팝업 설정 및 노출 */
var smallSwiper = new Swiper(".reviewPop-slider .swiper-container", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1,
    navigation: {
        nextEl: ".reviewPop-slider .swiper-button-next",
        prevEl: ".reviewPop-slider .swiper-button-prev",
    },
    pagination: {
        el: ".reviewPop-slider .swiper-pagination",
        type: "fraction"
    },
});
popOpen(".reviewDetailPop", ".reviewDetailPop_bg", ".reviewDetailPop_open")
popClose(".reviewDetailPop", ".reviewDetailPop_bg", ".reviewDetailPop_close")
$(".reviewDetailPop_open").on("click", function(){
    //리리뷰 상세 팝업 노출 시, 리뷰 전체보기 팝업이 켜져있다면
    $(".reviewTotalPop.active").removeClass("active");
    $(".reviewTotalPop_bg.active").removeClass("active");
});

/*📌 PPT.27 리뷰토탈 팝업 설정 및 노출 */
popOpen(".reviewTotalPop", ".reviewTotalPop_bg", ".reviewTotalPop_open")
popClose(".reviewTotalPop", ".reviewTotalPop_bg", ".reviewTotalPop_close")
$(".reviewTotalPop_open").on("click", function(){
    //리뷰 전체보기 팝업 노출 시, 리뷰 상세 팝업이 켜져있다면
    $(".reviewDetailPop.active").removeClass("active");
    $(".reviewDetailPop_bg.active").removeClass("active");
});