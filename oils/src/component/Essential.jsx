import React from "react";

const Essential = () => {
  return (
    <div className=" w-full min-h-screen">
      <img src={process.env.PUBLIC_URL +"/images/to8.jpg"} className=" w-full object-cover" alt="" />
      <div className=" w-full p-3 lg:p-20" style={{ background: "#A4C8CF" }}>
        <h1 className=" text-4xl lg:text-8xl font-bold text-white ">Essential Tips</h1>
        <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        <div className=" mt-10 w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <div className=" w-full flex items-end gap-3 ">
              <img src={process.env.PUBLIC_URL +"/images/e1.png"} alt="" />
              <div>
                <h1 className=" text-3xl  text-white font-semibold">
                  Effectiveness
                </h1>
                <p className=" text-xl pt-4">
                  Use your reference guide to find solutions to health
                  priorities or concerns as they arise
                </p>
              </div>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e4.png"} alt="" />
              <p className=" text-xl ">
                Different essential oils work for different people. When you’re
                not getting the desired results, try different oils or
                application methods.
              </p>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e7.png"} alt="" />
              <p className=" text-xl ">
                Massage to increase benefits and promote rapid absorption.
              </p>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e10.png"} alt="" />
              <p className=" text-xl ">
                Try different application methods: apply under the tongue or to
                the bottoms of the feet, spine, or navel.
              </p>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e12.png"} alt="" />
              <p className=" text-xl ">
                Use oils topically with Fractionated Coconut Oil to enjoy
                greater sustained absorption.
              </p>
            </div>
          </div>
          <div>
            <div className=" w-full flex items-end gap-3 ">
              <img src={process.env.PUBLIC_URL +"/images/e2.png"} alt="" />
              <div>
                <h1 className=" text-3xl  text-white font-semibold">Safety</h1>
                <p className=" text-xl pt-4">
                  Use your reference guide to find solutions to health
                  priorities or concerns as they arise
                </p>
              </div>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e5.png"} alt="" />
              <p className=" text-xl ">
                Dilute with Fractionated Coconut Oil for sensitive skin. Refer
                to dōTERRA sensitivity guidelines. For convenience, the dōTERRA
                Touch® line has prediluted oils.
              </p>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e8.png"} alt="" />
              <p className=" text-xl ">
                Avoid sun exposure for at least 12 hours after applying Lemon,
                Wild Orange, Bergamot, Lime, Grapefruit, or other citrus oils
                topically.
              </p>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e11.png"} alt="" />
              <p className=" text-xl ">
                Read labels and follow recommendations.
              </p>
            </div>
          </div>
          <div>
            <div className=" w-full flex items-end gap-3 ">
              <img src={process.env.PUBLIC_URL +"/images/e3.png"} alt="" />
              <div>
                <h1 className=" text-3xl  text-white font-semibold">Best Practices</h1>
                <p className=" text-xl pt-4">
                Keep your products at their
best by avoiding exposure
to extreme temperatures or
direct sunlight.
                </p>
              </div>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e6.png"} alt="" />
              <p className=" text-xl ">
              Use glass containers with
your essential oils, as they can
break down some plastics
over time.
              </p>
            </div>
            <div className=" w-full flex items-start gap-3 pt-8">
              <img src={process.env.PUBLIC_URL +"/images/e9.png"} alt="" />
              <p className=" text-xl ">
              dōTERRA essential oils are
potent. Use smaller amounts
more frequently for best
results.
              </p>
            </div>
      
          </div>
        </div>
        <p className=" text-xl pt-2 w-full text-center  lg:text-end">See individual labels for ingredients, cautions, and instruction for use.</p>
      </div>
    </div>
  );
};

export default Essential;
