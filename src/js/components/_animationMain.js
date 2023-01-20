sr.reveal('.header', {
  duration: 700,
  distance: '20px',
  easing: 'ease',
  delay: '700',
  origin: 'top',
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});

sr.reveal('.title--secondary, .footer__top', {
  duration: 500,
  distance: '30px',
  easing: 'ease',
  origin: 'top',
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});

sr.reveal(
  '.instruments__list > *, .news .slick-track > *, .get-started__picture',
  {
    duration: 700,
    distance: '100px',
    interval: 200,
    easing: 'ease',
    origin: 'left',
    opacity: 0,
    mobile: false,
    viewFactor: 0.5,
    reset: true,
  }
);

sr.reveal('.hero__content > *, .start__steps > *, .get-started__content > *', {
  duration: 700,
  distance: '20px',
  easing: 'ease',
  interval: 200,
  delay: '200',
  origin: 'top',
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});

sr.reveal('.trade-with__list > *', {
  duration: 800,
  easing: 'ease',
  interval: 200,
  delay: '200',
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});

sr.reveal('.charts, .footer__bottom', {
  duration: 1000,
  distance: '20px',
  easing: 'ease',
  delay: '800',
  origin: 'bottom',
  opacity: 0,
  mobile: false,
  viewFactor: 0,
  reset: true,
});
