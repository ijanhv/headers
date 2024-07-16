
import React from "react";

import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
const captainAmericaTimeline = [
  {
    title: "Captain America: The First Avenger",
    year: 2011,
    image: "https://cdn.marvel.com/content/1x/003cap_ons_inl_07.jpg",
    content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://cdn.marvel.com/content/1x/003cap_ons_inl_07.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />
        </div>
        ),
    description:
      "Steve Rogers, a scrawny but determined young man, volunteers for a top-secret research project that transforms him into the super-soldier known as Captain America. He battles the villainous Red Skull during World War II.",
  },
  {
    title: "The Avengers",
    year: 2012,
    image: "https://cdn.marvel.com/content/1x/003cap_ons_inl_09.jpg",
    content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://cdn.marvel.com/content/1x/003cap_ons_inl_09.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />

        </div>
        ),
    description:
      "Captain America joins forces with Iron Man, Thor, Hulk, Black Widow, and Hawkeye to form the Avengers, a team of superheroes assembled to stop Loki and his alien army from invading Earth.",
  },
  {
    title: "Captain America: The Winter Soldier",
    year: 2014,
    image: "https://cdn.marvel.com/content/1x/003cap_ons_inl_12.jpg",
    content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://cdn.marvel.com/content/1x/003cap_ons_inl_12.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />
        </div>
        ),
    description:
      "Steve Rogers, now working for S.H.I.E.L.D., discovers a conspiracy within the organization and must confront a mysterious assassin known as the Winter Soldier, who has ties to his past.",
  },
  {
    title: "Avengers: Age of Ultron",
    year: 2015,
    content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://compote.slate.com/images/c506b2ee-e8ef-4998-97a8-0fb73420c211.jpg"
        fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />
        </div>
        ),
    image:
      "https://compote.slate.com/images/c506b2ee-e8ef-4998-97a8-0fb73420c211.jpg",
    description:
      "Captain America fights alongside the Avengers once again as they battle Ultron, an artificial intelligence program created by Tony Stark that threatens to wipe out humanity.",
  },
  {
    title: "Captain America: Civil War",
    year: 2016,
    content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://media.newyorker.com/photos/590976b01c7a8e33fb38f7ce/master/pass/Brody-Captain-America-Civil-War.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />
        </div>
        ),
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
      content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://qph.cf2.quoracdn.net/main-qimg-6945e13ca123f38a919af5b5b080b076"
            fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />
        </div>
        ),
    description:
      "Captain America joins the Avengers in their fight against the powerful alien warlord Thanos, who seeks to collect all six Infinity Stones and use them to wipe out half of all life in the universe.",
  },
  {
    title: "Avengers: Endgame",
    year: 2019,
    content: (
        <div className="h-[300px] w-[600px]">
            <Image
            src="https://cdn.mos.cms.futurecdn.net/fZPKudBPPk26E77hXKawqa-1200-80.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Captain America: The First Avenger"
            unoptimized
            />
        </div>
        ),
    image:
      "https://cdn.mos.cms.futurecdn.net/fZPKudBPPk26E77hXKawqa-1200-80.jpg",
    description:
      "Following the devastating events of Infinity War, Captain America and the remaining Avengers embark on a mission to travel back in time and collect the Infinity Stones in order to undo Thanos's actions and restore the fallen.",
  },
];

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={captainAmericaTimeline} />
    </div>
  );
}
