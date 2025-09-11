import React from 'react';
import { FaStar } from "react-icons/fa";

export default function CrackNeetSection() {


  return (
    <div className="container mx-auto pt-40 flex justify-center">
      {/* Left Side */}
      <div className=" md:w-[50%]  pt-10">
        <p className="text-2xl font-semibold pb-2">The Only App You Need To</p>
        <h1 className="text-4xl font-bold pb-8">Crack NEET UG</h1>
        <p className="text-[#9EBDEF] text-[16px] pb-8">
          Access Kota’s Best Personalized Online Coaching at Your Fingertips.
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
          src="https://questpix.com/assets/images/jee_landing/IITvideo.png"
          alt="Video Thumbnail"
          className="w-[600px] h-[380px] object-cover rounded-2xl "
        />
      </div>



    </div>
  );
}
