import React from 'react'
import Header from '../../components/layout-ui/Header'
import JourneyHero from './JourneyHero'
import Timeline from './Timeline'
import JourneyStats from './JourneyStats'

const Journey = () => {
  return (
    <div>
        <Header />
        <JourneyHero />
         <Timeline />
         <JourneyStats />
        
    </div>
  )
}

export default Journey