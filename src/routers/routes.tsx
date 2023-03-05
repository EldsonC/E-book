import { Route, Routes } from "react-router-dom";
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
        </Routes>
    )
}