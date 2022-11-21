import React from "react";

const Experience = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <img src={process.env.PUBLIC_URL +"/images/live-160.jpg"} className=" h-full w-full" alt="" />
      <div className=" px-3 lg:px-10">
        <h1 className=" text-tr text-3xl lg:text-5xl font-semibold pt-20 lg:w-2/3">
          Experience the dōTERRA 30-Day Cleanse
        </h1>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-tr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 justify-end pr-20">
            <div className=" text-white bg-tr px-3 text-lg font-medium">
              DAYS 1–30
            </div>
          </div>
        </div>

        <div className=" my-6 flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex1.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">
              MAXIMIZE NUTRITION AND SUPPORT LONGEVITY{" "}
            </h2>
            <h2 className=" font-bold text-2xl">
              dōTERRA Lifelong Vitality Pack®
            </h2>
            <p className=" text-xl italic">
              Take 2 capsules of each supplement with morning and evening meals.
            </p>
          </div>
        </div>
        <div className=" my-6 flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex2.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">
              SUPPORT HEALTHY DIGESTION AND METABOLISM*
            </h2>
            <h2 className=" font-medium text-xl">DigestZen</h2>
            <h2 className=" font-bold text-xl">TerraZyme®</h2>
            <p className=" text-xl italic">
              Take 1-2 capsules with each meal daily.
            </p>
          </div>
        </div>
        <div className=" my-6 flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex3.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">CLEANSE</h2>

            <h2 className=" font-bold text-xl">Lemon</h2>
            <p className=" text-xl italic">
              Add 3-5 drops to drinking water 3 times daily.
            </p>
          </div>
        </div>
        <div className=" my-6 flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex4.png"} alt="" />
          <div>
            <h2 className=" font-bold text-2xl">
              Zendocrine® Detoxification Complex
            </h2>
            <p className=" text-xl italic">
              Take 1-2 capsules with morning and evening meals.
            </p>
          </div>
        </div>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-tr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 pr-20 lg:justify-end">
            <div className=" text-white bg-tr px-3 text-lg font-medium">
              DAYS 1–10
            </div>
          </div>
        </div>
        <div className=" my-12 flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex5.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">SUPPORT FILTERING ORGANS*</h2>
            <p className=" text-2xl font-bold ">Zendocrine® Softgels</p>
            <p className=" text-xl pt-2 italic ">
              Take 1-2 softgels twice daily
            </p>
          </div>
        </div>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-tr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 pr-20 lg:justify-end">
            <div className=" text-white bg-tr px-3 text-lg font-medium">
              DAYS 11–20
            </div>
          </div>
        </div>
        <div className=" my-12 flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex6.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">CLEANSE INTESTINAL TRACT*</h2>
            <p className=" text-2xl font-bold ">GX Assist®</p>
            <p className=" text-xl pt-2 italic ">
              Take 1 softgel with evening meal.
            </p>
          </div>
        </div>
        <div
          style={{ height: "1px" }}
          className=" w-full  bg-tr my-12 relative"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex items-center z-10 justify-end pr-20">
            <div className=" text-white bg-tr px-3 text-lg font-medium">
              DAYS 21–30
            </div>
          </div>
        </div>
        <div className=" my-12 flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex7.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">
              SUPPORT HEALTHY DIGESTIVE FUNCTION AND IMMUNITY*{" "}
            </h2>
            <h2 className=" font-bold text-xl">PB Assist+®</h2>

            <p className=" text-xl pt-2 italic ">
              Take 3 capsules with evening meal or at bedtime.
            </p>
          </div>
        </div>
        <div className=" my-12 flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex8.png"} alt="" />
          <div>
            <h2 className=" font-medium text-2xl">SUPPORT CELLULAR HEALTH*</h2>
            <h2 className=" font-bold text-xl">DDR Prime® Softgels</h2>

            <p className=" text-xl pt-2 italic ">
              Take 1-2 softgels with meals twice daily.
            </p>
          </div>
        </div>
        <div className=" my-12 flex-col lg:flex-row flex items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/ex9.png"} alt="" />
          <div>
            <h2 className=" font-bold text-2xl">Cleanse & Restore Kit</h2>
            <h2 className=" font-medium text-xl">These cleansing products are
available in the convenient,
discounted collection.</h2>

          </div>
        </div>
        <div className=" flex flex-col pb-6">
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
   
      </div>
    </div>
  );
};

export default Experience;
