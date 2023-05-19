import { Routes, Route } from "react-router-dom";

import BookingPage from "./BookingPage";
import Home from "./Home";

function Main() {
    return(
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    )
}

export default Main;