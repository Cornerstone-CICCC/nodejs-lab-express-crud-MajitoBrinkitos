"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require('path');
const employeeRouter = (0, express_1.Router)();
const employees = [];
/**
 * GET
 */
employeeRouter.get('/', (req, res) => {
    res.status(200).json(employees);
});
employeeRouter.get('/employees', (req, res) => {
    res.status(200).json(employees);
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
});
exports.default = employeeRouter;
