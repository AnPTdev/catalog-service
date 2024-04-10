import {Request, Response} from "express";
import express from "express";
import {validatePostRequest} from "../utils/Validations";

export const Category = express.Router()

const validateCreateCategoryRequest = (req: Request): void => {
    validatePostRequest(req);

    if (!req.body.name) {
        throw new Error("Error Validating: Category Name")
    }
}


Category.get('/', (req: Request, res: Response) => {
    res.send('category')
})

Category.post('/', (req: Request, res: Response) => {
    console.log(req.body)
    validateCreateCategoryRequest(req)

    res.status(200);
    res.json(req.body)
})

