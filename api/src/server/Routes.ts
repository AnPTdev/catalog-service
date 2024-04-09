import {Express} from "express";
import {Category} from "./controllers/CategoryController"
import {getHealth} from "./controllers/HealthController";
export enum Routes {
    HEALTH = '/health',
    CATEGORY = '/v1/category'
}

export const setupRoutes = (app: Express) =>{
    app.get(Routes.HEALTH,getHealth)
    app.use(Routes.CATEGORY,Category)
}