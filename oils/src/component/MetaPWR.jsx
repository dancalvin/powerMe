import React from "react";

const MetaPWR = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <img src={process.env.PUBLIC_URL +"/images/metap.jpg"} className=" h-full w-full" alt="" />
      <div className=" px-3 lg:px-10">
        <h1 className=" text-pr text-2xl lg:text-5xl font-bold pt-24">dōTERRA®</h1>
        <h1 className=" text-pr text-4xl lg:text-8xl font-semibold ">MetaPWR</h1>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-pr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 justify-center">
            <div className=" text-white bg-pr px-3 text-lg font-medium">
              STEP 1: CURB CRAVINGS, REDUCE FAT CELLS†
            </div>
          </div>
        </div>
        <h2 className=" font-bold text-2xl">
          MetaPWR™ Metabolic Blend—15mL, Softgels, Beadlets, Satiety Gum
        </h2>
        <p className=" text-xl">
          Helps support healthy metabolic function, curb cravings, promote
          mindful eating and appetite control, and inhibit adipose fat cell
          maturation or growth when ingested.*†
        </p>
        <div className=" w-full grid grid-cols-2 lg:grid-cols-3 mt-12 items-center gap-5">
          <div>
            <img src={process.env.PUBLIC_URL +"/images/meta1.png"} alt="" />
            <h2 className=" font-bold text-2xl">Softgels:</h2>
            <p className=" text-xl italic">
              Take 1 softgel one or more times daily.
            </p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL +"/images/meta2.png"} alt="" />
            <h2 className=" font-bold text-2xl">Beadlets:</h2>
            <p className=" text-xl italic">Dissolve 1-2 in mouth. </p>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL +"/images/meta3.png"} alt="" />
            <h2 className=" font-bold text-2xl">Oil Blend:</h2>
            <p className=" text-xl italic">
              Add 2-4 drops to water one or more times daily
            </p>
          </div>
        </div>
        <div className=" my-12 flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/meta4.png"} alt="" />
          <div>
            <h2 className=" font-bold text-2xl">MetaPWR™ Satiety Gum</h2>
            <p className=" text-xl italic">
              Chew 1 or more pieces daily to help control appetite and
              overeating.*
            </p>
          </div>
        </div>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-pr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 justify-center">
            <div className=" text-white bg-pr px-3 text-lg font-medium">
              STEP 2: SMOOTH THE SPIKES & DIPS
            </div>
          </div>
        </div>
        <div className=" my-12 flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/meta5.png"} alt="" />
          <div>
            <h2 className=" font-bold text-2xl">MetaPWR™ Metabolic Assist</h2>
            <p className=" text-xl ">
              Helps maintain optimum energy levels throughout the day, reduce
              carbohydrate digestion, and support blood sugar regulation already
              in the normal range.*†
            </p>
            <p className=" text-xl pt-2 italic ">
              Take 1 capsule daily 15-30 mins before largest meal.
            </p>
          </div>
        </div>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-pr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 justify-center">
            <div className=" text-white bg-pr px-3 text-lg font-medium">
              STEP 3: LOOK BETTER, FEEL YOUNGER
            </div>
          </div>
        </div>
        <div className=" my-12 flex items-center flex-col lg:flex-row gap-10">
          <img src={process.env.PUBLIC_URL +"/images/meta6.png"} alt="" />
          <div>
            <h2 className=" font-bold text-2xl">MetaPWR™ Advantage </h2>
            <p className=" text-xl ">
              Helps support a healthy metabolism, slow signs of metabolic
              aging,† extend your health-span, and improve skin elasticity,
              density, and firmness.*
            </p>
            <p className=" text-xl pt-2 italic ">
              Take 1 sachet daily with a cool drink of choice and shake well.
            </p>
          </div>
        </div>
        <div className=" flex flex-col">
          <p className=" mt-4 mb-2 border px-3 py-1 text-gray-600">
            See individual labels for ingredients, cautions, and instruction for
            use.
          </p>
          <p className=" mb-2 border px-3 py-1 text-gray-600">
            *These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
        <p className=" text-gray-600 mb-12">
          † More confirming clinical research is needed.
        </p>
      </div>
    </div>
  );
};

export default MetaPWR;
