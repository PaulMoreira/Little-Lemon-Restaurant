import React, { useReducer} from 'react';
import { Routes, Route } from 'react-router-dom';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import HomePage from './HomePage';
import BookingPage from './BookingPage';


function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    function updateTimes(state, action) {
        // For now, return the same available times regardless of the date
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }

    function initializeTimes() {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }

  return (
    <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route
        path="/booking" 
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
        </Routes>
        <Specials />
        <Testimonials />
        <About />
    </main>
  );
}

export default Main;