import { SearchIcon } from "../../assets/icons/search";
import { SearchAreaStyle } from "../../assets/styles/search-area";

export function SearchArea() {
    return (
        <SearchAreaStyle>
            <input type="text" placeholder="Search book"/>
            <SearchIcon/>
        </SearchAreaStyle>
    )
}