import BookingForm from "./BookingForm";

import "./BookingPage.css";

const BookingPage = (props) => {
    return(
        <div id="booking-page">
            <h2>Book a Table</h2>
            <BookingForm state={props.state}
                        dispatch={props.dispatch}
                        submitBooking={props.submitBooking}/>
        </div>
    )
}

export default BookingPage;