/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import { items } from "./data";
import { twMerge } from "tailwind-merge";
import { CustomLink } from "@/app/components/custom-link";

export default function UseCasesSection() {
  return (
    <section
      id={links[2].href.slice(1)}
      className="dark bg-black text-foreground"
    >
      <main className="mx-auto w-full max-w-screen-2xl p-container">
        <ul className={twMerge("flex flex-col")}>
          {items.map((item, index) => (
            <li key={index} className="flex gap-8 odd:flex-row-reverse">
              <div className="flex flex-1 flex-col justify-center py-container">
                <h3 className="text-4xl font-semibold md:mb-6">{item.title}</h3>
                <p className="mb-6 text-2xl font-light">{item.description}</p>
                {item.links?.map((link, index) => (
                  <CustomLink
                    className="mb-2"
                    key={index}
                    name={link.name}
                    href={link.url}
                  />
                ))}
              </div>
              <div className="relative flex-1">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
