import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Navbar } from "./navbar";
import Fruit from "./fruit";
import SodaName from "./name";
import { MoveLeft, MoveRight } from "lucide-react";

const HeroSection = () => {
  const [currentSoda, setCurrentSoda] = useState(0);

  const sodas = [
    {
      name: "Apple",
      bg: "#FFB2B3",
      label: "/can/red.jpeg",
      image: [
        "/can/apple-one.png",
        "/can/apple-two.png",
        "/can/apple-three.png",
        "/can/apple-four.png",
      ],
    },
    {
      name: "Exotic",
      bg: "#C1BFF2",
      label: "/can/purple.jpeg",
      image: [
        "/can/exotic-one.png",
        "/can/exotic-two.png",
        "/can/exotic-three.png",
        "/can/exotic-four.png",
      ],
    },
    {
      name: "Pear",
      bg: "#C9E78A",
      label: "/can/green.jpeg",
      image: [
        "/can/pear-one.png",
        "/can/pear-two.png",
        "/can/pear-three.png",
        "/can/pear-four.png",
      ],
    },
  ];
  const next = () => {
    setCurrentSoda((currentSoda + 1) % sodas.length);
  };

  const prev = () => {
    setCurrentSoda((currentSoda - 1 + sodas.length) % sodas.length);
  };

  return (
    // <div
    //   className="duration-300 ease-in-out transition-transform"
    // style={{
    //   background: `linear-gradient(to right, ${
    //     currentSoda > 0 ? sodas[currentSoda - 1].bg : sodas[sodas.length - 1].bg
    //   } 0%, ${sodas[currentSoda].bg} 50%, ${
    //     currentSoda < sodas.length - 1 ? sodas[currentSoda + 1].bg : sodas[0].bg
    //   } 100%)`,
    // }}

    //   style={{
    //     "--bg-color": sodas[currentSoda].bg,
    //   }}

    // >

    <div
      className={`duration-300 ease-in-out transition-transform`}
      style={{
        background: `${sodas[currentSoda].bg}`,
        transition: "background 0.3s ease-in-out",
      }}
      // style={{
      //   background: `linear-gradient(to right, ${
      //     currentSoda > 0
      //       ? sodas[currentSoda - 1].bg
      //       : sodas[sodas.length - 1].bg
      //   } 0%, ${sodas[currentSoda].bg} 50%, ${
      //     currentSoda < sodas.length - 1
      //       ? sodas[currentSoda + 1].bg
      //       : sodas[0].bg
      //   } 100%)`,
      // }}
    >
      <Navbar />
      <div className="box min-h-screen flex flex-col w-full  justify-center items-center">
        <div className="flex items-center justify-center w-full h-full absolute  ">
          <SodaName
            key={sodas[currentSoda].name}
            name={sodas[currentSoda].name}
          />

          <Fruit soda={sodas[currentSoda]} />
        </div>

        <div
          className=" absolute h-[500px] w-[265px] "
          style={{
            maskImage: "url(https://www.yudiz.com/codepen/fruity/cane.svg)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center center",
            maskPosition: "center center",
            WebkitMaskSize: "100% auto",
            maskSize: "100% auto",
          }}
        >
          <Image
            src="/can/can2.png"
            alt="can"
            fill
            className=" w-full h-full"
          />

          <div className="flex absolute items-center h-full w-full">
            {sodas.map((soda, index) => (
              <Image
                key={index}
                src={soda.label}
                alt="can label"
                width={500}
                style={{
                  transform: `translateX(-${currentSoda * 100}%)`,
                  transition: "transform 0.3s ease-in-out",
                }}
                height={785}
                className={` top-0  transform
          

            w-full h-full object-cover mix-blend-multiply transition-transform duration-300 ease-in-out`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 absolute bottom-6 ">
          <button
            disabled={currentSoda === 0}
            onClick={prev}
            className="bg-white  bottom-0 p-3 rounded-full text-black/40 font-quick text-lg"
          >
            <MoveLeft size={34} />
          </button>

          <button
            onClick={next}
            className="bg-white   bottom-0 p-3  rounded-full text-black/40 font-quick text-lg"
          >
            <MoveRight size={34} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
