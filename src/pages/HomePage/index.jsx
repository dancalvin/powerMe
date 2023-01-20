import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <div className="fixed h-full w-full">
      <article class="h-full w-full">
        <div class="grid h-full grid-cols-1 grid-rows-[150px_1fr_100px]">
          <div class="flex h-[150px] w-full items-center justify-center bg-[#405f53]">
            <div>
              <p className="font-montserrat text-[30px] text-white">
                My Assessments
              </p>
            </div>
          </div>

          <div className="min-h-[450px]">
            <div class="mx-auto  w-full max-w-[1080px] border-b-[1px] pb-[60px] pt-[2%]">
              <div class="text-center">
                <Link
                  to="/vs-core"
                  style={{ textAlign: "center" }}
                  className="text-center font-montserrat text-[24px] font-[400]"
                >
                  Vitality Score Assessment &gt;
                </Link>
              </div>
              <div class="mt-5 text-center">
                <Link
                  to="/heart-fit"
                  style={{ textAlign: "center" }}
                  className="text-center font-montserrat text-[24px] font-[400]"
                >
                  Heart Fit Assessment &gt;
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[100px] w-full bg-[#405f53]"></div>
        </div>
      </article>
    </div>
  );
}
