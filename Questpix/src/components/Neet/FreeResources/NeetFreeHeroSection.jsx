import React from "react";
import { Star, Play, Users, Clock } from "lucide-react";

export default function NeetFreeHeroSection() {
    return (
        <div className=" text-white pt-30 py-5 px-6 ml-10">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[38px]  font-bold ">
                    Your <span className="text-[#2FC18B]">Dream College Is Closer </span>
                    <br /> More Than Ever.
                </h2>
                <p className=" mt-4 text-lg">
                    Interactive flashcards, personalized practice tests, PYQs, rank prediction,
                    and daily quizzes all in one powerful app, that too for FREE!
                </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex justify-center gap-4 mt-6">
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

            {/* Content Grid */}
            <div className=" grid grid-cols-1 md:grid-cols-3  mt-10 max-w-6xl mx-auto">
                {/* Left Features */}
                <div className="flex flex-col gap-10 text-center md:text-left">
                    <div>
                        <p className="flex text-2xl font-bold">
                            <img src="https://questpix.com/assets/images/free/clock.png" className="h-10 "></img>1000 Hours+</p>
                        <p className="text-[#9EBDEF]  text-[13px] font-bold relative -top-8 left-15 "><br />of Video Content</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">Multiple Top 100</h3>
                        <p className="text-[#9EBDEF]  text-[13px] font-bold relative left-10">Ranker Produced</p>
                    </div>
                    <div>
                        <img src="https://questpix.com/assets/images/free/JOIN.png" className="h-30 mt-10"></img>
                    </div>
                </div>

                {/* Center Image (Phone Mockup) */}
                <div className="flex justify-center mt-10">
                    <img
                        src="https://questpix.com/assets/images/free/closer.png" // Replace with your actual mobile mockup
                        alt="App Preview"
                        className="h-[500px]"
                    />

                </div>

                {/* Right Features */}
                <div className="flex flex-col gap-10 text-center md:text-right">
                    <div>
                        <h3 className="text-2xl font-bold">5 Star Rating <span className="text-[15px]"><br/>⭐ ⭐ ⭐ ⭐ ⭐</span> </h3>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mt-10">1 Lakh+</h3>
                        <p className="text-[#9EBDEF] font-bold">Practice Questions</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mt-10">20 Years+</h3>
                        <p className="text-[#9EBDEF] text-[13px] font-bold">Experienced <br/>Faculties</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
