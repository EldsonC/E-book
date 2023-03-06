import { useDispatch } from "react-redux";
import { BooksStyle } from "../assets/styles/books";
import { showModalBook, hideModalBook } from "../redux/features/modalCardBookSlice";
import { BookCard } from "../shared/components/book-card";
import { books } from "../shared/mocks/books";
import { useSelector } from "react-redux";
import { stateModal } from "../redux/features/modalCardBookSlice";
import { ModalCardBook } from "../shared/components/modal-cardbook";

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

    const showModal = (idBook:string, element:HTMLElement) => {
        const elementPos = element
        const coordinates = elementPos.getBoundingClientRect();

        const top = coordinates.top;
        const left = coordinates.left;

        const data = [
            {
                idBook: idBook,
                top: top - 120,
                left: left - 209
            },
        ]

        dispatch(showModalBook(data))
    }

    const modalState = useSelector(stateModal)
    return (
        <BooksStyle>
            {modalState ? <ModalCardBook/> : ""}
            {books.map((dataBook:BookProps, key:number) => {
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