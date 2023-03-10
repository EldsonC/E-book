import { Router } from "express";
import { CreateBookController } from "../controllers/createBook";

const router = Router()

router.post("/create-book", new CreateBookController().execute)

export { router }