import React from "react";
import pdf from "../../../../assets/jee-images/StudyMaterial/pdf.png";

const papers = [
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024
];

export default function PreviousYearPapers() {
    return (
        <div className="mt-12">

            <h2 className="text-xl sm:text-2xl font-extrabold mb-4">Download <span className="text-[#2FC18B]">JEE Advanced</span> Question Papers (Year-Wise)</h2>
            <h2 className="text-lg mb-6">Access and download JEE Advanced previous year question papers with solutions in PDF format for free. Click on the links below to download the papers for your desired year:</h2>

            <div className="flex overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gradient-to-r from-[#1e293b] via-[#2fc18b] to-[#1e293b] text-white text-left">
                            <th className="py-3 px-4 text-white w-[30%]">Year</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[40%]">Paper 1</th>
                            <th className="py-3 px-4 text-white  text-sm sm:text-[15px] w-[40%]">Paper 2</th>
                        </tr>
                    </thead>

                    <tbody>
                        {papers.map((paper, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-700 hover:bg-gray-800 transition"
                            >
                                <td className="py-3 px-4 text-sm sm:text-[15px] w-[30%]">
                                    {paper}
                                </td>
                                <td className="py-3 px-4  w-[40%]">
                                    <a
                                        href="#"
                                        className="flex items-center text-sm sm:text-[15px]  gap-2 text-[#00D0FF] hover:text-blue-300"
                                    >
                                        <img src={pdf} className="w-5 h-5 text-red-500" />
                                        Download PDF
                                    </a>
                                </td>
                                <td className="py-3 px-4 text-center w-[40%]">
                                    <a
                                        href="#"
                                        className="flex items-center text-sm sm:text-[15px] gap-2 text-[#00D0FF] hover:text-blue-300"
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
