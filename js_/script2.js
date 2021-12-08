"use strict";

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();



function learnJS(lang, callback) {
    console.log(`I learned ${lang}`);
    callback();
}

function done() {
    console.log("I am learning front-end-dev");
}

// learnJS("JavaScript", () => {
//     console.log("I am learning front-end-dev");
// });

learnJS("JS", done);