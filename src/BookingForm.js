import { useState } from "react";

import "./BookingForm.css";

const BookingForm = (props) => {

    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [numberGuests, setNumberGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    return(
        <form id="reservation-form" onSubmit={props.submitBooking}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
                    id="res-date"
                    value={resDate}
                    onChange={(e) => {props.dispatch(e.target.value); setResDate(e.target.value)}}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time "
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}>
                {props.state && props.state.availableTimes?props.state.availableTimes.map((a) => {
                    return (
                        <option>{a}</option>
                    )
                }):null}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={numberGuests}
                    onChange={(e) => setNumberGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">Book Now</button>
        </form>
    )
}

export default BookingForm;