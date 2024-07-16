import AboutUs from '@/components/sushi/about-us'
import HeroSection from '@/components/sushi/hero-section'
import Navbar from '@/components/sushi/navbar'
import React from 'react'

const SushiPage = () => {
  return (
    <div className='sushi-bg-left '>
        <Navbar />
        <HeroSection />
        <AboutUs />
    </div>
  )
}

export default SushiPage