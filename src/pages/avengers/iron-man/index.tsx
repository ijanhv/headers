import HeroSection from "@/components/avengers/iron-man/hero";
import { StickyScrollRevealDemo } from "@/components/avengers/captain-america/test";
import AvengersLayout from "@/layout/AvengersLayout";
import Image from "next/image";
import React from "react";
import Life from "@/components/avengers/iron-man/life";

const IronManPage = () => {
  return (
    <AvengersLayout>



     <HeroSection />
     <Life />

    {/* <StickyScrollRevealDemo /> */}
    </AvengersLayout>
  );
};

export default IronManPage;
