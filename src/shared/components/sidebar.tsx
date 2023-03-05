import { Logocloud } from "../../assets/icons/logo-cloud";
import { MenuIcon } from "../../assets/icons/menu";
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

                    </li>
                    <li>
                        
                    </li>
                </ul>
            </nav>
        </SidebarStyle>
    )
}