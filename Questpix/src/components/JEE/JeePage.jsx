import React from 'react'
import CrackJeeSection from './CrackJeeSection'
import JeeCarousel from './JeeCarousel'
import FeatureGrid from './FeatureGrid'
import JeeTestimonials from './JeeTestimonials'
import QuestPixWork from "./QuestPixWork"
import QuestPixFeatures from "./QuestPixFeatures"
import JeePrepLevels from "./JeePrepLevels"
import JEECoachingSection from "./JEECoachingSection"
import FAQSection from "./FAQSection"
import JeeQuestPixSection from "./JeeQuestPixSection"

export default function JeePage() {
  return (
    <div>     
        <CrackJeeSection/>
        <JeeCarousel/>
        <FeatureGrid/>
        <JeeTestimonials/>
        <QuestPixWork/>
        <QuestPixFeatures/>
        <JeePrepLevels/>
        <JEECoachingSection/>
        <FAQSection/>
        <JeeQuestPixSection/>
    </div>
  )
}
