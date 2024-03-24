import React, { useState } from 'react';
import './BookForm.css';


function BookingForm({ dispatch, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    };

    const handleTimeChange = (e) => {
        setTime(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = {
        date,
        time,
        guests,
        occasion,
      };
      if (submitForm) {
        submitForm(formData);
      }
    };

    return (
      <div className="booking-form">
      <h2 className="section-title">Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date} onChange={handleDateChange} />

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.length > 0 ? (
          availableTimes.map((availableTime) => (
        <option key={availableTime}>{availableTime}</option>
    ))
      ) : (
      <option>No available times</option>
    )}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={handleOccasionChange}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" className="reserve-button" />
      </form>
    </div>
  );
}

export default BookingForm;