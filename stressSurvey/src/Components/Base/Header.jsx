import React from "react";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="flex items-center justify-center py-5 xl:pt-[43px] xl:pb-0 xl:pl-[93px] xl:justify-start">
          <div className="w-10 xl:w-16 flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </header>
    </>
  );
}
