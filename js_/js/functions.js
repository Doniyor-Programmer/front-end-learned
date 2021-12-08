"use strict";

// function showFirstMessage() {
//   console.log("Hello World!");
// }
//
// showFirstMessage();



// function showFirstMessage2(text) {
//   console.log(text);
// }
//
// showFirstMessage2("Hello World!");



// let num=20;
// function showFirstMessage3(text) {
//   console.log(text);
//   let num=10;
//   console.log(num);
// }
//
// showFirstMessage3("Hello World!");
// console.log(num);



//function ichida let, var  ga o'xshagan narsalarni foydalanib bo'lmaydi .faqat o'zgaruvchi = va bironda data type masalan:a=10;
//function ichida let,var ga o'xshagan narsalarni foydalansa local variable bo'ladi ochiq joyda yozsa global variable bo'lmaydi
//let,var va const larni faqat function ni o'zida foydalanib bo'ladi tashqarida ishlamaydi



// function calc($num1,$num2) {
//   console.log($num1 + $num2);
// }
// calc(23,77);
// calc(23,75);
// calc(23,73);



// function calc2($num1,$num2) {
//    return ($num1 - $num2);//functionda returndan keyin hech narsani ishlatib bo'lmaydi
// }
// console.log(calc2(23,77));
// console.log(calc2(23,75));
// console.log(calc2(23,73));


// let num=100;
// function ret() {
//   let num=50;
//   return num;
// }
// const anotherNum=ret();
// console.log(anotherNum);



// let hasHonors=function ($gpa) {
//   if ($gpa>150) {
//     console.log("You are really Honored man || woman");
//   }else {
//     console.log("You don't have any honors");
//   }
// };
// hasHonors(160);



//functions ni yozishni uch xil usuli bor:
// 1-usul. function functionName() {
//
// }
// 2-usul. let num=function () {
//
// }
// 1-usulni foydalansa natijani ko'rish uchun functionName() ni functiondan oldin ham yozib natijani ko'rish mumkin.
//2-usulni foydalansa num() ni functiondan oldin qo'ysa undefined deb xatolik oladi.
// Masalan:
// true:
//  functionName();
// function functionName() {
//   //code...
// }
// false:
// num();
// let num=function () {
//   // code...
// };


// 3-usuli

// let calc = ($num1,operation,$num2) => {
//   if (operation==="-") {
//     console.log($num1-$num2);
//   }else if (operation==="+") {
//     console.log($num1+$num2);
//   }else if (operation==="*") {
//     console.log($num1*$num2);
//   }else if (operation==="/") {
//     console.log($num1/$num2);
//   }else {
//     console.log("Invalid operation");
//   }
// };
// calc(23,"+",13);



// function humanSayHello(user) {
//   console.log(`Hello ${user}!`);
// }
// humanSayHello("Doniyor");



// function humanSayHello(user) {
//   console.log(`Hello ${user}!`);
// }
// humanSayHello();



// function calc(a,b) {
// return a+b;
// }
// console.log(calc(12,88));



// let count=10;
//
// function humanSayHello(user) {
//   let count=5;
//   count++;
//   console.log(count);
//   console.log(`Hello ${user}!`);
// }
// humanSayHello("Doniyor");
// console.log(count);



// let count=10;
//
// function humanSayHello(user) {
//   console.log(count);
//   console.log(`Hello ${user}!`);
// }
// humanSayHello("Doniyor");
// console.log(count);





// function myFirstApp(name,age) {
//   alert(`Привет меня зовут ${name} и это моя первая программа!`);
//
//   function showSkills() {
//     let skills=["HTML","CSS","JavaScript"];
//     let showSkills=[];
//     for (var i = 0; i < skills.length; i++) {
//       showSkills[i]=console.log(`Я владею: ${skills[i]}`);
//     }
//   }
//
// showSkills();
//
//   function checkAge() {
//     if(age>18){
//       console.log("У тебя отличные шансы стать front-end-developer!");
//     }else {
//       console.log("Don't stop learning!");
//     }
//   }
//
// checkAge();
//
//   function calcPow(num) {
//   console.log(num*num);
//   }
//
//   calcPow(4);
// }
// myFirstApp("Doniyor",13);
