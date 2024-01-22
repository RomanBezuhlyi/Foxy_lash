const burger = document.querySelector(".header__box-burger");
const close = document.querySelector(".header__nav-close");
const body = document.querySelector("body");
const menu = document.querySelector(".header__nav");

// Функція відкривання меню
const openMenu = () => {
  menu.classList.add("open-menu");
  body.classList.add("no-scroll");
};

// Функція закривання меню
const closeMenu = () => {
  menu.classList.remove("open-menu");
  body.classList.remove("no-scroll");
};

burger.addEventListener("click", openMenu);

close.addEventListener("click", closeMenu);

// Закриття меню при кліку на пункт меню або поза межами меню
menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    // Клікнули по пункту меню, закриваємо меню
    closeMenu();
  }
});

body.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    // Клікнули поза меню та бургером, закриваємо меню
    closeMenu();
  }
});

// Заборона подальшого вспливання події для кліку на самому меню
menu.addEventListener("click", (event) => {
  event.stopPropagation();
});
