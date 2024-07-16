import "@/styles/globals.css";
import { bratonComposer, drukBold, quickSand, roughgatesVintage, seasonsRegular, tanker } from "@/utils/font";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${quickSand.variable} ${tanker.variable} ${seasonsRegular.variable}  ${bratonComposer.variable} ${roughgatesVintage.variable} ${drukBold.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
