import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/head-logo.svg";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [buttonText, setButtonText] = useState("Partner With Us");

  // Update button text based on current route on initial render and when location changes
  useEffect(() => {
    if (location.pathname === "/PartnerWithUs") {
      setButtonText("Home");
    } else {
      setButtonText("Partner With Us");
    }
  }, [location.pathname]);

  const handleClick = () => {
    if (buttonText === "Partner With Us") {
      navigate("/PartnerWithUs");
    } else {
      navigate("/");
    }
  };

  return (

    <header className="w-full fixed top-0 left-0 bg-[#0f1825] z-[1000] ">
      <div className="max-w-[1300px] mx-auto  flex justify-between items-center px-4 sm:px-5 lg:px-4 py-2 sm:py-4">

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Questpix Logo"
            className="h-16 sm:h-16  md:h-18 cursor-pointer object-contain"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          {/* Button */}
          <button
            onClick={handleClick}
            className="bg-[#2fc18b] text-white font-medium rounded-lg cursor-pointer
             px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3 lg:px-4 lg:py-3
             text-sm sm:text-base md:text-base lg:text-sm
             hover:text-[#007bff] transition-all duration-300 ease-in-out"
          >
            {buttonText}
          </button>
        </div>


      </div>
    </header>
  );
}
