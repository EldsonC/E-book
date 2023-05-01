import { useDispatch } from "react-redux";
import { BooksStyle } from "../assets/styles/books";
import { showModalBook } from "../redux/features/modalCardBookSlice";
import { BookCard } from "../shared/components/book-card";

import { useSelector } from "react-redux";
import { stateModal } from "../redux/features/modalCardBookSlice";

import { bookFound } from "../redux/features/searchSlice";
import { stateModalAddBook } from "../redux/features/modalAddBook";
import { ModalAddBook } from "../shared/components/modal-add-book";
import { setDetails } from "../redux/features/detailsbookSlice";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../shared/services/api";

interface BookProps {
    cover: string;
    name: string;
    author: string;
    year: number;
    pages: number;
    category_id: string;
}

export function Books() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const bookFind = useSelector(bookFound)

    const [books , setBooks] = useState([])

    useEffect(() => {
        api.get("/get-books").then((result) => {
            console.log(result.data)
            setBooks(result.data)
        })
    }, [])

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

    const setDetailsBook = (
        cover: string, 
        name: string,
        author: string,
        year: number,
        pages: number,
        category: string,
    ) => {

        const data = [
            {
                cover: cover,
                name: name,
                author: author,
                year: year,
                pages: pages,
                category: category

            }
        ]
        dispatch(setDetails(data))

        navigate("/details")
    }

    const modalState = useSelector(stateModal)
    const modaladdbook = useSelector(stateModalAddBook)

    const bookFilter = books.filter((book:BookProps) => book.name.includes(
        bookFind.toLowerCase())
    )

    return (
        <>
        
            {modaladdbook ? <ModalAddBook/> : ""}
            <BooksStyle>
                {bookFilter.map((dataBook:BookProps, key:number) => {
                    return (
                        <>
                        <div 
                            key={key} 
                            onMouseOver={(e) => showModal(key.toString(), e.currentTarget)}
                            onClick={() => setDetailsBook(
                                dataBook.cover,
                                dataBook.name,
                                dataBook.author,
                                dataBook.year,
                                dataBook.pages,
                                dataBook.category_id
                            )}
                        >
                            <BookCard
                            key={key}
                                cover={dataBook.cover}
                                name={dataBook.name}
                            />
                        </div>
                        </>
                    )
                })}
            </BooksStyle>
        </>
    )
}