"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../App.css");
const Main_1 = __importDefault(require("./Main"));
const Header_1 = __importDefault(require("./Header"));
const Learning = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(Main_1.default, null)));
};
exports.default = Learning;
