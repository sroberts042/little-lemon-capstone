import { userEvent, fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import App from './App';
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

test('Test number guests', () => {
    const handleSubmit = jest.fn();

    render(<BookingForm handleSubmit={handleSubmit}/>);
    // const dateBox = screen.getByLabelText(/Choose date/);
    // const timeBox = screen.getByLabelText(/Choose time/);
    const numberGuestsBox = screen.getByLabelText(/Number of guests/);
    // const occasionBox = screen.getByLabelText(/Occasion/);
    const formButton = screen.getByRole('button');
    // fireEvent.mouseDown(dateBox);
    fireEvent.input(numberGuestsBox, { target: { value: "1" } });
    fireEvent.click(formButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(numberGuestsBox).toHaveValue(1);
})

test('Test occasion', () => {
    const handleSubmit = jest.fn();

    render(<BookingForm handleSubmit={handleSubmit}/>);
    // const dateBox = screen.getByLabelText(/Choose date/);
    // const timeBox = screen.getByLabelText(/Choose time/);
    // const numberGuestsBox = screen.getByLabelText(/Number of guests/);
    const occasionBox = screen.getByLabelText(/Occasion/);
    const formButton = screen.getByRole('button');
    // fireEvent.mouseDown(dateBox);
    fireEvent.input(occasionBox, { target: { value: "Birthday" } });
    fireEvent.click(formButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(occasionBox).toHaveValue("Birthday");
})

test('Test disabled submit', () => {
    const handleSubmit = jest.fn();

    render(<BookingForm handleSubmit={handleSubmit}/>);
    const formButton = screen.getByRole('button');
    fireEvent.click(formButton);

    expect(handleSubmit).not.toHaveBeenCalled();
})

test('Test Date', () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();
    const state = jest.fn();

    render(<BookingForm handleSubmit={handleSubmit} dispatch={dispatch} state={state}/>);
    const dateBox = screen.getByLabelText(/Choose date/);
    const formButton = screen.getByRole('button');
    fireEvent.change(dateBox, {target:{value:"2023-05-22"}})
    fireEvent.click(formButton);

    expect(dispatch).toHaveBeenCalled();
    expect(dateBox).toHaveValue("2023-05-22");
})
