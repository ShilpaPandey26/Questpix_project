import React from "react";

export default function JEECoachingSection() {
  return (
    <div className="container mx-auto px-4  text-white flex flex-col lg:flex-row items-center md:justify-between gap-10">
      
      {/* Left Content */}
      <div className="lg:w-1/2 text-center md:text-left ">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold ">
          Learn From The Legend Who <br />
          <span className="text-[#2FC18B]">Shaped JEE Coaching.</span>
        </h2>

        <p className="mt-4 text-[#9EBDEF] text-sm sm:text-base">
          Imagine learning from the very best, a teacher who has not only 
          witnessed the evolution of JEE coaching but has been instrumental 
          in shaping it.
        </p>

        <p className="mt-4 text-[#9EBDEF] text-sm sm:text-base">
          With over 21 years of experience at the forefront of India's renowned 
          coaching institutions, Vijay Sharma Sir and his team bring unparalleled 
          expertise to QuestPix.
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-row gap-3 mt-6 justify-center md:justify-start">
          <a
            href="https://play.google.com/store/apps/details?id=com.questpix.app"
            target="_blank"
          >
            <img
              src="https://dev.questpix.com/assets/images/icon/gpbtn.png"
              alt="Google Play"
              className="w-32 sm:w-40"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/questpix/id6742243591"
            target="_blank"
          >
            <img
              src="https://dev.questpix.com/assets/images/icon/appstore.png"
              alt="App Store"
              className="w-32 sm:w-40"
            />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src="https://questpix.com/assets/images/jee_landing/vijaysir.png"
          alt="Vijay Sharma Sir"
          className="w-96 md:w-96 rounded-lg"
        />
      </div>
    </div>
  );
}
