import React, { useReducer} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { fetchAPI, submitAPI } from './src/api';



export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload)
        .then((times) => {
          if (times.length > 0) {
            return times;
          } else {
            // Return the current state when no available times are found
            return state;
          }
        })
        .catch(() => {
          // Return the current state in case of an error
          return state;
        });
    default:
      return state;
  }
}

export function initializeTimes() {
  const today = new Date().toISOString().slice(0, 10);
  return fetchAPI(today);
}


function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitForm = async (formData) => {
      submitAPI(formData)
        .then((success) => {
          if (success) {
            navigate('/confirmed-booking');
          }
        })
        .catch((error) => {
          console.log('Form submission error:', error);
        });
      };

  return (
    <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route
        path="/booking" 
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />}
        />
        </Routes>
        {/* <Specials />
        <Testimonials />
        <About /> */}
    </main>
  );
}

export default Main;