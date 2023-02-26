import Image from "next/image";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="max-w-7xl mx-auto min-h-max h-[90vh]">
      <div className="grid grid-cols-1 md:grid-cols-2  md:-mt-16 items-center h-full border-black">
        <div className="order-2 md:order-1 pl-12 md:space-y-5 space-y-3">
          <h1 className="text-3xl text-gray-100 flex flex-col gap-2 md:text-6xl">
            <span>The biggest event of</span>

            <span className="mt-2 text-yellow-500 font-extrabold">GNDEC</span>
          </h1>
          <h4 className="text-lg md:text-2xl text-gray-400">
            Get yourself registered
          </h4>
          <div className="flex gap-4 mt-10 font-semibold">
            <button className="px-4 py-2 bg-yellow-600  rounded text-gray-50 hover:bg-yellow-500 shadow-sm shadow-yellow-400">
              Register Now
            </button>
            <button className="px-4 py-2 border text-yellow-500  border-yellow-500 rounded hover:bg-zinc-700  ">
              Contact Us
            </button>
          </div>
        </div>
        <div className="order-1">
          <div className="image relative h-96 w-96 mx-auto">
            <Image src="/anandutsav.png" alt="" fill />
          </div>
        </div>
      </div>
    </section>
  );
}
