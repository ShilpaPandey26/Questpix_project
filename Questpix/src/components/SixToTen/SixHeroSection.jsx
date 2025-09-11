import React from 'react'
import { ArrowRight } from 'lucide-react';

export default function SixHeroSection() {


  return (
    <div className='container h-[650px] flex justify-around items-center'>
      <div className=' w-[60%] flex flex-col items-start pt-20'>
        <p className="text-white text-[20px] font-bold">Build a Rock-Solid Foundation for Success with </p>
        <h5 className="text-[36px] w-[50%] font-bold">Online Courses
          For Class <span className='text-[#2FC18B]'>6 - 10
           </span><span className='text-[#2FC18B] text-[24px] font-bold'><br/>By QuestPix Junior </span> </h5>
        <p className='text[16px] text-[#9EBDEF] pb-5'>Empower your child with engaging online learning, expert guidance, and a comprehensive curriculum designed to excel in school, olympiads, and beyond.</p>

        <div className="w-[210px] border-2 border-[#2FC18B] py-1 px-4 rounded-full">
         <a href="#" className='flex justify-evenly items-center text-[18px]'> Explore Courses  <ArrowRight className="text-[#2FC18B]" size={19} /></a>
        </div>
      </div>

      <div>
        <img src="https://questpix.com/assets/images/6to10/bimg.png" className="w-[980px] h-[1000px] pt-50"></img>
      </div>
    </div>

  )
}
