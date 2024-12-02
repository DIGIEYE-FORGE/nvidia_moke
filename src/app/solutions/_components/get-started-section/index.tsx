/* eslint-disable @next/next/no-img-element */
import React from "react";
import { links } from "../navbar/data";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomLink } from "@/app/components/custom-link";

// Start Prototyping for Free
// Get started with easy-to-use, NVIDIA-managed serverless APIs.

// Access fully accelerated AI infrastructure.
// Ensure your data isn't used for model training.
// Get started for free with 1,000 inference credits.

// Download and Deploy
// Run NVIDIA NIM to scale optimized AI models in the cloud or data center of your choice.

// Ensure that data never leaves your secure enclave.
// Seamlessly transition from cloud endpoints to self-hosted APIs without code changes.
// Use an NVIDIA AI Enterprise license for production, or get started for free with the NVIDIA Developer Program.

const data = [
  {
    title: "Start Prototyping for Free",
    description:
      "Get started with easy-to-use, NVIDIA-managed serverless APIs.",
    points: [
      "Access fully accelerated AI infrastructure.",
      "Ensure your data isn't used for model training.",
      "Get started for free with 1,000 inference credits.",
    ],
  },
  {
    title: "Download and Deploy",
    description:
      "Run NVIDIA NIM to scale optimized AI models in the cloud or data center of your choice.",
    points: [
      "Ensure that data never leaves your secure enclave.",
      "Seamlessly transition from cloud endpoints to self-hosted APIs without code changes.",
      "Use an NVIDIA AI Enterprise license for production, or get started for free with the NVIDIA Developer Program.",
    ],
  },
];

export default function GetStartedSection() {
  return (
    <>
      <section
        id={links[3].url.slice(1)}
        className="dark bg-background text-foreground"
        style={{
          borderImage:
            "linear-gradient(to right, transparent, hsl(var(--primary)), white, hsl(var(--primary)), transparent)",
          borderImageSlice: 1,
          borderTopWidth: 2,
        }}
      >
        <main className="mx-auto w-full max-w-screen-2xl px-container py-container">
          <h2 className="text-center text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Get Started
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {data.map((item, i) => (
              <div key={i} className="rounded-xl bg-foreground/10 p-6">
                <h3 className="text-lg font-bold xl:text-xl 2xl:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-7 font-light">{item.description}</p>
                <ul>
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="mt-2 flex items-center gap-2 font-light"
                    >
                      <CheckIcon
                        className="shrink-0 text-green-500"
                        size={20}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border border-primary"
            >
              Build Noe
            </Button>
          </div>
        </main>
      </section>
      <section className="dark bg-black text-foreground">
        <main className="relative mx-auto grid w-full max-w-screen-2xl p-container lg:grid-cols-2">
          <img
            src="https://www.nvidia.com/content/dam/en-zz/Solutions/nemo-megatron/nvidia-ai-foundry-bm-m460-d.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 space-y-6">
            <h2 className="text-lg font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">
              Build Custom Generative AI Models With NVIDIA AI Foundry
            </h2>
            <p className="text-balance text-sm font-light md:text-base">
              Access foundation models, enterprise software, accelerated
              computing, and AI expertise to build, fine-tune, and deploy custom
              models for your enterprise applications.
            </p>
            <CustomLink href="#" name="Get Started" />
          </div>
        </main>
      </section>
    </>
  );
}
