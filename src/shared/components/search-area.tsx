import { SearchIcon } from "../../assets/icons/search";
import { SearchAreaStyle } from "../../assets/styles/search-area";

import { useDispatch } from "react-redux";
import { findBook } from "../../redux/features/searchSlice";

export function SearchArea() {
    const dispatch = useDispatch()

    const findBy = (title:string) => {
        dispatch(findBook(title))
    }
    return (
        <SearchAreaStyle>
            <input 
                type="text" 
                placeholder="Search book"
                onChange={(e) => findBy(e.target.value)}
            />
            <SearchIcon/>
        </SearchAreaStyle>
    )
}