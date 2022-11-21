import React from "react";

const Metabolism = () => {
  return (
    <div className=" min-h-screen w-full relative">
      <img
        src={process.env.PUBLIC_URL + "/images/meta.jpg"}
        className=" w-full h-full object-cover min-h-screen"
        alt=""
      />
      <div className="  absolute z-20 top-0 left-0  w-full lg:h-full pl-3 lg:pl-20 pt-4 lg:pt-32 pb-32 ">
        <h1 className="text-4xl lg:text-8xl font-bold text-tr ">Metabolism</h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <p className=" lg:w-3/5 text-2xl ">
          <span className=" font-semibold">
            Your metabolic health and biological age are inseparable.
          </span>{" "}
          As you age, so does your metabolic function. Your metabolism
          influences your energy, weight, body composition, quality of sleep,
          and cognition. The stronger and healthier your metabolic function, the
          better you feel from the inside out. Use the complete 3-step MetaPWR™
          system to optimize your metabolic health and live your most powerful
          life.
        </p>
      </div>
      <div className=" relative  lg:absolute z-30 lg:bottom-32  left-0 lg:left-20 w-full ">
        <div className=" lg:w-2/5 bg_transpa p-10">
          <h1 className=" text-3xl text-white">DAILY METABOLIC ROUTINE</h1>
          <p className=" text-xl pt-4 text-white">
            Combine the MetaPWR™ products with a wellbalanced, whole-food diet
            to optimize results.
          </p>

          <h1 className=" text-3xl text-white pt-6">BREAKFAST</h1>
          <p className=" text-xl py-2 text-white">
            • dōTERRA® Protein smoothie with Fiber and Greens
          </p>
          <p className=" text-xl py-2 text-white">
            • 1 sachet MetaPWR™ Advantage in shaker bottle
          </p>
          <p className=" text-xl py-2 text-white">
            • 1 MetaPWR™ softgel or 2–4 drops of blend in water
          </p>
          <h1 className=" text-3xl text-white pt-6">LUNCH</h1>
          <p className=" text-xl py-2 text-white">
            • 1–2 DigestZen TerraZyme® capsules with nutritious, whole-food meal
          </p>
          <p className=" text-xl py-2 text-white">
            • 1 MetaPWR™ softgel or 2–4 drops of blend in water
          </p>
          <h1 className=" text-3xl text-white pt-6">DINNER</h1>
          <p className=" text-xl py-2 text-white">
            • 1 MetaPWR™ Assist capsule 15-30 mins before largest whole-food
            meal
          </p>
          <p className=" text-xl py-2 text-white">
            • 1–2 DigestZen TerraZyme® capsules
          </p>
          <p className=" text-xl py-2 text-white">
            • 1 MetaPWR™ softgel or 2–4 drops of blend in water
          </p>
          <h1 className=" text-3xl text-white pt-6">BEDTIME</h1>
          <p className=" text-xl py-2 text-white">
            • 1 MetaPWR™ softgel (optional)
          </p>
        </div>
        <div className=" lg:w-2/5 mt-6 border-2 border-tr mx-3 lg:mx-0 ">
          <div className=" bg-tr py-3 pl-8">
            <h1 className=" text-white text-xl lg:text-3xl">DAILY WELLNESS HABITS</h1>
          </div>
          <div className=" p-4">
            <p className=" text-lg  lg:text-white">
              • Eat a whole-food diet, move more often, and focus on quality
              sleep.
            </p>
            <p className=" text-lg  lg:text-white pt-1">
              • Use smart supplementation to complement targeted metabolic
              health efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metabolism;
