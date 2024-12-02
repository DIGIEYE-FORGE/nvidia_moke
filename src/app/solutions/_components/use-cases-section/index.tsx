/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import { CustomLink } from "@/app/components/custom-link";
import { data } from "./data";

export default function UseCasesSection() {
  return (
    <section id={links[4].url.slice(1)}>
      <main className="mx-auto w-full max-w-screen-2xl space-y-4 p-container">
        <h4 className="text-center text-lg font-bold lg:text-xl">Use Cases</h4>
        <h2 className="text-center text-2xl font-bold lg:text-3xl">
          Ignite Your Innovation
        </h2>
        <p className="text-center text-lg font-normal">
          See how NVIDIA APIs support industry use cases and jump-start your AI
          development with curated examples.
        </p>
        <ul className="!mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item, i) => (
            <li
              key={i}
              className="flex flex-col overflow-hidden rounded-xl border shadow-xl transition-shadow duration-500 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-video w-full object-cover"
              />
              <div className="flex h-full flex-1 flex-col gap-6 p-6">
                <h3 className="text-lg font-bold xl:text-xl">{item.name}</h3>
                <p>{item.description}</p>
                <CustomLink
                  href={item.url}
                  name="Learn More"
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
