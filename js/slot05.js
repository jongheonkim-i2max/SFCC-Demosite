var sliders = [];
$(".multi__slider .slick-container").each(function (index){
  var $this = $(this);
  $this.addClass('slick-container-' + index);

  var slider_slick = $('.slick-container-' + index).slick({
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

  $('.multi__slider .tab-content--menu-li').eq(index).attr('data-index', index);

  sliders.push(slider_slick);
});

/*first tab menu*/
$('.multi__slider .tab-menu--li').on('click', function(e){
  e.preventDefault();
  if(!$(this).hasClass('active')){
      var index = $(this).index();
      $('.multi__slider .tab-menu--li').removeClass('active');
      $(this).addClass('active');
      $('.multi__slider .tab-content-wrap > div').hide();
      $('.multi__slider .tab-content-wrap > div').eq(index).show();
  }
});

/*second tab menu*/
$('.multi__slider .tab-content .tab-content--menu-li').on('click', function(e){
  e.preventDefault();
  var data_index = $(this).attr('data-index');
  if( !$(this).hasClass('active')){
      $(this).parents('.tab-content').find('.tab-content--menu-li').removeClass('active');
      $(this).addClass('active');
      $(this).parents('.tab-content').find('.tab-content--slider > div').hide();
      $('.multi__slider .tab-content--slider > div.slick-container-'+data_index+'').show();
      for (var i=0; i < sliders.length; i++ ){
          sliders[i].slick('goTo',0);
      }
  }
});