import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>Serving salads, pasta and more.</p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
        <div className="image-placeholder">
          {/* Image will go here */}
        </div>
      </div>
    </header>
  );
}

export default Header;