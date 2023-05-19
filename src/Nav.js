import { Link } from "react-router-dom";

import logo from './icons_assets/Logo.svg';

function Nav() {
    return(
        <nav className="navbar-nav">
            <ul>
                <img src={logo} alt="logo" />
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/#about">About</Link>
                </li>
                <li>
                    <Link to="/#hero">Hero</Link>
                </li>
                <li>
                    <Link to="/#reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/#specials">Specials</Link>
                </li>
                <li>
                    <Link to="booking">Reservations</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;