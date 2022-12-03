import React from "react";

const FirstPage = () => {
  return (
    <div className=" lg:min-h-screen w-full relative">    
      <img src={process.env.PUBLIC_URL + "/images/home.jpg"} className=" w-full h-full" alt="logo" />
      <div className=" pt-20 flex items-center justify-between absolute z-20 top-32 left-0 w-full ">
        <div className=" pl-16 py-4 bg-pr text-3xl lg:text-7xl font-bold text-white pr-8">
        ō
        </div>
        <div className=" pr-4 lg:pr-32">
          <h1 className=" text-5xl lg:text-9xl font-bold text-pr">LIVE</h1>
          <p className=" text-base lg:text-2xl font-medium text-center">The dōTERRA Lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
