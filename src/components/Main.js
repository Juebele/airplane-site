"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Necessary Imports
const react_1 = __importStar(require("react"));
require("../App.css");
const four_forces_1 = __importDefault(require("./sub-components/four-forces"));
const aerodynamics_1 = __importDefault(require("./sub-components/aerodynamics"));
const stalls_spins_1 = __importDefault(require("./sub-components/stalls-spins"));
const airspeed_1 = __importDefault(require("./sub-components/airspeed"));
// import TestSubComponent from './sub-components/test-sub-component';
function Main() {
    // Logic to change tabs when you click on the buttons
    const [activeTab, setActiveTab] = (0, react_1.useState)(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (react_1.default.createElement("div", { className: 'container-2' },
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", { className: 'learning-button', onClick: () => handleTabClick(0) }, "Aerodynamics"),
            react_1.default.createElement("button", { className: 'learning-button', onClick: () => handleTabClick(1) }, "Forces of Flight"),
            react_1.default.createElement("button", { className: 'learning-button', onClick: () => handleTabClick(2) }, "AoA, Stalls, and Spins"),
            react_1.default.createElement("button", { className: 'learning-button', onClick: () => handleTabClick(3) }, "Airspeed")),
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", null,
                    activeTab === 0 && react_1.default.createElement(aerodynamics_1.default, null),
                    activeTab === 1 && react_1.default.createElement(four_forces_1.default, null),
                    activeTab === 2 && react_1.default.createElement(stalls_spins_1.default, null),
                    activeTab === 3 && react_1.default.createElement(airspeed_1.default, null))))));
}
exports.default = Main;
