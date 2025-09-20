import React from "react";

const programs = [
  {
    title: "Sample Study Material for Pre-Foundation",
    classes: "Classes 6 - 8",
    image: "https://questpix.com/assets/images/partner_with/4.png",
    download:
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/Class%20%206%20-%208.zip",
  },
  {
    title: "Sample Study Material for Foundation",
    classes: "Classes 9 - 10",
    image: "https://questpix.com/assets/images/partner_with/3.png",
    download:
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/Class%209%20-%2010.zip",
  },
  {
    title: "Sample Study Material for JEE",
    classes: "Classes 11 - 12",
    image: "https://questpix.com/assets/images/partner_with/1.png",
    download:
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/JEE.zip",
  },
  {
    title: "Sample Study Material for NEET",
    classes: "Classes 11 - 12",
    image: "https://questpix.com/assets/images/partner_with/2.png",
    download:
      "https://questpix.nyc3.cdn.digitaloceanspaces.com/questpix/PDF/study_material_sample/NEET.zip",
  },
];

export default function SampleModules() {
  return (
    <div className="w-full bg-[#212D3F]">
      <div className="container px-4 py-10 flex flex-col items-center gap-10">
        {/* Heading Section */}
        <div className="mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Check Out Our <span className="text-[#2FC18B]">Sample Modules</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Watch demos of our Testing Platform and the QuestPix App & Portal,
            showcasing how technology drives student progress.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center  p-6 rounded-xl "
            >
              <img
                src={program.image}
                alt={`${program.title} icon`}
                className="w-[220px] h-[240px] object-contain"
              />
              <h3 className="text-lg md:text-xl pt-5 font-bold text-white">
                {program.title}
              </h3>
              <span className="text-[#2FC18B] font-semibold text-base md:text-lg mt-2">
                ({program.classes})
              </span>
              <a
                className="w-full max-w-[250px] flex items-center justify-center bg-[#2FC18B] text-base md:text-lg px-5 py-3 text-white mt-5 cursor-pointer rounded-lg font-semibold "
                href={program.download}
                download
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
