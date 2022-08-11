"use strict";

// let id3 = Symbol("id");

// const obj = {
//     name: "Test",
//     [Symbol("id")]: 1,
//     [id3]: 1,
//     getId: function() {
//         return this[id3];
//     }
// };

// let id = Symbol("id");
// let id2 = Symbol("id");

// console.log(id === id2);

// obj[id] = 1;

// console.log(obj[id]);
// console.log(obj);
// console.log(obj.getId());
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) {
//     console.log(value);
// }

// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     [Symbol.for("id")]: 123
// };

// myAwesomeDB.id = '2323232';

// console.log(myAwesomeDB[Symbol.for("id")]);
// console.log(myAwesomeDB["id"]);
// console.log(myAwesomeDB);