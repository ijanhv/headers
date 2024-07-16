import About from '@/components/beer/about'
import Beers from '@/components/beer/beers'
import Feature from '@/components/beer/feature'
import Footer from '@/components/beer/footer'
import HeroSection from '@/components/beer/hero-section'
import { Navbar } from '@/components/beer/navbar'
import React, { useRef } from 'react'

const BeerPage = () => {
    const containerRef = useRef<HTMLDivElement>(null); // Add type assertion to useRef
  return (
    <div className='bg-amber-50 h-full w-full'>
        <Navbar />
        <HeroSection 
                    containerRef={containerRef}
        />
        <About 
            containerRef={containerRef}
        />

        <Feature />

        <Beers />
        <Footer />
    </div>
  )
}

export default BeerPage