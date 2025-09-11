import React from "react";
import { BookOpen, ClipboardCheck, FileText, Monitor, Video, Layers, Award, ListChecks } from "lucide-react";
import { ArrowRight } from "lucide-react";


const features = [
  {
    title: "Personalised Practice",
    icon: "https://questpix.com/assets/images/jee_landing/dash1.svg"
  },
  { title: "JEE Test Series",
     icon: "https://questpix.com/assets/images/jee_landing/dash2.svg"
  },
  { title: "Past Year Papers", 
    icon: "https://questpix.com/assets/images/jee_landing/dash3.svg" },
  { title: "My Virtual Classroom",
     icon:  "https://questpix.com/assets/images/jee_landing/dash4.svg" 
  },
  { title: "Live Classes",     icon:  "https://questpix.com/assets/images/jee_landing/dash5.svg"  },
  { title: "Flash Cards",     icon:  "https://questpix.com/assets/images/jee_landing/dash6.svg" },
  { title: "Top 500 AIR Club",     icon:  "https://questpix.com/assets/images/jee_landing/dash7.svg"  },
  { title: "Daily Quiz Challenge",     icon:  "https://questpix.com/assets/images/jee_landing/dash8.svg"  },
];

export default function FeatureGrid() {
  return (
    <div className="container flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-10">
        Let’s <span className="text-[#2FC18B]">Start.</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1B283D] w-[290px] h-[210px] rounded-2xl pt-10 pl-5  pb-5 flex flex-col justify-between cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="pt-3">
              <img src={item.icon} alt={`${item.title} icon`} className="w-15 h-15" />
            </div>

            <div className="flex items-center space-x-5">
              <h2 className="text-[20px] w-[60%] font-bold text-white">{item.title}</h2>
              
              <a
                href={item.link}
                className="text-[#2FC18B] text-[18px] flex items-center gap-1 font-bold w-[40%]"
              >
                <span> Join </span>
                <span><ArrowRight size={25} /></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
