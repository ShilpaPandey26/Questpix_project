import React from 'react'
import NeetWhyUs from './NeetWhyUs'
import NeetStudyCompanionSection from './NeetStudyCompanionSection'
import NeetTestimonialScroller from './NeetTestimonialScroller'
import NeetComparisonTable from './NeetComparisonTable'
import NeetQuestPixDifference from './NeetQuestPixDifference'

export default function NeetWhyMain() {
  return (
    <div>
        <NeetWhyUs/>
        <NeetStudyCompanionSection/>
        <NeetTestimonialScroller/>
        <NeetComparisonTable/>
        <NeetQuestPixDifference/>
    </div>
  )
}
