!function(e){var n={};function t(d){if(n[d])return n[d].exports;var o=n[d]={i:d,l:!1,exports:{}};return e[d].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,d){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:d})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(d,o,function(n){return e[n]}.bind(null,o));return d},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var d=function(){const e=document.createElement("div"),n=document.createElement("h1"),t=document.createElement("h3");return n.innerHTML="The best food in your dreams and the best view",t.innerHTML="With a grat view of the Gotham City and warm atmosphere, we are waiting you to TheBFood.",e.classList.add("sp-content"),e.appendChild(n),e.appendChild(t),e};var o=function(){const e=document.createElement("nav");e.classList.add("navigation");const n=document.createElement("div"),t=document.createElement("div");n.classList.add("brand"),n.innerHTML="TheBFood",t.classList.add("right-align");const d=document.createElement("span"),o=document.createElement("span"),r=document.createElement("span");return d.id="home",o.id="menu",r.id="contact",d.innerHTML="Home",o.innerHTML="Menu",r.innerHTML="Contact",t.appendChild(d),t.appendChild(o),t.appendChild(r),e.appendChild(n),e.appendChild(t),e};function r(e,n,t){const d=document.createElement("div");d.classList.add("menu_item");const o=document.createElement("h4");o.classList.add("name"),o.innerHTML=e;const r=document.createElement("span");r.classList.add("price"),r.innerHTML=n;const c=document.createElement("p");c.classList.add("description"),c.innerHTML=t;const a=document.createElement("hr");return d.appendChild(o),d.appendChild(r),d.appendChild(c),d.appendChild(a),d}function c(e){const n=document.createElement("div");n.classList.add("menu-section");const t=document.createElement("h3");return t.innerHTML=e,n.appendChild(t),n}var a=function(){const e=document.createElement("section");e.classList.add("menu");const n=document.createElement("h1");n.classList.add("menu_restName");const t=document.createElement("h2");t.classList.add("menu-title"),n.innerHTML="TheBFood",t.innerHTML="Menu",e.appendChild(n),e.appendChild(t);const d=c("Meats"),o=r("Salmon","12.99 USD","Dry Aged for 48 hours"),a=r("Steak","11.99 USD","Dry Aged for 48 hours");d.appendChild(o),d.appendChild(a),e.appendChild(d);const i=c("Desserts"),l=r("Cupcake","5.99 USD","Delicious"),s=r("Penne Cotta","6.99 USD","Suggested");return i.appendChild(l),i.appendChild(s),e.appendChild(i),e};const i=document.getElementById("content");function l(e){i.innerHTML="",i.appendChild(s);const n=document.querySelector("body"),t=document.querySelectorAll(".right-align>span"),d=document.querySelector(".brand");"home"==e.target.id?(n.style.backgroundImage="url('imgs/about.jpg')",i.appendChild(u),t.forEach(e=>e.style.color="rgb(238, 212, 109)"),d.style.color="rgb(253, 255, 116)"):"menu"==e.target.id&&(n.style.backgroundImage="none",i.appendChild(m),t.forEach(e=>e.style.color="black"),d.style.color="black")}const s=o(),u=d(),m=a();i.appendChild(s),i.appendChild(u);const p=document.getElementById("home"),h=document.getElementById("menu"),f=document.getElementById("contact");p.addEventListener("click",l),h.addEventListener("click",l),f.addEventListener("click",l)}]);