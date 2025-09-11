import React from "react";

export default function JeePrepLevels() {
  const items = [
    {
      color: "bg-red-500",
      title: "Build An Unshakeable Foundation",
      description:
        "Master the fundamentals early on, so you can confidently tackle complex problems in JEE and other competitive exams.",
      side: "left",
      border: "border-orange-400",
    },
    {
      color: "bg-yellow-500",
      title: "Supercharge Your Mind",
      description:
        "Develop critical thinking, analytical reasoning, and creative problem-solving skills that will benefit you far beyond exams.",
      side: "right",
      border: "border-yellow-400",
    },
    {
      color: "bg-green-500",
      title: "Transform Weaknesses Into Strengths",
      description:
        "Identify your academic shortcomings and receive personalized guidance to overcome them, turning your weaknesses into strengths.",
      side: "left",
      border: "border-green-400",
    },
    {
      color: "bg-teal-500",
      title: "Become Pattern-Proof",
      description:
        "Develop a deep understanding of concepts and problem-solving strategies that will help you excel in any exam pattern.",
      side: "right",
      border: "border-teal-400",
    },
    {
      color: "bg-blue-500",
      title: "Reach Your Peak Performance",
      description:
        "Gain the confidence and skills to achieve your highest potential in your targeted exams and beyond.",
      side: "left",
      border: "border-sky-400",
    },
  ];

  return (
    <div
      className="py-12 px-4 mt-50 bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: `url('https://questpix.com/assets/images/jee_landing/step.png')` }}
    >
      <h2 className="text-center text-4xl font-bold text-white relative -top-40">
        Take Your JEE Prep To The <span className="text-green-400">Next Level.</span>
      </h2>

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto ">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-20">
          {items
            .filter((item) => item.side === "left")
            .map((item, i) => (
              <div key={i} className="text-right  relative -left-30  -top-20">
                <h3
                  className={`text-xl font-semibold  text-white border-b-2 inline-block mb-2 ${item.border}`}
                >
                  {item.title}
                </h3>
                <p className="text-[#9EBDEF] text-sm max-w-xs ml-auto">
                  {item.description}
                </p>
              </div>
            ))}
        </div>

       

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-35 relative -top-15 left-40">
          {items
            .filter((item) => item.side === "right")
            .map((item, i) => (
              <div key={i}>
                <h3
                  className={`text-xl font-semibold text-white border-b-2 inline-block mb-2 ${item.border}`}
                >
                  {item.title}
                </h3>
                <p className="text-[#9EBDEF] text-sm max-w-xs">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
