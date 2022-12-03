import React from "react";

const Reduce = () => {
  return (
    <div className=" min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/live-145.jpg"}
        className=" w-full h-full object-cover min-h-screen"
        alt=""
      />
      <div className="  absolute z-20 top-0 left-0 w-full h-full bg_haven pl-3 lg:pl-20 pt-10 lg:pt-32 pb-32 ">
        <h1 className=" text-3xl lg:text-8xl font-bold text-pr ">
          Reduce Toxic Exposure & Support Detoxification
        </h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <p className=" lg:pr-96 text-2xl">
          <span className=" font-semibold">
            Support your body’s natural detoxification pathways by experiencing
            the dōTERRA 30-Day Cleanse.
          </span>{" "}
          Occasional cleansing may enhance your metabolism,* support your
          efforts to achieve a healthy weight,* improve your digestive
          function,* and increase your energy.*
        </p>
      </div>
      <div className="  absolute z-30 bottom-0 lg:bottom-32 left-0 lg:left-20 lg:w-2/5 mx-3 lg:mx-0  ">
        <div className=" mb-4 bg-pr flex items-center gap-5 p-5 lg:w-2/3">
          <h2 className=" text-xl font-medium text-white">
            Download the dōTERRA 30-Day Cleanse Program.
          </h2>
          <img src={process.env.PUBLIC_URL +"/images/sc1.png"} alt="" />
        </div>
        <div className=" border-2 border-pr">
          <div className=" bg-pr py-3 pl-8">
            <h1 className=" text-white text-xl lg:text-3xl">DAILY WELLNESS HABITS</h1>
          </div>
          <div className=" p-4">
            <p className=" text-lg text-white">
              • Drink 8 or more glasses of water daily.
            </p>
            <p className=" text-lg text-white pt-1">
              • Use citrus oils in your water daily for gentle, natural
              cleansing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reduce;
