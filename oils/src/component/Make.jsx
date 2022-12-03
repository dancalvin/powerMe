import React from "react";

const Make = () => {
  return (
    <div className=" p-3 lg:p-20 min-h-screen w-full">
      <h1 className=" text-4xl lg:text-8xl font-bold text-tr ">
        Make Wellness
        <br />
        Complete
      </h1>
      <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
      <h1 className=" text-2xl mt-8 ">
        <span className=" font-semibold">
          The dōTERRA® Lifelong Vitality Program makes taking the first step on
          the path toward a lifetime of wellness convenient and affordable.
        </span>{" "}
        These essential nutrients can be paired perfectly with any of the
        Wellness Programs or your essential oils to maximize results.
      </h1>
      <div className=" mt-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className=" flex items-center justify-center flex-col w-full">
          <img src={process.env.PUBLIC_URL +"/images/r1.png"} alt="" />
          <h1 className=" text-2xl mt-8 ">
            <span className=" font-semibold">
              Alpha CRS+® Cellular Vitality Complex
            </span>{" "}
            contains powerful polyphenols that protect cells from free radicals,
            which can damage cellular DNA, mitochondria, and other critical cell
            structures.*
          </h1>
        </div>
        <div className=" flex items-center justify-center flex-col w-full">
          <img src={process.env.PUBLIC_URL +"/images/r2.png"} alt="" />
          <h1 className=" text-2xl mt-8 ">
            <span className=" font-semibold">xEO Mega®</span> contains ultra
            pure essential fatty acids and other fat-soluble nutrients that
            provide many systemic benefits, including support to heart,
            circulatory, brain, and cellular health
          </h1>
        </div>
        <div className=" flex items-center justify-center flex-col w-full">
          <img src={process.env.PUBLIC_URL +"/images/r3.png"} alt="" />
          <h1 className=" text-2xl mt-8 ">
            <span className=" font-semibold">Microplex VMz®</span> is a balanced
            formula of essential vitamins and bioavailable minerals, carefully
            formulated to provide optimal levels of key micronutrients that
            support energy and immune functions.*
          </h1>
        </div>
      </div>
      <h1 className=" text-4xl text-center w-full font-semibold text-tr mt-20">
        The Smartest Way to Buy
      </h1>
      <p className=" text-center w-full text-2xl font-medium mt-3">
        For greater savings and opportunities to receive free products, create a
        loyalty order
      </p>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <div className=" flex items-center gap-2">
          <img src={process.env.PUBLIC_URL +"/images/sm1.png"} alt="" />
          <img src={process.env.PUBLIC_URL +"/images/sm2.png"} alt="" />
        </div>
        <div className=" pt-5">
          <h1 className=" text-2xl lg:text-4xl ">
            <span className=" font-semibold">Purchase</span> 1 dōTERRA Lifelong
            Vitality Pack® or MetaPWR™ Advantage
          </h1>
          <h1 className=" text-2xl lg:text-4xl mt-6">
            Choose Up to 3 Additional Supplements at Reduced Prices.
          </h1>
        </div>
      </div>
      <div
        style={{ background: "#F0EBF4" }}
        className=" w-full flex items-center flex-col lg:flex-row lg:justify-between gap-2 py-12 px-4"
      >
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y1.png"} alt="" />
          <p className=" text-xl text-center ">Microplex VMz</p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y2.png"} alt="" />
          <p className=" text-xl text-center ">xEO Mega</p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y3.png"} alt="" />
          <p className=" text-xl text-center ">Mito2Max®</p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y4.png"} alt="" />
          <p className=" text-xl text-center ">
            Deep Blue
            <br />
            Polyphenol
            <br />
            Complex®
          </p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y5.png"} alt="" />
          <p className=" text-xl text-center ">
            DigestZen
            <br />
            TerraZyme®
          </p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y6.png"} alt="" />
          <p className=" text-xl text-center ">PB Assist+®</p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y7.png"} alt="" />
          <p className=" text-xl text-center ">
            MetaPWR™
            <br />
            Assist &
            <br />
            Beadlets
          </p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y8.png"} alt="" />
          <p className=" text-xl text-center ">
            MetaPWR™
            <br />
            Advantage
          </p>
        </div>
        <div className=" flex items-center justify-center gap-2 flex-col">
          <img src={process.env.PUBLIC_URL +"/images/y9.png"} alt="" />
          <p className=" text-xl text-center ">
            Kids Kit
            <br />
            IQ Mega® and a2z
            <br />
            Chewable™
          </p>
        </div>
      </div>
      <div className=" pt-16 flex flex-col gap-2 items-start ">
        <p className=" text-gray-500 border px-2 py-1 text-sm">
          {" "}
          See individual labels for ingredients, cautions, and instruction for
          use.{" "}
        </p>
        <p className=" text-gray-500 border px-2 py-1 text-sm">
          {" "}
          *These statements have not been evaluated by the Food and Drug
          Administration. <br /> These products are not intended to diagnose, treat,
          cure, or prevent any disease.
        </p>
      </div>
    </div>
  );
};

export default Make;
