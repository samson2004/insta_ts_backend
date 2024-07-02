"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const live_routes_1 = __importDefault(require("./live.routes"));
const express_1 = require("express");
const upload_routes_1 = __importDefault(require("./upload.routes"));
const router = (0, express_1.Router)();
router.use('/live', live_routes_1.default);
router.use('/uploadroute', upload_routes_1.default);
//api/insta/v1/uploadroute/uploads
//api/insta/v1/uploadroute/:i
exports.default = router;
