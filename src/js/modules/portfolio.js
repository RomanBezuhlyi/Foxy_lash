var swiper = new Swiper(".portfolio__swiper", {
  navigation: {
    prevEl: ".portdolio__btn-prev",
    nextEl: ".portdolio__btn-next",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});
