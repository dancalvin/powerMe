import React from "react";

const Cproduct = () => {
  return (
    <div className=" w-full min-h-screen pt-20 px-3 lg:px-0 ">
      <h1 className=" text-2xl font-semibold lg:pl-20">
        Check the products that will help you achieve your health <br />
        goals and experience remarkable changes in how you feel.
      </h1>
      <h1 className=" text-2xl lg:pl-20 pt-6">
        On the next page, create your 90-day wellness plan and record <br />
        each future month’s product wish list in the spaces provided.{" "}
      </h1>
      <div className=" w-full lg:pr-10 mt-20">
        <div className=" mt-6 w-full flex items-start flex-col lg:flex-row  border-b-2 border-tr">
          <div
            style={{ borderRight: "3px solid #405F53" }}
            className=" border-t-4   border-gray-400 border-dotted w-full py-6 h-full relative"
          >
            <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
              <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
                Support Digestion
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd1.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                  DigestZen
                  <br />
                  TerraZyme®
                </h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd2.png"} alt="" />
                <h1 className=" text-xl pt-3 text-center ">PB Assist+ Jr </h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd3.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">PB Assist+ Jr</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd4.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                  dōTERRA®
                  <br />
                  Fiber
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
            
              borderRight: "6px solid #405F53",
            }}
            className=" border-t-4  border-gray-400 border-dotted w-full relative py-6 "
          >
            <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
              <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
                Kits and Collections
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd5.png"} alt="" />
                <h1 className=" text-2xl text-center pt-3 font-semibold">
                  Daily Habits Kit
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full flex items-start flex-col lg:flex-row   border-b-2 border-pr">
          <div
            style={{ borderRight: "3px solid #F2644E" }}
            className=" border-t-4   border-gray-400 border-dotted w-full py-6 h-full relative"
          >
            <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
              <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
                Protect and Restore
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-10 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/w23.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">dōTERRA Breathe®</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/w24.png"} alt="" />
                <h1 className=" text-xl pt-3 text-center ">DigestZen®</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/w25.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">Peppermint</h1>
              </div>
            </div>
          </div>
          <div
            style={{
           
              borderRight: "6px solid #F2644E",
            }}
            className=" border-t-4  border-gray-400 border-dotted w-full relative py-6 "
          >
            <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
              <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
                Protect and Restore
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-10 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/w23.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">dōTERRA Breathe®</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/w24.png"} alt="" />
                <h1 className=" text-xl pt-3 text-center ">DigestZen®</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/w25.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">Peppermint</h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-6 w-full flex items-start flex-col lg:flex-row   border-b-2 border-tr">
          <div
            style={{ borderRight: "3px solid #405F53" }}
            className=" border-t-4   border-gray-400 border-dotted w-full py-6 h-full relative"
          >
            <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
              <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
                Manage Stress and Mood
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd10.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                  {" "}
                  dōTERRA <br />
                  Cheer®
                </h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd11.png"} alt="" />
                <h1 className=" text-xl pt-3 text-center ">Black Spruce</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd12.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">Adaptiv®</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd13.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                  Citrusbr <br />
                  Bliss®
                </h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd14.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                  dōTERRA
                  <br />
                  Balance®
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
           
              borderRight: "6px solid #405F53",
            }}
            className=" border-t-4  border-gray-400 border-dotted w-full relative py-6 "
          >
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd15.png"} alt="" />
                <h1 className=" text-2xl text-center pt-3 font-semibold">
                  Calm and Harmony Kit
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full flex items-start flex-col lg:flex-row   border-b-2 border-pr">
          <div
          
            className=" border-t-4   border-gray-400 border-dotted w-full py-6 h-full relative"
          >
            <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
              <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
                Natural Home Care
              </h1>
            </div>
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd16.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 "> Sun Care</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd17.png"} alt="" />
                <h1 className=" text-xl pt-3 text-center ">dōTERRA® abōde™</h1>
              </div>
            </div>
          </div>
          <div
            style={{
              borderLeft: "3px solid #F2644E",
              borderRight: "6px solid #F2644E",
            }}
            className=" border-t-4  border-gray-400 border-dotted w-full relative py-6 "
          >
          <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd18.png"} alt="" />
                <h1 className=" text-2xl text-center pt-3 font-semibold">
                Cleanse & Restore Kit

                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-6 w-full flex items-start flex-col lg:flex-row   border-b-2 border-tr">
          <div
            style={{ borderRight: "3px solid #405F53" }}
            className=" border-t-4   border-gray-400 border-dotted w-full py-6 h-full relative"
          >
         
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd19.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                Tea Tree
                </h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd20.png"} alt="" />
                <h1 className=" text-xl pt-3 text-center ">Frankincense</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd21.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">ClaryCalm®</h1>
              </div>
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd22.png"} alt="" />
                <h1 className=" text-xl text-center pt-3 ">
                Correct-X®
                </h1>
              </div>
      
            </div>
          </div>
          <div
            style={{
             
              borderRight: "6px solid #405F53",
            }}
            className=" border-t-4  border-gray-400 border-dotted w-full relative py-6 "
          >
            <div className=" flex items-center justify-center gap-5 flex-wrap mt-4">
              <div className=" flex flex-col items-center mt-4">
                <img src={process.env.PUBLIC_URL +"/images/sd23.png"} alt="" />
                <h1 className=" text-2xl text-center pt-3 font-semibold">
                 Immune Support Kit

                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cproduct;
