/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import "swiper/css/navigation";
import "./index.css";
import { models } from "./data";
import { links } from "../navbar/data";

export default function ModelsSection() {
  const swiperRef = React.useRef<SwiperClass>();
  const containerRef = React.useRef<HTMLDivElement>(null);
  function handleSlideChange(swiper: SwiperClass) {
    const { isEnd, isBeginning } = swiper;
    const container = containerRef.current as HTMLDivElement | null;
    console.log({ isBeginning, isEnd });
    if (!container) return;
    container.style.setProperty(
      "--mask-start",
      `${isBeginning ? "0%" : "2.5%"}`,
    );

    container.style.setProperty("--mask-end", `${isEnd ? "100%" : "97.5%"}`);
  }

  return (
    <section
      id={links[0].url.slice(1)}
      className="dark bg-black py-container text-foreground"
    >
      <div className="mx-auto max-w-screen-2xl px-container">
        <div
          className="h-52 [--mask-end:97.5%] [--mask-start:0%]"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black var(--mask-start) var(--mask-end), transparent)",
          }}
          ref={containerRef}
        >
          <Swiper
            modules={[Mousewheel, Navigation]}
            direction="horizontal"
            mousewheel={true}
            slidesPerView={"auto"}
            spaceBetween={16}
            navigation={{ enabled: true }}
            className={cn("h-full w-full")}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {models.map((item, i) => (
              <SwiperSlide
                key={i}
                className="max-w-[min(20rem,100vw-var(--container-padding)*2)] select-none"
              >
                <div className="group relative flex h-full select-none flex-col gap-2 overflow-hidden rounded-xl border bg-black/50 p-4 transition-colors duration-1000 hover:bg-black/75">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <h5 className="inline-block w-fit rounded-lg bg-foreground/20 px-3 py-1 text-sm font-semibold uppercase backdrop-blur-3xl group-hover:hidden">
                    {item.type}
                  </h5>
                  <h6 className="mt-auto text-sm text-gray-300 group-hover:mt-0">
                    {item.company}
                  </h6>
                  <h4 className="font-bold">{item.name}</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    {item.tags.map((tag, i) => (
                      <span
                        className="rounded-full bg-foreground/60 px-2 py-0.5 text-xs text-background"
                        key={i}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="hidden text-xs group-hover:block">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
