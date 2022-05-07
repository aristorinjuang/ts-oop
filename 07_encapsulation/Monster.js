"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Monster extends Animal_1.default {
    constructor(name, feet, hasPaws, abilities) {
        super(name, feet, hasPaws);
        this._abilities = [];
        this.abilities = abilities;
    }
    set abilities(abilities) {
        this._abilities = abilities;
    }
    get abilities() {
        return this._abilities;
    }
    print() {
        console.log(this.name, 'is a monster!!!');
        console.log(this.name, 'has:');
        for (let ability of this.abilities) {
            console.log('-', ability);
        }
    }
}
exports.default = Monster;
