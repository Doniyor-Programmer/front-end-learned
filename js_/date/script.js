"use strict";

// const now = new Date();

// Date.parse("2021-09-12");

// const now = new Date(2021, 9, 12, 20);
// const now = new Date(0);
// const now = new Date(-99999999999);

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());

// console.log(now.getMinutes());
// console.log(now.getHours());
// console.log(now.getUTCHours());
// console.log(now.getDay());
// console.log(now.getMilliseconds());
// console.log(now.getSeconds());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());


// console.log(now.setHours(18));
// console.log(now.setHours(18, 40));
// console.log(now.setHours(40));
// console.log(now);


let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Loop worked in ${end - start} milliseconds`);