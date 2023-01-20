sr.reveal('.header', {
  duration: 700,
  distance: '20px',
  easing: 'ease',
  delay: '700',
  origin: 'top',
  mobile: false,
});

sr.reveal(
  '.title--secondary,.wellcome__title, .footer__top,.contact__form,.sign__form ',
  {
    duration: 500,
    distance: '30px',
    easing: 'ease',
    origin: 'top',
    mobile: false,
  }
);

sr.reveal('.instruments__list > *, .get-started__picture,.investment > *', {
  duration: 700,
  distance: '100px',
  interval: 200,
  easing: 'ease',
  origin: 'left',
  mobile: false,
});

sr.reveal(
  '.hero__content > *, .start__steps > *, .news .slick-track > *, .get-started__content > *,.single__navigation > *,.contact__list > *, .social > *',
  {
    duration: 700,
    distance: '20px',
    easing: 'ease',
    interval: 200,
    delay: '200',
    origin: 'top',
    mobile: false,
  }
);

sr.reveal(
  '.single__content >*:not(.investment,.articles,.classification,.single__list,.strengths), .articles> *,.classification>*,.single__list > *',
  {
    duration: 700,
    distance: '20px',
    easing: 'ease',
    interval: 200,
    delay: '50',
    origin: 'top',
    mobile: false,
  }
);

sr.reveal('.trade-with__list > *,.contact__map,.strengths__list >*', {
  duration: 800,
  easing: 'ease',
  interval: 200,
  delay: '200',
  mobile: false,
});

sr.reveal('.charts, .footer__bottom', {
  duration: 1000,
  distance: '20px',
  easing: 'ease',
  delay: '800',
  origin: 'bottom',
  mobile: false,
});
