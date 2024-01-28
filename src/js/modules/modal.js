document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.querySelector(".modal-overlay");
  const body = document.querySelector("body");
  const modalCloseBtn = document.querySelector(".modal__close");
  const consultationButtons = document.querySelectorAll(".free-consultation");

  const openModal = () => {
    modalOverlay.style.display = "flex";
    body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modalOverlay.style.display = "none";
    body.style.overflow = "auto";
  };

  const closeOnClickOutside = (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  };

  modalCloseBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeOnClickOutside);

  consultationButtons.forEach((button) => {
    button.addEventListener("click", openModal);
  });
});
