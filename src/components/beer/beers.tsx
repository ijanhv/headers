import Image from "next/image";
import React from "react";

const Beers = () => {
  const beers = [
    {
      name: "Budweiser Zero",
      image: "/beer/budweiser-zero.png",
    },
    {
      name: "Corona Extra",
      image: "/beer/corona-extra.png",
    },

    {
      name: "Budweiser",
      image: "/beer/budweiser.png",
    },

    {
      name: "Bud Light",
      image: "/beer/bud-light.png",
    },
    {
      name: "Leffe",
      image: "/beer/leffe.png",
    },
  ];
  return (
    <div className="box">
      <div className="flex items-center justify-between w-full py-20">
        <div className="flex items-center justify-between gap-10 w-full">
          {beers.map((beer, index) => (
            <BeerCard key={index} beer={beer} index={index} />
          ))}
        </div>
        {/* <div className="w-full " /> */}

        {/* <div className="flex items-center justify-between gap-10 w-full">
          {beers.slice(2, 4).map((beer, index) => (
            <BeerCard key={index} beer={beer} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Beers;

const BeerCard = ({ beer, index }: any) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="h-[400px] w-[130px] relative">
        <Image
          src={beer.image}
          alt={beer.name}
          fill
          className={`${index === 2 && "opacity-0"} object-contain`}
          unoptimized
        />
      </div>
      <p className="text-center text-sm font-bold font-quick ">{beer.name}</p>
    </div>
  );
};
