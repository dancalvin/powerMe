import React from "react";

const Loyalty = () => {
  return (
    <div className=" w-full min-h-screen p-3 lg:p-20">
      <h1 className=" text-4xl lg:text-8xl font-bold text-pr ">
        Loyalty Rewards
        <br />
        Program
      </h1>
      <div className=" my-3 w-16 bg-gray-300 rounded-md h-4"></div>

      <h1 className=" text-4xl font-bold text-pr mt-6">
        Earn Free Products of Your Choice
      </h1>
      <p className=" text-xl font-medium pt-2">
        The dōTERRA Loyalty Rewards Program (LRP) provides an automatic monthly
        shipment of products you use on a regular basis. If your loyalty order
        contains at least 50 PV,* you immediately begin to earn product points
        that can be used as cash to receive free dōTERRA products. The longer
        you participate, the more points you can earn—up to 30% of your total
        monthly LRP purchases!
      </p>
      <h1 className=" text-4xl font-bold text-pr mt-6">
        Loyalty Rewards Program FAQs
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-9">
        <div className=" w-full">
          <p className=" text-xl text-pr font-bold pt-2">
            How do I get free products?
          </p>
          <div className=" w-full text-3xl font-bold text-white p-3 mt-4 flex items-center justify-center bg-pr text-center">
            EARN FREE PRODUCT POINTS IN ADDITION TO YOUR 25% DISCOUNT
          </div>
          <p className=" text-xl font-medium pt-2 text-pr">
            LRP BENEFITS: PERCENTAGE BACK IN PRODUCT POINTS FOR FREE PRODUCTS
          </p>
          <div className=" w-full flex flex-wrap items-center mt-2 justify-between">
            <div>
              <h1 className=" text-3xl text-pr font-semibold"> 10%</h1>
              <p className=" text-lg text-pr">Months 1–3</p>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/brak.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">15%</h1>
              <p className=" text-lg text-pr">Months 4–6</p>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/brak.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">20%</h1>
              <p className=" text-lg text-pr">Months 7–9</p>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/brak.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">25%</h1>
              <p className=" text-lg text-pr">Months 10–12</p>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/brak.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">30%</h1>
              <p className=" text-lg text-pr">Months 13+</p>
            </div>
          </div>
          <p className=" text-xl font-medium pt-2 text-pr">
            TOTAL SAVINGS AND PRODUCT POINTS:
          </p>
          <div className=" w-full flex items-center mt-2 flex-wrap justify-between border-b-8 pb-2 border-pr">
            <div>
              <h1 className=" text-3xl text-pr font-semibold"> 30%</h1>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/br.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">40%</h1>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/br.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">45%</h1>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/br.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">50%</h1>
            </div>
            <img src={process.env.PUBLIC_URL +"/images/br.png"} alt="" />
            <div>
              <h1 className=" text-3xl text-pr font-semibold">55%</h1>
            </div>
          </div>

          <p className=" text-2xl font-bold text-pr pt-6">
            How do I get 30% back in free product points?
          </p>
          <p className=" text-xl font-medium  pt-3">
            Your Loyalty Rewards percentage grows over time and can begin on
            your first order when you sign up for a qualifying LRP order with
            your enrollment. Your percentage grows by 5% every three months when
            your orders are over 50 PV until you reach the maximum of 30%.
          </p>
          <p className=" text-2xl font-bold text-pr pt-6">
            How do I maximize dōTERRA specials?
          </p>
          <p className=" text-xl font-medium  pt-3">
            Place a loyalty order of at least 125 PV (Personal Volume) between
            the 5th and the 15th. This sets you up to receive the Product of the
            Month for free and take advantage of additional promotions. Pay
            attention to the PV versus price, as many specials are PV-related
            and start on the first of the month.
          </p>

          <div className=" mt-6 w-full grid grid-cols-12 bg-pr px-2 py-2 items-center">
            <div className=" col-span-8 text-xl text-white font-bold ">
              PRODUCT VALUE (PV) MUST EXCEED
            </div>
            <div className="text-sm lg:text-2xl text-white font-bold text-center ">1</div>
            <div className="text-sm lg:text-2xl text-white font-bold text-center ">50</div>
            <div className="text-sm lg:text-2xl text-white font-bold text-center ">
              100
            </div>
            <div className="text-sm lg:text-2xl text-white font-bold text-center ">
              125
            </div>
          </div>
          <div className="  w-full grid grid-cols-12  border-b border-pr  items-center">
            <div className=" col-span-8 text-xl ">
              Maintain LRP points previously earned
            </div>
            <div className=" flex items-center justify-center border-l border-pr h-full w-full py-2 ">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center  border-l  border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center border-l  border-pr h-full w-full py-2 ">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center border-l border-r border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
          </div>
          <div className="  w-full grid grid-cols-12  border-b border-pr  items-center">
            <div className=" col-span-8 text-xl ">
              Earn LRP product points (to use for free products) and increase
              percentage from 10% to 30%
            </div>
            <div className=" flex items-center justify-center border-l border-pr h-full w-full py-2 "></div>
            <div className=" flex items-center justify-center  border-l  border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center border-l  border-pr h-full w-full py-2 ">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center border-l border-r border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
          </div>
          <div className="  w-full grid grid-cols-12  border-b border-pr  items-center">
            <div className=" col-span-8 text-xl ">
              Qualify to earn commissions
            </div>
            <div className=" flex items-center justify-center border-l border-pr h-full w-full py-2 "></div>
            <div className=" flex items-center justify-center  border-l  border-pr h-full w-full py-2"></div>
            <div className=" flex items-center justify-center border-l  border-pr h-full w-full py-2 ">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center border-l border-r border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
          </div>
          <div className="  w-full grid grid-cols-12  border-b border-pr  items-center">
            <div className=" col-span-8 text-xl ">Get free shipping</div>
            <div className=" flex items-center justify-center border-l border-pr h-full w-full py-2 "></div>
            <div className=" flex items-center justify-center  border-l  border-pr h-full w-full py-2"></div>
            <div className=" flex items-center justify-center border-l  border-pr h-full w-full py-2 ">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
            <div className=" flex items-center justify-center border-l border-r border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
          </div>
          <div className="  w-full grid grid-cols-12  border-b border-pr  items-center">
            <div className=" col-span-8 text-xl ">
              Receive the free Product of the Month (orders placed between the
              1st–15th)
            </div>
            <div className=" flex items-center justify-center border-l border-pr h-full w-full py-2 "></div>
            <div className=" flex items-center justify-center  border-l  border-pr h-full w-full py-2"></div>
            <div className=" flex items-center justify-center border-l  border-pr h-full w-full py-2 "></div>
            <div className=" flex items-center justify-center border-l border-r border-pr h-full w-full py-2">
              <div className=" w-4 h-4 bg-pr rounded-full"></div>
            </div>
          </div>
          <p className="  text-sm pt-10">
            *PV (Personal Volume): This is a numeric value assigned to each
            product. It's used as the qualifier for commissions, rank, and
            promotions. Products purchased with points have no PV
          </p>
        </div>
        <div className=" w-full">
          <div className=" flex items-center flex-col lg:flex-row gap-4">
            <div>
              <p className=" text-2xl text-pr font-bold pt-2">
                How do I create a new loyalty order?
              </p>
              <p className=" text-xl">
                Log into doterra.com. Click “Create New LRP Order” or edit items
                in an existing loyalty order template.
              </p>
            </div>
            <div className=" w-full bg-pr p-3 flex items-center gap-2">
              <p className=" text-xl text-white">
                Watch how to create an LRP order.
              </p>
              <img src={process.env.PUBLIC_URL +"/images/loyal.png"} alt="" />
            </div>
          </div>
          <p className=" text-2xl text-pr font-bold pt-6">
            How do I get free shipping on my orders?
          </p>
          <p className=" text-xl">
            All loyalty and enrollment orders over 100 PV will qualify for free
            shipping. If a loyalty or enrollment order is placed below 100 PV,
            dōTERRA will give five Shipping Reward Program (SRP) points. SRP
            product points can be used on future dōTERRA orders.
          </p>
          <p className=" text-2xl text-pr font-bold pt-6">
            When can I use my product points?
          </p>
          <p className=" text-xl">
            Redeem your product points anytime within a year from when you earn
            them.
          </p>
          <p className=" text-2xl text-pr font-bold pt-6">
            How do I redeem my LRP points?
          </p>
          <p className=" text-xl">
            In your virtual shopping cart, select “Use Points” on the products
            you’d like to redeem with your LRP points. New points are added the
            15th of the following month after each order placement.
          </p>
          <p className=" text-2xl text-pr font-bold pt-6">
            Can I have more than one loyalty order?
          </p>
          <p className=" text-xl">
            Yes. If you need more than your monthly order, simply change your
            LRP template and run it again on whatever day you choose, or you can
            set up as many orders as you like in advance. Remember to cancel any
            orders you don’t want to receive the following month prior to your
            order processing date..
          </p>
          <p className=" text-2xl text-pr font-bold pt-6">
            How do I cancel my loyalty order?
          </p>
          <p className=" text-xl">
            You can cancel your loyalty order anytime via phone, online chat, or
            email to service@doterra.com. dōTERRA customer service can assist
            you with redeeming any free product points you’ve accumulated prior
            to cancellation so points aren’t lost. If you cancel your loyalty
            order, you’ll start back at 10% rewards when you resume consistent
            loyalty order purchasing.
          </p>
          <p className=" text-2xl text-pr font-bold pt-6">
            What if I want to return products?
          </p>
          <p className=" text-xl">
            dōTERRA refunds 100% of anything unopened within 30 days of purchase
            and 90% of the purchase price if opened or used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;
