import { NavLink } from "react-router-dom";
import { BookIcon } from "../../assets/icons/book";
import { LeaveIcon } from "../../assets/icons/leave";
import { Logocloud } from "../../assets/icons/logo-cloud";
import { MenuIcon } from "../../assets/icons/menu";
import { StudentIcon } from "../../assets/icons/student";
import { SidebarStyle } from "../../assets/styles/sidebar";


import { useDispatch} from "react-redux";
import { showModalAddBook } from "../../redux/features/modalAddBook";

export function Sidebar() {
    const dispatch = useDispatch()
    const showModal = () => {
        dispatch(showModalAddBook())
    }
    return (
        <SidebarStyle>
            <div className="container-top">
                <header>
                    <div className="menu-container">
                        <MenuIcon/>
                    </div>
                    <div className="logo-container">
                        <Logocloud/>
                    </div>
                </header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"} className="nav-button-style">
                                <BookIcon/>
                                <span>Books</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="nav-button-style">
                                <StudentIcon/>
                                <span>Students</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"} className="nav-button-style">
                                <LeaveIcon/>
                                <span>Get or Back</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container-bottom">
                <button onClick={() => showModal()}>
                    New book
                </button>
            </div>
        </SidebarStyle>
    )
}