"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, feet, hasPaws) {
        this.name = '';
        this.feet = 0;
        this.hasPaws = false;
        this.name = name;
        this.feet = feet;
        this.hasPaws = hasPaws;
    }
    print() {
        console.log(this.name, 'has', this.feet, 'feet.');
        if (this.hasPaws) {
            console.log(this.name, 'has paws.');
        }
    }
}
exports.default = Animal;
