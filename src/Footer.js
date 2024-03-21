import React from 'react';
import restaurant from './restaurant.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={restaurant} alt="Restaurant" className="footer-image" />
          <h3 className="section-title">Doormat Navigation</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-title">Contact</h3>
          <ul className="footer-links">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="section-title">Social Media Links</h3>
          <ul className="footer-links">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;