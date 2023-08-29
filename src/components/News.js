"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../App.css");
const Header_1 = __importDefault(require("./Header"));
const airshow_jpg_1 = __importDefault(require("../assets/airshow.jpg"));
const BlogPost = require('../schemas/blogpost'); // Assuming the schema is in a file called blogPostModel.js
const newBlogPost = {
    title: 'News page test',
    body: 'This is a test on the news page...',
};

const News = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("h1", null, "The latest news is right here!"),
        react_1.default.createElement("div", { class: 'article' },
            react_1.default.createElement("h2", null, "Russia's MAKS Air Show Has Been Canceled"),
            react_1.default.createElement("h4", null, "This is the first time the event has ever been canceled"),
            react_1.default.createElement("img", { src: airshow_jpg_1.default }),
            react_1.default.createElement("p", null, "In a year filled with the anticipated return of numerous conventions and airshows, Russia's flagship biennial airshow - the 16th International Air and Space Salon (MAKS) 2023, was initially planned to be held for two days from July 23rd this year. However, the event's organizers have confirmed that it will be canceled this year."),
            react_1.default.createElement("button", { onClick: "" }, "Create a new blog post!"))));
};
exports.default = News;
