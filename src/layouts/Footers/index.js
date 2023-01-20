import React from "react";
import FooterLogo from "../../assets/images/footer-logo.png";

// function to create footer containing a picture and text
export default function Footer(props) {
  return (
    <footer className="flex items-center justify-center bg-black py-[40px]">
      <div className="">
        <div className="">
          <img src={FooterLogo} alt="footer-logo" />
        </div>
        <div className="align-center mt-6 font-sans text-base leading-7 text-secondary">
          Prime Meridian Healthcare 2022
        </div>
      </div>
    </footer>
  );
}
