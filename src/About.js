import React from 'react';
import chef from './chef.jpg';
import chefs from './chefs.jpg';

function About() {
  return (
    <section className="about-section" aria-label="About Little Lemon">
      <div className="about-content">
        <div className="text-content">
          <h2 className="section-title">Little Lemon</h2>
          <h3 className="aboutSub subtitle">Chicago</h3>
          <p className="about lead-text">
            Little Lemon is a family-owned restaurant located in the heart of Chicago. We pride ourselves on serving the best salads, pasta, and more. Our dishes are made with fresh ingredients and are perfect for a family dinner or a night out with friends.
          </p>
        </div>
        <div className="image-content">
          <img className="first-image" src={chef} alt='chef' />
          <img className="second-image" src={chefs} alt='chefs' />
        </div>
      </div>
    </section>
  );
}

export default About;
