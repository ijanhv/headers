import HeroSection from "@/components/breezer/hero-section";
import Image from "next/image";
import React from "react";

const TestPage = () => {
  const images = [
    "/breezer/1.png",
    "/breezer/2.png",
    "/breezer/3.png",
    "/breezer/4.png",
  ];
  return (
   <div>
    <HeroSection />
   </div>
  );
};

export default TestPage;
