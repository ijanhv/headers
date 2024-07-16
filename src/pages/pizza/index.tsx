import Image from "next/image";
import React from "react";

const PizzaPage = () => {
  return (
    <div className="relative h-screen">
      <Image src="/pizza/hero.jpg" alt="pizza" fill className="object-cover rotate-180" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        HElo
        </div>
    </div>
  );
};

export default PizzaPage;
