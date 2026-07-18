"use client";

import React from "react";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[18rem] w-full flex-col items-center justify-center overflow-hidden bg-transparent md:h-[26rem] relative">
      {/* Dynamic background glow aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[480px] h-[120px] md:h-[180px] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full blur-[60px] md:blur-[90px] z-0 animate-pulse"
        style={{ animationDuration: "8s" }}
      ></div>
      
      {/* Cybernetic grid overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>

      <h1 className="relative z-20 text-center text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white select-none text-glow">
        {children}
      </h1>
      
      <div className="relative h-20 w-[20rem] md:w-[40rem] mt-6 z-10">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute inset-x-40 top-0 h-[3px] w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent blur-sm" />
        <div className="absolute inset-x-40 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Radial Gradient overlay to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
