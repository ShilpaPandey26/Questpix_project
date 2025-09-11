import React from 'react'
import PartnerWithUs from './PartnerWithUs'
import KotaCoachingPromo from './KotaCoachingPromo'
import ProgramCategories from './ProgramCategories'
import HowQuestPixWorks from "./HowQuestPixWorks"
import SampleModules from "./SampleModules"
import TrustQuestPix from "./TrustQuestPix"
import HomeTestimonials from "./HomeTestimonials"
import ConnectSection from "./ConnectSection"
import StartToday from "./StartToday"



export default function HomePage() {

    return (
        <div>
            <PartnerWithUs />
            <KotaCoachingPromo />
            <ProgramCategories/>
            <HowQuestPixWorks/>
            <SampleModules/>
            <TrustQuestPix/>
            <HomeTestimonials/>
            <ConnectSection/>
            <StartToday/>
            

        </div>
    )
}
