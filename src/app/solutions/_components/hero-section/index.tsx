import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlayIcon } from "lucide-react";
import React from "react";

export default function HeroSection() {
  return (
    <section className="dark bg-black text-foreground">
      <div className="relative mx-auto flex h-[30rem] w-full max-w-screen-2xl px-container">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            maskImage: "linear-gradient(to right, transparent 90%, red )",
          }}
        ></div>
        <video
          id="video-bm-uf-video"
          muted
          playsInline
          preload="meta"
          loop
          autoPlay
          className={cn(
            "absolute inset-0 h-full w-full object-cover",
            "2xl:[mask-image:linear-gradient(to_right,red_90%,transparent)]",
          )}
        >
          <source
            src={
              "https://images.nvidia.com/aem-dam/en-zz/Solutions/ai/videos/nvidia-ai-nim-video-web-hero-banner-3283089-tablet-1024x420-r3_2.webm"
            }
            type="video/webm"
          />
          <source
            src="https://images.nvidia.com/aem-dam/en-zz/Solutions/ai/videos/nvidia-ai-nim-video-web-hero-banner-3283089-tablet-1024x420-r3_1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 flex flex-1 flex-col gap-4 py-20">
          <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-semibold">
            Build Generative AI With NVIDIA NIM
          </h1>
          <p className="xl:text-lg 2xl:text-xl">
            Explore the latest optimized AI models, connect applications to data
            with NVIDIA Blueprints, and deploy anywhere with NVIDIA NIM
            microservices.
          </p>
          <div className="mt-4 mt-auto flex flex-wrap gap-4">
            <Button size="lg" className="text-lg font-semibold max-sm:w-full">
              Try Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-lg font-semibold max-sm:w-full"
            >
              <PlayIcon className="mr-2 h-6 w-6" />
              Watch Video
            </Button>
          </div>
        </div>
        <div className="md:flex-1"></div>
      </div>
    </section>
  );
}
