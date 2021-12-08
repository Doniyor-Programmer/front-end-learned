"use strict";

// constructor

// const num = new Number(3);
// const num = new Function(3);
// console.log(num);


// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function() {
//     console.log(`User ${this.name} signed out`);
// };

// const ivan = new User("Ivan", 28);
// const doniyor = new User("Doniyor", 14);

// ivan.exit();

// ivan.hello();
// doniyor.hello();

// console.log(ivan);
// console.log(doniyor);



// this

// function showThis() {
//     console.log(this);
// }

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     }
// }

// let ivan = new User("Ivan", 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name);
//     console.log(this.name + surname);
// }

// const user = {
//     name: "John"
// };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) odatiy funksiya : this = window, agar use strict bo'lsa undefined
// 2) objectdagi method this = object
// 3) this constructor va class larda bu yangi object
// 4) Ruchnoy this call apply bind

// const btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// btn.addEventListener("click", () => {
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// btn.addEventListener("click", (e) => {
//     e.target.style.backgroundColor = "red";
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(4));



// classes

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Text: ${this.text}, color: ${this.bgColor}`);
//     }
// }

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());

// const div = new ColoredRectangleWithText(25, 10, "Hello World", "red");

// div.showMyProps();
// console.log(div.calcArea());

