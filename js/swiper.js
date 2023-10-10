const swiperEl = document.querySelector(".mySwiper");

swiperEl.initialize();

Object.assign(swiperEl, {
  
  slidesPerView: 2,
  spaceBetween: 10,
 
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});


const swiperEls = document.querySelector(".mySwipers");

swiperEls.initialize();

Object.assign(swiperEls, {
  
  slidesPerView: 2,
  spaceBetween: 10,
 
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});




const swiperElss = document.querySelector(".mySwiperss");

swiperElss.initialize();

Object.assign(swiperElss, {
  
  slidesPerView: 2,
  spaceBetween: 10,
 
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
