import { Request, Response } from "express";
import express from "express";
import { validatePostRequest } from "../utils/Validations";
import { createCategory, getCategory } from "../services/CategoryService";

export const Category = express.Router();

const validateCreateCategoryRequest = (req: Request): void => {
  validatePostRequest(req);

  if (!req.body.name) {
    throw new Error("Error Validating: Category Name");
  }
};

Category.get("/", async (req: Request, res: Response) => {
  const result = await getCategory();

  res.status(200).json(result);

});

Category.post("/", async (req: Request, res: Response) => {
  validateCreateCategoryRequest(req);
  console.info("HAHAHA"+ req.body)
  const result = await createCategory(req.body.name);

  res.status(200).json(result);
});
