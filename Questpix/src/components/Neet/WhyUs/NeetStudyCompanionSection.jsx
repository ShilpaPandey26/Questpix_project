import React from "react";
import {
    Pencil,
    Layers,
    GraduationCap,
    Search as SearchIcon,
} from "lucide-react";

const leftCards = [
    {
        icon: Pencil,
        text:
            "QuestPix isn't just another preparation app. We're revolutionizing the way students learn and succeed with personalized tools, expert guidance, and a commitment to your unique journey.",
    },
    {
        icon: GraduationCap,
        text:
            "We understand that every JEE/NEET or Foundation student is different, with unique strengths, weaknesses, and learning styles. That's why we've created a platform that has something for each one of YOU, providing the resources and support you need to achieve your goals.",
    },
];

const rightCards = [
    {
        icon: Layers,
        text:
            "At QuestPix, we believe every student deserves the opportunity to achieve their academic dreams. Our mission is to provide accessible, personalized, and engaging learning experiences that empower students to reach their full potential.",
    },
    {
        icon: SearchIcon,
        text:
            "We envision a future where JEE/NEET or any other exam preparation is no longer a daunting challenge, but an exciting journey of discovery and growth.",
    },
];

function Card({ Icon, children }) {
    return (
        <div className="relative rounded-3xl bg-[#0E2037]/70 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)] p-8 text-[#C9D9F8]">
            {/* top badge */}
            <div className="absolute -top-6 left-35">
                <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-[#23C07A] shadow-[0_6px_0_#0a5b3a,0_12px_24px_rgba(0,0,0,0.25)] flex items-center justify-center ring-8 ring-[#0B1320]">
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>
            <p>
                {children}
            </p>
        </div>
    );
}

export default function NeetStudyCompanionSection() {
    return (
        <section className="container text-white py-20 px-6">
            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold">
                    More Than An App, It’s A{" "}
                    <span className="text-[#2FC18B]">Study Companion.</span>
                </h2>
            </div>

            {/* 3-column layout */}
            <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-3  items-center">
                {/* Left column */}
                <div className="flex flex-col gap-8 text-[14px] text-center">
                    {leftCards.map((c, i) => (
                        <Card key={i} Icon={c.icon}>{c.text}</Card>
                    ))}
                </div>

                {/* Center circular widget */}
                <div className="flex items-center justify-center">
                    <img src="https://questpix.com/assets/images/whydiffrent/jeecomp.png" className="w-[280px]"></img>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-8  text-[14px] text-center">
                    {rightCards.map((c, i) => (
                        <Card key={i} Icon={c.icon}>{c.text}</Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
