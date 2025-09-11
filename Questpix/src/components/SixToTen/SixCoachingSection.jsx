import React from "react";


export default function SixCoachingSection() {
  return (
    <div className="container">
    <div className="text-white pt-20 flex flex-col md:flex-row items-center md:justify-between">
      
      {/* Left Content */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Learn From The Legend Who <br />
          <span className="text-[#2FC18B]">Shaped JEE Coaching.</span>
        </h2>
        <p className="mt-4 text-white">
          Imagine learning from the very best, a teacher who has not only witnessed the evolution of JEE & NEET coaching but has been instrumental in shaping it.
        </p>
        <p className="mt-4 text-[#9EBDEF]">
         With over 21 years of experience at the forefront of India's renowned coaching institutions, Vijay Sharma Sir and his team bring unparalleled expertise to QuestPix.
        </p>

        {/* App Store Buttons */}
        <div className="flex gap-4 mt-6">
         <a href="https://play.google.com/store/apps/details?id=com.questpix.app" target="_blank">
            <img
              src="https://questpix.com/assets/images/jee_landing/free.png"
              alt="Google Play"
              className="w-55"
            />
          </a>
         
        </div>
      </div>

      {/* Right Image */}
        <div >
          <img
            src="https://questpix.com/assets/images/jee_landing/vijaysir.png" // replace with actual image path
            alt="Vijay Sharma Sir"
            className="w-72 md:w-96 rounded-lg"
          />
         
      </div>
    </div>


<div>
  <img src="https://questpix.com/assets/images/6to10/boy.png"></img>
</div>
    </div>
  );
}
