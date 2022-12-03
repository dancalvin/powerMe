import React from "react";

const Learn = () => {
  return (
    <div className=" w-full min-h-screen p-3 lg:p-20">
      <div className=" w-ful flex flex-col lg:flex-row items-start justify-between gap-10">
        <div>
          <h1 className=" text-3xl lg:text-8xl font-bold text-tr ">Learn More</h1>
          <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>
        </div>
        <div>
          <div className=" flex items-center gap-2">
            <p className="  lg:text-2xl">Member #</p>
            <input
              type="text"
              className=" border-b outline-none border-black lg:w-96"
            />
          </div>
          <div className=" flex items-center gap-2 pt-4">
            <p className="  lg:text-2xl">Password</p>
            <input
              type="password"
              className=" border-b outline-none border-black lg:w-96"
            />
          </div>
          <p className=" text-xl mt-4">
            Log in at{" "}
            <a href="https://doterra.com" className=" text-pr">
              doterra.com
            </a>
          </p>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 lg:grid-cols-5 gap-10 mt-16  border-b-4 border-tr pb-8">
        <div>
          <img src={process.env.PUBLIC_URL +"/images/l1.png"} alt="" />
          <p className=" text-lg font-semibold pt-3">Empowered Life Series</p>
          <p className=" font-medium italic">
            doterra.com/US/en/empowered life-series
          </p>
          <p>
            View this webinar series to continue learning ways you can use your
            products.
          </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL +"/images/l2.png"} alt="" />
          <p className=" text-lg font-semibold pt-3">
            Essential Oil Solutions Podcast
          </p>

          <p>Subscribe to learn the best ways to use essential oils.</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL +"/images/l3.png"} alt="" />
          <p className=" text-lg font-semibold pt-3">
            Learn more and get great ideas:
          </p>

          <p className=" font-medium italic">
            doterra.com/US/en/ magazines/doterra-living
          </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL +"/images/l4.png"} alt="" />
          <p className=" text-lg font-semibold pt-3">
            Use the dōTERRA Shop app for easy online ordering.{" "}
          </p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL +"/images/l5.png"} alt="" />
          <p className=" text-lg font-semibold pt-3">
            Get an essential oil reference guide or mobile app.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10 border-b-4 border-tr pb-16">
        <div className=" w-full mt-8">
          <div className=" inline-flex w-full gap-2">
            <p className=" text-xl font-semibold w-72">Your Key Support</p>
            <input
              type="text"
              className=" border-b outline-none border-black w-full"
            />
          </div>
          <div className=" inline-flex w-full gap-2 mt-4">
            <p className=" text-xl">Phone</p>
            <input
              type="text"
              className=" border-b outline-none border-black w-full"
            />
          </div>
          <div className=" inline-flex w-full gap-2 mt-4">
            <p className=" text-xl">Email</p>
            <input
              type="email"
              className=" border-b outline-none border-black w-full"
            />
          </div>
          <div className=" inline-flex w-full gap-2 mt-8">
            <p className=" text-xl font-semibold w-72">Other Support</p>
            <input
              type="text"
              className=" border-b outline-none border-black w-full"
            />
          </div>
          <div className=" inline-flex w-full gap-2 mt-4">
            <p className=" text-xl">Phone</p>
            <input
              type="text"
              className=" border-b outline-none border-black w-full"
            />
          </div>
          <div className=" inline-flex w-full gap-2 mt-4">
            <p className=" text-xl">Email</p>
            <input
              type="email"
              className=" border-b outline-none border-black w-full"
            />
          </div>
          <div className=" inline-flex w-full gap-2 mt-8">
            <p className=" text-xl font-semibold w-full">
              Upcoming Local or Online Classes and Events
            </p>
            <input
              type="text"
              className=" border-b outline-none border-black"
            />
          </div>
          <input
            type="text"
            className=" border-b outline-none border-black w-full mt-4"
          />
          <input
            type="text"
            className=" border-b outline-none border-black w-full mt-4"
          />
        </div>
        <div>
          <h1 className=" text-3xl text-tr font-bold text-center">
            Member Services
          </h1>
          <div className=" mt-4 w-full bg-tr py-8 px-10">
            <div className=" flex items-center justify-between">
              <div>
                <h6 className=" text-2xl font-semibold text-white">
                  Live chat:
                </h6>
                <p className=" text-white">doterra.com</p>
              </div>
              <div>
                <h6 className=" text-2xl font-semibold text-white">
                  Americas:
                </h6>
                <p className=" text-white">+1 800-411-8151</p>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-4">
              <div>
                <h6 className=" text-2xl font-semibold text-white">Email</h6>
                <p className=" text-white"> service@doterra.com</p>
              </div>
              <div>
                <h6 className=" text-2xl font-semibold text-white">
                  Australia:
                </h6>
                <p className=" text-white">+61 (02) 8015-5080</p>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-4">
              <div>
                <h6 className=" text-2xl font-semibold text-white">US:</h6>
                <p className=" text-white">Text us now at 343-57</p>
              </div>
              <div>
                <h6 className=" text-2xl font-semibold text-white">UK:</h6>
                <p className=" text-white">+44 2033180064</p>
              </div>
            </div>
          </div>
          <div className=" inline-flex w-full gap-2 mt-8">
            <p className=" text-xl font-semibold w-full">
              Team Call/Website/Facebook Group(s)
            </p>
            <input
              type="text"
              className=" border-b outline-none border-black w-96"
            />
          </div>
          <input
            type="text"
            className=" border-b outline-none border-black w-full mt-4"
          />
          <input
            type="text"
            className=" border-b outline-none border-black w-full mt-4"
          />
        </div>
      </div>
      <h1 className=" mt-10 text-center text-4xl font-bold text-tr">
        Every Bottle Makes a Difference
      </h1>
      <p className=" text-center text-3xl mt-4">
        Consistently using dōTERRA products can change your life, as well as the
        lives of the growers and their families all over the world. Every drop
        of essential oil represents hands that have nurtured the earth for our
        benefit.
      </p>
      <div className=" mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className=" w-full flex flex-col lg:flex-row items-center lg:items-start gap-7">
            <img src={process.env.PUBLIC_URL +"/images/l6.png"} alt="" />
            <div>
              <h1 className=" text-3xl">
                <span className=" font-bold">Share</span> with <br /> those you
                love.
              </h1>
              <p className=" text-xl pt-4">
                {" "}
                <span className=" font-bold">Change Others’ Lives</span> <br />
                Host a dōTERRA class <br /> to be of service to your <br />{" "}
                friends and family
              </p>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL +"/images/scan1.png"} className=" mt-6" alt="" />
        </div>
        <div>
          <div className=" w-full flex flex-col lg:flex-row items-center lg:items-start gap-7">
            <img src={process.env.PUBLIC_URL +"/images/l7.png"} alt="" />
            <div>
              <h1 className=" text-3xl">
                <span className=" font-bold">Build </span> an income and <br />
                make an impact.
              </h1>
              <p className=" text-xl pt-4">
                {" "}
                <span className=" font-bold">Change Your Future</span> <br />
                Create recurring income and <br />
                greater freedom by sharing <br />
                and empowering others with <br />
                natural solutions. <br />
              </p>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL +"/images/scan2.png"} className=" mt-6" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Learn;
