import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full w-full   ">
      <div className="p-14 lg:p-32 flex w-full flex-col h-full items-center justify-center gap-10">
            <h3 className="text-5xl lg:text-6xl text-island-embrace text-center lg:text-left  font-bold font-seasonsRegular tracking-wider">
                Enjoy Delicious 
                
                <div className="flex items-center gap-4">
                   <Image  src="/sushi/image.png" width={50} height={50} alt="sushi" />
                Sushi Food
                </div>
            </h3>
                

                <p className="text-island-embrace text-lg  font-quick text-center lg:text-left  ">
                Savor the extraordinary at Sushi – where each bite is a symphony of
                flavors, creating an unforgettable culinary experience.
                </p>

                    <div className="inline-block w-full items-center justify-center text-center lg:text-left">
                <Link href="/" className="bg-[#E7721D] w-full font-semibold  px-6 py-3 rounded-full text-white font-quick text-lg">
                    Order Now
                </Link>
                </div>
      </div>
      <div className="w-full h-full flex items-center justify-center lg:justify-end">
        <div className="relative h-[400px] lg:h-[600px] w-[300px] lg:w-[600px]">
          <Image
            src="/sushi/sushi-hero.png"
            fill
            alt="sushi"
            className="object-contain h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
