import { useState } from "react";

import "./BookingForm.css";

const BookingForm = (props) => {

    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [numberGuests, setNumberGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        console.log(e);
        props.dispatch(e.target.value);
        setResDate(e.target.value);
    }

    return(
        <form id="reservation-form" onSubmit={props.submitBooking}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date"
                    id="res-date"
                    value={resDate}
                    onChange={(e) => handleDateChange(e)}
                    required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time"
                    value={resTime}
                    onChange={(e) => setResTime(e.target.value)}
                    required>
                {props.state && props.state.availableTimes?props.state.availableTimes.map((a, i) => {
                    return (
                        <option key={i}>{a}</option>
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
                    onChange={(e) => setOccasion(e.target.value)}
                    required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit" disabled={resDate === ""} aria-label="Submit Form">Book Now</button>
        </form>
    )
}

export default BookingForm;