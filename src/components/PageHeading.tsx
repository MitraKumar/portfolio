"use client";

import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[18rem] w-full flex-col items-center justify-center overflow-hidden bg-transparent md:h-[26rem] relative">
      <h1 className="relative z-20 text-center text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white select-none">
        {children}
      </h1>
      
      <div className="relative h-40 w-[20rem] md:w-[40rem] mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Core sparkles component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.8}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FF5A36"
        />

        {/* Radial Gradient to prevent sharp edges, blending into theme background */}
        <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
