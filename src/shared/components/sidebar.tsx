import { NavLink } from "react-router-dom";
import { BookIcon } from "../../assets/icons/book";
import { Logocloud } from "../../assets/icons/logo-cloud";
import { MenuIcon } from "../../assets/icons/menu";
import { StudentIcon } from "../../assets/icons/student";
import { SidebarStyle } from "../../assets/styles/sidebar";

export function Sidebar() {
    return (
        <SidebarStyle>
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
                </ul>
            </nav>
        </SidebarStyle>
    )
}