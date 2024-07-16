import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="https://www.pixel4k.com/wp-content/uploads/2019/06/i-am-iron-man-avengers-endgame-4k_1559764297.jpg.webp"
          fill
          alt="Captain America"
          className="object-cover h-full w-full"
          unoptimized
        />

        <div className="absolute h-screen top-0 left-0 w-full bg-gradient-to-b from-[#142446]/40 to-[#180707] " />

        <div className=" absolute top-24 h-full w-full ">
          <div className="box h-full grid grid-cols-2 gap-10">
            <div className="w-full h-full flex items-start pt-3 lg:pt-0 lg:justify-center flex-col gap-4">
              <p className="text-white text-base lg:text-2xl font-seasonsBold tracking-wider">
                TONY STARK
              </p>

              <hr className="w-24 h-0.5 bg-white" />

              <h3 className="text-white uppercase text-4xl lg:text-7xl font-tanker tracking-widest">
                Iron Man
              </h3>

              <p className="text-white text-sm lg:text-lg font-seasonsRegular tracking-wider">
                Genius billionaire inventor Tony Stark creates a suit of armor to
                fight evil and protect
              </p>
            </div>

            <div className="w-full h-full overflow-hidden "> 
              <div className="relative h-[300px] lg:h-[770px]">
                <Image
                  fill
                  src="https://www.pngitem.com/pimgs/b/50-509833_iron-man-tony-stark-png-transparent-png.png"
                  alt="cap"
                  className="object-contain h-full w-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroSection