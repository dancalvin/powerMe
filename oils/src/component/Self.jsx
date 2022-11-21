import React from 'react'

const Self = () => {
  return (
    <div className=" min-h-screen w-full relative">
    <img
      src={process.env.PUBLIC_URL + "/images/image-196.jpg"}
      className=" w-full h-full object-cover min-h-screen"
      alt=""
    />
    <div className="  absolute z-20 top-0 left-0  w-full lg:h-full pl-3 lg:pl-20 pt-20 lg:pt-32 pb-32 ">
      <h1 className=" text-4xl lg:text-8xl font-bold text-tr ">Natural Self-Care
 
</h1>
      <div className=" my-3 w-16 bg-gray-400 rounded-md h-4"></div>
      <p className=" lg:w-3/5 text-2xl ">
        <span className=" font-semibold">
        You don’t have to settle for questionable ingredients in your
self-care routine.
        </span> Avoid adding to your body’s toxic load. Instead,
choose safe and natural products that provide a cleaner lifestyle.
Replace more synthetic personal care products with dōTERRA
naturally formulated essential oil-based options.
      </p>
    </div>
    <div className="  absolute z-30 bottom-32 left-0 mx-3 lg:mx-0 lg:left-20 lg:w-1/3 border-2 border-tr ">
      <div className=" bg-tr py-3 pl-8">
        <h1 className=" text-white text-xl lg:text-3xl">DAILY WELLNESS HABITS</h1>
      </div>
      <div className=" p-4">
        <p className=" text-lg text-tr font-semibold">• Eliminate chemical-based self-care products.
</p>
        <p className=" text-lg text-tr font-semibold pt-1">
        • Use safe and natural products in your self-care routine.

        </p>
       
      </div>
    </div>
  </div>
  )
}

export default Self