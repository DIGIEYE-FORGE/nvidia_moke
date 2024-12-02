import React from "react";
import { links } from "../navbar/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/app/components/custom-link";

export default function DocumentationSection() {
  return (
    <section
      id={links[7].url.slice(1)}
      className="dark bg-black text-foreground"
    >
      <main className="mx-auto w-full max-w-screen-2xl space-y-6 p-container">
        <h2 className="text-center text-xl font-bold xl:text-2xl">
          Documentation
        </h2>
        <p className="text-balance text-center text-lg font-light lg:text-xl">
          Explore technical documentation to start prototyping and building your
          enterprise AI applications with NVIDIA APIs, or scale on your own
          infrastructure with NVIDIA NIM.
        </p>
        <div className="flex flex-wrap items-baseline justify-center gap-6">
          <Link href="/api" className="max-sm:w-full">
            <Button
              variant="outline"
              className="w-full border-primary"
              size="lg"
            >
              NVIDIA API Docs
            </Button>
          </Link>
          <CustomLink
            href="/nim"
            name="NVIDIA NIM Docs"
            className="justify-center py-1 max-sm:w-full"
          />
        </div>
      </main>
    </section>
  );
}
