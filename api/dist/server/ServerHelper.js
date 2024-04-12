"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const Routes_1 = require("./Routes");
const DatabaseHelper_1 = require("./DatabaseHelper");
const setupExpress = () => (0, express_1.default)();
const startHTTP = (expressApp) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`Starting express server for local env`);
    return new Promise((resolve) => {
        const port = 3000;
        const address = '0.0.0.0';
        expressApp.listen({ port, address }, () => {
            console.info(`server ready at http://${address}:${port}`);
            resolve({});
        });
    });
});
const setupServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const expressApp = setupExpress();
    expressApp.use(express_1.default.json());
    (0, Routes_1.setupRoutes)(expressApp);
    return expressApp;
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    console.info("Starting up server");
    yield (0, DatabaseHelper_1.setupPrismaClient)();
    const app = yield setupServer();
    yield startHTTP(app);
    return app;
});
exports.startServer = startServer;
