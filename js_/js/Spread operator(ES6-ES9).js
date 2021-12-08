"use strict";

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);



// const obj = {
//     a:5,
//     b:1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj); //bunday vaziyatda ikkita object ham bir hil bo'ladi



// const mathObj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// const addElementToMathObj = {
//     d: 4,
//     e: 5,
//     f: 6
// };

// console.log(Object.assign(mathObj, addElementToMathObj));



// const objecT = {
//     a: 10,
//     b: 34,
//     c: 45
// };
// //bu uslub objectlar uchun yaxshi
// const suqmaQoshiq = Object.assign({}, objecT); //{} qilganimiz uchun suqmaQoshiq {} ni oladi

// suqmaQoshiq.b = 36;

// console.log(objecT);
// console.log(suqmaQoshiq);



// const oldArray = ["a", "b", "c"];

// const newArray = oldArray.slice(); //slice shunchaki ko'chirish uchun 
// sliceni o'rniga ...oldArray qilish ham mumkin quyidagidek

// newArray[1] = "bbbbb...";

// console.log(oldArray);
// console.log(newArray);



// const markup = ["html", "css", "xml"],
//     programming = ["javascript", "C#", "...etc"],
//     languages = [...markup, ...programming, "powerful l || f : nodejs"];
// //... orqali boshqa arraylarni element larini ham olsa bo'ladi
// console.log(languages);



// function takeArrayElements(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const arr = [1, 2, 3];

// takeArrayElements(...arr);   //uchta element kerak edi mana olindi



// const q = {
//     one: 1,
//     two: 2
// };

// const addQElements = {
//     ...q
// };

// console.log(addQElements); //...O'zgaruvchi bu spread operatori hisoblanadi