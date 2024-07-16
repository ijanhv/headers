import HeroSection from '@/components/burger/hero-section'
import Navbar from '@/components/burger/navbar'
import Image from 'next/image'
import React from 'react'

const BurgerPage = () => {
  return (
    <div className=''>

        <Navbar />
        <div className='relative h-[100vh] w-full'>
        <Image src='/burger/bg.webp' alt='burger' fill />
        <div className='absolute h-full w-full'>
        <HeroSection />
        </div>

        </div>
    </div>
  )
}

export default BurgerPage