import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="z-40 absolute top-0 left-0 right-0 ">
      <div className="flex items-center justify-between gap-4 box py-3">
        <Image
          src="/avengers/logo.png"
          width={150}
          height={100}
          alt="logo"
          className="object-contain "
        />

        <div className="flex items-center gap-5 text-base font-seasonsRegular tracking-wider">
            <div className="text-white">Home</div>
            <div className="text-white">Life</div>
            <div className="text-white">Villians</div>

            </div>

            <div className="flex items-center gap-4">
            <div className="text-white font-seasonsRegular  tracking-wider">Search</div>
            <Search size={20} color="white"/>
            </div>

            

      </div>
    </div>
  );
};

export default Navbar;
