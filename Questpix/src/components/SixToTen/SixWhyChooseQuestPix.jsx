import React from "react";

export default function SixWhyChooseQuestPix() {
  const features = [
    {
      title: "Fundamentals & Basics Mastery",
      description:
        "Our dedicated teachers make complex concepts simple and engaging, ensuring your child excels now and is prepared for future studies.",
      img: "https://questpix.com/assets/images/6to10/1.png",
    },
    {
      title: "Learning That Sparks Curiosity",
      description:
        "Our interactive live classes encourage active participation, deep thinking, and a true love for learning—far from boring lectures!",
      img: "https://questpix.com/assets/images/6to10/2.png",
    },
    {
      title: "Curriculum Designed for Success",
      description:
        "Aligned with CBSE, ICSE, and State Boards, our curriculum not only covers the syllabus but builds strong problem-solving skills.",
      img: "https://questpix.com/assets/images/6to10/3.png",
    },
    {
      title: "Personalized Attention for Every Learner",
      description:
        "Small batch sizes allow teachers to focus individually, catering to the unique learning pace and doubts of each student.",
      img: "https://questpix.com/assets/images/6to10/4.png",
    },
    {
      title: "Varied & Unlimited Practice",
      description:
        "Unlimited access to quizzes, practice papers, and study materials helps reinforce concepts and boosts exam confidence.",
      img: "https://questpix.com/assets/images/6to10/5.png",
    },
  ];

  return (
    <div
      className="bg-[#2fc18b]  mb-20 bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://questpix.com/assets/images/6to10/gc.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        padding: "80px 0",
        marginTop: "30px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-[36px] w-[60%] mx-auto font-extrabold text-black">
          Why Choose <span className="text-black">QuestPix</span>{" "}
          <span className="text-[#415D53]">
            for a Strong Academic Foundation?
          </span>
        </h2>
        <p className="text-black text-[18px] w-[70%] mx-auto  mt-5 mb-12">
          Laying a strong academic foundation in Classes 6–10 is crucial for
          future success. At QuestPix, we understand this, and that&apos;s why
          we&apos;ve designed a comprehensive learning experience tailored
          specifically for this age group.
        </p>

        {features.map((feature, index) => {
          const isOdd = index % 2 !== 0; // odd index

          return (
            <div
              key={index}
              className="grid md:grid-cols-2 items-center gap-10 mb-16"
            >
              {/* Text */}
              <div className={`${isOdd ? "order-1" : "order-2"} text-left`}>
                <h3 className="text-[24px] text-[#0F1825] font-bold mb-2">{feature.title}</h3>
                <p className="text-[#1A4B39] text-16px">{feature.description}</p>
              </div>

              {/* Image */}
              <div className={`${isOdd ? "order-2" : "order-1"} flex justify-center`}>
                <img src={feature.img} alt={feature.title} className="w-[400px] h-[320px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}