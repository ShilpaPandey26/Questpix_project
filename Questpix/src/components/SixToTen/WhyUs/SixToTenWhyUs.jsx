import React from 'react'
import { FaStar } from "react-icons/fa";

export default function SixToTenWhyUs() {
  return (
    <div className="container pt-40 pb-20 flex">
      {/* Left Side */}
      <div className=" md:w-[50%]  pt-10">
        <div>
        <p className="text-5xl font-semibold pb-2">JEE, NEET & Foundation Success,<span className="text-[#2FC18B]"><br />Reimagined.</span></p>

        <p className="text-[16px] pt-5 pb-8 ">Experience a new era of learning</p>
        <p className="text-[#9EBDEF] text-[16px] pb-8 w-[70%]">
          Our platform provides students with the tools, guidance,
          and support they need to excel academically.
        </p>
        </div>


        {/* Store Buttons */}

        <div className="flex items-center gap-5 pb-3">
          <a href="#" target="_blank">
            <img
              src="https://dev.questpix.com/assets/images/icon/gpbtn.png"
              alt="Google Play"
              className="w-40"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src="https://dev.questpix.com/assets/images/icon/appstore.png"
              alt="App Store"
              className="w-40"
            />
          </a>
        </div>


        {/* Rating */}
        <div className="flex items-center space-x-1 mt-3">
          <p className="text-[#9EBDEF]">Rated:</p>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Right Side */}

      <div>
        <img
          src="https://questpix.com/assets/images/whydiffrent/why1.png"
          alt="thumbnail"
          className="w-[600px] h-[500px] object-contain "
        />
      </div>

    </div>
  )
}

