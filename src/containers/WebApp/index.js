import React from "react";
import Header from "../../layouts/Headers";
import Footer from "../../layouts/Footers";
export default function WebApp(props) {
  return (
    <div className="bg-secondary">
      <Header />

      <main className="box-content w-full px-0 pt-0 pb-[80px] sm:pt-[20px] sm:pb-[40px] md:pt-[40px] md:pb-[60px] lg:pt-[60px] lg:pb-[100px] 2xl:pt-[107px] 2xl:pb-[100px]">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
