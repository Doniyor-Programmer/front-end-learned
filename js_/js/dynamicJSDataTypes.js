"use strict";

// To boolean

// false: 0, "", null, undefined, NaN

// 1)

let switcher = null;

if (switcher) {
    console.log("Working...");
}

switcher = 1;

if (switcher) {
    console.log("Working...");
}

// 2)

console.log(typeof(Boolean("4")));

// 3)

console.log(typeof(!!"44444"));