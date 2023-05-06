import './index.html';
// new modules
import 'swiper/scss';
import 'swiper/scss/pagination';
import './index.scss';
import { initSliders } from './modules/sliders';


// use modules

initSliders('.about__slider', {
  pagination: {
    el: '.about__slider-pagination',
  }
});

initSliders('.career__slider', {
  pagination: {
    el: '.career__slider-pagination',
  },
  effect: 'creative',
});

const videoBg = document.querySelector('.video-bg');

videoBg.innerHTML = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
`;