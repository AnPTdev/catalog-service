import {Request, Response} from "express";
import express from "express";

export const Category = express.Router()

Category.get('/', (req: Request, res: Response) => {
    res.send('category')
})