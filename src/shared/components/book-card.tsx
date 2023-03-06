import { BookCardStyle } from "../../assets/styles/book-card";

interface BookProps {
    cover?: string;
    name?: string;
    author?: string;
    gender?: string;
    year?: number;
    pages?: number;
}

export function BookCard({
    cover,
    name,
    author,
    gender,
    year,
    pages
}:BookProps) {
    return (
        <BookCardStyle>
            <img src={cover} alt="" />
        </BookCardStyle>
    )
}