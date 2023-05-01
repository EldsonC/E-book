import { BookCardStyle } from "../../assets/styles/book-card";
import { useDispatch } from "react-redux";
import { showModalBook } from "../../redux/features/modalCardBookSlice";

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
    pages,
}:BookProps) {
    return (
        <BookCardStyle>
            <span>{name}</span>
            <img src={cover} alt="" /> 
        </BookCardStyle>
    )
}