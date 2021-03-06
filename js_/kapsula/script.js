"use strict";

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = "Petrychenko";

    say = () => {
        console.log(`Username: ${this.name}${this.#surname}, age is ${this._age}`);
    }
    
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("Unavailable value!");
        }
    }
}

const ivan = new User("Ivan", 27);
ivan.say();