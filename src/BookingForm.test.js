import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { updateTimes, initializeTimes } from "./Main.js";
import {fetchAPI, submitAPI} from "./api.js";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Test update times', () => {
    const times = fetchAPI(new Date("05/10/2023"));
    const input = {availableTimes: times}
    const updateTimesOutput = updateTimes(input, "05/10/2023");
    expect(updateTimesOutput).toEqual({availableTimes: times});
})

test('Test initialize times', () => {
    const initializeTimesOutput = initializeTimes();
    const lengthTimeArr = initializeTimesOutput.availableTimes.length;
    expect(lengthTimeArr).toBeGreaterThan(0);
})