
import React, { Suspense, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";

export default function TestPage() {


  return (
    <header
      id="home"
      className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl mx-auto items-center justify-center p-8 relative overflow-x-hidden"
    >
      <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black md:text-8xl">Insightful</h1>
          <h2 className="text-md md:text-2xl">Start growing today!</h2>
        </div>

        <p className="max-w-md text-sm md:text-base text-zinc-500">
          Insightful is an AI-powered sales optimization tool that provides
          data-driven insights to boost sales performance.
        </p>
        <div className="w-full flex items-center justify-center md:justify-start gap-4">
          <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
            Try 7 days free!
          </button>
          <button className="w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors">
            Contact
          </button>
      
        </div>
      </div>

      <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
        {/* <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode'/> */}
        <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[1] items-center justify-center md:justify-start" scene='https://prod.spline.design/GPXAeKlNroSPqZQB/scene.splinecode'/>
        {/* <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start" scene='https://prod.spline.design/AliNrxJjHxh0woyY/scene.splinecode'/> */}
        {/* <Suspense fallback={<div>Loading...</div>}>
          <Spline
            onLoad={onLoad}
            className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[1] items-center justify-center md:justify-start"
            scene="https://prod.spline.design/qArxasybj9zCnNys/scene.splinecode"
          />
          {/* <iframe src='https://my.spline.design/chips-fc7999dd9627666ad78059b52368f2f2/' frameborder='0' width='100%' height='100%'></iframe> */}
        {/* </Suspense> */} 

          {/* <Spline className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[1] items-center justify-center md:justify-start" scene='https://prod.spline.design/43DuvTauxAT-dvRd/scene.splinecode'/>  */}
      
      </div>
    </header>
  );
}
