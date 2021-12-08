"use strict";

// const arr = [1, 2, 3, 4, 5];

//arr.pop(); //bu funksiya arraydan oxirgi elementni o'chiradi

//arr.push(6);  // bu funksiya arrayni oxiriga bitta element qo'shadi

// console.log(arr);



// const arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }   // bu loop orqali arrayni hamma elementlarini olish mumkin.Aql mahsuli.Bir vaqtlar o'rgangan edim

// for (let value of arr) {
//     console.log(value); //forga o'zgaruvchi qo'yishga aynan value qo'yish shart emas
// }



// const arr = [1, 2, 3, 4, 5];
// arr[99] = 0;
// console.log(arr.length); //array length bu arrayni indexini sanab 1 ni qo'shadi
// console.log(arr);



// const arr = [1, 2, 3, 4, 5];
// //for eachga uchtagacha o'zgaruvchi kiritiladi value,index,arr||i-index tartibi|arr-array|item-array elementlari
// arr.forEach(function (item, i, arr){
//     console.log(`${i} - ${item} is in array ${arr}`);
// });



// const str = prompt("", "");
// const products = str.split(", "); //split bu qanaqa tartibda olinishini ko'rsatsa arrayga oladi
// console.log(products);



// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); //sort bu string bo'yicha tartib o'rnatadi
// console.log(products.join("; "));



// const arr = [2, 13, 26, 8, 10];

// arr.sort();

// console.log(arr);



// const arr2 = [2, 13, 26, 8, 10];

// arr2.sort(compareNumber); //biz bu funksiyaga kuchli tushuntirish bermasak ham sort uni o'ziga qabul qilib oldi
// //sonlar katta kichik navbat bilan bo'layapti
// console.log(arr2);

// function compareNumber(a, b) {
//     return a - b;
// }