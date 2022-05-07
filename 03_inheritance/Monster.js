"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Monster extends Animal_1.default {
    constructor() {
        super(...arguments);
        this.abilities = [];
    }
}
exports.default = Monster;
