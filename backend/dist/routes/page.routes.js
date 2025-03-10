"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const path = require('path');
//Home
pageRouter.get('/', (req, res) => {
    res.status(200).send("Welcome to the homepage");
});
// Employee List
pageRouter.get("/employees", (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/index.html'));
});
// Admin
pageRouter.get("/admin", (req, res) => {
    res.status(401).send("You are not allowed to access this page!");
});
exports.default = pageRouter;
