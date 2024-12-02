/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { data } from "./data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const duration = 7.5;

const indicatorVariant = {
  hidden: {
    width: 0,
    transition: {
      duration: 0,
    },
  },
  visible: {
    width: "100%",
    transition: {
      duration,
      ease: "linear",
    },
  },
};

export default function HeroSection() {
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, duration * 1000);
    return () => clearTimeout(timeout);
  }, [current]);

  const tag = data[current].tags[0];
  const {
    title,
    description,
    mode,
    more: { href, text },
  } = data[current];
  return (
    <section
      className={cn(
        "relative isolate flex flex-col gap-12 bg-background pb-12 pt-container text-foreground",
        mode,
      )}
    >
      {data.map((item, index) => (
        <div key={index} className="absolute inset-0">
          <motion.img
            className={cn("h-full w-full object-cover object-center", {})}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === current ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            key={index}
            src={item.image}
            alt={item.title}
          />
        </div>
      ))}
      <div className="container relative z-10 mx-auto flex min-h-[28rem] flex-col gap-container lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <span className="font-semibold lg:text-lg xl:text-xl 2xl:text-2xl">
            {tag}
          </span>
          <h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl">
            {title}
          </h1>
          <p className="lg:text-lg">{description}</p>
          <Link href={href}>
            <Button>{text}</Button>
          </Link>
        </div>
        <div className="flex-1"></div>
      </div>
      <ul className="container relative z-10 mx-auto flex gap-4">
        {data.map((item, index) => (
          <li
            role="button"
            onClick={() => setCurrent(index)}
            key={index}
            className={cn(
              "flex flex-1 flex-col gap-2 text-foreground/80 transition-colors hover:text-foreground",
              {
                "text-foreground": index === current,
              },
            )}
          >
            <div className="relative h-1 rounded bg-foreground/25">
              <motion.div
                className="absolute h-full bg-primary"
                variants={indicatorVariant}
                initial="hidden"
                animate={index === current ? "visible" : "hidden"}
              />
            </div>
            <span className="text-sm max-md:hidden">{item.tags[0]}</span>
            <h2 className="line-clamp-2 text-xs font-light max-md:hidden">
              {item.title}
            </h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
