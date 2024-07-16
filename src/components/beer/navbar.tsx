import { MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const navLinks = [
  
    {
      title: "About",
      url: "/about",
    },
  
    {
      title: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className=" z-10 h-20  top-0 w-full  text-amber-900 text-lg bg-amber-50 pb-4">
      <div className="box flex  justify-between items-center">
        <div className="text-2xl flex gap-3 items-center font-bold font-quick">
            <MenuIcon />

            <Search />
        </div>

        <div className="relative h-20 w-32">
            <Image src="https://1000logos.net/wp-content/uploads/2016/10/Budweiser-Logo-1999-2011.png" alt="beer" 
            className="object-contain"
            fill
            unoptimized />
        </div>
        <div className="lg:flex space-x-4 hidden font-quick">
          {navLinks.map((link) => (
            <Link href={link.url} key={link.title}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
