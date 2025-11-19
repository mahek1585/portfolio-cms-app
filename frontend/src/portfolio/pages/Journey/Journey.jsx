import React from 'react'
import Header from '../../components/layout-ui/Header'
import JourneyHero from './JourneyHero'
import Timeline from './Timeline'
import JourneyStats from './JourneyStats'
import JourneySkills from './JourneySkills'
import JourneyCTA from './JourneyCTA'
import Footer from '../../components/layout-ui/Footer'

const Journey = () => {
  return (
    <div>
        <Header />
        <JourneyHero />
         <Timeline />
         <JourneyStats />
         <JourneySkills />
         <JourneyCTA />
         <Footer />
        
    </div>
  )
}

export default Journey