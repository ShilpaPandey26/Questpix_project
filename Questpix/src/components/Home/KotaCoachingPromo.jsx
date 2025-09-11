import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function KotaCoachingPromo() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlayVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className="container pt-45 px-6 py-16 md:flex md:items-center md:justify-between ">
      {/* Left Side */}
      <div className="w-[50%] space-y-6 mr-15">
        <h1 className="text-[38px] font-bold">
          Bring <span className="text-[#2FC18B]">Kota-Level <br /> Coaching</span>,
          Right in Your Organisation
        </h1>
        <p className="text-lg">
          Redefine your school/institute as the premier destination for ambitious students,
          equipping them with everything they need for JEE, NEET & Foundation success.
        </p>
        <div className="w-[180px] gap-2 bg-transparent border-2 border-[#2FC18B] py-3 rounded-full">
         <a href="#" className='flex justify-evenly items-center text-[18px]'> Start Today <ArrowRight className="text-[#2FC18B]" size={19} /></a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[60%]">
       
          {!playVideo ? (
            <div className="cursor-pointer" onClick={handlePlay}>
              <img
                src="https://questpix.com/assets/images/partner_with/coachingv.png"
                alt="Video Thumbnail"
                className="w-full h-auto object-cover "
              />
              
            </div>
          ) : (
            <video
              className="w-full h-auto "
              ref={videoRef}
              controls
            >
              <source
                src="https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/video/Partnersdetails.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        
      </div>
    </div>
  );
}
