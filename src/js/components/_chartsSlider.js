$('.charts').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 476,
      settings: {
        slidesToShow: 2,
        variableWidth: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
      },
    },
  ],
});
