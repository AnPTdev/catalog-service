import express, {Express} from "express";
import {setupRoutes} from "./Routes";
import { setupPrismaClient } from "./DatabaseHelper";

const setupExpress = () => express()

const startHTTP = async (expressApp : Express) =>{
    console.info(`Starting express server for local env`);

    return new Promise((resolve)=>{
        const port = 3000;
        const address = '0.0.0.0';
        expressApp.listen({port, address},()=>{
            console.info(`server ready at http://${address}:${port}`);
            resolve({});
        })
    })
}

const setupServer = async (): Promise<Express> => {
    const expressApp = setupExpress();
    expressApp.use(express.json());
    setupRoutes(expressApp);
    return expressApp;
}

export const startServer = async () => {
    console.info("Starting up server");
    const app = await setupServer();
    await startHTTP(app)
    await setupPrismaClient()
    return app;
}