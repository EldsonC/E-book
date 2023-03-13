import { Router } from "express";
import { CreateBookController } from "../controllers/createBook";
import { CreateCategoryController } from "../controllers/createCategory";

const router = Router()

//create
router.post("/create-book", new CreateBookController().execute)
router.post("/create-category", new CreateCategoryController().execute)

export { router }