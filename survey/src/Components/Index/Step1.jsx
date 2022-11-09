import React from "react";


export default function Step1({ nextTab }) {


  return (
    <>
      <div className="step first">
        <h2>Thank you for your response</h2>
        <p>
          This survey is complete. You may now close this window.
          <br />
          <br />

        </p>
      </div>
      <a className="button primary" href="#">
        Home
      </a>
    </>
  );
}
