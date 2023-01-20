$('.news__list').slick({
  slidesToScroll: 1,
  infinite: true,
  draggable: true,
  arrows: false,
  dots: true,
  variableWidth: true,
  centerMode: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 476,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
