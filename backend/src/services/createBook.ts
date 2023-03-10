import { Books } from "../entities/books";
import { AppDataSource } from "../database";

interface BookProps {
    cover: string;
    name: string;
    author: string;
    category: string;
    year: number;
    pages: number;
}

export class CreateBookService {
    async createBook({
        cover,
        name,
        author,
        category,
        year,
        pages
    }:BookProps): Promise<Books | Error> {
        const repository = AppDataSource.getMongoRepository(Books);

        const book = repository.create({
            cover,
            name,
            author,
            category,
            year,
            pages
        })

        await repository.save(book)
        return book
    }
}