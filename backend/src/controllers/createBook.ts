import { CreateBookService } from "../services/createBook";
import { Request, Response } from "express";

export class CreateBookController {
    async execute(request:Request, response:Response) {
        try {
            const {
                cover,
                name,
                author,
                category,
                year,
                pages
            } = request.body

            const book = new CreateBookService()

            const result = await book.createBook({
                cover,
                name,
                author,
                category,
                year,
                pages
            })

            if (result instanceof Error) {
                return response.status(400).json(result.message)
            }

            return response.json(result)
        } catch(err) {
            console.error(err)
            response.status(500).json({
                message: "Internal Error"
            })
        }

    }
}