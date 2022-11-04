// Import react
import React from "react";

// function to create footer containing a picture and text
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__inner-logo">
          <img
            src={process.env.PUBLIC_URL + "images/footer-logo.png"}
            alt="footer-logo"
          />
        </div>
        <div className="footer__inner-created">
          Prime Meridian Healthcare 2022
        </div>
      </div>
    </footer>
  );
}
