import { Route, Routes } from "react-router-dom";
import { BookDetails } from "../pages/book-details";
import { Books } from "../pages/books";
import { Header } from "../shared/components/header";
import { Sidebar } from "../shared/components/sidebar";
import { Subheader } from "../shared/components/subheader";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={ 
                <>
                    <Header/>
                    <Subheader/>
                    <Sidebar/>
                    <Books/> 
                </>
            }/>

            <Route path="/details" element={
                <>
                    <Header/>
                    <Subheader/>
                    <Sidebar/>
                    <BookDetails/>
                </>
            }/>
        </Routes>
    )
}