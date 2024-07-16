import { Search, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const items = [ "Home", "Menu", "Contact" ]
  return (
    <div className='   '>
    <div className=' box flex items-center justify-between gap-3 py-4'>
        

        <div className='flex items-center gap-3 '>
            {items.map((item, i) => (
                <div className='font-quick text-base ' key={i}>
                    {item}
                </div>
            ))}


            </div>

            <h3 className='text-2xl tracking-widest font-bold font-seasonsRegular text-island-embrace'>
            Sushi
            </h3>

            <div className="lg:flex gap-6 items-center hidden">
            <div className='flex justify-between w-44 items-center gap-3 border-b border-island-embrace pb-1'>
                <p className='font-quick text-sm'>Search</p>
                <Search className='text-island-embrace text-sm' 
                stroke='#000056'
                />
            </div>

            </div>
            

            

    </div>
</div>
  )
}

export default Navbar