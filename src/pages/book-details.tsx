import { AuthorIcon } from "../assets/icons/author";
import { PagesIcon } from "../assets/icons/pages";
import { YearIcon } from "../assets/icons/year";
import { BookDetailsStyle } from "../assets/styles/book-details";
import { books } from "../shared/mocks/books";

import { dataDetails } from "../redux/features/detailsbookSlice";
import { useSelector } from "react-redux";
import { BookCard } from "../shared/components/book-card";

interface BookProps {
    cover: string;
    name: string;
    author: string;
    gender: string;
    year: number;
    pages: number;
}

export function BookDetails() {
    const dataBook = useSelector(dataDetails)

    const bookFind = dataBook.author

    const bookFilter = books.filter((book:BookProps) => book.author?.includes(
        bookFind.toLocaleLowerCase())
    )

    return (
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
                                <span>motivation</span>
                            </div>
                        </div>

                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                        <BookCard
                            cover={dataBook.cover}
                        />
                    )
                })}
            </div>
        </BookDetailsStyle>
    )
}