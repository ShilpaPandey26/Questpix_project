import React from 'react'
import {
  ArrowUpRight,
  Users,
  LineChart,
  GitBranch,
  Building,
} from "lucide-react";

export default function SixToTenCareer() {
  const features = [
    {
      icon: "https://questpix.com/assets/images/career/meaing.png",
      title: "Make a meaningful impact",
      desc: "Help students achieve their dreams and reach their full potential.",
      border: "border-[#2fc18b]",
    },
    {
      icon: "https://questpix.com/assets/images/career/part.png",
      title: "Be part of a dynamic team",
      desc: "Collaborate with talented and passionate individuals who are committed to revolutionizing education.",
      border: "border-[#2fc18b]",
    },
    {
      icon: "https://questpix.com/assets/images/career/grow.png",
      title: "Grow and develop",
      desc: "Enjoy opportunities for professional growth and development in a fast-paced and innovative environment.",
      border: "border-[#facc15]",
    },
    {
      icon: "https://questpix.com/assets/images/career/gear.png",
      title: "Work with cutting-edge technology",
      desc: "Contribute to the development of a leading-edge ed-tech platform.",
      border: "border-[#a855f7]",
    },
    {
      icon: "https://questpix.com/assets/images/career/mission.png",
      title: "Be part of a mission-driven company.",
      desc: "Join a company that is dedicated to making quality education accessible to all.",
      border: "border-[#38bdf8]",
    },
  ];

  return (
    <div className="container pt-40">
      {/* 1 */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        {/* Heading */}
        {/* Decorative Circles */}
        <div className="flex">
          <div className="relative top-[0%] left-[15%] w-5 h-5 rounded-full border-2 border-[#2fc18b]"></div>
          <div className="relative top-[0%] left-[750px] w-5 h-5 rounded-full border-2 border-yellow-400"></div>
        </div>
        <h2 className="text-[58px] mx-auto font-bold w-[60%]">
          Join the <span className="text-[#2FC18B]">QuestPix</span> Revolution!
        </h2>
        <div className="w-20 h-[5px] bg-yellow-400 mx-auto my-6"></div>
        <p className="text-[#AFC8FF] max-w-2xl mx-auto text-[16px]">
          Are you passionate about education and technology? Do you want to make
          a real difference in the lives of students? If so, we'd love to have
          you on our team!
        </p>

        {/* Subheading */}
        <h3 className="mt-20 pb-5 text-2xl md:text-[38px] font-bold">
          Why Work at <span className="text-[#2fc18b]">QuestPix?</span>
        </h3>

        {/* Features Grid */}
        <div className="grid md:grid-cols-5 gap-8 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center  text-left"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 ${item.border} mb-4`}
              >
                <img src={item.icon}></img>
              </div>
              <p className=" text-[16px] mb-2">{item.title}: <span className="text-[#AFC8FF]">{item.desc}</span></p>

            </div>
          ))}
        </div>
      </div>



      {/* 2 */}
      <div>
        <div className="max-w-4xl mx-auto  pb-15">
          {/* Heading */}
          <h2 className="text-3xl md:text-[38px] text-center font-bold pb-10">
            Current <span className="text-[#2fc18b]">Openings.</span>
          </h2>


          <div className="flex justify-between">
            <div>
              <h3 className="text-[24px]  h-10 font-bold">
                Digital <span className="text-[#2fc18b]">Marketing</span> Expert{" "}
                <img src="https://questpix.com/assets/images/career/speaker.png" className="h-12 relative -top-12 left-70"></img>
              </h3>

              <p className="text-white  text-[16px]">
                We are looking for digital marketing expert who will take care of
                our social medias
              </p>
            </div>


            {/* Apply Button */}
            <div>
              <button className=" px-5 py-2 border border-[#2fc18b] text-[#2fc18b] rounded-full cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>


          {/* Decorative Circles */}



          {/* Suitable Openings Section */}
          <div className="mt-24">

            <div className="flex pb-10">
              <div className="relative top-[50px] left-[10%] w-5 h-5 rounded-full border-2 border-[#2fc18b]"></div>
              <div className="relative top-[50px] left-[750px] w-5 h-5 rounded-full border-2 border-yellow-400"></div>
            </div>


            <h3 className="text-3xl md:text-[58px] font-bold text-center mx-auto w-[70%]">
              Don&apos;t see a{" "}
              <span className="text-[#2fc18b]">suitable opening?</span>
            </h3>
            <div className="w-25 h-[5px] bg-yellow-400 mx-auto my-6"></div>
            <p className="text-[#AFC8FF] max-w-2xl mx-auto text-[16px] ">
              We're always looking for talented individuals to join our team. Send your resume and a cover letter to our email address, telling us why you'd be a great fit for QuestPix.
            </p>
          </div>




        </div>
      </div>
    </div>

  )
}
