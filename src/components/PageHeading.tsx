"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black md:h-[30rem]">
      <h1 className="relative z-20 text-center text-6xl text-white md:text-7xl lg:text-9xl">
        {children}
      </h1>
      <div className="relative h-40 w-[40rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={2000}
          className="h-full w-full"
          particleColor="#F95738"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
