"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Monster_1 = __importDefault(require("./Monster"));
let dragon = new Monster_1.default('Dragon', 4, true, ['Nuclear blast', 'Ice smoke']);
dragon.print();
