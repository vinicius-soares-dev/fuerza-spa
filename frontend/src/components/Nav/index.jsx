import { Link } from "react-router-dom";

import '../../styles/styleNavbar.css';

function Header () {
    return (
        <header>
            <nav className="Navigation">
                <p className="nameText">Fuerza E-sports</p>
                <ul>
                    <li>
                        <Link to={"/"}
                        className="urlLink">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}

                        className="urlLink">Sobre</Link>
                    </li>
                    <li>
                        <Link  to={"/recruitment"}
                        className="urlLink">Recrutamento</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;