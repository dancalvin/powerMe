import React from "react";

const Move = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" w-full h-full relative">
        <img src={process.env.PUBLIC_URL +"/images/m.jpg"} className=" h-full w-full" alt="" />
        <div className=" absolute top-0 left-0 z-20 w-full h-full flex items-center justify-end">
          <div className=" mx-3 lg:mx-0 lg:w-3/5 bg_transpam p-4 lg:p-10">
            <h1 className=" text-3xl text-white">CHOCO-PEPPERMINT
PROTEIN SMOOTHIE</h1>
            <p className=" text-xl pt-4 text-white">1 cup coconut water or almond milk</p>
            <p className=" text-xl py-2 text-white">
            1 scoop dōTERRA Chocolate Protein
            </p>
            <p className=" text-xl py-2 text-white">
            1 drop Peppermint essential oil 
            </p>
            <p className=" text-xl py-2 text-white">
            Ice (as desired)
            </p>
            <p className=" text-xl py-2 text-white pt-4">Blend all ingredients until smooth.
</p>
           
            <h1 className=" text-3xl text-white pt-6">BERRY-ORANGE
PROTEIN SMOOTHIE</h1>
            <p className=" text-xl py-2 text-white">
            1 cup coconut water or almond milk
            </p>
            <p className=" text-xl py-2 text-white">
            1 scoop dōTERRA Vanilla Protein
            </p>
            <p className=" text-xl py-2 text-white">
            1 cup frozen berries
            </p>
            <p className=" text-xl py-2 text-white">
            1 banana
            </p>
            <p className=" text-xl py-2 text-white">
            3 drops Wild Orange essential oil
Ice (as desired)
            </p>
            <p className=" text-xl py-2 text-white pt-4">
            Blend all ingredients until smooth
            </p>
            
          </div>
        </div>
      </div>
      <div className="px-10">
        <h1 className=" text-pr text-5xl font-bold pt-24">Movement</h1>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/m1.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">Deep Blue® Rub</p>
            <p className=" text-2xl">
              Provides a soothing effect to the back, shoulders, neck, knees,
              feet, and other areas of concern.
            </p>
            <p className=" text-2xl pt-2 italic">
              Apply before and after exercise or activity to support ease of
              movement and recovery
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/m2.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">
              Deep Blue® Stick + Copaiba
            </p>
            <p className=" text-2xl">
              Topical analgesic that offers temporary relief from minor aches
              and pains associated with arthritis, sprains, strains, and
              bruises.
            </p>
            <p className=" text-2xl pt-2 italic">
              Apply to any area of concern as needed
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row  py-8  gap-8">
          <img src={process.env.PUBLIC_URL +"/images/m3.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">
              Deep Blue Polyphenol Complex®
            </p>
            <p className=" text-2xl">
              Soothes aches and discomforts and supports muscle and joint
              function.*
            </p>
            <p className=" text-2xl pt-2 italic">
              Take 1–3 capsules daily with meals or take 2 capsules for extra
              support.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row  py-8  gap-8">
          <img src={process.env.PUBLIC_URL +"/images/m4.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">Mito2Max®</p>
            <p className=" text-2xl">
              An energy and stamina complex that supports healthy cellular
              energy production and promotes healthy circulation.*
            </p>
            <p className=" text-2xl italic pt-2">
              Take 1 capsule with breakfast and lunch. Use as a natural
              substitute for caffeinated drinks
            </p>
          </div>
        </div>

        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8 ">
          <img src={process.env.PUBLIC_URL +"/images/m5.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">
              Turmeric Dual Chamber Capsules
            </p>
            <p className=" text-2xl">
              Supports a healthy inflammatory response in the body.*
            </p>
            <p className=" text-2xl italic pt-2">
              Take 1 capsule with breakfast and another with dinner to support
              an active lifestyle.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/m6.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">
            Copaiba Softgels
            </p>
            <p className=" text-2xl">
            Supports the healthy functioning of the
cardiovascular system and a healthy
inflammatory response in the body.*
            </p>
            <p className=" text-2xl italic pt-2">
            Take 1 softgel as needed.
            </p>
          </div>
        </div>
      
        <div className=" flex flex-col">
          <p className=" mt-4 mb-2 border px-3 py-1 text-gray-600">
          See individual labels for ingredients, cautions, and instruction for use. 
          </p>
          <p className="  mb-7 border px-3 py-1 text-gray-600">
          *These statements have not been evaluated by the Food and Drug Administration.
These products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Move;
