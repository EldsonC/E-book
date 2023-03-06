import { useDispatch } from "react-redux";
import { BooksStyle } from "../assets/styles/books";
import { showModalBook, hideModalBook } from "../redux/features/modalCardBookSlice";
import { BookCard } from "../shared/components/book-card";
import { books } from "../shared/mocks/books";
import { useSelector } from "react-redux";
import { stateModal } from "../redux/features/modalCardBookSlice";
import { ModalCardBook } from "../shared/components/modal-cardbook";

import { bookFound } from "../redux/features/searchSlice";

interface BookProps {
    cover?: string;
    name?: string;
    author?: string;
    gender?: string;
    year?: number;
    pages?: number;
}

export function Books() {
    const dispatch = useDispatch()
    const bookFind = useSelector(bookFound)

    const showModal = (idBook:string, element:HTMLElement) => {
        const elementPos = element
        const coordinates = elementPos.getBoundingClientRect();

        const top = coordinates.top;
        const left = coordinates.left;

        const data = [
            {
                idBook: idBook,
                top: top,
                left: left - 209
            },
        ]

        dispatch(showModalBook(data))
    }

    const modalState = useSelector(stateModal)

    const bookFilter = books.filter((book:BookProps) => book.name?.includes(
        bookFind.toLocaleLowerCase())
    )
    return (
        <BooksStyle>
            {/* {modalState ? <ModalCardBook/> : ""} */}
            {bookFilter.map((dataBook:BookProps, key:number) => {
                return (
                    <>
                    <div 
                        onMouseOver={(e) => showModal(key.toString(), e.currentTarget)}
                    >
                        <BookCard
                            key={key}
                            cover={dataBook.cover}
                        />
                    </div>
                    </>
                )
            })}
        </BooksStyle>
    )
}