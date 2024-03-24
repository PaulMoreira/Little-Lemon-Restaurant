import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  const availableTimes = ['17:00', '18:00', '19:00'];
  const dispatch = jest.fn();

  test('renders the form with correct initial values and HTML5 validation attributes', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

    // Initial values
    expect(screen.getByLabelText('Choose date')).toHaveValue('');
    expect(screen.getByLabelText('Choose time')).toHaveValue(availableTimes[0]);
    expect(screen.getByLabelText('Number of guests')).toHaveValue(1);
    expect(screen.getByLabelText('Occasion')).toHaveValue('Birthday');
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();

    // HTML5 validation attributes
    expect(screen.getByLabelText('Choose date')).toHaveAttribute('required');
    expect(screen.getByLabelText('Number of guests')).toHaveAttribute('min', '1');
  });

  test('form inputs change correctly and validate form', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

    // Change inputs
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-06-15' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: 3 } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });

    // Validate changes
    expect(screen.getByLabelText('Choose date')).toHaveValue('2023-06-15');
    expect(screen.getByLabelText('Choose time')).toHaveValue('18:00');
    expect(screen.getByLabelText('Number of guests')).toHaveValue(3);
    expect(screen.getByLabelText('Occasion')).toHaveValue('Anniversary');
  });

  test('dispatches the correct action when time changes', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '19:00' } });
    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '19:00' });
  });

  test('submit button is initially disabled and enabled after form validation', () => {
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);

    const submitButton = screen.getByText('Make Your reservation');
    // Check the initial state of the submit button
    expect(submitButton).toBeDisabled();

    // Simulate filling the form with valid data
    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-06-15' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: availableTimes[0] } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

    // Assuming the form now considers itself valid and enables the submit button
    expect(submitButton).not.toBeDisabled();
  });
});
