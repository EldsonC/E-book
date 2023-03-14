import { AuthorIcon } from "../assets/icons/author";
import { PagesIcon } from "../assets/icons/pages";
import { YearIcon } from "../assets/icons/year";
import { BookDetailsStyle } from "../assets/styles/book-details";

import { dataDetails, setDetails } from "../redux/features/detailsbookSlice";
import { useDispatch, useSelector } from "react-redux";
import { BookCard } from "../shared/components/book-card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../shared/services/api";
import { CategoryIcon } from "../assets/icons/gender";
import { stateModalAddBook } from "../redux/features/modalAddBook";
import { ModalAddBook } from "../shared/components/modal-add-book";

interface BookProps {
    cover: string;
    name: string;
    author: string;
    year: number;
    pages: number;
    category_id: string;
}

export function BookDetails() {
    const dataBook = useSelector(dataDetails)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [books , setBooks] = useState([])


    const bookFind = dataBook.author

    useEffect(() => {
        api.get("/get-books").then((result) => {
            console.log(result.data)
            setBooks(result.data)
        })
    }, [])

    const bookFilter = books.filter((book:BookProps) => book.author?.includes(
        bookFind.toLocaleLowerCase())
    )

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
        window.scrollTo(0, 0)
    }

    const modaladdbook = useSelector(stateModalAddBook)

    return (
        <>
            {modaladdbook ? <ModalAddBook/> : ""}
            <BookDetailsStyle>
                <div className="container-details">
                    <div className="cover-bg">
                        <img src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className="container-left">
                        <div className="cover-book">
                            <img src={dataBook.cover} alt="" />
                        </div>
                        <div className="container-right">
                            <h1>{dataBook.name}</h1>
                            <div className="data-details">
                                <div className="container-card">
                                    <AuthorIcon/>
                                    <span>{dataBook.author}</span>
                                </div>
                                <div className="container-card">
                                    <YearIcon/>
                                    <span>{dataBook.year}</span>
                                </div>
                                <div className="container-card">
                                    <PagesIcon/>
                                    <span>{dataBook.pages}</span>
                                </div>
                                <div className="container-card">
                                    <CategoryIcon/>
                                    <span>{dataBook.category}</span>
                                </div>
                            </div>

                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book. It has survived not only five centuries, but also 
                            the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum.
                            </p>

                            <div className="button-container">
                                <button id="delete-btn">
                                    Delete
                                </button>
                                <button id="edit-btn">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="others-books">
                    {bookFilter.map((dataBook:BookProps) => {
                        return (
                            <div onClick={(() => setDetailsBook(
                                dataBook.cover,
                                dataBook.name,
                                dataBook.author,
                                dataBook.year,
                                dataBook.pages,
                                dataBook.category_id
                                
                            ))}>
                                <BookCard
                                    cover={dataBook.cover}
                                />
                            </div>
                        )
                    })}
                </div>
                
            </BookDetailsStyle>
        </>
    )
}