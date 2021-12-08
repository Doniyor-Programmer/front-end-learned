"use strict";

// const arr = [1, 2, 3, 6, 8];
const arr = [13, 2, 33, 6, 8];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr);
// console.log(arr.length);

// arr.pop();
// arr.push(10);
// arr.shift();
// arr.unshift(0);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} isnide of array: ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);
// console.log(products.join("; "));