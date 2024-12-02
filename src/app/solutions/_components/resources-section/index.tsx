/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import { CustomLink } from "@/app/components/custom-link";
import { data } from "./data";

export default function ResourcesSection() {
  return (
    <section id={links[6].url.slice(1)}>
      <main
        className="mx-auto w-full max-w-screen-2xl space-y-4 p-container"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, hsl(var(--primary)), black, hsl(var(--primary)), transparent)",
          borderImageSlice: 1,
          borderTopWidth: 2,
        }}
      >
        <h4 className="text-center text-lg font-bold xl:text-xl">Resources</h4>
        <h2 className="text-center text-xl font-bold lg:text-2xl xl:text-3xl">
          Unlock, Upskill, and Upscale
        </h2>
        <ul className="!mt-12 grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-6">
          {data.map((item, i) => (
            <li
              key={i}
              className="flex flex-col overflow-hidden rounded-xl border shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="aspect-video w-full object-cover"
              />
              <div className="flex h-full flex-1 flex-col gap-4 p-6 lg:gap-6">
                <h5>{item.tag}</h5>
                <h3 className="text-lg font-bold xl:text-xl">{item.title}</h3>
                <p className="text-sm lg:text-base">{item.description}</p>
                <CustomLink
                  href={item.url.href}
                  name={item.url.name}
                  className="mt-auto"
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
