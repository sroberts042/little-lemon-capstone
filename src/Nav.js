import { Link } from "react-router-dom";

import logo from './icons_assets/Logo.svg';

function Nav() {
    return(
        <nav className="navbar-nav">
            <ul>
                <img src={logo} alt="logo" />
                <li>
                    <Link to="/" aria-label="On Click Home">Home</Link>
                </li>
                <li>
                    <Link to="/" aria-label="On Click About">About</Link>
                </li>
                <li>
                    <Link to="/" aria-label="On Click Hero">Hero</Link>
                </li>
                <li>
                    <Link to="/" aria-label="On Click Reviews">Reviews</Link>
                </li>
                <li>
                    <Link to="/" aria-label="On Click Specials">Specials</Link>
                </li>
                <li>
                    <Link to="booking" aria-label="On Click Booking">Reservations</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;