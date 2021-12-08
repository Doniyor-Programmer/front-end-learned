// let phrase = "Strings are cool",
//     text = "are cool";

// document.write(phrase.length);
// document.write(phrase.toUpperCase());
// document.write(phrase.toLowerCase());

// document.write(phrase.charAt(1));
// document.write(phrase.indexOf("a"));
// document.write(phrase.indexOf("z"));
// document.write(phrase.lastIndexOf("o"));

// document.write(phrase.substring(0, 3));
// document.write(phrase.substring(phrase.indexOf("c"), phrase.length));

// document.write(phrase.endsWith("S"));
// document.write(phrase.endsWith("cool"));

// document.write(phrase.includes("Strings"));
// document.write(phrase.includes(text));

// document.write(phrase + text);
// document.write(phrase + " " + text);



/*
    2
*/

// let num = -2;

// document.write(Math.abs(num));
// document.write(Math.max(num, 4));
// document.write(Math.min(num, 4));

// num = 2.4;

// document.write(Math.round(num));


// num = 2;

// document.write(Math.pow(num, 4));
// document.write(Math.sqrt(num));

// document.write(Math.random());
// document.write(Math.round(Math.random() * 10));



/*
    3
*/

// let name1 = window.prompt("What is your name?", "");

// document.write(`Hey ${name1}, How are you today`);



/*
    4
*/

// let num1 = +prompt("Enter a number"),
//     num2 = +prompt("Enter another number");
// num1 = parseFloat(num1);
// document.write(num1 + num2);



/*
    5
*/

// let fruits = ["Apples", 24, false];

// document.write(fruits[0]);
// document.write(fruits[3]);

// document.write(fruits.length);

// fruits[0] = "Oranges";

// document.write(fruits);

// let getArr = "Doniyor, Ali, Diyora";

// getArr = getArr.split(", ");

// document.write(getArr);



/*
    5
*/

// function sayHi() {
//     let characterName = "Doniyor";
//     document.write(`<h1>Hello ${characterName}</h1>`);
//     alert("Hey");
// }

// sayHi();

// function sayHi(characterName) {
// document.write(`<h1>Hello ${characterName}</h1>`);
// alert("Hey");
// }

// sayHi();
// sayHi("Doniyor");

// function addition(num1, num2) {
// return num1 + num2;
// }

// document.write(addition(4, 5));

// let addedNumbers = addition(4, 100);
// document.write(addedNumbers);



/*
    6
*/

// let header = document.getElementById("header"),
//     link = document.getElementById("link");

// header.innerHTML = "Jquery";
// header.style.color = "red";
// header.style.backgroundColor = "blue";

// link.href = `https://www.amazon.com`;
// link.style = "color: red";
// link.target = `_blank`;



/*
    7
*/

// function handleClick() {
//     alert("Clicked");
// }

// function handleClick(element) {
// element.innerHTML = "Clicked";
// element.style.cssText = "background-color: blue";
// }

// let image = document.getElementById("image");

// image.addEventListener("mouseover", () => {
//     image.style.cssText = "box-shadow: 2px 2px 2px grey; width: 110px";
// });

// image.addEventListener("mouseout", () => {
//     image.style.cssText = "width: 100px";
// });



/*
    8
*/

// let messages = document.getElementById("messages"),
//     textbox = document.getElementById("textbox"),
//     button = document.getElementById("button");

// button.addEventListener("click", () => {
//     let newMessage = document.createElement("li");
//     newMessage.innerHTML = textbox.value;
//     messages.appendChild(newMessage);
//     textbox.value = "";
//     localStorage.mongodb = messages.innerHTML;
// });

// document.write(localStorage.mongodb);

/*
    9
*/

// let isMale = true,
//     isTall = true;
// isMale = false;
// isTall = false;

// if (isMale && isTall) {
//     document.write("You are a tall male");
// } else if (isMale && !isTall) {
//     document.write("You are short male");
// } else if (!isMale && isTall) {
//     document.write("You are tall female");
// } else {
//     document.write("You are not male or not tall");
// }



/*
    9.1
*/

// function max(num1, num2, num3) {
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// document.write(max(1, 2, 3));

// if ("phrase" == "phrase") {
//     document.write("True");
// }

// if ("hello world" !== "phrase") {
//     document.write("True");
// }



/*
    10
*/

// let person = {
//     name: "Doniyor",
//     age: 14,
//     isMale: true,
//     occupation: "Student",
//     printName: () => {
//         document.write(`<h1>${person.name}</h1>`);
//     }
// };

// person.name = "Doniyor-Programmer";
// document.write(person.name);
// person.printName();



/*
    11
*/

// let i = 1;
// let i = 11;

// while (i <= 10) {
//     document.write(`${i} <br>`);
//     i++;
// }

// do {
//     document.write(`${i} <br>`);
//     i++;
// } while (i <= 10);



/*
    12
*/

// let password = "wordpass",
//     response,
//     entryCount = 0,
//     entryLimit = 3,
//     error = false;

// while (response != password && !error) {
//     if (entryCount < entryLimit) {
//         response = prompt("Enter Password");
//         entryCount++;
//     } else {
//         error = true;
//     }
// }

// if (error) {
//     alert("Too many entries");
// } else {
//     alert("You got it!");
// }



/*
    13
*/

// for (let i = 0; i < 10; i++) {
//     document.write(i);
// }

// let friends = ["Jim", "Stanley", "Kevin"];

// document.write(`${friends[0]} <br>`);

// for (let i = 0; i < friends.length; i++) {
//     document.write(`${friends[i]} <br>`);
// }



/*
    14
*/

// let questions = [{
//         prompt: "What color are apples?\n(a) Red/Green\n(b) Purple\n(c) Orange",
//         answer: "a"
//     },
//     {
//         prompt: "What color are Bananas?\n(a) Teal\n(b) Magenta\n(c) Yellow",
//         answer: "c"
//     },
//     {
//         prompt: "What color are strawberries?\n(a) Yellow\n(b) Red\n(c) Blue",
//         answer: "b"
//     }
// ],
// score = 0;

// for (let i = 0; i < questions.length; i++) {
//     let response = prompt(questions[i].prompt, "");
//     if (response == questions[i].answer) {
//         score++;
//         alert("Correct!");
//     } else {
//         alert("Wrong!");
//     }
// }

// alert(`You got ${score}/${questions.length}`);



/*
    15
*/

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 3; j++) {
//         document.write(`i = ${i}, j = ${j} <br>`);
//     }
// }

// let numberGrid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [0]
// ];

// for (let i = 0; i < numberGrid.length; i++) {
//     for (let j = 0; j < numberGrid[i].length; j++) {
//         document.write(numberGrid[i][j]);
//     }
//     document.write(`<br>`);
// }



/*
    16
*/

// let friends = ["Oscar", "Angela", "Kevin"];

// friends.forEach((item) => {
//     document.write(`${item} <br>`);
// });

// let books = [
//     {
//         title: "Harry Potter",
//         author: "JK Rowling",
//         pages: 300
//     },
//     {
//         title: "Green Eggs & Ham",
//         author: "Dr. Seuss",
//         pages: 25
//     }
// ];

// books.forEach((item) => {
//     document.write(`${item.title}<br>`);
//     document.write(`${item.author}<br><br>`);
//     document.write(`${item.pages}<br><br>`);
// });