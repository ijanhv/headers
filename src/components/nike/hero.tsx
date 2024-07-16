import React, { useState } from "react";
import Navbar from "./navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Shoe from "./shoe";

const Hero = () => {
  const shoes = [
    {
      name: "Nike Air Max 270",
      price: 150,
      image: "/nike/shoe1.png",
      color: "#0583C8",
    },
    {
      name: "Nike Air Max 720",
      price: 200,
      image: "/nike/shoe2.png",
      color: "#93CB06",
    },
    {
      name: "Nike Air Max 270",
      price: 150,
      image: "/nike/shoe1.png",
      color: "#0583C8",
    },
    {
      name: "Nike Air Max 720",
      price: 200,
      image: "/nike/shoe2.png",
      color: "#93CB06",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shoes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + shoes.length) % shoes.length);
  };

  return (
    <div
      className="h-screen w-full"
      style={{
        background: shoes[currentIndex].color,
      }}
    >
      <Navbar />
      <div className="items-center justify-center h-full w-full relative">
        <h3 className="text-[400px] font-tanker text-white text-center">
          NIKE
        </h3>
        <div className="flex items-center justify-center h-full w-full absolute -top-20">
          <div className="relative h-[500px] w-[700px]">
            {shoes.map((shoe, i) => (
              <Shoe key={i} shoe={shoe} index={i} currentIndex={currentIndex} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center w-full absolute z-50">
          <button
            onClick={prevSlide}
            className="border bottom-0 p-3 rounded-full text-white font-quick text-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="border bottom-0 p-3 rounded-full text-white font-quick text-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
