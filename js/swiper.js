const swiper = new Swiper(".comment-swiper", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop:true,
    autoplay: {
      delay: 1500,
    },
    speed:3000,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
});

const swiper2 = new Swiper(".library-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop:true,
  autoplay: {
    delay: 1500,
  },
  speed:3000,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 1,
    },
  },
});


const swiper4 = new Swiper(".kitchen-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  autoplay: {
    delay: 0,
  },
  speed:3000,
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    450: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});

