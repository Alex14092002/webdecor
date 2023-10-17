
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
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: '.btn-next', // Chọn lớp hoặc ID của nút "Next"
    prevEl: '.btn-prev' // Chọn lớp hoặc ID của nút "Prev"
  }
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
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
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
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 10,
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
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
});

