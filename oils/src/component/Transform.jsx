import React from "react";

const Transform = () => {
  return (
    <div className=" lg:min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/transform.jpg"}
        className=" w-full h-full object-cover"
        alt=""
      />
      <div className="  absolute z-20 top-5 lg:top-32 left-4 lg:left-20 w-full ">
        <h1 className=" text-2xl lg:text-8xl font-bold text-tr">Transform Your Health </h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4">

        </div>
        <p className=" lg:pr-96 text-base lg:text-2xl pr-4"><span className=" font-semibold">Welcome to the dōTERRA difference, where changing lives is the norm, and improving your
health is our top priority.</span> Use this guide to discover the powerful benefits of essential oils and
create a wellness plan that sticks.</p>
      </div>
    </div>
  );
};

export default Transform;
