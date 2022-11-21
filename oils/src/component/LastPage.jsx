import React from "react";

const LastPage = () => {
  return (
    <div className=" w-full min-h-screen relative">
      <img src={process.env.PUBLIC_URL +"/images/image-419.jpg"} className=" w-full min-h-screen" alt="" />
      <div className=" absolute z-20 bottom-20 lg:bottom-20 left-3 lg:left-20">
        <h1 className=" text-4xl lg:text-7xl text-center lg:text-left  text-white">dōTERRA</h1>
        <p className=" text-sm lg:text-3xl pl-5 text-center lg:text-left text-white">pursue what's pure</p>
        <div className=" flex items-center flex-col lg:flex-row gap-4 mt-20">
          <img src={process.env.PUBLIC_URL +"/images/scanlast.png"} alt="" />
          <p className=" text-white">
            © 2017 dōTERRA Holdings, LLC. All words with trademark <br />
            or registered trademark symbols are trademarks or <br />
            registered trademarks of dōTERRA Holdings, LLC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
