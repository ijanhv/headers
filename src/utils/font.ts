import { Quicksand } from "next/font/google";
import { Jost } from "next/font/google";
import localFont from 'next/font/local'



export const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick",
  weight: ["300", "400", "500", "600", "700"],
});


export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const tanker = localFont({
  src: "font/Tanker-Regular.otf",
  variable: "--font-tanker",
})


export const seasonsRegular = localFont({
  src: "font/seasons/seasonsRegular.otf",
  variable: "--font-seasons-regular",
})

export const bratonComposer = localFont({
  src: "font/BratonComposer-Regular.ttf",
  variable: "--font-braton-composer",
})

export const roughgatesVintage = localFont({
  src: "font/RoughgatesVintage.ttf",
  variable: "--font-roughgates-vintage",
})

export const drukBold = localFont({
  src: "font/DrukTextWide-Bold-Trial.otf",
  variable: "--font-druk-bold",
})