import React from "react";

const Skin = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" w-full h-full relative">
        <img src={process.env.PUBLIC_URL +"/images/image-207.jpg"} className=" h-full w-full" alt="" />
      </div>
      <div className="lg:px-20 px-3 ">
        <div className=" flex  items-center flex-col  gap-3 py-8">
          <div className=" flex items-center justify-center">
            <img src={process.env.PUBLIC_URL +"/images/s1.png"} alt="" />
          </div>
          <div>
            <p className=" text-2xl font-semibold">Essential Skin Care</p>
            <p className=" text-2xl">
              Designed to meet all your anti-aging and skincare needs. Use twice
              daily to keep the skin feeling healthy and looking young.
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/s2.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">Yarrow | Pom Collection</p>
            <p className=" text-2xl">
              A powerful three-layer botanical approach to beauty, inside and
              out. Use daily for a youthful glow.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center  py-8  gap-8">
          <img src={process.env.PUBLIC_URL +"/images/s3.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA®</p>
            <p className=" text-2xl font-semibold">Hair Care</p>
            <p className=" text-2xl">
              Use essential-oil infused premium hair products: Protecting
              Shampoo, Daily Conditioner, and Leave-in Conditioner or
              alternative bar options.
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row items-center  py-8  gap-8">
          <img src={process.env.PUBLIC_URL +"/images/s4.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">Oral Health</p>
            <p className=" text-2xl">
              Use dōTERRA On Guard® Natural Whitening Toothpaste and Mouthwash
              morning and night to naturally brighten your smile.
            </p>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row items-center gap-3 py-8 ">
          <img src={process.env.PUBLIC_URL +"/images/s5.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA®</p>
            <p className=" text-2xl font-bold">Sun Care</p>
            <p className=" text-2xl italic pt-2">
              Protect your body and skin with moisturizing and effiective
              products free of harsh ingredients.
            </p>
          </div>
        </div>


       
      </div>
    </div>
  );
};

export default Skin;
