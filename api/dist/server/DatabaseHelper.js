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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPrismaClient = exports.getPrismaClient = void 0;
const client_1 = require("@prisma/client");
let prisma;
const getPrismaClient = () => {
    if (!prisma) {
        throw new Error("No Prisma client has been setup yet");
    }
    return prisma;
};
exports.getPrismaClient = getPrismaClient;
const setupPrismaClient = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!prisma) {
        try {
            console.info('Connecting to PostgreSQL - catalog');
            prisma = new client_1.PrismaClient({
                datasourceUrl: 'postgresql://ddl:password@localhost:5432/catalog?schema=public'
            });
            yield prisma.$connect();
            console.info('Connected to PostgreSQL');
        }
        catch (err) {
            console.error("Failed to connect to PostgreSQL", err);
        }
    }
    return prisma;
});
exports.setupPrismaClient = setupPrismaClient;
