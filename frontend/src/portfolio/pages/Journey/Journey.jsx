import React from 'react'
import Header from '../../components/layout-ui/Header'
import JourneyHero from './JourneyHero'
import Timeline from './Timeline'
import JourneyStats from './JourneyStats'
import JourneySkills from './JourneySkills'

const Journey = () => {
  return (
    <div>
        <Header />
        <JourneyHero />
         <Timeline />
         <JourneyStats />
         <JourneySkills />
        
    </div>
  )
}

export default Journey