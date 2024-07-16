import React, { useRef, useState } from "react";
import { Navbar } from "./navbar";
import Image from "next/image";
import { places } from "@/utils/data";
import {
  ChevronLeft,
  ChevronRight,
  MoveLeft,
  MoveRight,
  PanelLeft,
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const imagesToShow = 3; // Number of images to show on each side of the center image
  const gap = 50; // Desired gap between images
  const imageWidth = 20;

  const handleNext = () => {
    setCenterIndex((prevIndex) => (prevIndex + 1) % places.length);
  };

  const handlePrev = () => {
    setCenterIndex((prevIndex) =>
      prevIndex === 0 ? places.length - 1 : prevIndex - 1
    );
  };

  const prevIndex = centerIndex - 1 < 0 ? places.length - 1 : centerIndex - 1;

  return (
    <div className="relative bg-black">
      <Navbar />

      {prevIndex !== centerIndex && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0 }}
          key={places[prevIndex].title}
        >
          <Image
            src={places[prevIndex].image}
            alt="place"
            fill
            className="object-cover transition-all duration-500"
            unoptimized
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      )}

      <motion.div
        key={places[prevIndex].title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, ease: "easeInOut" }}
        exit={{ y: 100, opacity: 0 }}
        className="absolute top-[40%] left-5 box p-10 flex flex-col gap-3"
      >
        <h3 className="text-8xl font-bold text-white font-tanker tracking-wider drop-shadow-3xl">
          {places[prevIndex].title}
        </h3>

        <p className="text-white text-lg font-quick w-1/2">
          {places[prevIndex].desc}
        </p>
      </motion.div>

      {/*  */}

      <div className="h-screen flex items-center justify-center">
        <div className="absolute bottom-[34%] right-[36%] w-full flex  items-center justify-end">
          {places.map((place, index) => {
            let position = index - centerIndex;
            if (position < 0) position += places.length;
            if (position > places.length / 2) position -= places.length;

            const scaleFactor = position === 0 ? 1.2 : 1;
            const zIndex = places.length - Math.abs(position);

            const translation = position * (imageWidth + 130);

            return (
              <motion.div
                key={place.title}
                className="carousel-item absolute transition-all duration-500 h-44 w-32"
                style={{
                  transform: `translateX(${translation}px) scale(${scaleFactor})`,
                  zIndex: zIndex,
                  opacity: position >= 0 && position <= imagesToShow ? 1 : 0,
                }}
              >
                <Image
                  src={place.image}
                  fill
                  alt="place"
                  className="object-cover rounded-xl shadow-xl"
                  unoptimized
                />

                <div className="absolute bottom-0 rounded-xl left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />

                <div className="space-y-2 absolute bottom-3 w-full">
                  <h3 className="text-base text-white font-quick tracking-wider text-center">
                    {place.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute   flex items-center gap-4 right-10 justify-end bottom-20 transform -translate-y-1/2 w-full">
        <div className="flex gap-5 items-center">
          <button
            onClick={handlePrev}
            className="border  bottom-0 p-3 rounded-full text-white font-quick text-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="border bottom-0 p-3 rounded-full text-white font-quick text-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="bg-white/50 h-0.5 w-[350px] " />

        <p className="text-2xl text-white font-quick">
          0 {centerIndex + 1} / {places.length}
        </p>
      </div>
    </div>
  );
};

export default Hero;
