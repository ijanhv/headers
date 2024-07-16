import Navbar from "@/components/avengers/navbar";
import React from "react";

const AvengersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen">
      <Navbar />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mt-auto">{children}</div>
      </div>
    </div>
  );
};

export default AvengersLayout;
