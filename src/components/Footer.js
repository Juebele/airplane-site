"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../App.css");
function Footer() {
    const location = (0, react_router_dom_1.useLocation)();
    const isHomePage = location.pathname === '/';
    const isAboutPage = location.pathname === '/about';
    const isNewsPage = location.pathname === '/news';
    return (react_1.default.createElement("footer", { className: 'container-footer' },
        react_1.default.createElement("div", { id: 'footer-left' },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                react_1.default.createElement("button", { style: { color: isHomePage ? 'white' : 'black', backgroundColor: isHomePage ? 'gray' : 'transparent', borderRadius: '0 10px 0 0', } }, "Home")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/about' },
                react_1.default.createElement("button", { style: { color: isAboutPage ? 'white' : 'black', backgroundColor: isAboutPage ? 'gray' : 'transparent', borderRadius: '10px 10px 0 0', } }, "About us")),
            react_1.default.createElement(react_router_dom_1.Link, { to: '/news' },
                react_1.default.createElement("button", { style: { color: isNewsPage ? 'white' : 'black', backgroundColor: isNewsPage ? 'gray' : 'transparent', borderRadius: '10px 10px 0 0', } }, "News"))),
        react_1.default.createElement("div", { id: 'footer-right' },
            react_1.default.createElement("p", null, "Copyright 2023 James Uebele"))));
}
exports.default = Footer;
