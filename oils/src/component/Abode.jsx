import React from 'react'

const Abode = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
    <div className=" w-full h-full relative">
      <img src={process.env.PUBLIC_URL +"/images/image-180.jpg"} className=" h-full w-full" alt="" />
      <div className=" absolute bottom-20 left-0 z-20 w-full  flex items-center justify-center">
        <div className=" lg:w-4/5">
        </div>
      </div>
    </div>
    <div className="px-10">
      <h1 className=" text-pr text-3xl lg:text-5xl font-bold pt-24">dōTERRA®
 abōde™</h1>
 <p className=' text-2xl py-6 '>Time and time again, essential oils outperform synthetic
counterparts when it comes to purifying any surface or
space. Free of phosphates, phthalates, dyes, sulfates, and
chlorine, these plant-based products come in recyclable
containers, use natural enzymes, and feature the abōde
Refreshing Blend to provide a natural, fresh aroma and
deliver effective results. </p>
      <div className=" flex items-center flex-col lg:flex-row gap-10 py-8">
        <img src={process.env.PUBLIC_URL +"/images/a1.png"} alt="" />
        <div>
          <p className=" text-xl font-semibold">dōTERRA</p>
          <p className=" text-2xl font-semibold">abōde Refreshing Blend 
</p>
          <p className=" text-2xl">
          A high-powered essential oil blend,
perfect for making nontoxic DIY cleaners
and refreshing the air in any space. 
          </p>
         
        </div>
      </div>
      <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
        <img src={process.env.PUBLIC_URL +"/images/a2.png"} alt="" />
        <div>
          <p className=" text-xl font-semibold">
          abōde
          </p>
          <p className=" text-2xl font-semibold">
          Citrus Bloom® Foaming Hand Wash
Concentrate 
          </p>
          <p className=" text-2xl">
          Effective against impurities, leaving the
hands fresh and clean.
          </p>
      
        </div>
      </div>
      <div className=" flex items-center flex-col lg:flex-row  py-8  gap-8">
        <img src={process.env.PUBLIC_URL +"/images/a3.png"} alt="" />
        <div>
          <p className=" text-xl font-semibold">
          abōde
          </p>
          <p className=" text-2xl font-semibold">
          Citrus Bloom Hand Lotion 
          </p>
          <p className=" text-2xl">
          Perfect for relieving dryness and helping
the hands feel hydrated and nourished.
          </p>
         
        </div>
      </div>
      <div className=" flex items-center flex-col lg:flex-row  py-8  gap-8">
        <img src={process.env.PUBLIC_URL +"/images/a4.png"} alt="" />
        <div>
          <p className=" text-xl font-bold">abōde</p>
          <p className=" text-2xl font-bold">
          Dishwasher Pods and Liquid Dish Soap 

          </p>
          <p className=" text-2xl italic pt-2">
          Tough on grease, leaving dishes,
glassware, pots, and pans sparkling clean.
          </p>
        </div>
      </div>

      <div className=" flex items-center flex-col lg:flex-row gap-10 py-8 ">
        <img src={process.env.PUBLIC_URL +"/images/a5.png"} alt="" />
        <div>
          <p className=" text-xl font-bold">
          abōde
          </p>
          <p className=" text-2xl font-bold">
          Multi-Purpose Surface Cleaner Concentrate
          </p>
          <p className=" text-2xl  pt-2">
          Safely clean nonporous household
surfaces, including where food is prepared.
          </p>
        </div>
      </div>
      <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
        <img src={process.env.PUBLIC_URL +"/images/a6.png"} alt="" />
        <div>
          <p className=" text-xl font-bold">
          abōde
          </p>
          <p className=" text-2xl font-bold">
          Laundry Pods

          </p>
          <p className=" text-2xl  pt-2">
          Gentle on clothes and tough on dirt,
leaving every load fresh, clean, and bright.
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
  )
}

export default Abode