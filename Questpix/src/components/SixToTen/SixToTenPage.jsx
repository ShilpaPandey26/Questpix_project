import React from 'react'
import SixHeroSection from "./SixHeroSection"
import SixCarousel from "./SixCarousel"
import SixFeatureGrid from "./SixFeatureGrid"
import SixWhyChooseQuestPix from "./SixWhyChooseQuestPix"
import SixTestimonials from "./SixTestimonials"
import SixLearningFeatures from "./SixLearningFeatures"
import SixCoachingSection from "./SixCoachingSection"
import Courses from "./Courses"
import SixEnroll from "./SixEnroll"
import SixFAQSection from "./SixFAQSection"

export default function SixToTenPage() {
  return (
    <div>        
        <SixHeroSection/>
        <SixCarousel/>
        <SixFeatureGrid/>
        <SixWhyChooseQuestPix/>
        <SixTestimonials/>
        <SixLearningFeatures/>
        <SixCoachingSection/>
        <Courses/>
        <SixEnroll/>
        <SixFAQSection/>
    </div>
  )
}
