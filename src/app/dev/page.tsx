/* eslint-disable @next/next/no-img-element */
"use client";
import Marquee from "@/components/ui/marquee";

const data = [
  "https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-partners-1-dltp.png",
  "https://www.nvidia.com/content/dam/en-zz/Solutions/ai/nvidia-ai-partners-2-dltp.png",
];

export default function MarqueeDemo() {
  return (
    <div>
      <Marquee pauseOnHover className="[--duration:40s]">
        <img src={data[0]} alt="Nvidia AI Partners" />
      </Marquee>
      <Marquee pauseOnHover className="[--duration:50s]">
        <img src={data[1]} alt="Nvidia AI Partners" />
      </Marquee>
    </div>
  );
}
