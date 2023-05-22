import {Link} from "react-router-dom";

import ChefB from "./icons_assets/restaurant chef B.jpg";

import "./Footer.css";

function Footer() {
    return(
        <footer id="footer">
            <img src={ChefB} alt="chef" />
            <div id="doormat">
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
            </div>
            <div id="contact" >
                <li>
                    <a href="/">Address</a>
                </li>
                <li>
                    <a href="/">Phone Number</a>
                </li>
                <li>
                    <a href="/" aria-label="On Click email">Email</a>
                </li>
            </div>
            <div id="social-media" >
                <li>
                    <a href="/" aria-label="On Click facebook">Facebook</a>
                </li>
                <li>
                    <a href="/" aria-label="On Click instagram">Instagram</a>
                </li>
                <li>
                    <a href="/" aria-label="On Click tiktok">tiktok</a>
                </li>
            </div>
        </footer>
    )
}

export default Footer;