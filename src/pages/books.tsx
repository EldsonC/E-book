import { BooksStyle } from "../assets/styles/books";
import { BookCard } from "../shared/components/book-card";
import { books } from "../shared/mocks/books";

interface BookProps {
    cover?: string;
    name?: string;
    author?: string;
    gender?: string;
    year?: number;
    pages?: number;
}

export function Books() {
    return (
        <BooksStyle>
            {books.map((dataBook:BookProps) => {
                return (
                    <BookCard
                        cover={dataBook.cover}
                    />
                )
            })}
        </BooksStyle>
    )
}