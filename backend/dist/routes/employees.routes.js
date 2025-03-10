"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require('path');
const employeeRouter = (0, express_1.Router)();
const employees = [
    { id: '1', firstname: 'John', lastname: 'Doe', age: 35, isMarried: true },
    { id: '2', firstname: 'Jane', lastname: 'Smith', age: 28, isMarried: false },
];
/**
 * GET
 */
employeeRouter.get('/', (req, res) => {
    res.status(200).json(employees);
});
employeeRouter.get('/employees', (req, res) => {
    res.status(200).json(employees);
});
exports.default = employeeRouter;
