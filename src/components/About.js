"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../App.css");
const Header_1 = __importDefault(require("./Header"));
const james_headshot_jpg_1 = __importDefault(require("../Assets/james-headshot.jpg"));
const About = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "We Love Airplanes!"),
            react_1.default.createElement("div", { class: 'container-1' },
                react_1.default.createElement("img", { id: 'headshot', src: james_headshot_jpg_1.default }),
                react_1.default.createElement("p", null, "Hangar 10 was started by James, a software engineer and aviation geek who was looking for a way to practice his web development skills and set a challenge for himself to build a website.")))));
};
exports.default = About;
