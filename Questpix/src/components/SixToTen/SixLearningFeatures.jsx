import React from "react";

const features = [
  {
    title: "Engaging Live Classes for Active Learning",
    description:
      "Imagine your child participating in real-time classes led by experienced teachers. Your child can ask questions, engage in discussions, and learn collaboratively with other students.",
    img: "https://questpix.com/assets/images/6to10/greencircle.png",
  },
  {
    title: "Flexible Learning with On-Demand Videos",
    description:
      "Access high-quality pre-recorded lectures anytime, anywhere—perfect for revisiting concepts or learning at their own pace.",
    img: "https://questpix.com/assets/images/6to10/yellow.png",
  },
  {
    title: "Comprehensive Support & Study Resources",
    description:
      "Access structured e-books, notes, and study materials. All doubts clarified via class sessions and doubt-chat with teachers.",
    img: "https://questpix.com/assets/images/6to10/Illustration.png",
  },
  {
    title: "Reinforce Learning with Practice & Quizzes",
    description:
      "Daily quizzes and practice materials help reinforce learning and test understanding in a fun way.",
    img: "https://questpix.com/assets/images/6to10/purple.png",
  },
  {
    title: "Effective Exam Prep with Sample Papers",
    description:
      "Prepare with sample papers to understand the exam pattern and familiarize yourself with expected questions.",
    img: "https://questpix.com/assets/images/6to10/grey.png",
  },
  {
    title: "Quick Revision with Handy Flashcards",
    description:
      "Revise key concepts, formulas, and definitions quickly with easy-to-use flashcards for last-minute prep.",
    img: "https://questpix.com/assets/images/6to10/green.png",
  },
];


export default function SixLearningFeatures() {


  return (
    <div className="bg-[#182437] py-16 ">
      <h2 className="text-center mx-auto text-[38px] w-[60%] font-bold ">Explore the Powerful Features of  <span className='text-[#2FC18B]'> QuestPix
        Classes 6 - 10
           </span>
      </h2>
      <p className="text-center mx-auto text-[16px] w-[70%] font-bold pt-5 pb-30">At QuestPix, we've packed our Classes 6–10 courses with features designed to make learning effective, engaging, and convenient.
Here's what you can expect:</p>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-4">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-[300px] h-[200px] object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-[20px] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#9EBDEF] text-[16px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
