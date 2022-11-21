import React from "react";

const Natural = () => {
  return (
    <div className=" min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/image-178.jpg"}
        className=" w-full h-full object-cover min-h-screen"
        alt=""
      />
      <div className="  absolute z-20 top-0 left-0  w-full lg:h-full pl-3 lg:pl-20 pt-20 lg:pt-32 pb-32">
        <h1 className=" text-4xl lg:text-8xl font-bold text-pr ">Natural Home Care</h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <p className=" lg:w-3/5 text-2xl text-white">
          <span className=" font-semibold">
          A clean home doesn’t need to come at the cost of your
health.
          </span> Go greener by replacing synthetic products with safe,
plant-based, nontoxic, and natural cleaners that contain
pure CPTG® essential oils.
        </p>
      </div>
      <div className=" absolute z-30 bottom-32 left-0 mx-3 lg:mx-0 lg:left-20 lg:w-1/3 border-2 border-pr ">
        <div className=" bg-pr py-3 pl-8">
          <h1 className=" text-white text-xl lg:text-3xl">DAILY WELLNESS HABITS</h1>
        </div>
        <div className=" p-4">
          <p className=" text-lg text-white">
          • Eliminate chemical-based cleaning products.

          </p>
          <p className=" text-lg text-white pt-1">
          • Use safe and natural cleansers and detergents.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Natural;
