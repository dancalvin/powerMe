import React from "react";

const Wellness2 = () => {
  return (
    <div className=" min-h-screen w-full p-3 lg:p-20">
      <h1 className=" text-4xl lg:text-8xl font-bold text-pr ">Wellness Consult</h1>
      <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
      <div className=" pt-5 flex flex-col lg:flex-row items-center gap-3">
        <div className=" w-10 h-10 rounded-full bg-pr flex items-center justify-center text-2xl text-white">
          1
        </div>
        <h1 className=" text-2xl text-pr font-semibold">
          Write down your health priorities and find solutions.
        </h1>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-4 pt-7 px-4">
        <div>
          <h1 className=" text-center w-full text-2xl font-medium">
            Top Health Priorities for You
            <br />
            and Your Family
          </h1>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold">
            1
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold mt-4">
            2
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold mt-4">
            3
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
        </div>
        <div>
          <h1 className=" text-center w-full text-2xl font-medium pb-8">
            Natural Solutions You Have
          </h1>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold">
            1
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold mt-4">
            2
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold mt-4">
            3
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
        </div>
        <div>
          <h1 className=" text-center w-full text-2xl font-medium pb-8">
            Natural Solutions You Need
          </h1>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold">
            1
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold mt-4">
            2
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
          <div className=" w-full flex items-center gap-2 text-2xl font-bold mt-4">
            3
            <input
              type="text"
              className=" w-full border-b border-black outline-none"
            />
          </div>
        </div>
      </div>
      <div className=" pt-5 flex flex-col lg:flex-row items-center gap-3 mt-5">
        <div className=" w-10 h-10 rounded-full bg-pr flex items-center justify-center text-2xl text-white">
          2
        </div>
        <div>
          <h1 className=" text-2xl text-pr font-semibold">
            Create your daily wellness plan.
          </h1>
          <p className=" text-xl">
            Begin with the foundational daily habits listed below. Then add the
            natural solutions you need and organize them into your daily plan.
          </p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3  pt-7 px-4 divide-x  divide-black">
        <div className=" w-full">
          <h1 className=" text-center w-full text-2xl font-medium  py-1 bg-pr text-white">
            MORNING
          </h1>
          <div className="flex items-center">
            <div className=" w-16 lg:h-60 flex items-center justify-center">
              <h1 className=" transform -rotate-90 text-pr font-semibold text-2xl ">
                SUPPLEMENTS
              </h1>
            </div>
            <div className=" border-l border-black p-4 lg:h-60">
              <div className=" flex items-center gap-2 text-lg font-medium">
                <div
                  style={{ height: "15px", width: "15px" }}
                  className=" border border-pr"
                ></div>
                <div>
                  <p> dōTERRA Lifelong Vitality Pack®*</p>
                  <p> (2 Alpha CRS+®,2 Microplex VMz®, </p>
                  <p> 2 xEO Mega®</p>
                </div>
              </div>
              <p className=" flex items-center gap-2 text-lg font-medium">
                <div
                  style={{ height: "15px", width: "15px" }}
                  className=" border border-pr"
                ></div>
                1–2 DigestZen TerraZyme®
              </p>
              <p
                className=" flex items-center gap-2 
text-lg font-medium"
              >
                <div
                  style={{ height: "15px", width: "15px" }}
                  className=" border border-pr"
                ></div>
                1 sachet MetaPWR™ Advantage
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-center w-full text-2xl font-medium  py-1 bg-pr text-white">
            AFTERNOON
          </h1>
          <div className="  border-black p-4 lg:h-60">
            <div className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <div>
                <p> ddōTERRA Lifelong Vitality Pack®*</p>
                <p>(2 Alpha CRS+®, 2 Microplex VMz®, </p>
                <p>2 xEO Mega®)</p>
              </div>
            </div>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              1–2 DigestZen TerraZyme®
            </p>
          </div>
        </div>
        <div>
          <h1 className=" text-center w-full text-2xl font-medium  py-1 bg-pr text-white">
            EVENING
          </h1>
          <div className="  border-black p-4 lg:h-60">
            <div className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <div>
                <p>1 MetaPWR™ Assist before dinner </p>
              </div>
            </div>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <p>1–2 DigestZen TerraZyme® with dinner</p>
            </p>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <p>1–2 PB Assist+® at bedtime</p>
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 border-t border-b border-black px-4 divide-x  divide-black">
        <div className=" w-full">
          <div className="flex items-center">
            <div className=" w-16 h-72 flex items-center justify-center">
              <h1 className=" transform -rotate-90 text-pr font-semibold text-2xl ">
                ESSENTIALOILS
              </h1>
            </div>
            <div className=" border-l border-black p-4 h-72">
              <div className=" flex items-center gap-2 text-lg font-medium">
                <div
                  style={{ height: "15px", width: "15px" }}
                  className=" border border-pr"
                ></div>
                <div>1–3 drops Lemon in water</div>
              </div>
              <p className=" flex items-center gap-2 text-lg font-medium">
                <div
                  style={{ height: "15px", width: "15px" }}
                  className=" border border-pr"
                ></div>
                <div>
                  <p> 2 drops Frankincense on bottoms </p>
                  <p> of feet or under tongue </p>
                </div>
              </p>
              <p
                className=" flex items-center gap-2 
text-lg font-medium"
              >
                <div
                  style={{ height: "15px", width: "15px" }}
                  className=" border border-pr"
                ></div>
                <div>
                  <p>2 drops dōTERRA Balance®</p>
                  <p> on bottoms of feet</p>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="  border-black p-4 lg:h-60">
            <div className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <div>1–3 drops Lemon in water</div>
            </div>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              Diffuse 4–5 drops dōTERRA On Guard®
            </p>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              Apply Deep Blue® after workout
            </p>
          </div>
        </div>
        <div>
          <div className="  border-black p-4 lg:h-60">
            <div className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <div>
                <div>
                  <p> 2 drops Frankincense on bottoms of </p>
                  <p>feet or under tongue</p>
                </div>
              </div>
            </div>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <div>
                <p>2 drops dōTERRA Balance® on </p>
                <p>bottoms of feet </p>
              </div>
            </p>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <p>Apply Deep Blue® where needed</p>
            </p>
            <p className=" flex items-center gap-2 text-lg font-medium">
              <div
                style={{ height: "15px", width: "15px" }}
                className=" border border-pr"
              ></div>
              <p> Diffuse 3–5 drops Lavender at bedtime</p>
            </p>
          </div>
        </div>
      </div>
      <p className=" w-full text-right py-1 border-b border-black pr-4 bg-gray-200">
        *When beginning dōTERRA Lifelong Vitality Pack®, start with half doses
        for two weeks. with Meal
      </p>
      <div className=" pt-5 flex items-center flex-col lg:flex-row gap-3 mt-5">
        <div className=" w-10 h-10 rounded-full bg-pr flex items-center justify-center text-2xl text-white">
          3
        </div>
        <div>
          <h1 className=" text-2xl text-pr font-semibold">
            What other wellness choices could support your goals?
          </h1>
          <p className=" text-xl">
            (e.g., water intake, sleep, exercise, dietary changes)
          </p>
        </div>
      </div>
      <input
        type="text"
        className=" w-full border-b border-black outline-none pt-4"
      />
      <input
        type="text"
        className=" w-full border-b border-black outline-none pt-4"
      />
      <input
        type="text"
        className=" w-full border-b border-black outline-none pt-4"
      />

      <div className=" pt-5 flex items-center flex-col lg:flex-row gap-3 mt-5">
        <div className=" w-10 h-10 rounded-full bg-pr flex items-center justify-center text-2xl text-white">
          4
        </div>
        <div>
          <h1 className=" text-2xl text-pr font-semibold">
            Live empowered with natural solutions.
          </h1>
          <p className=" text-xl">
            Create a 90-day wellness plan by adding the product you need to your
            loyalty orders (recommended to run between the 5th—15th).
          </p>
        </div>
      </div>

      <div className=" lg:pl-12 grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        <div className=" w-full">
          <div className=" py-1 px-2 flex items-center justify-between text-2xl text-white bg-pr w-full">
            <p>MONTH 1 LRP</p>
            <div className="flex items-center gap-2">
              <p className=" text-xl">Date : </p>
              <input
                type="date"
                className=" w-28 text-black text-sm text-center"
                name=""
                id=""
              />
            </div>
          </div>
          <div className=" w-full grid grid-cols-5 gap-x-4">
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
          </div>
          <div>
         <div className=" w-full flex items-end justify-end font-medium text-2xl gap-3 pt-4">
         TOTAL PV <input
              type="text"
              className="  border-b w-32 border-black  outline-none pt-2"
            />
         </div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" py-1 px-2 flex items-center justify-between text-2xl text-white bg-pr w-full">
            <p>MONTH 2 LRP</p>
            <div className="flex items-center gap-2">
              <p className=" text-xl">Date : </p>
              <input
                type="date"
                className=" w-28 text-black text-sm text-center"
                name=""
                id=""
              />
            </div>
          </div>
          <div className=" w-full grid grid-cols-5 gap-x-4">
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
          </div>
          <div className=" w-full flex items-end justify-end font-medium text-2xl gap-3 pt-4">
         TOTAL PV <input
              type="text"
              className="  border-b w-32 border-black  outline-none pt-2"
            />
         </div>
        </div>
        <div className=" w-full">
          <div className=" py-1 px-2 flex items-center justify-between text-2xl text-white bg-pr w-full">
            <p>MONTH 3 LRP</p>
            <div className="flex items-center gap-2">
              <p className=" text-xl">Date : </p>
              <input
                type="date"
                className=" w-28 text-black text-sm text-center"
                name=""
                id=""
              />
            </div>
          </div>
          <div className=" w-full grid grid-cols-5 gap-x-4">
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-3 outline-none pt-2"
            />
            <input
              type="text"
              className=" w-full border-b border-black col-span-2 outline-none pt-2"
            />
          </div>
          <div className=" w-full flex items-end justify-end font-medium text-2xl gap-3 pt-4">
         TOTAL PV <input
              type="text"
              className="  border-b w-32 border-black  outline-none pt-2"
            />
         </div>
        </div>
  
      </div>
      <div className=" w-full flex items-center justify-end pr-4 pt-16">
    <p className=" text-gray-500 border px-2 py-1 text-sm">  See individual labels for ingredients, cautions, and instruction for use. </p>
      </div>
    </div>
  );
};

export default Wellness2;
