import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { initSliders } from './modules/sliders';


// use modules

const videoBg = document.querySelector('.video-bg');

const videoBgSecond = document.querySelector('.video-bg-second');

const careerImageItem = document.querySelectorAll('.career__image-item');

careerImageItem.forEach((item, i) => {
  item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`);
});

videoBg.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;

videoBgSecond.innerHTML = `
<source src="video/video.webm" type="video/webm">
<source src="video/video.mp4" type="video/mp4">
`;

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

