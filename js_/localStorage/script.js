'use strict';

// localStorage.setItem("number", 5);

// localStorage.removeItem("number");
// localStorage.clear();

// console.log(localStorage.getItem("number"));

const checkbox = document.querySelector("#checkbox"),
      form = document.querySelector("form"),
      change = document.querySelector("#color");

if (localStorage.getItem("isChecked")) {
    checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
    form.style.backgroundColor = "red";        
}

checkbox.addEventListener("change", _ => {
    localStorage.setItem("isChecked", true);
});

change.addEventListener("click", _ => {
    if (localStorage.getItem("bg") === "changed") {
        localStorage.removeItem("bg");
        form.style.backgroundColor = "#fff";        
    } else {
        localStorage.setItem("bg", "changed");
        form.style.backgroundColor = "red";
    }
});

const persone = {
    name: "Alex",
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem("Alex", serializedPersone);
// localStorage.setItem("Alex", persone);

console.log(JSON.parse(localStorage.getItem("Alex")));
// console.log(localStorage.getItem("Alex"));