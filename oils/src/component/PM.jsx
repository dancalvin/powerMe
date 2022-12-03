import React from "react";

const PM = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2  gap-20 relative p-3 lg:p-0 lg:pt-20 ">
      <div className=" flex flex-col items-start gap-8 relative lg:pl-20">
        <h1 className=" text-3xl lg:text-5xl font-bold text-tr w-full text-center">
          Prioritize Rest
        </h1>
        <div className=" mt-6 flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/p1.png"} alt="" />
          <div>
            <h1 className=" text-xl font-semibold">dōTERRA</h1>
            <h1 className=" text-2xl font-semibold">Serenity® and Lavender</h1>
            <p className=" text-2xl italic">
              Place 1–2 drops on your pillow for peaceful dreams.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/p2.png"} alt="" />
          <div>
            <h1 className=" text-xl font-semibold">dōTERRA</h1>
            <h1 className=" text-2xl font-semibold">Serenity® Softgels</h1>
            <p className=" text-2xl italic">
              Take 1–2 softgels before bed for deep, rejuvenating sleep.*
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/p3.png"} alt="" />
          <div>
            <h1 className=" text-xl font-semibold">dōTERRA</h1>
            <h1 className=" text-2xl font-semibold">Peace® and Cedarwood</h1>
            <p className=" text-2xl italic">
              Massage 1-3 drops on feet and forehead at the end of a long day
              for a calming, relaxing aroma in a flash.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/p4.png"} alt="" />
          <div>
            <h1 className=" text-xl font-semibold">dōTERRA</h1>
            <h1 className=" text-2xl font-semibold">Calmer®</h1>
            <p className=" text-2xl italic">
              Roll on to the back of the neck and chest as part of a relaxing
              nightly ritual.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 lg:pr-20">
        <h1 className="text-3xl lg:text-5xl font-bold text-tr w-full text-center">
          Manage Stress
        </h1>
        <div className=" mt-6 flex flex-col lg:flex-row   items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/st1.png"} alt="" />
          <div>
            <h1 className=" text-2xl font-semibold">Citrus Bliss®</h1>
            <p className=" text-2xl italic">
              Put a drop in your palm and inhale for a quick pick-me-up. Diffuse
              for an uplifting environment.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/st2.png"} alt="" />
          <div>
            <h1 className=" text-2xl font-semibold">Black Spruce</h1>
            <p className=" text-2xl italic">
              Diffuse to create a steadying environment.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/st3.png"} alt="" />
          <div>
            <h1 className=" text-xl font-semibold">dōTERRA</h1>
            <h1 className=" text-2xl font-semibold">Balance®</h1>
            <p className=" text-2xl italic">
              Apply to bottoms of feet to start your day. Diffuse to create a
              calming, grounding space during demanding or difficult times.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center gap-10">
          <img src={process.env.PUBLIC_URL +"/images/st4.png"} alt="" />
          <div>
            <h1 className=" text-xl font-semibold">dōTERRA</h1>
            <h1 className=" text-2xl font-semibold">Cheer®</h1>
            <p className=" text-2xl italic">
              Apply to the wrists or pulse points for a cheerful boost of
              happiness and positivity to your environment throughout the day.
            </p>
            <p className=" text-2xl pt-2">
              Consider using other blends in the dōTERRA Emotional Aromatherapy®
              system as desired.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className=" w-full flex flex-col lg:flex-row  items-center justify-center">
          <div className=" pt-10">
            <h1 className=" text-tr text-2xl">RELAXING BATH SALTS</h1>
            <p className=" text-xl">1 cup Epsom salts</p>
            <p className=" text-xl">
              10 drops dōTERRA Balance®, dōTERRA Serenity®,{" "}
            </p>
            <p className=" text-xl">or Lavender</p>
            <p className=" text-xl">Mix and pour into your bath.</p>
          </div>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/live-120.png"}
          className=" relative bottom-0 left-0 z-10 "
          style={{ transform: "scaleX(-1)" }}
          alt=""
        />
      </div>
      <div>
        <div className=" flex items-center flex-col lg:flex-row gap-10">
          <div>
            <div className=" w-14 bg-tr rounded-md h-5 mb-4"></div>
            <h1 className="  text-4xl lg:text-5xl font-bold text-tr">
              The <br /> Adaptiv® <br /> System{" "}
            </h1>
          </div>
          <img src={process.env.PUBLIC_URL +"/images/adap.png"} alt="" />
        </div>
        <p className=" text-2xl pt-4">
          Adaptiv Calming Blend is the answer during life’s most demanding
          moments. Diffuse or roll on to create a calming atmosphere. Adaptiv
          Capsules combine clinically studied botanicals with a blend of
          essential oils to help you adapt to stressful situations.*
        </p>
        <div className=" flex flex-col lg:mt-32">
          <p className=" mt-4 mb-2 border px-3 py-1 text-gray-600">
            See individual labels for ingredients, cautions, and instruction for
            use.
          </p>
          <p className="  mb-7 border px-3 py-1 text-gray-600">
            *These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PM;
