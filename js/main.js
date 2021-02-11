import './vendor/focus-visible.min.js';
import './_vars';
import Swiper from './vendor/swiper.min.js';
import {
  resizeContent
} from './functions/resize';
import {
  scrollTo
} from './functions/smooth-scroll';
import {
  disableScroll,
  enableScroll
} from './functions/stop-scroll';

//disableScroll(fix) // fix -> class of element with position: fixed


const burger = document.querySelector('.burger')
const menuClose = document.querySelector('.menu__close')
const menu = document.querySelector('.menu')
const playBtnsFirst = document.querySelectorAll('.main-slider__play')

const featuredSlider = new Swiper('.slider-container', {
  centeredSlides: true,
  loop: true,
  spaceBetween: 105,
  slidesPerView: 'auto',
})

const firstSlider = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.btn-right ',
    prevEl: '.btn-left ',
  }
})


firstSlider.on('transitionEnd', function (index) {
  let videos = document.querySelectorAll('.first__slider video')
  videos.forEach(el => {
    el.pause()
    el.currentTime=0
  })

  playBtnsFirst.forEach(el => {
    el.style.display = 'block'
  })

})


burger.addEventListener('click', () => {
  menu.classList.add('menu--visible')
})


menuClose.addEventListener('click', () => {
  menu.classList.remove('menu--visible')
})

playBtnsFirst.forEach(el => {
  el.addEventListener('click', e => {
    let video = e.currentTarget.closest('.main-slider__media').querySelector('video')
    video.play()
    e.currentTarget.style.display = 'none'
    setTimeout(() => {
      video.volume = 0.5
    }, 2000)
  })
})
