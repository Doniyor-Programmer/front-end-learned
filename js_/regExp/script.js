"use strict";

// new RegExp("pattern", "flags");
// /pattern/flags

// const ans = prompt("Write your age:", "");

// const reg = /n/ig;
// const reg = /\d/g;
// console.log(reg.test(ans));
// console.log(ans.match(reg));

const str = "My name is R2D2";

// console.log(str.match(/\w\d\w\d/i));
// console.log(str.match(/\W/ig));
console.log(str.match(/\D/ig));

// \D
// \W

// \d
// \w
// \s

// i upper lower
// g all of them
// m
// . bu css dagi *

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password:", "");

// console.log(pass.replace(/\./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));