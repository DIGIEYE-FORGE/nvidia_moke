/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import OddEven from "@/components/odd-even-grid";
import { items } from "./data";

export default function IntegrationsSection() {
  return (
    <section
      className="dark bg-black text-foreground"
      id={links[1].url.slice(1)}
    >
      <main
        className="mx-auto w-full max-w-screen-2xl p-container"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, hsl(var(--primary)), white, hsl(var(--primary)), transparent)",
          borderImageSlice: 1,
          borderTopWidth: 2,
        }}
      >
        <p className="text-center font-semibold md:text-lg">Integrations</p>
        <h2 className="text-center text-[clamp(1.5rem,2.3vw,2.3rem)] font-semibold">
          Accelerated AI is Just an API Call Away
        </h2>
        <p className="text-center font-light">
          Get up and running quickly with familiar APIs.
        </p>
        <OddEven items={items} className="mt-container" />
      </main>
    </section>
  );
}
