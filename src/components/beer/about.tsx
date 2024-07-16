import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const About = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="bg-gray-800  ">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full  ">
          <div className=" h-[600px] w-[520px] relative">
            <Image
              src="https://us.budweiser.com/img/mobile/bud-wallpaper-mobile.jpg"
              alt="beer"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="w-full" />
          <div className="w-full flex flex-col gap-6 items-start justify-center h-full pr-10">
            <h3 className="text-5xl font-bold font-tanker tracking-wider text-amber-50">
              HISTORY OF BUDWEISER
            </h3>
            <p className="text-base font-bold font-seasonsRegular text-amber-50 tracking-wide">
              Our storied history is one of perseverance and success. It is one
              that was built on an immigrant’s American dream.
            </p>

            <div className="flex items-center gap-3">
                <Link href="/" className="px-3 py-1 text-xl border border-amber-50 text-amber-50 font-bratonComposer tracking-wider">
                    Bud Quix

                    </Link>
                <Link href="/" className="px-3 py-1 text-xl border bg-amber-50 border-amber-50 text-amber-950 font-bratonComposer tracking-wider">
                    Bud History

                    </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
