import React from "react";


export default function SixToTenQuestPixDifference() {
    return (
        <div>
            <div>
                <img
                    src="https://questpix.com/assets/images/whydiffrent/2.png" // replace with actual image path
                    alt="leaf"
                    className="w-30 md:w-40 rounded-lg absolute top-875 left-15 "
                />
            </div>
       
        <div className="container text-white  flex flex-col md:flex-row items-center md:justify-between">
           
           
            {/* Left Content */}
            <div className="max-w-xl">
                <div>
                <h2 className="text-3xl md:text-5xl font-bold">
                    Ready to Experience<br />
                    the 
                    <span className="text-[#FFD118]"> QuestPix <br />
                    Difference?</span>
                </h2>

                <p className="mt-5 text-[#9EBDEF]">
                    Don't settle for a basic JEE, NEET or Foundation preparation. Download QuestPix today and make your exam prep extra-ordinary.
                </p>
                </div>

                {/* App Store Buttons */}
                <div className="flex mt-10">
                    <a href="https://play.google.com/store/apps/details?id=com.questpix.app" target="_blank">
                        <img
                            src="https://dev.questpix.com/assets/images/icon/gpbtn.png"
                            alt="Google Play"
                            className="w-40"
                        />
                    </a>
                    <a href="https://apps.apple.com/in/app/questpix/id6742243591" target="_blank">
                        <img
                            src="https://dev.questpix.com/assets/images/icon/appstore.png"
                            alt="App Store"
                            className="w-40"
                        />
                    </a>
                </div>
            </div>

            {/* Right Image */}

            <div>
                <img
                    src="https://questpix.com/assets/images/whydiffrent/ready.png" // replace with actual image path
                    alt="ready"
                    className="w-72 md:w-150 rounded-lg relative top-30 "
                />
            </div>
        </div>
         </div>
    );
}
