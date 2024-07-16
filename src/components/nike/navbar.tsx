import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const items = ["Home", "Menu", "Contact"];

  return (
    <div className=" text-white  ">
      <div className=" box flex items-center justify-between gap-3 py-2">
        <Image 
        src="/nike/logo.png"
        alt="logo"
        width={60}
        height={10}
        />
        <div className="flex items-center gap-3  ">
          {items.map((item, i) => (
            <div className="font-tanker tracking-widest text-base " key={i}>
              {item}
            </div>
          ))}
        </div>

    

        <div className="lg:flex gap-6 items-center hidden">
          <div className="flex justify-between w-44 items-center gap-3 pb-1">
            <p className="font-tanker tracking-widest text-sm">Search</p>
            <Search className="text-white text-sm" stroke="#ffffff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
