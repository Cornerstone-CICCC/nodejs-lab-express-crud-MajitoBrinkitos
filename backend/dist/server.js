"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = require('path');
const dotenv_1 = __importDefault(require("dotenv"));
const welcome_middleware_1 = require("./middleware/welcome.middleware");
const cors_1 = __importDefault(require("cors"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const employees_routes_1 = __importDefault(require("./routes/employees.routes"));
dotenv_1.default.config();
//Create server
const app = (0, express_1.default)();
//Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(welcome_middleware_1.welcome);
//Files from the frontend
app.use(express_1.default.static(path.join(__dirname, '../../frontend')));
//Routes
//Home
app.use("/", page_routes_1.default);
//Employees
app.use("/employees", employees_routes_1.default);
//Fallback
app.use((req, res, next) => {
    res.status(404).send("Page not found");
});
//Start server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
