import React from "react";
import Logo from "../../assets/images/logo.png";
// function to create header containing a picture
export default function Header(props) {
  return (
    <header className="">
      <div className="flex justify-center py-[20px] px-0 md:justify-start md:pb-0 md:pl-[40px] md:pt-[20px] xl:pl-[60px] 2xl:pl-[93px] 2xl:pt-[43px]">
        <div className="flex w-[160px] items-center justify-center sm:w-[220px] md:w-[264px]">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}
