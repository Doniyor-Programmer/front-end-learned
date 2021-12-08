"use strict";

// let str = "some text";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    gun: 500,
    sayHello: function () {
        console.log("Hello");
    }
};

const alex = Object.create(soldier);

// const alex = {
//     health: 100
// };

// alex.__proto__ = soldier; // bu eski varianti 

//Object.setPrototypeOf(alex, soldier); // bu yangi varianti

// console.log(alex);
// console.log(alex.gun);

alex.sayHello();