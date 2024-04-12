"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const express_1 = __importDefault(require("express"));
const Validations_1 = require("../utils/Validations");
const DatabaseHelper_1 = require("../DatabaseHelper");
exports.Category = express_1.default.Router();
const client = (0, DatabaseHelper_1.getPrismaClient)();
const validateCreateCategoryRequest = (req) => {
    (0, Validations_1.validatePostRequest)(req);
    if (!req.body.name) {
        throw new Error("Error Validating: Category Name");
    }
};
exports.Category.get('/', (req, res) => {
    res.send('category');
});
exports.Category.post('/', (req, res) => {
    console.log(req.body);
    validateCreateCategoryRequest(req);
    const result = client.category.create({ data: req.body });
    res.status(200);
    res.json(result);
});
