import React from "react";

const Wellness = () => {
  return (
    <div className=" p-3 lg:p-20 min-h-screen">
      <h1 className=" text-3xl lg:text-5xl font-bold text-sr">Live a Wellness Lifestyle</h1>
      <p className=" text-xl pt-5 font-medium text-gray-700">
        The dōTERRA Wellness Lifestyle Pyramid illustrates the partnership
        between lifestyle and healthcare. When lifestyle is the focus, health is
        naturally achieved and maintained. As you use these powerful products
        and live healthy daily habits, you’ll experience new levels of
        wholeness.{" "}
      </p>
      <p className=" text-xl pt-5 font-medium text-gray-700">
        Envision a life where finding solutions is simple. With an essential oil
        reference guide and a box of dōTERRA CPTG® essential oils at your
        fingertips, you’ll be prepared to address 80% of your health priorities.
        For those times when you need additional care, partner with
        practitioners who support you in finding the best proven natural
        solutions.{" "}
      </p>
      <div className=" lg:mt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div>
          <p className=" text-xl font-semibold text-center mt-32">
            Rate yourself in each area (1–10)
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/rate.png"}
            className=" w-full object-contain"
            alt=""
          />
        </div>
        <div>
          <div className=" flex items-center flex-col lg:flex-row gap-2">
            <img src={process.env.PUBLIC_URL +"/images/protect.png"} alt="" />
            <div>
              <h6 className=" text-2xl text-tr font-bold">
                Protect and Restore
              </h6>
              <p className=" text-2xl pt-2">
                Ingest dōTERRA On Guard® to support immunity and Frankincense to
                promote healthy cellular function.*
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col lg:flex-row gap-2 mt-5">
            <img src={process.env.PUBLIC_URL +"/images/cleanse.png"} alt="" />
            <div>
              <h6 className=" text-2xl text-pr font-bold">
                Cleanse and Detoxify
              </h6>
              <p className=" text-2xl pt-2">
                Add a citrus oil of your choice to your water to support you in
                detoxifying.*
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col lg:flex-row gap-2 mt-5">
            <img src={process.env.PUBLIC_URL +"/images/calm.png"} alt="" />
            <div>
              <h6 className=" text-2xl text-sr font-bold">Calm and Ground</h6>
              <p className=" text-2xl pt-2">
                Use Lavender to create a restful environment. Diffuse Adaptiv®
                to create a calm, centered atmosphere.
              </p>
            </div>
          </div>
          <div className=" flex items-center flex-col lg:flex-row gap-2 mt-5">
            <img src={process.env.PUBLIC_URL +"/images/soothe.png"} alt="" />
            <div>
              <h6 className=" text-2xl text-sr font-bold">
                Soothe and Optimize
              </h6>
              <p className=" text-2xl pt-2">
                Apply Deep Blue® Stick topically before and after your workout
                where needed. Integrate the 3-step MetaPWR™ system into your
                daily habits for optimal metabolic function.*
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-2 flex flex-col lg:flex-row items-center gap-4 justify-center">
          <img src={process.env.PUBLIC_URL +"/images/fuel.png"} alt="" />
          <div>
            <h6 className=" text-2xl text-sr font-bold">
              Fuel, Support, and Fortify
            </h6>
            <p className=" text-2xl pt-2">
              Maximize your daily nutrient intake with the dōTERRA Lifelong
              Vitality Pack® , a trio of power-packed supplements to fuel and
              support your body. Support digestion with DigestZen TerraZyme® .
            </p>
            <p className=" text-2xl pt-2">
              Fortify and optimize your GI tract, support digestion, and support
              immunity with PB Assist+® .*
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellness;
