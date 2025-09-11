import React from 'react';
import { FaStar } from "react-icons/fa";

export default function JeeFreeResources() {


  return (
    <div className="container mx-auto pt-25  pb-30 flex justify-center">
      {/* Left Side */}
      <div className=" md:w-[50%]  pt-30 ml-10">
        <p className="text-[38px] w-[80%] font-bold pb-5">Your <span className="text-[#2FC18B]">Academic Success</span> Starts Here,
        <br/> <span className="border-3 border-yellow-300 rounded-[80%] text-[28px] p-2">FREE</span> with QuestPix.</p>

        <p className="text-[#9EBDEF] text-[16px] pb-8  w-[70%]">
          Master concepts, practice with PYQs, customize tests, and
          predict your rank – all for FREE!
        </p>


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

      <div className="w-[50%] cursor-pointer">
        <img
          src="https://questpix.com/assets/images/free/success.png"
          alt="Thumbnail"
          className="w-[600px] h-[500px] object-contain rounded-2xl "
        />
      </div>



    </div>
  );
}
