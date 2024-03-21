import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

function Main() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/booking" element={<BookingPage />} />
                </Routes>
            </Router>
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}

export default Main;
