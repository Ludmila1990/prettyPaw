import { Swiper, Pagination, Autoplay } from "swiper";

/*const params = {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  modules: [Autoplay, Pagination]
};*/

const params = {
  //spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
  modules: [Autoplay, Pagination]
};

export const initSliders = (selectorSlider, newParams) => {
  new Swiper(selectorSlider, {
    ...params,
    ...newParams
  })
};