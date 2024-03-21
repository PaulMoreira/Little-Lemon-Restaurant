import React from 'react';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="tes section-title">Testimonials</h2>
      <div className="testimonial-items">
        {/* Repeat this block for each testimonial */}
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src="https://via.placeholder.com/150" alt="User profile"></img>User profile</div>
          <p className="review">Review text goes here...</p>
        </div>
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src="https://via.placeholder.com/150" alt="User profile"></img>User profile</div>
          <p className="review">Another review text goes here...</p>
        </div>
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src="https://via.placeholder.com/150" alt="User profile"></img>User profile</div>
          <p className="review">Yet another review text goes here...</p>
        </div>
        <div className="testimonial">
          <div className="rating">Rating</div>
          <div className="user-profile"><img className="image-placeholder" src="https://via.placeholder.com/150" alt="User profile"></img>User profile</div>
          <p className="review">And another review text goes here...</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;