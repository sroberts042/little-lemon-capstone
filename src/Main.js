import { Routes, Route, useNavigate } from "react-router-dom";

import BookingPage from "./BookingPage";
import Home from "./Home";
import { useReducer } from "react";

import {fetchAPI, submitAPI} from "./api.js";
import ConfirmedBooking from "./ConfirmedBooking";

export const initializeTimes = () => {
    const times = fetchAPI(new Date("05/20/2023"));
    return(
        {
            availableTimes: times
        }
    )
}

export const updateTimes = (state, action) => {
    const times = fetchAPI(new Date(action));
    return {availableTimes: times};
}

function Main() {

    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    const navigate = useNavigate();

    const submitBooking = (formData) => {
        const bookingConfirmed = submitAPI(formData);
        if (bookingConfirmed) {
            navigate("/booking-confirmed");
        }
    }

    return(
        <main>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/booking"
                        element={<BookingPage state={state}
                                              dispatch={dispatch}
                                              submitBooking={submitBooking}/>}></Route>
                <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
            </Routes>
        </main>
    )
}

export default Main;