$(".slider__banner--slick").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows:false,
  dots: true,
  infinite : true,
  responsive: [{
      breakpoint: 991,
      settings: {
          slidesToShow: 2
      }
  }, {
      breakpoint: 480,
      settings: {
          slidesToShow: 1
      }
  }]
})