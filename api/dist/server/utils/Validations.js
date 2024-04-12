"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePostRequest = void 0;
const validatePostRequest = (req) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        throw new Error("Error Validating: Post Request Body");
    }
};
exports.validatePostRequest = validatePostRequest;
