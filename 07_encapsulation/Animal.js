"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, feet, hasPaws) {
        this._name = '';
        this._feet = 0;
        this._hasPaws = false;
        this.name = name;
        this.feet = feet;
        this.hasPaws = hasPaws;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set feet(feet) {
        this._feet = feet;
    }
    get feet() {
        return this._feet;
    }
    set hasPaws(hasPaws) {
        this._hasPaws = hasPaws;
    }
    get hasPaws() {
        return this._hasPaws;
    }
    print() {
        console.log(this.name, 'has', this.feet, 'feet.');
        if (this.hasPaws) {
            console.log(this.name, 'has paws.');
        }
    }
}
exports.default = Animal;
