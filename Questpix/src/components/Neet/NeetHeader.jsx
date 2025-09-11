import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';

export default function NeetHeader() {
   
    const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


 

  return (
    <div className="w-full fixed top-0 left-0 bg-[#0f1825] z-[1000]">
      <div className="w-[1300px] mx-auto h-[100px] pt-4 flex justify-between items-center px-4">

        {/* Logo */}
        <div>
          <img
            src="https://dev.questpix.com/assets/images/logo.svg"
            alt="Questpix Logo"
            className="h-18 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Navigation */}
        <div className="flex space-x-8 text-white text-[16px] font-semibold relative top-1.5">

          {/* Courses */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("courses")}
              className={`hover:text-[#2fc18b] cursor-pointer  ${openMenu === "courses" ? "text-[#2fc18b]" : ""
                }`}
            >
              Courses
            </button>
            {openMenu === "courses" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-6 px-6 w-70 z-50">
                <ul className="space-y-4 text-[16px]">
                  <li className="hover:text-[#2fc18b] cursor-pointer">Class XI</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">Class XII</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">Class XII+</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">Crash Course</li>
                </ul>
              </div>
            )}
          </div>

          {/* Test Series */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("test-series")}
              className={`hover:text-[#2fc18b] cursor-pointer ${openMenu === "test-series" ? "text-[#2fc18b]" : ""
                }`}
            >
              Test Series
            </button>
            {openMenu === "test-series" && (
              <div className="absolute top-10 left-0 mt-2  bg-[#1b2b3e] rounded-lg py-6 px-6 w-70 z-50">
                <ul className="space-y-4 text-[15px]">
                  <li className="hover:text-[#2fc18b] cursor-pointer">JEE Main Test Series</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">JEE Advanced Test Series</li>
                </ul>
              </div>
            )}
          </div>

          {/* Free Resources */}
          <div>
            <button onClick={() => navigate("/Neet/FreeResources")} className="cursor-pointer">
              Free Resources
            </button>
          </div>

          {/* Target Exam */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("target-exam")}
              className={`hover:text-[#2fc18b] cursor-pointer ${openMenu === "target-exam" ? "text-[#2fc18b]" : ""
                }`}
            >
              Target Exam
            </button>
            {openMenu === "target-exam" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-6 px-6 w-70 z-50">
                <ul className="space-y-4 text-[15px]">
                  <li className="hover:text-[#2fc18b] cursor-pointer">JEE Main</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer">JEE Advanced</li>
                </ul>
              </div>
            )}
          </div>

          {/* Study Material */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("study-material")}
              className={`hover:text-[#2fc18b] cursor-pointer ${openMenu === "study-material" ? "text-[#2fc18b]" : ""
                }`}
            >
              Study Material
            </button>
            {openMenu === "study-material" && (
              <div className="absolute top-10 left-0 mt-2 bg-[#1b2b3e] rounded-lg py-6 px-6  w-70 z-50">
                <ul className="space-y-3 text-[15px]">
                  <li className="hover:text-[#2fc18b] cursor-pointer" >JEE Main Paper <br/> PDFs (Year-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >JEE Advanced Paper <br/> PDFs (Year-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >NCERT Maths Solution <br/> (Class-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >NCERT Physics Solution <br/> (Class-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >NCERT Chemistry Solution (Class-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >NCERT Maths Exemplar Solutions (Class-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >NCERT Physics Exemplar Solutions (Class-Wise)</li>
                  <li className="hover:text-[#2fc18b] cursor-pointer" >NCERT Chemistry Exemplar Solutions (Class-Wise)</li>


                </ul>
              </div>
            )}
          </div>

          {/* Why Us */}
          <div>
            <button onClick={() => navigate("/Neet/WhyDifferent")} className="cursor-pointer">
              Why Us
            </button>
          </div>

          {/* About Us */}
          <div className="relative dropdown">
            <button
              onClick={() => toggleMenu("about-us")}
              className={`hover:text-[#2fc18b] cursor-pointer ${openMenu === "about-us" ? "text-[#2fc18b]" : ""
                }`}
            >
              About Us
            </button>
            {openMenu === "about-us" && (
              <div className="absolute top-full left-0 mt-2 bg-[#1b2b3e] rounded-lg py-6 px-6 w-60 z-50">
                <div className="space-y-3 text-[14px] cursor-pointer">
                  <button
                    onClick={() => {
                      navigate("/Neet/WhoWeare");
                      setOpenMenu(null); // close after navigation
                    }}
                    className="hover:text-[#2fc18b] cursor-pointer"
                  >
                    Who We Are?
                  </button>
                  <br />
                  <button
                    onClick={() => {
                      navigate("/Neet/ContactUs");
                      setOpenMenu(null); // close after navigation
                    }}
                    className="hover:text-[#2fc18b] cursor-pointer"
                  >
                    Contact Us
                  </button>
                  <br />
                  <button
                    onClick={() => {
                      navigate("/Neet/Career");
                      setOpenMenu(null); // close after navigation
                    }}
                    className="hover:text-[#2fc18b] cursor-pointer"
                  >
                    Careers
                  </button>
                </div>
              </div>
            )}
          </div>


        </div>

        {/* Right - Login Button */}
        <button 
         onClick={() => navigate("/Auth/signup")}
        className="bg-[#2dcea1] text-white text-[16px] px-5 py-3 rounded-md cursor-pointer hover:underline">
          Login/Sign up
        </button>
      </div>
    </div>
  );
}
