import React from "react";

const Customize = () => {
  return (
    <div className=" px-3 lg:px-0  lg:pl-20 min-h-screen">
      <h1 className=" text-4xl lg:text-8xl font-bold text-tr pt-20">
        Customize Your
        <br />
        Wellness Plan
      </h1>
      <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>

      <div className=" mt-16 w-full flex items-center lg:items-start gap-10 flex-col lg:flex-row  border-b-2 border-pr">
        <div className=" lg:w-40  bg-pr lg:h-80 py-3 lg:py-0 flex items-center justify-center ">
          <h1 className=" text-4xl text-white text-center transform lg:-rotate-90">
            NUTRITION & DIGESTION
          </h1>
        </div>
        <div className=" border-t-4  border-gray-400 border-dotted w-full relative ml-8">
          <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
            <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
              Fuel, Support, and Fortify
            </h1>
          </div>
          <div className=" flex items-center justify-center gap-5 lg:gap-10 flex-wrap mt-4">
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w1.png"} alt="" />
              <h1 className=" text-xl pt-3 ">
                dōTERRA Lifelong Vitality Pack®
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w2.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
                dōTERRA <br /> a2z Chewable™
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w3.png"} alt="" />
              <h1 className=" text-xl pt-3 ">IQ Mega®</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w4.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
                dōTERRA®
                <br />
                Greens
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w5.png"} alt="" />
              <h1 className=" text-xl pt-3 ">dōTERRA Protein</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-16 w-full flex items-center lg:items-start gap-10 flex-col lg:flex-row  border-b-2 border-tr">
        <div className=" lg:w-40  bg-tr lg:h-80 py-3 lg:py-0 flex items-center justify-center ">
          <h1 className=" text-4xl text-white text-center transform lg:-rotate-90">
            MOVEMENT & METABOLISM
          </h1>
        </div>
        <div className=" border-t-4  border-gray-400 border-dotted w-full relative ml-8">
          <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
            <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
              Soothe and Energize
            </h1>
          </div>
          <div className=" flex items-center justify-center gap-5 lg:gap-10 flex-wrap mt-4">
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w6.png"} alt="" />
              <h1 className=" text-xl pt-3 ">Deep Blue®</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w7.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">Mito2Max</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w8.png"} alt="" />
              <h1 className=" text-xl pt-3 ">Copaiba Softgels</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w8.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">Turmeric Capsules</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full flex items-center lg:items-start gap-10 flex-col lg:flex-row  border-b-2 border-pr">
        <div className=" lg:w-40  bg-pr lg:h-80 py-3 lg:py-0 flex items-center justify-center ">
          <h1 className=" text-4xl text-white text-center transform lg:-rotate-90">
            REST & MANAGE STRESS
          </h1>
        </div>
        <div className=" border-t-4  border-gray-400 border-dotted w-full relative ml-8">
          <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
            <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
              Support Sleep and Rest
            </h1>
          </div>
          <div className=" flex items-center justify-center gap-5 lg:gap-10 flex-wrap mt-4">
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w9.png"} alt="" />
              <h1 className=" text-xl pt-3 ">Lavender</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w10.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
                dōTERRA
                <br />
                Serenity®
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w11.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
                {" "}
                dōTERRA <br /> Serenity® Softgels
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w12.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
                Volo®
                <br />
                Diffuser
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w13.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
                dōTERRA
                <br />
                Peace®
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w14.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
              Calmer
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w15.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
              Cedarwood
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-16 w-full flex items-center lg:items-start gap-10 flex-col lg:flex-row  border-b-2 border-tr">
        <div className="lg:w-40  bg-tr lg:h-80 py-3 lg:py-0 flex items-center justify-center ">
          <h1 className=" text-4xl text-white text-center transform lg:-rotate-90">
          REDUCE TOXIC
EXPOSURE &
SUPPORT
DETOXIFICATION

          </h1>
        </div>
        <div className=" border-t-4  border-gray-400 border-dotted w-1/3  relative ml-8">
          <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
            <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
            Support Cleansing
            </h1>
  
          </div>
          <div className=" flex items-center justify-center gap-5 lg:gap-10 flex-wrap mt-4">
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w16.png"} alt="" />
              <h1 className=" text-xl pt-3 ">Lemon</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w17.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
              Zendocrine
                <br />
                Softgels
              </h1>
            </div>
        
          </div>
        </div>
        <div className=" border-t-4  border-gray-400 border-dotted w-full relative ml-8">
          <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
            <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
            Natural Self-Care
            </h1>
  
          </div>
          <div className=" flex items-center justify-center gap-10 flex-wrap mt-4">
       
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w18.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
                {" "}
                Oral Health
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w19.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
              Essential<br />
Skin Care
 
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w20.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
              Yarrow | Pom
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w21.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
              Hair Care
              </h1>
            </div>
           
          </div>
        </div>
      </div>
      <div className=" mt-16 w-full flex items-center lg:items-start gap-10 flex-col lg:flex-row  border-b-2 border-pr">
        <div className=" lg:w-40  bg-pr lg:h-80 py-3 lg:py-0 flex items-center justify-center  ">
          <h1 className=" text-4xl text-white text-center transform lg:-rotate-90">
          INFORMED
SELF-CARE

          </h1>
        </div>
        <div className=" border-t-4  border-gray-400 border-dotted w-full relative ml-8">
          <div className=" absolute -top-6 left-0 w-full  z-20 flex items-center justify-center">
            <h1 className=" font-semibold bg-white px-3 py-2 text-2xl ">
            Protect and Restore
            </h1>
          </div>
          <div className=" flex items-center justify-center gap-5 lg:gap-10 flex-wrap mt-4">
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w22.png"} alt="" />
              <h1 className=" text-xl pt-3 ">dōTERRA On Guard® 
</h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w23.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
              dōTERRA Breathe®
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w24.png"} alt="" />
              <h1 className=" text-xl pt-3 text-center ">
                
                DigestZen®
              </h1>
            </div>
            <div className=" flex flex-col items-center mt-4">
              <img src={process.env.PUBLIC_URL +"/images/w25.png"} alt="" />
              <h1 className=" text-xl text-center pt-3 ">
              Peppermint
              </h1>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
