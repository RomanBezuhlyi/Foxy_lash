!function(){var e={642:function(){const e=document.querySelector(".header__box-burger"),t=document.querySelector(".header__nav-close"),n=document.querySelector("body"),i=document.querySelector(".header__nav"),o=()=>{i.classList.remove("open-menu"),n.classList.remove("no-scroll")};e.addEventListener("click",(()=>{i.classList.add("open-menu"),n.classList.add("no-scroll")})),t.addEventListener("click",o),i.addEventListener("click",(e=>{"A"===e.target.tagName&&o()})),n.addEventListener("click",(t=>{i.contains(t.target)||e.contains(t.target)||o()})),i.addEventListener("click",(e=>{e.stopPropagation()}))},408:function(){new Swiper(".portfolio__swiper",{navigation:{prevEl:".portdolio__btn-prev",nextEl:".portdolio__btn-next"},pagination:{el:".swiper-pagination"},slidesPerView:1,initialSlide:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:28},991:{slidesPerView:3,spaceBetween:60}}})},879:function(){new Swiper(".testimonials__swiper",{navigation:{prevEl:".testimonials__btn-prev",nextEl:".testimonials__btn-next"},pagination:{el:".swiper-pagination-2"},slidesPerView:1,initialSlide:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:28},991:{slidesPerView:3,spaceBetween:60}}}),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".testimonials__slide").forEach((e=>{const t=e.querySelector("p"),n=e.querySelector(".textimonials__btn");t.textContent.split(/\s+/).length>=50&&(n.style.display="flex"),n.addEventListener("click",(function(){t.style.webkitLineClamp?(t.style.webkitLineClamp=null,n.textContent="Read less"):(t.style.webkitLineClamp="8",n.textContent="Read more")}))}))}))}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(642),n(408),n(879)}()}();