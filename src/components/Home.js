"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../App.css");
const Home = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { id: 'homepage-bg', className: 'home-text' },
            react_1.default.createElement("div", { id: 'home-el' },
                react_1.default.createElement("h1", null, "Hangar 10"),
                react_1.default.createElement("h6", null, "\u201CAdventure is worthwhile in itself.\u201D - Amelia Earhart"),
                react_1.default.createElement("div", { className: 'container-3' },
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/Learning' },
                        react_1.default.createElement("button", null, "Learn more!")),
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/News' },
                        react_1.default.createElement("button", null, "Read up on aviation news here!")))))));
};
exports.default = Home;
