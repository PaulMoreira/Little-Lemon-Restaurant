import React from 'react';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import About from './About.js';


function HomePage() {
    return (
        <div className="home-page">
            <Specials />
            <Testimonials />
            <About />
        </div>
    )
}

export default HomePage;