"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../App.css");
const hero_image_jpeg_1 = __importDefault(require("../Assets/hero-image.jpeg"));
const Hero = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("img", { id: 'hero', src: hero_image_jpeg_1.default })));
};
exports.default = Hero;
