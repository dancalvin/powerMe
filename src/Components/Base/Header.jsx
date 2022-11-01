// Import react
import React from "react";

// function to create header containing a picture
export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__inner-logo">
          <img src={process.env.PUBLIC_URL + "images/logo.png"} alt="logo" />
        </div>
      </div>
    </header>
  );
}
