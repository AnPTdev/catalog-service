import { Request} from 'express';

export const validatePostRequest = (req: Request): void => {
    if(!req.body || Object.keys(req.body).length === 0){
        throw new Error("Error Validating: Post Request Body")
    }
}