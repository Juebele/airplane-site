"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const Learning_1 = __importDefault(require("./components/Learning"));
const Home_1 = __importDefault(require("./components/Home"));
const Footer_1 = __importDefault(require("./components/Footer"));
const About_1 = __importDefault(require("./components/About"));
const News_1 = __importDefault(require("./components/News"));
const App = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement(react_router_dom_1.Routes, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/', element: react_1.default.createElement(Home_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: "/learning", element: react_1.default.createElement(Learning_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/about', element: react_1.default.createElement(About_1.default, null) }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/news', element: react_1.default.createElement(News_1.default, null) })),
                react_1.default.createElement(Footer_1.default, null)))));
};
exports.default = App;
