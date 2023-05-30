$('.top__slider-slick').slick({
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  infinite : true,
  asNavFor: ".thumb__slider-slick",
});

$('.thumb__slider-slick').slick({
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true,
  prevArrow:"<a class='slick-btn prev pull-left'></a>",
  nextArrow:"<a class='slick-btn next pull-right'></a>",
  dots: true,
  infinite:true,
  asNavFor: ".top__slider-slick"
});