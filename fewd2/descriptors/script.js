"use strict";

const birthday = Symbol("birthday");

const user = {
    name: "Alex",
    surname: "Smith",
    [birthday]: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, "birthdate", {value: prompt("Date?"), enumerable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, "birthdate"));

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// console.log(Object.getOwnPropertyDescriptor(user, birthday));
// Object.defineProperty(user, "showMyPublicData", {enumerable: false});
// for (let key in user) {
//     console.log(key);
// }

// Object.defineProperty(user, "name", {writable: false});
// Object.defineProperty(user, "birthday", {writable: false});
// Object.defineProperty(user, "gender", {value: "male"});
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
// console.log(Object.getOwnPropertyDescriptor(user, "birthday"));
// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

// user.name = "lskldfkldf";

// writable
// enumerable
// configurable

// Object.defineProperties(user, {
//     name: {writable: false},
//     surname: {writable: false}
// });

// Object.preventExtensions(obj);
// Object.seal(obj);
// Object.freeze(obj);
// Object.isExtensible(obj);
// Object.isSealed(obj);
// Object.isFrozen(obj);
// Object.is(obj1, obj2);

// let arr = [10, 20, 30];
// Object.keys(arr);
// Object.values(obj);
// Object.entries(obj);