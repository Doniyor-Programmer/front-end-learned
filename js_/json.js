"use strict";

const person = {
    name: "Alex",
    tel: "+744444444",
    parent: {
        mom: "Olga",
        dad: "Mike"
    }
};

// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));

clone.parent.mom = "Ann";

console.log(person);
console.log(clone);