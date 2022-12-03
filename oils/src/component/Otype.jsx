import React from "react";

const Otype = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className=" w-full h-full relative">
        <img src={process.env.PUBLIC_URL +"/images/image-226.jpg"} className=" h-full w-full" alt="" />
      </div>
      <div className="lg:px-20 px-4">
        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8">
          <img src={process.env.PUBLIC_URL +"/images/o1.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">
              On Guard® Hand Sanitizing Gel and Mist
            </p>
            <p className=" text-2xl italic">
              Spray or apply naturally derived hand sanitizing mist or gel, 99%
              effective against most common germs (see label for list)
            </p>
          </div>
        </div>
        <div className=" flex items-center  flex-col lg:flex-row py-8  gap-8">
          <img src={process.env.PUBLIC_URL +"/images/o2.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">
              On Guard+™ Softgels and Throat Drops
            </p>
            <p className=" text-2xl italic">
              Consume 1 or more softgels or throat drops as needed to promote
              healthy immune function and soothe a dry throat.*
            </p>
          </div>
        </div>
        <div className=" flex items-center  flex-col lg:flex-row py-8  gap-8">
          <img src={process.env.PUBLIC_URL +"/images/o3.png"} alt="" />
          <div>
            <p className=" text-xl font-semibold">dōTERRA</p>
            <p className=" text-2xl font-semibold">Breathe</p>
            <p className=" text-2xl italic">
              Diffuse, apply, or enjoy a drop to create feelings of easy
              breathing and open airways.
            </p>
          </div>
        </div>
        <div className="flex items-center  flex-col lg:flex-row py-8  gap-8">
          <div className=" flex items-center  gap-8">
            <img src={process.env.PUBLIC_URL +"/images/o4.png"} alt="" />
            <div>
              <p className=" text-2xl font-semibold">Correct-X®</p>
              <p className=" text-2xl italic">
                Use this natural ointment for any minor skin irritations.
              </p>
            </div>
          </div>
          <div className=" flex items-center  gap-8">
            <img src={process.env.PUBLIC_URL +"/images/o5.png"} alt="" />
            <div>
              <p className=" text-2xl font-semibold">Lavender</p>
              <p className=" text-2xl italic">
                Apply topically to soothe occasional skin irritations.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:flex-row  py-8  gap-8">
          <div className=" flex items-center  gap-8">
            <img src={process.env.PUBLIC_URL +"/images/o6.png"} alt="" />
            <div>
              <p className=" text-2xl font-semibold">Peppermint</p>
              <p className=" text-2xl italic">
                Apply for a cooling sensation. Dilute as needed.
              </p>
            </div>
          </div>
          <div className=" flex items-center  gap-8">
            <img src={process.env.PUBLIC_URL +"/images/o7.png"} alt="" />
            <div>
              <p className=" text-2xl font-semibold">Tea Tree</p>
              <p className=" text-2xl italic">
                For occasional skin irritations, apply 1–2 drops onto the
                affected area.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center flex-col lg:flex-row gap-3 py-8 ">
          <img src={process.env.PUBLIC_URL +"/images/o8.png"} alt="" />
          <div>
        
            <p className=" text-2xl font-bold">ClaryCalm®</p>
            <p className=" text-2xl italic pt-2">
            Roll this women’s monthly blend on lower
abdomen and use with a heating pad.
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

export default Otype;
