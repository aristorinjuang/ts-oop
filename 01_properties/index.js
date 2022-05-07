"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
let cat = new Animal_1.default();
cat.name = 'Cat';
cat.feet = 4;
let dog = new Animal_1.default();
dog.name = 'Dog';
dog.feet = 4;
dog.hasPaws = true;
console.log(cat);
console.log(dog);
