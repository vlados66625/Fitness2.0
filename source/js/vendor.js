// Swiper 10.0.4
import './vendor/focus-visible-polyfill';
import { initTabs, tabs } from './vendor/tabs/init-tabs';
import {initAccordions, accordions} from './vendor/accordions/init-accordion';
import Swiper from './vendor/swiper';

const control = document.querySelector('[data-tabs="control"]');


window.addEventListener('DOMContentLoaded', () => {
  if (control) {
    initTabs();
    tabs.openTab(control);
  }

  initAccordions();

  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const updateSwiperOptions = () => {
    if (window.innerWidth >= 1000 && window.innerWidth < 1200) {
      swiper.params.slidesPerView = 3;
    } else if (window.innerWidth >= 565 && window.innerWidth < 1000) {
      swiper.params.slidesPerView = 2;
    } else if (window.innerWidth >= 320 && window.innerWidth < 565) {
      swiper.params.slidesPerView = 1;
    } else {
      swiper.params.slidesPerView = 4;
    }
    swiper.update();
    swiper.updateSlides();
  };
  updateSwiperOptions();

  window.addEventListener('resize', updateSwiperOptions);
});
