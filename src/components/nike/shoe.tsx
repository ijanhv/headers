import React from "react";
import Image from "next/image";

const Shoe = ({ shoe, index, currentIndex }: any) => {
  return (
    <div
 
      className={`absolute inset-0 duration-500 transform ${
        index === currentIndex ? "opacity-100 rotate-in" : "opacity-0 pointer-events-none"
      }`}

      style={{
        transform: `translateX(${(index - currentIndex) * 100}%)`,
      
      }}
    >
      <Image
        src={shoe.image}
        alt={shoe.name}
        fill
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default Shoe;
