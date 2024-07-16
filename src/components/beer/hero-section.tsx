import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { motionValue } from "framer-motion";

const HeroSection = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement> | null;
}) => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 100], [14, 0]);

  const scale = useTransform(scrollY, [0, 2090], [1, 0.58]);

  const stopScrollPosition = 2090;

  const y = useTransform(
    scrollY,
    [0, stopScrollPosition],
    [0, stopScrollPosition]
  );

  return (
    <div className="h-screen box">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full">
        <div className="w-full flex flex-col gap-3 items-start justify-center h-full">
          <p className="text-2xl font-bold font-seasonsRegular text-amber-950">
            The Great American Lager
          </p>
          <h3 className="text-8xl font-bold font-tanker text-amber-950 tracking-wide">
         King of Beers since 1876
          </h3>
          <p className="text-xl font-quick text-amber-950">
          Our storied history is one of perseverance and success. It is one that was built on an immigrant’s American dream.


            </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <motion.div
            style={{
              scale,
              y,
              rotate,
            }}
            className="w-[300px] h-[700px] relative"
          >
            <Image
              src="/beer/budweiser.png"
              alt="beer"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
        <div className="w-full flex flex-col gap-3 items-start justify-center h-full">
          <p className="text-7xl font-bold font-tanker text-[#CF242A]">
          True When you say Budweiser, you{"'"}ve said it all 
          </p>
         
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
