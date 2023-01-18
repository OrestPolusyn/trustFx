import { _querySelector } from '../_config.js';
import { toggleClassItem } from '../functions/_toggleClassItem.js';

document[_querySelector]('[data-burger]')?.addEventListener('click', e => {
  toggleClassItem('.page', 'page--menu');
});

document[_querySelector]('span.nav__link')?.addEventListener('click', e => {
  e.target.classList.toggle('nav__link--hover');
});
