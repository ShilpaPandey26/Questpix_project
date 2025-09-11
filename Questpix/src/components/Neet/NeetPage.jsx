import React from 'react'
import CrackNeetSection from './CrackNeetSection'
import NeetCarousel from './NeetCarousel'
import FeatureGrid from './NeetFeatureGrid'
import NeetTestimonials from './NeetTestimonials'
import QuestPixWork from "./NeetQuestPixWork"
import QuestPixFeatures from "./NeetQuestPixFeatures"
import NeetPrepLevels from "./NeetPrepLevels"
import NeetCoachingSection from "./NeetCoachingSection"
import NeetFAQSection from "./NeetFAQSection"
import NeetQuestPixSection from "./NeetQuestPixSection"
import NeetHeader from './NeetHeader'

export default function NeetPage() {
  return (
    <div>
      <NeetHeader />
      <CrackNeetSection />
      <NeetCarousel />
      <FeatureGrid />
      <NeetTestimonials />
      <QuestPixWork />
      <QuestPixFeatures />
      <NeetPrepLevels />
      <NeetCoachingSection />
      <NeetFAQSection />
      <NeetQuestPixSection />
    </div>
  )
}
