const swiperEl = document.querySelector(".mySwiper");

swiperEl.initialize();

Object.assign(swiperEl, {
  
  slidesPerView: 2,
  spaceBetween: 10,
 
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
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
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});




const swiperElss = document.querySelector(".mySwiperss");

swiperElss.initialize();

Object.assign(swiperElss, {
  
  slidesPerView: 2, 
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});



const swiperElsss = document.querySelector(".mySwipersss");

swiperElsss.initialize();

Object.assign(swiperElsss, {
  
  slidesPerView: 3, 
 
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  },
});

