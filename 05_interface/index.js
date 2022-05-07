"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = __importDefault(require("./Monster"));
let dragon = new Monster_1.default();
dragon.name = 'Dragon';
dragon.feet = 4;
dragon.hasPaws = true;
dragon.abilities = ['Nuclear blast', 'Ice smoke'];
dragon.print();
