import React from 'react';

const programs = [
    {
        title: 'Sample Study Material for Pre-Foundation',
        classes: 'Classes 6 - 8',
        image: 'https://questpix.com/assets/images/partner_with/4.png',
        download: "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/Class%20%206%20-%208.zip",
    },
    {
        title: 'Sample Study Material for Foundation',
        classes: 'Classes 9 - 10',
        image: 'https://questpix.com/assets/images/partner_with/3.png',
        download: "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/Class%209%20-%2010.zip",
    },
    {
        title: 'Sample Study Material for JEE',
        classes: 'Classes 11 - 12',
        image: 'https://questpix.com/assets/images/partner_with/1.png',
        download: "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/JEE.zip",
    },
    {
        title: 'Sample Study Material for NEET',
        classes: 'Classes 11 - 12',
        image: 'https://questpix.com/assets/images/partner_with/2.png',
        download: "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/NEET.zip",
    },
];

export default function SampleModules() {
    return (
        <div className=" bg-[#212D3F] px-4  mt-20 p-20">
            <div className="mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                    Check Out Our <span className="text-[#2FC18B]"> Sample Modules</span> </h2>
                <p className="text-lg ">
                    Watch demos of our Testing Platform and the QuestPix App & Portal, showcasing how technology drives student progress.
                </p>

                <div className="flex container ">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="pt-10 flex flex-col justify-center  items-center text-center w-[25%]"

                        >
                            <div

                            >
                                <img src={program.image} alt={`${program.title} icon`} className="w-[276px] h-[294px] " />
                            </div>
                            <h3 className="text-[20px] pt-5 font-bold text-center  w-[80%]">{program.title}</h3>
                            <span className="text-[#2fc18b] font-semibold text-[20px] ">({program.classes})</span>
                            <a
                                className="w-[280px] flex items-center justify-center bg-[#2FC18B] text-[20px] px-[20px] py-[10px] text-white mt-[20px] cursor-pointer rounded-[7px]"
                                href={program.download}

                            >
                                Download
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
