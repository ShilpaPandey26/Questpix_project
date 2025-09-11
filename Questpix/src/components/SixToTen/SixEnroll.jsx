import React from "react";
import { ArrowRight } from 'lucide-react';

export default function SixEnroll() {
  return (
    <div className="container flex justify-between pt-20 pb-20">  

        {/* Left Content */}
        <div className="w-[50%] text-white pt-20 flex flex-col">
          <h2 className="text-[36px] md:text-4xl font-bold leading-snug">
            Enroll Your Child in QuestPix
            <span className="text-[#2FC18B]"> Classes 6 - 10</span> Today
          </h2>
          <p className="mt-6 mb-6 text-[16px] text-[#9EBDEF]">
            Take the first step towards securing your child’s academic future.
          </p>

          <div className="w-[210px] border-2 border-[#2FC18B] py-1 px-4 rounded-full">
            <a href="#" className='flex justify-evenly items-center text-[18px]'> Explore Courses  <ArrowRight className="text-[#2FC18B]" size={19} /></a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[50%]">
           <img src="https://questpix.com/assets/images/6to10/OBJECTS.png" className="w-[650px] h-[410px]"></img>
        </div>


     



    </div>
  );
}
