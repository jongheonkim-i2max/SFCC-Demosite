$('.gift__slider--slick').slick({
  slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:"<a class='slick-btn prev pull-left'></a>",
    nextArrow:"<a class='slick-btn next pull-right'></a>",
    dots: true,
    infinite : true,
    responsive: [{
      breakpoint: 1400,
        settings: {
            slidesToShow: 4
        }
    },{
        breakpoint: 991,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2
        }
    }]
});