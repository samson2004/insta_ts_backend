"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const liverouter = (0, express_1.Router)();
liverouter.get("/", (req, res) => {
    res.json({ "data": "server is live" });
});
exports.default = liverouter;
