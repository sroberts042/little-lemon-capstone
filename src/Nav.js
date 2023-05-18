import logo from './icons_assets/Logo.svg';

import './Nav.css';

function Nav() {
    return(
        <nav className="navbar-nav">
            <ul>
                <img src={logo} alt="logo" />
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;