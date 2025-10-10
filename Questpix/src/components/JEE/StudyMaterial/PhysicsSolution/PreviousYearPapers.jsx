import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

const papers = [
    {
        class: "NCERT-Exemplar-Solutions-Class-12-Phy-Chapter-1",
        chapter: "Electric Charges and Fields",
        link:"https://questpix.nyc3.cdn.digitaloceanspaces.com/uploads/study_material/1741612467.pdf"
        
    },
];


export default function PreviousYearPapers() {
    return (
        <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-6">Explore Our Extensive  <span className="text-[#2FC18B]">NCERT</span> Physics Solutions Library</h2>
            <div className="flex overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white text-left">
                            <th className="py-3 px-4 text-white w-[40%]">Classes</th>
                            <th className="py-3 px-4 text-white text-center text-sm sm:text-[15px]">Chapter</th>
                            <th className="py-3 px-4 text-white text-center text-sm sm:text-[15px]">Link</th>
                        </tr>
                    </thead>

                    <tbody>
                        {papers.map((paper, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="py-3 px-4 text-sm sm:text-[15px]">
                                    {paper.class}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    {paper.chapter}
                                </td>
                                <td className="py-3 px-4 text-center">
                                    <a
                                        href={paper.link}
                                        className="flex items-center text-sm sm:text-[15px] justify-center gap-2 text-[#00D0FF] hover:text-blue-300"
                                    >
                                        <img src={pdf} className="w-5 h-5 text-red-500" />
                                        Download PDF
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
