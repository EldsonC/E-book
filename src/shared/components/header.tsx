import { useDispatch } from "react-redux";
import { HeaderStyle } from "../../assets/styles/header";
import { showModalAddBook } from "../../redux/features/modalAddBook";
import { SearchArea } from "./search-area";

export function Header() {
    const dispatch = useDispatch()
    const showModal = () => {
        dispatch(showModalAddBook())
    }
    
    return (
        <HeaderStyle>
            <SearchArea/>
            <button onClick={() => showModal()}>
                New book
            </button>
        </HeaderStyle>
    )
}