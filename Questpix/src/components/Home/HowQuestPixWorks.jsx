import React from "react";
import questPixData from "./questPixData";

export default function HowQuestPixWorks() {
    
    return (
        <div className="container">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                    <span className="text-[#2FC18B]">How QuestPix Works </span>for Your School or Institute?
                </h2>
                <p className="text-lg mb-20 ">
                    Discover how we seamlessly integrate top study material, advanced technology, and personalized support into your organisation’s daily routine.
                </p>
            </div>



            <div className="ml-25">
                {questPixData.map((section, index) => (
                    <div
                        id={`section-${index}`} // ✅ Anchor Target
                        key={index}
                        className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } gap-8 md:gap-16 scroll-mt-24`} // Optional scroll margin
                    >
                        {/* Text Section */}
                        <div className="md:w-1/2 space-y-6 mb-10">
                            <h2 className="text-[20px] font-bold">{section.title}</h2>
                            <ul className="space-y-4">
                                {section.points.map((point, idx) => (
                                    <li key={idx} className="ml-5">
                                        <h3 className="font-semibold text-[18px] text-[#2FC18B]">{point.heading}</h3>
                                        <p className="text-[16px]">{point.description}</p>
                                        {idx !== section.points.length - 1 && (
                                            <div className="border-b border-dotted border-gray-300 mt-5 w-[500px] relative -left-10" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#"
                                className="bg-[#2FC18B] text-white rounded-[10px] px-[35px] py-[15px] text-[18px] no-underline hover:text-[#007bff]"
                            >
                                Start Now
                            </a>
                        </div>



                        {/* Image Section */}
                        <div className="md:w-1/2  mb-10">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-[350px] h-[310px] max-w-md mx-auto"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


