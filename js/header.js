//로드 및, 리사이징이 끝나면 실행
function debounce(fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
}

//모바일에서 전체메뉴 중 대메뉴 a 없애기
function mobile_add(){
    var window_width = $(window).width();
    if(window_width > 992){
        $('.header__menu .header__menu--li').each(function(index){
            if($(this).hasClass('has--sub-menu')){
                $(this).find('.header__menu--a').attr('href', $(this).find('.header__menu--a').attr('data-href'));
            }
        });

        $('.header__menu .header__menu--li2').each(function(index){
            if($(this).hasClass('has--sub-menu2')){
                $(this).find('.header__menu--a2').attr('href', $(this).find('.header__menu--a2').attr('data-href'));
            }
        });
        
        $('header').removeClass('mobile_header');
    }else{
        $('.header__menu .header__menu--li').each(function(index){
            if($(this).hasClass('has--sub-menu')){
                $(this).find('.header__menu--a').removeAttr('href');
            }
        });

        $('.header__menu .header__menu--li2').each(function(index){
            if($(this).hasClass('has--sub-menu2')){
                $(this).find('.header__menu--a2').removeAttr('href');
            }
        });

        $('header').addClass('mobile_header');
    }
}
//모바일 1카테고리 클릭
$(document).on('click', '.mobile_header .header__menu--a', function(){
    if($(this).parent().hasClass('active')){
        $(this).parent().removeClass('active');
    }else{
        $('.mobile_header .has--sub-menu').removeClass('active');
        $(this).parent().addClass('active');
    }
});

//모바일 2카테고리 클릭
$(document).on('click', '.mobile_header .header__menu--a2', function(){
    if($(this).parent().hasClass('active')){
        $(this).parent().removeClass('active');
    }else{
        $('.mobile_header .has--sub-menu2').removeClass('active');
        $(this).parent().addClass('active');
    }
});

//전체메뉴 클릭
$(document).on('click', '.header__logo--menu-btn', function(){
    $('.header__menu').addClass('active');
});

//전체메뉴 닫기
$(document).on('click', '.header__mobile-close', function(){
    $('.header__menu').removeClass('active');
});

//모바일 체크 후 클래스주기
$(window).on("load resize", debounce(function(event){
    mobile_add();	
}, 100));

//모바일 판별
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
jQuery(document).ready(function($){
    if(!isMobile) {
        $('body').addClass('pc_body').removeClass('mobile_body');
    } else {
        $('body').addClass('mobile_body').removeClass('pc_body');
    }
});

//스크롤바 숨김
function overflow(attr){
    if(attr == 'visible'){
        $('html, body').css({'overflow':''});
    }else if(attr == 'hidden'){
        $('html, body').css({'overflow':'hidden'});
    }
    
}

//키워드 분기 처리
function keywrodSearch(attr){
    if(attr == 'open'){
        $('.header__search-keyword').addClass('active');
    }else if(attr == 'close'){
        $('.header__search-keyword').removeClass('active');
    }
}

//추천검색어 분기 처리
function recommandSearch(attr){
    if(attr == 'open'){
        $('.header__search-recommand').addClass('active');
        $('.header__search--close').addClass("active");
    }else if(attr == 'close'){
        $('.header__search-recommand').removeClass('active');
        $('.header__search--close').removeClass("active");
    }
}



//헤더 검색 인풋에 포커스 시
$(document).on("focus", ".header__search--input", function(){
    if($(this).val().trim() == ''){
        keywrodSearch('open');
        recommandSearch('close');
    }else{
        recommandSearch('open');
        keywrodSearch('close');
    }
});


//헤더 검색 인풋에 글 입력 시
$(document).on("keyup", ".header__search--input", function(){
    if($(this).val().trim() == ''){
        keywrodSearch('open');
        recommandSearch('close');
    }else{
        recommandSearch('open');
        keywrodSearch('close');
    }
});

//헤더 검색 인풋에 포커스 빠졌을 때
$(document).on("mouseup", function(e){
    var search = $(".header__search");
    if(search.has(e.target).length === 0){
        keywrodSearch('close');
        recommandSearch('close');
    }
});


//헤더 검색에서 엑스 클릭 시
$(document).on("click", ".header__search--close", function(){
    $(".header__search--input").val('').focus();
    keywrodSearch('open');
    recommandSearch('close');
});