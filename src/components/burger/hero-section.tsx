import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="box ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full w-full py-32 ">
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative  h-[350px] w-[300px] lg:h-[500px] lg:w-[400px] rounded-t-[300px] overflow-hidden border-8 border-b-8 border-island-embrace">
              <Image
                src="/burger/burger2.webp"
                fill
                alt="burger"
                className="object-cover h-full w-full "
              />
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="relative  rotate-6 translate-x-16 translate-y-10 h-[350px] w-[300px] lg:h-[500px] lg:w-[400px] rounded-t-[300px]  border-8 border-b-8 border-island-embrace">
              <Image
                src="/burger/burger1.webp"
                fill
                alt="burger"
                className="object-cover h-full w-full  rounded-t-[300px]"
              />

              <div className="absolute h-40 w-40 -right-3">
                <Image
                  src="/burger/asset.svg"
                  fill
                  alt="burger"
                  className="object-cover h-full w-full  "
                />
              </div>

              <div className="absolute h-56 w-56 -bottom-20 -left-10">
                <Image
                  src="/burger/asset2.svg"
                  fill
                  alt="burger"
                  className="object-cover h-full w-full  "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center lg:items-start justify-center text-center">
          <h3 className="text-4xl md:text-5xl lg:text-7xl text-island-embrace text-left  font-bold font-tanker tracking-wider">
            BEST BOLD BUNS IN TOWN!
          </h3>
          <p className="text-island-embrace text-lg md:text-xl lg:text-2xl text-center lg:text-left  ">
            Savor the extraordinary at Berger – where each bite is a symphony of
            flavors, creating an unforgettable culinary experience.
          </p>

          <Link
            href="#_"
            className="relative inline-block px-4 py-3 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 rounded-t-lg bg-orange-600 -translate-x-0 -translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-4 rounded-t-lg border-orange-600  "></span>
            <span className="relative font-tanker text-xl z-10 text-orange-600  tracking-wider ">
              View Menu
            </span>
          </Link>
        </div>
      </div>

      <div className="bg-island-embrace h-full tracking-wider w-full flex items-start justify-between rounded-lg mt-20 py-4 p-10">
       <div className="space-y-1">
       <h3 className="text-white/80 text-left text-3xl font-tanker font-medium pt-4">
        We offer home delivery services

        </h3>

        <p className="text-white/60 text-left text-lg font-tanker font-medium pt-4">
        catering to your convenience, making life a little easier for you
        </p>
       </div>
       {/* <div className="relative h-28 w-28">
        <Image
                  src="/burger/image.png"
                  fill
                  alt="burger"
                  className="object-cover h-full w-full  "
                />
       </div> */}
     

      </div>
    </div>
  );
};

export default HeroSection;
