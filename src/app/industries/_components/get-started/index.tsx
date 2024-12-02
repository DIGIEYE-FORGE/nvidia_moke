import React from "react";
import { links } from "../navbar/data";
import { data } from "./data";
import { CustomLink } from "@/app/components/custom-link";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GetStartedSection() {
  return (
    <section id={links[3].href.slice(1)}>
      <main className="mx-auto w-full max-w-screen-2xl p-container">
        <h2 className="text-center text-xl font-bold">{data.title} </h2>
        <h2 className="mt-8 text-center text-4xl font-bold">
          {data.description}{" "}
        </h2>
        <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
          {data.items.map((item, index) => (
            <li key={index} className="space-y-4">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p>{item.description}</p>
              <div>
                {item.link.type === "outline" ? (
                  <CustomLink
                    className="font-bold"
                    href={item.link.url}
                    name={item.link.text}
                  />
                ) : (
                  <Link href={item.link.url}>
                    <Button size="lg">{item.link.text}</Button>
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
