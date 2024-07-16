import Image from "next/image";
import Link from "next/link";
import React from "react";

const Feature = () => {
    const contents = [
        {
            value: "5%",
            label: "Alcohol By Volume",
            desc: "Our storied history is one of perseverance and success. It is one that was built on an immigrant’s American dream."
        },
        {
            value: "0 G/12 FL OZ",
            label: "Fat",
            desc: "Our storied history is one of perseverance and success. It is one that was built on an immigrant’s American dream."


        },
        {
            value: "145 KCAL/12 FL OZ",
            label: "Energy",
            desc: "Our storied history is one of perseverance and success. It is one that was built on an immigrant’s American dream."
        }
    ]
  return (
    <div className="box p-10 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full  ">
        
        <div className="w-full flex items-center justify-center h-full ">
          <div className="w-full flex flex-col gap-3 items-start justify-center h-full">
           
            <h3 className="text-8xl font-bold font-tanker text-amber-950 tracking-wide">
              King of Beers since 1876
            </h3>
            <p className="text-xl font-quick text-amber-950">
              Our storied history is one of perseverance and success. It is one
              that was built on an immigrant’s American dream.
            </p>
          </div>
        </div>

        <div className="w-full h-full " />
        <div className="w-full flex items-center justify-center h-full">
          <div className="w-full flex flex-col gap-3 items-start justify-center h-[600px] p-5  border-2 border-amber-950">
           
           <div className="flex flex-col gap-3 divide-amber-900 divide-y-2">


            {contents.map((content, index) => (
                <div key={index} className="flex flex-col gap-3 ">
                    <p className="text-3xl font-bold font-tanker text-amber-950 mt-3">{content.value}</p>
                    <p className="text-lg font-bold font-quick text-amber-950">{content.label}</p>
                    <p className="text-sm font-quick text-amber-950">{content.desc}</p>
                    </div>
            ))}
                       </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
