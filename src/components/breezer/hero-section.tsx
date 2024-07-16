import React, { useState } from "react";
import { Navbar } from "./navbar";
import Image from "next/image";
import { motion, AnimateSharedLayout } from "framer-motion";

const HeroSection = () => {
  const breezers = [
    {
      image: "/breezer/1.png",
      title: "Green Apple",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#B7D600",
    },
    {
      image: "/breezer/2.png",
      title: "Watermelon",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#BD0E0E",
    },
    {
      image: "/breezer/3.png",
      title: "Mango",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#FECE34",
    },
    {
      image: "/breezer/4.png",
      title: "Pineapple",
      desc: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "#F5ED8E",
    },
  ];

  const [breezerArray, setBreezerArray] = useState<any>([...breezers]);
  const [currentBrezer, setCurrentBrezer] = useState<any>(breezers[0]);
  const [breezerIndex, setBreezerIndex] = useState<number>(0);

  const handleBrezer = () => {
    
    setCurrentBrezer(breezers[(breezerIndex + 1 )% breezers.length]);
    setBreezerIndex((breezerIndex + 1) % breezers.length);
  };

  return (
    <div
      className={`h-full lg:h-screen  
      transition-all duration-300 ease-in-out
  `}
      style={{
        background: `linear-gradient(180deg, ${currentBrezer.color} 0%,  rgba(255, 255, 255, 0) 100%)`,
      }}
    >
      <Navbar />

      <div className="w-full h-full flex lg:flex-row flex-col lg:py-20 max-w-7xl mx-auto">
        <div className="w-1/3 h-full ">heki</div>
        <div className="w-2/3 h-full flex gap-10 items-end justify-end">
          <div
            className="p-2 rounded-lg bg-white cursor-pointer"
            onClick={handleBrezer}
          >
            Next
          </div>
          {breezerArray.map((breezer: any, index: number) => (
            <div
              key={index}
              className="flex flex-col gap-4 items-end justify-end"
              onClick={() => {
                setCurrentBrezer(breezer);
                setBreezerIndex(index);
              }}
            >
              <motion.div
                layout
                className=""
                transition={{ duration: 0.5 }}
    
              >
                <Image
                  src={breezer.image}
                  alt="breezer"
                  width={currentBrezer.title === breezer.title ? 200 : 100}
                  height={currentBrezer.title === breezer.title ? 200 : 100}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
