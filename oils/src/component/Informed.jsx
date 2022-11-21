import React from "react";

const Informed = () => {
  return (
    <div className="w-full min-h-screen relative">
      <img src={process.env.PUBLIC_URL +"/images/image-219.jpg"} className=" h-full w-full " alt="" />
      <div className=" h-full relative lg:absolute top-0 left-0 z-10 w-full ">
        <div className="  relative lg:absolute z-20 top-0 left-0  w-full lg:h-full pl-3 lg:pl-20 pt-20 lg:pt-32 pb-32 ">
          <h1 className=" text-4xl lg:text-8xl font-bold text-tr ">Informed Self-Care</h1>
          <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
          <p className=" lg:w-3/5 text-2xl ">
            <span className=" font-semibold">
              Make it a habit to use dōTERRA natural solutions as your first
              line of defense.
            </span>{" "}
            When life's challenges arise, use a trusted essential oil reference
            book to search the possibilities of solutions at your fingertips.
          </p>
        </div>
        <div className=" relative lg:absolute z-30 lg:bottom-32 lg:left-20 lg:w-2/5">
          <div className=" w-full mb-4 bg-white p-3 lg:p-10">
            <h1 className=" text-4xl font-bold text-tr">Oils on the Go </h1>
            <img src={process.env.PUBLIC_URL +"/images/image-225.png"} alt="" />
            <h1 className=" text-2xl font-medium text-tr mt-4">
              8-VIAL KEYCHAIN
            </h1>
            <p className=" text-2xl italic">
              Pack your eight most frequently used essential oils and be ready
              for anything!
            </p>
            <h1 className=" text-2xl font-medium text-tr mt-4">
              KEYCHAIN FAVORITES
            </h1>
            <div className=" w-full mt-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div>
                <p className=" text-2xl">Lavender</p>
                <p className=" text-2xl">DigestZen®</p>
                <p className=" text-2xl">Peppermint</p>
                <p className=" text-2xl">dōTERRA Breathe®</p>
              </div>
              <div>
                <p className=" text-2xl">dōTERRA On Guard®</p>
                <p className=" text-2xl">Frankincense</p>
                <p className=" text-2xl">Deep Blue®</p>
                <p className=" text-2xl">Tea Tree</p>
              </div>
            </div>
          </div>
          <div className=" border-2 border-tr mx-3 lg:mx-0">
            <div className=" bg-tr py-3 pl-8">
              <h1 className=" text-white text-xl lg:text-3xl">DAILY WELLNESS HABITS</h1>
            </div>
            <div className=" p-4">
              <p className=" text-lg font-medium ">
                • Turn to natural solutions as your first line of defense.
              </p>
              <p className=" text-lg font-medium pt-1">
                • Refer to an essential oil reference book for possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informed;
