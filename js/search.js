//베스트 아이템
var plpBanner = new Swiper(".item-slider .swiper-container", {
  observer: true, 
  observeParents: true,
  slidesPerView: 5,
  spaceBetween: 15,
  speed: 1000,
  allowTouchMove:true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".item-slider .swiper-button-next",
    prevEl: ".item-slider .swiper-button-prev",
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
        slidesPerView: 5,
        spaceBetween:15, 
    }
  }
});
