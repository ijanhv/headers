import Link from 'next/link';
import React from 'react'

const Navbar = () => {
    const navItems = [
        "About",
        "Menu",
        "Contact",
    ];
  return (
    <div className=' bg-[#FFEFD6] border-b border-island-embrace'>
        <div className=' box flex items-center justify-between gap-3 py-4'>
            <h3 className='text-2xl tracking-widest font-bold font-tanker text-island-embrace'>
                Burger
                </h3>

            <div className='flex items-center gap-3 text-island-embrace'>
                {navItems.map((item, i) => (
                    <div className='font-tanker text-lg tracking-wider ' key={i}>
                        {item}
                    </div>
                ))}

<Link
            href="#_"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 rounded-t-lg bg-orange-600 -translate-x-0 -translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-4 rounded-t-lg border-orange-600  "></span>
            <span className="relative font-tanker text-base z-10 text-orange-600  tracking-wider ">
              Book a Table
            </span>
          </Link>
                </div>

        </div>
    </div>
  )
}

export default Navbar