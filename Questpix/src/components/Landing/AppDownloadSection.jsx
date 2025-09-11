import React from 'react';

export default function AppDownloadSection() {
  return (
    <div className="container  custom-xl-row bg-[#0F1825] text-white flex flex-col xl:flex-row items-center justify-evenly">
      {/* Left Content */}
      <div className=" flex-1 text-center xl:text-left xl:pt-50">
        <h2 className="text-[45px] xl:text-[55px] xl:w-[60%] font-bold leading-tight pb-3">
          Download the<span className="text-[#2FC18B]"> QuestPix <br /> App</span> Today
        </h2>
        <p className="text-[16px] pb-6">
          Start Your Journey to <span className="text-[#2FC18B]">Success</span>
        </p>

        {/* Store Buttons */}
        <div className="flex items-center justify-center xl:justify-start gap-4">
          <a href="#" target="_blank">
            <img
              src="https://dev.questpix.com/assets/images/icon/gpbtn.png"
              alt="Google Play"
              className="w-32 xl:w-40"
            />
          </a>
          <a href="#" target="_blank">
            <img
              src="https://dev.questpix.com/assets/images/icon/appstore.png"
              alt="App Store"
              className="w-32 xl:w-40"
            />
          </a>
        </div>
      </div>

      {/* Right Content (Mobile App Images) */}
      <div className="flex-1 relative  xl:top-45">
        <img
          src="https://dev.questpix.com/assets/images/jee_landing/lastimg.png"
          alt="Phone 1"
          className="w-[400px] md:w-[400px] xl:w-[400px] mx-auto"
        />
      </div>
    </div>
  );
}
