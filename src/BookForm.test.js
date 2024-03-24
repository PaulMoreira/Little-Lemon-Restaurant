import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders the form with correct initial values', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const dispatch = jest.fn();
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    );

    expect(screen.getByLabelText('Choose date')).toHaveValue('');
    expect(screen.getByLabelText('Choose time')).toHaveValue(availableTimes[0]);
    expect(screen.getByLabelText('Number of guests')).toHaveValue(1);
    expect(screen.getByLabelText('Occasion')).toHaveValue('Birthday');
    expect(screen.getByText('Make Your reservation')).toBeInTheDocument();
  });

  test('updates the form values when input changes', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const dispatch = jest.fn();
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    );

    fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2023-06-15' } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Anniversary' } });

    expect(screen.getByLabelText('Choose date')).toHaveValue('2023-06-15');
    expect(screen.getByLabelText('Choose time')).toHaveValue('18:00');
    expect(screen.getByLabelText('Number of guests')).toHaveValue(4);
    expect(screen.getByLabelText('Occasion')).toHaveValue('Anniversary');
  });

  test('dispatches the correct action when time changes', () => {
    const availableTimes = ['17:00', '18:00', '19:00'];
    const dispatch = jest.fn();
    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    );

    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '19:00' } });

    expect(dispatch).toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: '19:00' });
  });
});