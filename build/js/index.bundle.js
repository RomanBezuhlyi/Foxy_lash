!function(){var e={642:function(){const e=document.querySelector(".header__box-burger"),t=document.querySelector(".header__nav-close"),n=document.querySelector("body"),o=document.querySelector(".header__nav"),i=()=>{o.classList.remove("open-menu"),n.classList.remove("no-scroll")};e.addEventListener("click",(()=>{o.classList.add("open-menu"),n.classList.add("no-scroll")})),t.addEventListener("click",i),o.addEventListener("click",(e=>{"A"===e.target.tagName&&i()})),n.addEventListener("click",(t=>{o.contains(t.target)||e.contains(t.target)||i()})),o.addEventListener("click",(e=>{e.stopPropagation()}))},221:function(){document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".modal-overlay"),t=document.querySelector("body"),n=document.querySelector(".modal__close"),o=document.querySelectorAll(".free-consultation"),i=()=>{e.style.display="flex",t.style.overflow="hidden"},r=()=>{e.style.display="none",t.style.overflow="auto"};n.addEventListener("click",r),e.addEventListener("click",(t=>{t.target===e&&r()})),o.forEach((e=>{e.addEventListener("click",i)}))}))},408:function(){new Swiper(".portfolio__swiper",{navigation:{prevEl:".portdolio__btn-prev",nextEl:".portdolio__btn-next"},pagination:{el:".swiper-pagination"},slidesPerView:1,initialSlide:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:28},991:{slidesPerView:3,spaceBetween:60}}})},879:function(){new Swiper(".testimonials__swiper",{navigation:{prevEl:".testimonials__btn-prev",nextEl:".testimonials__btn-next"},pagination:{el:".swiper-pagination-2"},slidesPerView:1,initialSlide:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:28},991:{slidesPerView:3,spaceBetween:60}}}),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".testimonials__slide").forEach((e=>{const t=e.querySelector("p"),n=e.querySelector(".textimonials__btn");t.textContent.split(/\s+/).length>=50&&(n.style.display="flex"),n.addEventListener("click",(function(){t.style.webkitLineClamp?(t.style.webkitLineClamp=null,n.textContent="Read less"):(t.style.webkitLineClamp="8",n.textContent="Read more")}))}))}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(642),n(408),n(879),n(221)}()}();