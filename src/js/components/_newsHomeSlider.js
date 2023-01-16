$('.news__list').slick({
  slidesToScroll: 1,
  infinite: true,
  draggable: true,
  arrows: false,
  dots: true,
  variableWidth: true,
  adaptiveHeight: true,
  centerMode: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
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
