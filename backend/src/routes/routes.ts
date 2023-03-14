import { Router } from "express";
import { CreateBookController } from "../controllers/createBook";
import { CreateCategoryController } from "../controllers/createCategory";
import { GetBookController } from "../controllers/get-books";
import { GetCategoriesController } from "../controllers/get-categories";

const router = Router()

//create
router.post("/create-book", new CreateBookController().execute)
router.post("/create-category", new CreateCategoryController().execute)

//get Data
router.get("/get-books", new GetBookController().execute)
router.get("/get-categories", new GetCategoriesController().execute)

export { router }