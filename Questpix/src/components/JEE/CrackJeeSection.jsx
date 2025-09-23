import React from 'react';
import { FaStar } from "react-icons/fa";

export default function CrackJeeSection() {
  return (
    <div className=" px-4 pt-20 md:pt-38 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
      
      {/* Left Side */}
      <div className="w-full lg:w-1/2 text-center md:text-left">
        <p className="text-xl  font-bold pb-1">
          The Only App You Need To
        </p>
        <h1 className="text-3xl md:text-4xl font-bold pb-6">
          Crack IIT JEE
        </h1>
        <p className="text-[#9EBDEF] text-base md:text-[16px] pb-6 max-w-lg mx-auto md:mx-0">
          Access Kota’s Best Personalized Online Coaching at Your Fingertips.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start pb-4">
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
        <div className="flex justify-center md:justify-start items-center space-x-1 mt-2">
          <p className="text-[#9EBDEF]">Rated:</p>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="https://questpix.com/assets/images/jee_landing/IITvideo.png"
          alt="Video Thumbnail"
          className="w-full max-w-[600px] h-auto object-cover "
        />
      </div>
    </div>
  );
}
