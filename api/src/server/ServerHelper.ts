import express, {Express} from "express";
import {setupRoutes} from "./Routes";

const setupExpress = () => express()

const startHTTP = async (expressApp : Express) =>{
    console.log(`Starting express server for local env`);

    return new Promise((resolve)=>{
        const port = 3000;
        const address = '0.0.0.0';
        expressApp.listen({port, address},()=>{
            console.log(`server ready at http://${address}:${port}`);
            resolve({});
        })
    })
}

const setupServer = async (): Promise<Express> => {
    const expressApp = setupExpress();
    setupRoutes(expressApp);
    return expressApp;
}

export const startServer = async () => {
    console.log("Starting up server");
    const app = await setupServer();
    await startHTTP(app)
    return app;
}