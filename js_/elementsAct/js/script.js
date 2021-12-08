'use strict';

const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      wrapper = document.querySelector(".wrapper"),
      hearts = wrapper.querySelectorAll(".heart"),
      oneHeart = wrapper.querySelector(".heart");

// console.dir(box);

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";


// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

// for (let elem of hearts) {
//     elem.style.backgroundColor = "black";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});


const div = document.createElement("div");
// const text = document.createTextNode("I was this one");

div.classList.add("black");

// document.body.append(div);
wrapper.append(div);
// wrapper.appendChild(div); eski

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]); eski

// circles[0].remove();
// wrapper.removeChild(hearts[1]); eski

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); eski


// div.innerHTML = "Hello World";
div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";


// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");