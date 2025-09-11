import React from "react";
import { Check, X } from "lucide-react"; // ✅ icons

const features = [
    {
        name: "Live classes with expert Faculty",
        questpix: true,
        others: true,
    },
    {
        name: "Pre- Recorded Lectures",
        questpix: true,
        others: true,
    },
    {
        name: "Year – wise PTQs",
        questpix: true,
        others: true,
    },
    {
        name: "Rank Prediction Tool",
        questpix: true,
        others: true,
    },
    {
        name: "Interactive Flashcards",
        questpix: true,
        others: false,
    },
    {
        name: "Self Designed Practice Tests (Customize by exam, Subject, Chapter, Concept, Time, Difficulty)",
        questpix: true,
        others: false,
    },
    {
        name: "Chapter Wise PYQs",
        questpix: true,
        others: false,
    },
    {
        name: "Real JEE-Replicating Test Series",
        questpix: true,
        others: false,
    },
    {
        name: "Instant Doubt- Resolution with photo Click",
        questpix: true,
        others: false,
    },
    {
        name: "Detailed Performance analytics",
        questpix: true,
        others: false,
    },
];

export default function NeetComparisonTable() {
    return (
        <div className="container text-white py-16">
            {/* Heading */}
            <h2 className="text-3xl md:text-[38px] font-bold text-center mb-2">
                See Why QuestPix is the{" "}
                <span className="text-[#2FC18B]">Smarter Choice.</span>
            </h2>
            <p className="text-center text-[16px] text-[#9EBDEF] mb-12 max-w-2xl mx-auto">
                QuestPix stands out from the crowd with its unique blend of personalized
                learning tools, expert guidance, and comprehensive resources.
            </p>

            {/* Table */}
            <div className="max-w-6xl mx-auto rounded-xl overflow-hidden ">
                <div className="grid grid-cols-3 text-[18px] bg-gradient-to-r from-[rgba(15,24,37,0)] via-[rgba(47,193,139,1)] to-[rgba(15,24,37,0)] text-white font-semibold">
                    <div className="py-4 px-6 text-center">Features</div>
                    <div className="py-4 px-6 text-center">QuestPix</div>
                    <div className="py-4 px-6 text-center">Others</div>
                </div>


                {features.map((f, i) => (
                    <div
                        key={i}
                        className="grid grid-cols-3 text-[16px] odd:bg-gradient-to-r odd:from-[rgba(15,24,37,0)] odd:via-[#24354f] odd:to-[rgba(15,24,37,0)]"
                    >
                        <div className="py-4 px-6 text-left text-gray-200">{f.name}</div>

                        <div className="py-4 px-6 flex justify-center">
                            {f.questpix ? (
                                <Check className="text-green-400" size={22} />
                            ) : (
                                <X className="text-red-500" size={22} />
                            )}
                        </div>

                        <div className="py-4 px-6 flex justify-center">
                            {f.others ? (
                                <Check className="text-green-400" size={22} />
                            ) : (
                                <X className="text-red-500" size={22} />
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
