import React from "react";

const Nutrition = () => {
  return (
    <div className=" lg:min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/nu.jpg"}
        className=" w-full h-full object-cover"
        alt=""
      />
      <div className="  absolute z-20 top-0 left-0 w-full h-full bg_haven pl-3 lg:pl-20 pt-3 lg:pt-32 pb-32 ">
        <h1 className=" text-3xl lg:text-8xl font-bold text-pr ">Nutrition & Digestion</h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <p className=" lg:pr-96 text-2xl">
          <span className=" font-semibold">
            Give your body what it needs to thrive.
          </span>
          It all starts with optimal daily nutrition and digestive support.
          dōTERRA whole-food supplements are an ideal companion for your
          essential oils.
        </p>
      </div>
      <div className="  absolute z-30 bottom-0 lg:bottom-32 left-0 mx-3 lg:mx-0 mb-4 lg:mb-0 lg:left-20 lg:w-1/3 border-2 border-tr ">
        <div className=" bg-tr py-3 pl-8">
          <h1 className=" text-white text-lg lg:text-3xl">DAILY WELLNESS HABITS</h1>
        </div>
    <div className=" p-1 lg:p-4">
    <p className=" text-lg text-white">• Eat whole, fresh foods.</p>
    <p className=" text-lg text-white pt-1">• Decrease consumption of sugar, caffeine, dairy, 
</p>
    <p className=" text-lg text-white pl-2"> and processed foods. 
</p>
    </div>
      </div>
    </div>
  );
};

export default Nutrition;
