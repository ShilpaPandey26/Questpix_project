import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="  flex ">
            {/* Left Side - Illustration */}
            <div className=" h-[100vh] w-[45%] bg-[#0f1825] p-10">
                <img
                    src="https://questpix.com/assets/images/logo.svg" // Use same illustration as signup
                    alt="Login Illustration"
                    className="w-35 "
                    onClick={() => navigate("/")}
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-[55%] bg-white p-10 flex flex-col items-start justify-center  rounded-l-[60px] rounded-lb-[60px]">
                <div className="relative left-50 -top-10 space-y-4">
                    <h2 className="text-[32px] font-bold text-[#30435F]">Login</h2>
                    <p className="text-[#30435F] text[16px] mb-10">
                        Enter Your Mobile Number To Continue Your Journey
                    </p>

                    {/* Mobile Input with Flag */}
                    <div className="flex mb-10 w-full">
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

                    {/* Login Button */}
                    <button className="w-full bg-[#2FC18B] text-white py-3 rounded-lg font-semibold  cursor-pointer">
                        Login
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-[#30435F] mt-4">
                        Don’t Have An Account?{" "}
                        <Link to="/Auth/signup" className="text-[#2FC18B]  cursor-pointer ">
                            SignUP
                        </Link>
                    </p>
                </div>
            </div>

        </div>

    );
}
