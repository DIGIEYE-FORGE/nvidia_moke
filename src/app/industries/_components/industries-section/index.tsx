/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { data } from "./data";

export default function IndustriesSection() {
  return (
    <section id={links[0].href.slice(1)}>
      <main className="mx-auto w-full max-w-screen-2xl p-container">
        <p className="mx-auto max-w-screen-lg text-balance text-center text-xl">
          {data.description}
        </p>
        <div className="mt-8 grid auto-rows-[15rem] grid-cols-[repeat(auto-fill,minmax(17rem,1fr))] gap-4">
          {data.industries.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="group relative flex h-full w-full flex-col overflow-hidden bg-black/20 p-4 text-white shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="group mt-auto flex flex-wrap items-center gap-1">
                  {item.title.split(" ").map((word, index) => (
                    <span key={index}>{word}</span>
                  ))}
                  <ChevronRight className="text-primary brightness-125 transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </section>
  );
}
