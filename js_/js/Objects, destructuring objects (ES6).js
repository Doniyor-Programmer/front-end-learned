"use strict";

// const obj=new Object(); eski variant

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest:function() {
        console.log("Test");
    }
};

options.makeTest(); //object dagi makeTest functionni bajarish uchun

const {border,bg} = options.colors; //keyni valuedan variable ga o'tkazish 
console.log(border); //let ishlatsa ham bo'ladi masalan:let {name,width,height}=options

// console.log(Object.keys(options)); //array da options dagi hamma keylarni korsatadi

// console.log(Object.keys(options).length); //javascriptda objectga .length ni bevosita qo'yib bo'lmaydi

// console.log(options["colors"]["border"]); //eskiroq variant keylarni [""] yozsa valueni ko'rsatadi

// console.log(options.name);//objectdagi keylarni valuesini ko'rish uchun options[name] varianti ham bor

// delete options.name; //bu object keylarini tez o'chirish uchun qulay

// console.log(options); //objectni chiqarish

// let counter = 0; //bu pastdagi for if larimizdagi keylarni sonini sanab beradi

// for (let key in options) {
//     if (typeof (options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значения ${options[key][i]}`);
//             counter++;
//             // console.log(counter);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значения ${options[key]}`);
//         // console.log(key,options[key]);
//         counter++;
//         // console.log(counter);
//     }

//     // counter++;
// }

// console.log(counter);

