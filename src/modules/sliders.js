import { Swiper, Pagination, Autoplay } from "swiper";

const params = {
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
};

export const initSliders = (selectorSlider, newParams) => {
  new Swiper(selectorSlider, {
    ...params,
    ...newParams
  })
};