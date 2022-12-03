import React from "react";

const Movement = () => {
  return (
    <div className=" lg:min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/move.jpg"}
        className=" w-full h-full object-cover"
        alt=""
      />
      <div className=" absolute z-20 top-0 left-0 w-full h-full bg_haven pl-3 lg:pl-20 pt-3 lg:pt-32 pb-32">
        <h1 className=" text-3xl lg:text-8xl font-bold text-pr ">Movement 
</h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <p className=" text-base lg:w-2/5 lg:text-2xl text-white">
          <span className=" font-semibold">
          Your body is meant for movement. 
          </span> Regular
exercise strengthens the muscles and supports the
cardiovascular, circulatory, and lymphatic systems.
Essential oils and supplements support greater
flexibility and ease feelings of tension in the body.
Together, both can enhance your ability to stay
active and strong. 
        </p>
      </div>
      <div className="  absolute z-30 bottom-0 lg:bottom-32 left-0 mx-3 lg:mx-0 mb-4 lg:mb-0 lg:left-20 lg:w-1/3 border-2 border-pr ">
        <div className=" bg-pr py-3 pl-8">
          <h1 className=" text-white text-lg lg:text-3xl">DAILY WELLNESS HABITS</h1>
        </div>
        <div className=" p-4">
          <p className=" text-lg text-white">• Make time for 30+ minutes of daily movement.</p>
          <p className=" text-lg text-white pt-1">
          • Stretch or practice yoga to increase flexibility.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Movement;
