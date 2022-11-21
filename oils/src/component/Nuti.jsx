import React from "react";

const Nuti = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" w-full h-full relative">
        <img src={process.env.PUBLIC_URL +"/images/nutri.jpg"} className=" h-full w-full" alt="" />
        <div className=" absolute top-0 left-0 z-20 w-full h-full flex items-center justify-end">
          <div className=" mx-3 lg:mx-0 lg:w-3/5 bg_transpa p-4 lg:p-10">
            <h1 className=" text-3xl text-white">GREEN SMOOTHIE</h1>
            <p className=" text-xl pt-4 text-white">½ banana, frozen</p>
            <p className=" text-xl py-2 text-white">
              ½ cup blueberries or strawberries, frozen
            </p>
            <p className=" text-xl py-2 text-white">
              2 handfuls of baby spinach or kale
            </p>
            <p className=" text-xl py-2 text-white">
              1 ½ cups vanilla almond milk, unsweetened
            </p>
            <p className=" text-xl py-2 text-white">1 scoop dōTERRA Protein</p>
            <p className=" text-xl py-2 text-white">1 scoop dōTERRA Greens</p>
            <p className=" text-xl py-2 text-white">
              1 tsp IQ Mega® (optional)
            </p>
            <p className=" text-xl py-3 text-white">
              Combine all ingredients in a blender.
            </p>
            <h1 className=" text-3xl text-white pt-6">OATMEAL</h1>
            <p className=" text-xl py-2 text-white">
              Add Cinnamon Bark, dōTERRA On Guard®, or Wild Orange to your
              oatmeal.
            </p>
            <h1 className=" text-3xl text-white pt-6">PRODUCE WASH</h1>
            <p className=" text-xl py-2 text-white">
             Wash off pesticides, germs, and residues by filling
              the sink with cold water, ½ cup of white vinegar, and 6 drops of
              Lemon essential oil. Soak the fruits and vegetables, and then
              rinse.
            </p>
          </div>
        </div>
      </div>
      <div className="px-10">
        <h1 className=" text-tr text-5xl font-bold pt-24">Nutrition</h1>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/n1.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">Lifelong Vitality Pack®</p>
            <p className=" text-2xl">
              Offers crucial bioavailable micronutrients and cellular support.*
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/n2.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">Protein</p>
            <p className=" text-2xl">
              Premium protein blend supports building muscle, managing appetite,
              and recovering after workouts*. Available in chocolate, vanilla,
              and vegan.
            </p>
            <p className=" text-2xl pt-2 italic">
              Blend with a preferred beverage or add to your daily smoothie.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row  py-8 pl-4 gap-8">
          <img src={process.env.PUBLIC_URL +"/images/n3.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">Greens</p>
            <p className=" text-2xl">
              Enjoy this tasty, nourishing mix of responsibly sourced
              superfoods, essential nutrients, and dietary fiber.
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row  py-8 pl-4 gap-8">
          <img src={process.env.PUBLIC_URL +"/images/n4.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">
              a2z Chewable™ and IQ Mega®
            </p>
            <p className=" text-2xl">
              Start your children’s day off with great nutrition as they’re
              growing and developing.
            </p>
          </div>
        </div>
        <h1 className=" text-tr text-5xl font-bold pt-24">Digestion</h1>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/n5.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">TerraZyme®</p>
            <p className=" text-2xl">
              Supports healthy digestion and metabolic processes with whole-food
              enzymes.*
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/n6.png"} alt="" />
          <div>
            <p className=" text-2xl font-semibold">
              PB Assist+® and PB Assist® Jr
            </p>
            <p className=" text-2xl">
              Provides healthy intestinal flora and immune support.*
            </p>
          </div>
        </div>
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/n7.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">Fiber</p>
            <p className=" text-2xl">
              Supports regular healthy digestion.* Also helps optimize appetite
              control and already healthy blood sugar levels.*
            </p>
          </div>
        </div>
        <div className=" flex flex-col">
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

export default Nuti;
