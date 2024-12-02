/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Footer({
  data,
  links,
}: {
  data: {
    title: string;
    links: {
      name: string;
      redirect: string;
    }[];
  }[];
  title: string;
  links: any[];
}) {
  return (
    <div className="dark flex flex-col gap-4 bg-background py-container text-foreground">
      <div className="container flex flex-col gap-[2rem]">
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((item, index) => (
            <div key={index}>
              <div className="mb-[2rem] border-b-2 border-foreground/40 pb-3 text-xl font-bold">
                <h1 className="">{item.title}</h1>
              </div>
              <ul className="space-y-3">
                {item.links.map(
                  (
                    link: {
                      name: string;
                      redirect: string;
                    },
                    index: number,
                  ) => (
                    <li
                      key={index}
                      className="text-primary brightness-125 transition-[filter] hover:brightness-150"
                    >
                      <a href={link.redirect}>{link.name}</a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex min-h-[4rem] flex-wrap items-center justify-between">
          <div className="flex items-center gap-4">
            <Mail className="text-primary" size={40} />
            <span className="text-lg">Sign Up for NVIDIA News</span>
            <Button>Subscribe</Button>
          </div>
          <div className="flex gap-2">
            <span className="text-lg font-light capitalize text-foreground/70">
              fallow digieye
            </span>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              links.map(
                (
                  link: {
                    icon: React.ReactNode;
                    redirect: string;
                  },
                  index: number,
                ) => (
                  <a
                    key={index}
                    href={link.redirect}
                    className="size-[1rem] opacity-50 transition-opacity hover:opacity-100 md:size-[2rem]"
                  >
                    {link.icon}
                  </a>
                ),
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
