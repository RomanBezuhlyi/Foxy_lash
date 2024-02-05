document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".team__card");

  testimonials.forEach((testimonial) => {
    const content = testimonial.querySelector("p");
    const button = testimonial.querySelector(".read-more");

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
        content.style.webkitLineClamp = "6";
        button.textContent = "Read more";
      }
    });
  });
});
