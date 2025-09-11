import React from "react";

export default function StartToday() {
  return (
    <div className="overflow-hidden mt-20 text-black">
     <div className="border-b border-dotted border-gray-400 mb-5 w-full h-[1px]" />

      {/* SVG cloud shape */}
      <div className="bg-[#2fc18b]  h-[580px] ">
      <div className="w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24"
          preserveAspectRatio="none"
        >
          <path
            fill="#111827" // Tailwind's gray-900
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,106.7C672,107,768,149,864,154.7C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-7xl mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Left Side */}
        <div className="md:w-1/2 ">
          <h1 className="text-[38px] font-extrabold">
            Don't <span className="text-white">Miss Out.</span>
          </h1>
          <p className="text-lg mb-10">
            Transform Your Organisation's Future Now!
          </p>
          <button className="bg-[#111827] text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-black transition duration-300">
            Start Today
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center items-center md:mt-0">
          <img
            src="https://questpix.com/assets/images/partner_with/miss-out.png"
            alt="Illustration"
            className="w-[70%] max-w-md"
          />
        </div>
      </div>
      </div>
    </div>
  );
}
