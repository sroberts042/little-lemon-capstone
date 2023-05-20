import {Link} from "react-router-dom";

import ChefB from "./icons_assets/restaurant chef B.jpg";

import "./Footer.css";

function Footer() {
    return(
        <footer id="footer">
            <img src={ChefB} alt="chef image" />
            <div id="doormat">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Hero</Link>
                </li>
                <li>
                    <Link to="/">Reviews</Link>
                </li>
                <li>
                    <Link to="/">Specials</Link>
                </li>
                <li>
                    <Link to="booking">Reservations</Link>
                </li>
            </div>
            <div id="contact" >
                <li>
                    <a>Address</a>
                </li>
                <li>
                    <a>Phone Number</a>
                </li>
                <li>
                    <a>Email</a>
                </li>
            </div>
            <div id="social-media" >
                <li>
                    <a>Facebook</a>
                </li>
                <li>
                    <a>Instagram</a>
                </li>
                <li>
                    <a>tiktok</a>
                </li>
            </div>
        </footer>
    )
}

export default Footer;