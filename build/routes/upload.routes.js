"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multerdiskstorage_middleware_1 = __importDefault(require("../middleware/multerdiskstorage.middleware"));
const image_controller_1 = require("../controller/image.controller");
const uploadrouter = (0, express_1.Router)();
uploadrouter.post('/upload', multerdiskstorage_middleware_1.default.single('image'), image_controller_1.uploadImageController);
uploadrouter.get('/detail/:id', image_controller_1.getdetailedImageController); // not in use
uploadrouter.get('/:id', image_controller_1.geturlImageController);
exports.default = uploadrouter;
