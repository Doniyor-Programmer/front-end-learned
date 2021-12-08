"use strict";

const btns = document.querySelectorAll("button"),
      overlay = document.querySelector(".overlay");

// btn.addEventListener("click", () => {
//     alert("click");
// });

// btn.addEventListener("click", () => {
//     alert("second click");
// });

// btn.addEventListener("mouseenter", (e) => {
    // console.log(e);
    // console.log(e.target);
    // e.target.remove();
    // console.log("Hover");
// });

// let i = 0;
const deleteElem = (e) => { 
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener("click", deleteElem);
    // }
};

// btn.addEventListener("click", deleteElem);
// overlay.addEventListener("click", deleteElem);

btns.forEach(btn => {
    btn.addEventListener("click", deleteElem, {once: true});
});

const link = document.querySelector("a");

link.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target);
});