import React from "react";

const Rest = () => {
  return (
    <div className=" min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/rest.jpg"}
        className=" w-full h-full object-cover min-h-screen"
        alt=""
      />
      <div className="  absolute z-20 top-0 left-0  w-full lg:h-full pl-3 lg:pl-20 pt-20 lg:pt-32 pb-32">
        <h1 className=" text-4xl lg:text-8xl font-bold text-sr ">Rest & Manage Stress</h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <p className=" lg:w-3/5 text-base lg:text-2xl text-white">
          <span className=" font-semibold">
          Essential oils provide dynamic support for getting consistent quality
sleep and managing stress.
          </span> Create an environment where
your sleep gives your body the opportunity to repair and renew.
Choose solutions to keep feeling great and stay centered no
matter what life throws at you.
        </p>
      </div>
      <div className="  absolute z-30 bottom-32 left-0 mx-3 lg:mx-0 lg:left-20 lg:w-1/3 border-2 border-sr ">
        <div className=" bg-sr py-3 pl-8">
          <h1 className=" text-white text-xl lg:text-3xl">DAILY WELLNESS HABITS</h1>
        </div>
    <div className=" p-4">
    <p className=" text-lg lg:text-white">• Get 7-9 hours of quality sleep nightly.</p>
    <p className=" text-lg lg:text-white pt-1">• Engage in daily mindfulness or meditation. 
</p>
   
    </div>
      </div>
    </div>
  );
};

export default Rest;
