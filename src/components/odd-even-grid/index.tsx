/* eslint-disable @next/next/no-img-element */
import { CustomLink } from "@/app/components/custom-link";
import React from "react";
import { twMerge } from "tailwind-merge";

export type OddEvenItem = {
  image: string;
  title: string;
  description: string;
  links?: {
    name: string;
    url: string;
  }[];
};

export interface OddEvenProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "children"> {
  items: OddEvenItem[];
}
export default function OddEven({ items, className, ...props }: OddEvenProps) {
  return (
    <ul className={twMerge("flex flex-col", className)} {...props}>
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-8 odd:flex-row-reverse max-md:!flex-col"
        >
          <div className="flex flex-1 flex-col justify-center py-container">
            <h3 className="text-2xl font-semibold md:mb-6">{item.title}</h3>
            <p className="mb-6 font-light">{item.description}</p>
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
  );
}
