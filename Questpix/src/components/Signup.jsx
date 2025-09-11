import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();

    return (
        <div className="  flex ">
            {/* Left Side - Illustration */}
            <div className=" h-[100vh] w-[45%] bg-[#0f1825]  p-10">
                <img
                    src="https://questpix.com/assets/images/logo.svg" // Use same illustration as signup
                    alt="Login Illustration"
                    className="w-35 "
                    onClick={() => navigate("/")}
                />
            </div>


            {/* Right Side - Form */}
            <div className="w-[55%] bg-white p-10 flex flex-col items-start justify-center rounded-l-[60px] rounded-lb-[60px]">
                <div className="relative left-40">
                    <h2 className="text-[32px] font-bold text-[#30435F]">Signup</h2>
                    <p className="text-[#30435F] text[16px] mb-5">Let's Get Started</p>

                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full border text-black  border-black rounded-md px-4 py-3 mb-4 focus:outline-none "
                    />


                    {/* Mobile Input with Flag */}
                    <div className="flex mb-5 w-full">
                        <span className="flex items-center border border-black rounded-md px-3 bg-white text-black">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India Flag"
                                className="w-5 h-5 mr-2 "
                            />
                            <span className="mr-3">+91</span>
                        </span>
                        <input
                            type="tel"
                            placeholder="Enter Mobile Number"
                            className="w-full ml-2 border border-black rounded-md px-4 py-3 focus:outline-none text-black "
                        />
                    </div>

                    {/* Stream Dropdown */}
                    <select
                        className="w-full border border-black rounded-md px-4 py-3 mb-4 text-[#3F3F45] text-[16px] focus:outline-none"
                    >
                        <option>Select Stream</option>
                        <option>JEE ADVANCED</option>
                        <option>JEE MAIN</option>
                        <option>NEET</option>
                        <option>FOUNDATION</option>
                    </select>

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full border border-black text-black rounded-md px-4 py-3 mb-6 focus:outline-none"
                    />

                    {/* Sign In Button */}
                    <button className="w-full bg-[#2FC18B] text-white py-3 rounded-md font-semibold cursor-pointer">
                        Sign In
                    </button>

                    {/* Login Link */}
                    <p className="text-[#30435F] mt-8">
                        Already have account?{" "}
                        <Link to="/Auth/login" className="text-[#2FC18B] cursor-pointer">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
