/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useId } from "react";
import { links } from "../navbar/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Videos } from "./videos";
import { Ebook } from "./ebook";
import { Blogs } from "./blogs";
import { Reports } from "./reports";

const tabs = [
  {
    title: "Videos",
    mode: "dark",
    Component: <Videos />,
  },
  {
    title: "Ebook",
    mode: "light",
    Component: <Ebook />,
  },
  {
    title: "Blogs",
    mode: "light",
    Component: <Blogs />,
  },
  {
    title: "State of AI Reports",
    mode: "light",
    Component: <Reports />,
  },
  {
    title: "NVIDIA On-Demand",
    mode: "light",
    Component: <Ebook />,
  },
];

export default function ResourcesSection() {
  const [active, setActive] = React.useState(0);
  const indicatorId = useId();

  const Component = useCallback(() => tabs[active].Component, [active]);

  return (
    <section
      id={links[1].href.slice(1)}
      className={cn(
        tabs[active].mode,
        "bg-background text-foreground transition-colors duration-300 dark:bg-red-500",
        {
          "bg-[#1a1a1a]": tabs[active].mode === "dark",
        },
      )}
    >
      <main className="mx-auto w-full max-w-screen-2xl space-y-4 p-container">
        <h4 className="text-center text-xl font-bold">Resources</h4>
        <h2 className="text-center text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold">
          Take a Deeper Dive Into AI Across Industries
        </h2>
        <div className="relative isolate">
          <ul className="mx-auto mb-6 flex w-fit gap-2 text-sm lg:gap-4">
            {tabs.map(({ title }, index) => (
              <li key={index} className="relative flex items-center">
                <button
                  className={cn(
                    "relative py-2 font-medium opacity-75 hover:opacity-100",
                    {
                      "opacity-100": active === index,
                    },
                  )}
                  onClick={() => setActive(index)}
                >
                  <span>{title}</span>
                </button>
                {active === index && (
                  <motion.div
                    className="absolute bottom-0 h-1 w-full bg-primary"
                    layoutId={indicatorId}
                  />
                )}
              </li>
            ))}
          </ul>
          <Component key={active} />
        </div>
      </main>
    </section>
  );
}
