import React from 'react'
import JeeMainTestSeries from './JeeMainTestSeries'
import TestSeriesPlans from './TestSeriesPlans'
import TestimonialCarousel from './TestimonialCarousel'
import JeeTestSeriesTestimonials from './JeeTestSeriesTestimonials'
import Doubts from './Doubts'
import FAQSection from './FAQSection'
import TestSeriesPage from './TestSeriesPage'

export default function JeeMainTestSeriesPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto  px-4 sm:px-10 lg:px-8 py-3 sm:py-6">
        <JeeMainTestSeries />
        <TestSeriesPlans/>
        <TestimonialCarousel/>
        <JeeTestSeriesTestimonials/>
        <Doubts/>
        <FAQSection/>
        <TestSeriesPage/>
      </div>
      </div>
  )
}

