"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor() {
        this.name = '';
        this.feet = 0;
        this.hasPaws = false;
    }
    print() {
        console.log(this.name, 'has', this.feet, 'feet.');
        if (this.hasPaws) {
            console.log(this.name, 'has paws.');
        }
    }
}
exports.default = Animal;
