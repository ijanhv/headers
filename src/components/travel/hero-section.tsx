import React, { useRef, useState } from "react";
import { Navbar } from "./navbar";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Navigation } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination } from "swiper/modules";
const ITEM_WIDTH = 120;
const ITEM_HEIGHT = 200;
const PADDING_X = 10;
const HeroSection = () => {
  const places = [
    {
      title: "Indonesia",
      image:
        "https://www.rjtravelagency.com/wp-content/uploads/2023/09/Indonesia.jpg",
      desc: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.",
    },
    {
      title: "Japan",
      image:
        "https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg",
      desc: "Japan is an island country in East Asia located in the northwest Pacific Ocean.",
    },
    {
      title: "Kerala",
      image:
        "https://kryzen.com/wp-content/uploads/2023/10/WE-SET-UP-A-HYDROPONIC-FARM-IN-KERALA.webp",
      desc: "Kerala is a state on the southwestern Malabar Coast of India. It was formed on 1 November 1956, following the passage of the States Reorganisation Act, by combining Malayalam-speaking regions.",
    },
    {
      title: "Singapore",
      image:
        "https://img.veenaworld.com/wp-content/uploads/2018/09/Singapore-feature-image.jpg",
      desc: "Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population.",
    },
    {
      title: "London",
      image:
        "https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg",
      desc: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.",
    },
    {
      title: "Phuket",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4b/5d/c8/caption.jpg",
      desc: "Phuket, a rainforested, mountainous island in the Andaman Sea, has some of Thailand’s most popular beaches, mainly situated along the clear waters of the western shore.",
    },
  ];

  // Instance variable to save current selected photo
  const selectedIndex = useRef(-1);

  // Reference to gallery container
  const el = useRef<HTMLDivElement>(null);

  // Apply select effect on item
  const doSelect = (targetIndex: number) => {
    const children = el.current!.children;

    if (selectedIndex.current !== -1) {
      const currentEl = children[selectedIndex.current] as HTMLDivElement;
      currentEl.style.transform = "scale(1)";
      currentEl.style.zIndex = "0";
    }

    const targetEl = children[targetIndex] as HTMLDivElement;
    if (!targetEl) return;
    targetEl.style.transform = "scale(1.75)";
    targetEl.style.zIndex = "999";
    selectedIndex.current = targetIndex;

    const theWidth = ITEM_WIDTH + PADDING_X;
    el.current!.style.transform = `translateX(calc(50% - ${
      theWidth * targetIndex + theWidth * 0.5
    }px))`;
  };

  // Render the items
  const renderedList = places.map((it, index) => (
    <div
      className="absolute h-44 w-32 sahdotransition-all duration-700 top-48 ease-out origin-center rounded-lg bg-no-repeat bg-contain bg-center my-2 cursor-pointer"
      key={index}
      onClick={(e) => doSelect(index)}
      style={{
        boxShadow: "2px 10px 77px -6px rgba(0,0,0,0.85)",
        left: (ITEM_WIDTH + PADDING_X) * index,
      }}
    >
      <Image
        src={it.image}
        alt={it.title}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  ));

  return (
    <div className="relative">
      <Navbar />


      <div className="h-screen ">
        <div
          className="relative transition-all duration-700 w-screen h-full my-4"
          ref={el}
        >
          {renderedList}
        </div>

        {/* <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
