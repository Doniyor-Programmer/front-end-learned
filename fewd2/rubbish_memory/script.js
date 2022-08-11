// function func() {
//     smth = "string";
//     window.smth = "string";
// }


// const someRes = getData();
// const node = document.querySelector(".class");
// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);


// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push("Hello");
//         console.log("Hello!!");
//     };
// }
// outer()();
// outer()();
// const sayHello = outer();
// sayHello();
// sayHello();


// function createElement() {
//     const div = document.createElement("div");
//     div.id = "test";
//     return div;
// }
// const testDiv = createElement();
// document.body.append(testDiv);
// function deleteElement() {
//     document.body.removeChild(document.getElementById("test"));
// }
// deleteElement();

function createElement() {
    const div = document.createElement("div");
    div.id = "test";
    document.body.append(div);
}
createElement();
function deleteElement() {
    document.body.removeChild(document.getElementById("test"));
}
deleteElement();