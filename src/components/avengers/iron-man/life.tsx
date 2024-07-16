import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Vortex } from "@/components/ui/vortex";

const Life = () => {
  const [image, setImage] = useState(captainAmericaTimeline[0].image);

  return (
    // <div className="absolute left-0 w-full  bg-[#142446] ">
    //   <div className="box grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">
    //     <div className="w-full h-full flex flex-col gap-20">
    //       {captainAmericaTimeline.map((event, index) => (
    //         <motion.div key={index} className="flex items-center gap-5 mb-10 border p-4 rounded-2xl ">
    //           <div className=" rounded-full flex items-center justify-center">
    //             <p className="text-white font-tanker  tracking-widest font-bold">
    //               {event.year}
    //             </p>
    //           </div>
    //           <div className="flex flex-col gap-2">
    //             <p className="text-white text-3xl font-seasonsRegular font-bold">
    //               {event.title}
    //             </p>
    //             <p className="text-white text-sm font-quick text-justify">
    //               {event.description}
    //             </p>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //     <div className="w-full h-[400px] sticky top-52  ">
    //       <div className="relative h-[300px] w-full">
    //         <Image
    //           src={captainAmericaTimeline[0].image}
    //           alt="Captain America"
    //           fill
    //           unoptimized
    //           className="object-cover h-full w-full"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden absolute left-0  ">
    <Vortex
      backgroundColor="#000000"
      rangeY={800}
      // particleCount={500}
      // baseHue={120}
      className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full "
    >
      <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        The hell is this?
      </h2>
      <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
        burned and you&apos;ll have a scar.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
          Order now
        </button>
        <button className="px-4 py-2  text-white ">Watch trailer</button>
      </div>
    </Vortex>
  </div>
  );
};

export default Life;

const captainAmericaTimeline = [
  {
    title: "Captain America: The First Avenger",
    year: 2011,
    image: "https://cdn.marvel.com/content/1x/003cap_ons_inl_07.jpg",
    description:
      "Steve Rogers, a scrawny but determined young man, volunteers for a top-secret research project that transforms him into the super-soldier known as Captain America. He battles the villainous Red Skull during World War II.",
  },
  {
    title: "The Avengers",
    year: 2012,
    image: "https://cdn.marvel.com/content/1x/003cap_ons_inl_09.jpg",
    description:
      "Captain America joins forces with Iron Man, Thor, Hulk, Black Widow, and Hawkeye to form the Avengers, a team of superheroes assembled to stop Loki and his alien army from invading Earth.",
  },
  {
    title: "Captain America: The Winter Soldier",
    year: 2014,
    image: "https://cdn.marvel.com/content/1x/003cap_ons_inl_12.jpg",
    description:
      "Steve Rogers, now working for S.H.I.E.L.D., discovers a conspiracy within the organization and must confront a mysterious assassin known as the Winter Soldier, who has ties to his past.",
  },
  {
    title: "Avengers: Age of Ultron",
    year: 2015,
    image:
      "https://compote.slate.com/images/c506b2ee-e8ef-4998-97a8-0fb73420c211.jpg",
    description:
      "Captain America fights alongside the Avengers once again as they battle Ultron, an artificial intelligence program created by Tony Stark that threatens to wipe out humanity.",
  },
  {
    title: "Captain America: Civil War",
    year: 2016,
    image:
      "https://media.newyorker.com/photos/590976b01c7a8e33fb38f7ce/master/pass/Brody-Captain-America-Civil-War.jpg",
    description:
      "A disagreement over government oversight splits the Avengers into opposing factions, with Captain America leading one side and Iron Man leading the other. The conflict escalates when Captain America's old friend Bucky Barnes, also known as the Winter Soldier, is implicated in a terrorist attack.",
  },
  {
    title: "Avengers: Infinity War",
    year: 2018,
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-6945e13ca123f38a919af5b5b080b076",
    description:
      "Captain America joins the Avengers in their fight against the powerful alien warlord Thanos, who seeks to collect all six Infinity Stones and use them to wipe out half of all life in the universe.",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    image:
      "https://cdn.mos.cms.futurecdn.net/fZPKudBPPk26E77hXKawqa-1200-80.jpg",
    description:
      "Following the devastating events of Infinity War, Captain America and the remaining Avengers embark on a mission to travel back in time and collect the Infinity Stones in order to undo Thanos's actions and restore the fallen.",
  },
];
