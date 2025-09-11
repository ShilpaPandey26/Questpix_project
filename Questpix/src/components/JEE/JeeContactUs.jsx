import React from 'react'
import { Play } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";


import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";



export default function JeeContactUs() {
  const socials = [
    { icon: faFacebookF, color: "border-blue-500 text-blue-500" },
    { icon: faTwitter, color: "border-white text-white" }, // X/Twitter
    { icon: faInstagram, color: "border-pink-500 text-pink-500" }, // gradient possible
    { icon: faLinkedinIn, color: "border-blue-500 text-blue-500" },
    { icon: faYoutube, color: "border-red-500 text-red-500" },
  ];

  return (
    <div className="container pt-40 ">
      {/* 1 */}
      <div className="flex mb-20">
        <div>
          <h2 className="text-[38px] font-bold">Contact <span className="text-[#FFD118]">Us</span></h2>
          <p className="text-[16px] font-bold pb-6">We'd love to hear from you! </p>
          <p className="text-[16px] text-[#9EBDEF] w-[75%] pb-6">Whether you have a question, feedback, or just want to say
            hello, we're here to help.</p>
          <button className="text-[18px] bg-[#2FC18B] flex items-center gap-3 text-white px-5 py-2 cursor-pointer rounded-2xl ">  <Play size={18} />Send Message
          </button>
        </div>

        <div>

        </div>
      </div>

      {/* 2 */}

      <div className="bg-[#151f35] flex items-center justify-between px-15 py-20 rounded-tl-[80px]  rounded-tr-[80px]">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold mb-15">
            QuestPix Solutions Pvt. Ltd.
          </h2>

          <div className="space-y-6 text-[16px]">
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPhone} className="mt-1 text-[#2fc18b] text-[20px]" />
              +91 - 9509842965
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="mt-1 text-[#2fc18b] text-[20px] " />
              questpixedu@gmail.com
            </div>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="mt-1 text-[#2fc18b] text-[24px]"
              />
              +91 - 9509842965
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">
            {socials.map((item, index) => (
              <span
                key={index}
                className={`border-1 p-2 cursor-pointer rounded-md flex items-center justify-center w-10 h-10 transition duration-300 hover:bg-opacity-20 ${item.color}`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
              </span>
            ))}
          </div>
        </div>

        {/* Right Section (Illustration) */}
        <div className="flex justify-center">
          <img
            src="https://questpix.com/assets/images/contact/detail-img.png"
            alt="customer-support"
            className="w-[320px] md:w-[400px]"
          />
        </div>

      </div>




    </div>
  )
}
