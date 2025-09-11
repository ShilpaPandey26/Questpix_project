import React from "react";


const features = [
    {
        icon: "https://questpix.com/assets/images/jee_landing/praicon.svg",
        title: "Self-Designed Practice",
        description:
            "Design your own custom practice tests with our extensive question bank of 1 Lakh+ questions.",
        bg: "bg-[#2fc18b]",

    },
    {
        icon: "https://questpix.com/assets/images/jee_landing/previcon.svg",
        title: "Previous Years Questions",
        description:
            "Practice with a vast collection of JEE Main & Advanced PYQs, categorized by subject and year.",
        bg: "bg-[#1b283d]",
        
    },
    {
        icon: "https://questpix.com/assets/images/jee_landing/flashicon.svg",
        title: "Interactive Flashcards",
        description:
            "Learn and memorize essential formulas, definitions, and concepts with interactive flashcards.",
         bg: "bg-[#2fc18b]",
        
    },
    {
        icon: "https://questpix.com/assets/images/jee_landing/rankicon.svg",
        title: "Rank Prediction Tool",
        description:
            "Use our Rank Prediction Tool to estimate your JEE rank based on your performance.",
          bg: "bg-[#1b283d]",
       
    },
];




export default function QuestPixFeatures() {
    return (
        <div className="py-10 px-4 text-center">
            <h2 className="text-[38px] font-bold text-white">
                Test Drive QuestPix For <span className="text-[#2FC18B]">FREE.</span>
            </h2>
            <p className="text-[#d0d2d4] mt-2 max-w-2xl mx-auto">
                Experience the power of new-age JEE prep without spending anything.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-white">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`${feature.bg} ${feature.textColor} rounded-2xl flex flex-col items-start text-left shadow-lg p-[33px]`}
                    >
                        <div className="mb-4">
                            <img src={feature.icon} alt={feature.title}></img>
                            </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-sm opacity-90">{feature.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-10">
                <img
                    src="https://dev.questpix.com/assets/images/icon/gpbtn.png"
                    alt="Google Play"
                    className="w-40"
                />
                <img
                    src="https://dev.questpix.com/assets/images/icon/appstore.png"
                    alt="App Store"
                    className="w-40"
                />
            </div>
        </div>
    );
}
