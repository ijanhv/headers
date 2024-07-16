import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/avengers/captain-america/hero.jpg"
          fill
          alt="Captain America"
          className="object-cover h-full w-full"
        />

        <div className="absolute h-screen top-0 left-0 w-full bg-gradient-to-b from-[#142446]/40 to-[#142446] " />

        <div className=" absolute top-24 h-full w-full ">
          <div className="box h-full grid grid-cols-2 gap-10">
            <div className="w-full h-full flex items-start pt-3 lg:pt-0 lg:justify-center flex-col gap-4">
              <p className="text-white text-base lg:text-2xl font-seasonsBold tracking-wider">
                STEVE ROGERS
              </p>

              <hr className="w-24 h-0.5 bg-white" />

              <h3 className="text-white uppercase text-4xl lg:text-7xl font-tanker tracking-widest">
                Captian America
              </h3>

              <p className="text-white text-sm lg:text-lg font-seasonsRegular tracking-wider">
                Recipient of the Super Soldier serum, World War II hero Steve
                Rogers fights for American ideals as one of the world’s
                mightiest heroes and the leader of the Avengers.
              </p>
            </div>

            <div className="w-full h-full overflow-hidden ">
              <div className="relative h-[300px] lg:h-[770px]">
                <Image
                  fill
                  src="/avengers/captain-america/cap.png"
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