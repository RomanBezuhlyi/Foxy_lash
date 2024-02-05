var swiper = new Swiper(".testimonials__swiper", {
  navigation: {
    prevEl: ".testimonials__btn-prev",
    nextEl: ".testimonials__btn-next",
  },
  pagination: {
    el: ".swiper-pagination-2",
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

document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonials__slide");

  testimonials.forEach((testimonial) => {
    const content = testimonial.querySelector("p");
    const button = testimonial.querySelector(".textimonials__btn");

    // Check word count and show/hide button
    const wordCount = content.textContent.split(/\s+/).length;
    if (wordCount >= 50) {
      button.style.display = "flex";
    }

    button.addEventListener("click", function () {
      if (content.style.webkitLineClamp) {
        content.style.webkitLineClamp = null;
        button.textContent = "Hide";
      } else {
        content.style.webkitLineClamp = "8";
        button.textContent = "Read more";
      }
    });
  });
});
