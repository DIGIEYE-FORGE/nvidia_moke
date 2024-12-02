import { cn } from "@/lib/utils";
import React from "react";
import { data } from "./data";

export default function HeroSection() {
  return (
    <section className="dark bg-black text-foreground">
      <main
        className={cn(
          "relative mx-auto grid h-[36.25rem] w-full max-w-screen-2xl place-content-center",
          "2xl:[mask-image:linear-gradient(to_right,_transparent,white_10%_90%,_transparent)]",
        )}
      >
        <video
          id="video-bm-uf-video"
          muted
          playsInline
          preload="meta"
          loop
          autoPlay
          className={cn("absolute inset-0 h-full w-full object-cover")}
        >
          <source src={data.videoUrl} type="video/webm" />
        </video>
        <h2 className="relative z-10 text-5xl font-bold">{data.title}</h2>
      </main>
    </section>
  );
}
