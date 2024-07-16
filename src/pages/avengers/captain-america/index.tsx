import HeroSection from "@/components/avengers/captain-america/hero";
import Life from "@/components/avengers/captain-america/life";
import { StickyScrollRevealDemo } from "@/components/avengers/captain-america/test";
import AvengersLayout from "@/layout/AvengersLayout";
import Image from "next/image";
import React from "react";

const CaptainAmericaPage = () => {
  return (
    <AvengersLayout>



     <HeroSection />
     {/* <Life /> */}

    <StickyScrollRevealDemo />
    </AvengersLayout>
  );
};

export default CaptainAmericaPage;
