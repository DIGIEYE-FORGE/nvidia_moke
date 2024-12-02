/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { links } from "../navbar/data";
import Marquee from "@/components/ui/marquee";

const data = [
  "https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-partners-1-dltp.png",
  "https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-partners-2-dltp.png",
];

export default function EcosystemSection() {
  return (
    <section id={links[5].url.slice(1)} className="pb-container">
      <div
        className="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-container pt-container"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, hsl(var(--primary)), black, hsl(var(--primary)), transparent)",
          borderImageSlice: 1,
          borderTopWidth: 2,
        }}
      >
        <h4 className="text-center text-lg font-bold xl:text-xl">Ecosystem</h4>
        <h2 className="text-center text-xl font-bold lg:text-2xl xl:text-3xl">
          Take Your Enterprise AI Farther, Faster
        </h2>
        <p className="mx-auto max-w-screen-lg text-balance text-center font-normal lg:text-lg">
          Join leading partners to develop your AI applications with models,
          toolkits, vector databases, frameworks, and infrastructure from our
          ecosystem.
        </p>
      </div>
      <div className="mt-4">
        <Marquee pauseOnHover className="h-24 [--duration:40s] md:h-32">
          <img src={data[0]} alt="Nvidia AI Partners" />
        </Marquee>
        <Marquee pauseOnHover className="h-24 [--duration:50s] md:h-32">
          <img src={data[1]} alt="Nvidia AI Partners" />
        </Marquee>
      </div>
    </section>
  );
}
