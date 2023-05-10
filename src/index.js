import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { initSliders } from './modules/sliders';
import { initVideoBackground } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';


// use modules

const careerImageItem = document.querySelectorAll('.career__image-item');

careerImageItem.forEach((item, i) => {
  item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`);
});

initVideoBackground();
menuControl();

initSliders('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
  }
});

initSliders('.career__slider', {
  pagination: {
    el: '.career__slider-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      pagination: false,
    },
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 26,
      pagination: false,
    },
    1240: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: false,
    }
  },
});

