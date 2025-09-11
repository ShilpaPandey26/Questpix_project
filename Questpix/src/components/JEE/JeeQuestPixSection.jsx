import React from "react";
import { FaCheck } from "react-icons/fa";


export default function JeeQuestPixSection() {
  return (
    <div className="container text-white flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="http://questpix.com/assets/images/jee_landing/checkout.png" // Replace with your image path
          alt="Person using laptop"
          className="max-w-sm w-full"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold">
          <span className="text-[#2FC18B]">Don't Wait, </span> Start Now.
        </h2>
        <p className="mt-4 text-xl font-bold">
          Checkout the Free QuestPix <br/>features right now.
        </p>

        {/* Features List */}
        <ul className="mt-6 ">
          {[
            "Self-Designed Practice",
            "Previous Years Questions",
            "Interactive Flashcards",
            "Rank Prediction Tool",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-[16px] text-[#9EBDEF]">
                 <FaCheck className="text-[#2b8986] mt-1 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Store Buttons */}
        <div className="flex gap-4 mt-6">
           <a href="https://play.google.com/store/apps/details?id=com.questpix.app" target="_blank">
            <img
              src="https://dev.questpix.com/assets/images/icon/gpbtn.png"
              alt="Google Play"
              className="w-40"
            />
          </a>
          <a href="https://apps.apple.com/in/app/questpix/id6742243591" target="_blank">
            <img
              src="https://dev.questpix.com/assets/images/icon/appstore.png"
              alt="App Store"
              className="w-40"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
