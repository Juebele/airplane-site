"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
require("../App.css");
const hangar_icon_100_png_1 = __importDefault(require("../Assets/hangar-icon-100.png"));
const learning_header_1 = __importDefault(require("./sub-components/learning-header"));
const Header = () => {
    return (react_1.default.createElement("div", { className: 'container-1 header' },
        react_1.default.createElement("div", { id: 'item-1' },
            react_1.default.createElement("button", { className: 'blank-button' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                    react_1.default.createElement("img", { id: 'image-1', src: hangar_icon_100_png_1.default, alt: "Logo" })))),
        react_1.default.createElement("div", { id: 'item-2' },
            react_1.default.createElement(learning_header_1.default, null))));
};
exports.default = Header;
