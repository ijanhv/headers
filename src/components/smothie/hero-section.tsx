import React, { useRef, useState } from "react";
import { Navbar } from "./navbar";
import { smoothies } from "@/utils/data";
import Image from "next/image";
import { gsap } from "gsap";

const HeroSection = () => {
  const [currentSmoothie, setCurrentSmoothie] = useState(smoothies[0]);
  const smoothieImageRef = useRef(null);
  const handleSmoothieClick = (index: number) => {
    const clickedSmoothie = smoothies[index];

    gsap.to(smoothieImageRef.current, {
      duration: 0.5,
      opacity: 0,
      rotation: "+=90",
      x: "+=200",
      y: "-=170", 
      motionPath: {
        path: [
          { x: 0, y: 0 },
          { x: -100, y: -250 },
          { x: -100, y: 0 },
        ],

        autoRotate: true,
      },
      onComplete: () => {
        setCurrentSmoothie(clickedSmoothie);

        gsap.fromTo(
          smoothieImageRef.current,
          {
            duration: 0.5,
            y: "100%",
            x: "-30%",
            yoyo: true,
            opacity: 1,
          },

          {
            rotation: "+=90", 
            motionPath: {
              path: [
                { x: 0, y: 0 },
                { x: -200, y: -200 },
                { x: -200, y: 0 },
              ],
              autoRotate: true, 
            },
            duration: 0.5,
            y: 0,
            x: 0,
            opacity: 1, 
          }
        );
      },
    });
  };

  return (
    <div
      className={` h-full 
        transition-all duration-300 ease-in-out
    `}
      style={{
        background: `${currentSmoothie.darkColor}`,
      }}
    >
      <div className="custom-shape-divider-bottom-1712848515">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
                 <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                    style={{fill: `${currentSmoothie.lightColor}`}}
                 ></path>

        </svg>
      </div>
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full py-28">
        <div className="px-20 flex items-start flex-col gap-5 justify-center text-center">
         <div className="relative h-24 w-64">


          <Image
            src="/smoothie/logo.png"
            fill
            className="object-contain h-full w-full"
            alt="logo"
          />
                   </div>
          <div className="text-xl text-left font-quick text-white">
            Smoothies are a great way to start your day. They are packed with
            vitamins and minerals that your body needs to function properly.
          </div>

          <div className="flex lg:flex-row flex-col items-center gap-5 ">
            {smoothies.map((smoothie, index) => (
              <div
                key={smoothie.id}
                className="relative h-32 w-32 rounded-full cursor-pointer "
                onClick={() => handleSmoothieClick(index)}
              >
                <Image
                  src={smoothie.image}
                  fill
                  alt="smoothie"
                  className=" rounded-full object-cover h-full w-full"
                />
                {currentSmoothie.id === smoothie.id && (
                  <div className="absolute -bottom-4 w-full h-0.5 rounded-full bg-white " />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          id="smoothie-image"
          className="h-full w-full flex items-center justify-center"
        >
          <div className="relative h-[300px] w-[300px] lg:h-[600px] lg:w-[600px]" ref={smoothieImageRef}>
            <Image
              src={currentSmoothie.image}
              fill
              alt="smoothie"
              className=" rounded-full object-contain h-full w-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
