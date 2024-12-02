"use client";
import React, { useId } from "react";
import { links } from "./data";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  links: string[];
  marginTop?: number | undefined;
};

function useActiveLink({ links, marginTop = 0 }: Props) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const currentLink = links.find((link) => {
        const target = document.querySelector(link) as HTMLElement;
        if (!target) return false;
        const { offsetTop, offsetHeight } = target;
        return (
          scrollPosition >= offsetTop - marginTop &&
          scrollPosition < offsetTop + offsetHeight - marginTop
        );
      });
      if (currentLink) {
        setActiveLink(currentLink);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links, marginTop]);

  return activeLink;
}

export default function Navbar() {
  const activeLink = useActiveLink({
    links: links.map((it) => it.url),
  });
  const indicatorId = useId();
  return (
    <nav className="dark sticky top-upbar z-20 h-navbar bg-gray-900 text-gray-200 max-lg:hidden">
      <ul className="mx-auto flex w-full max-w-screen-2xl items-center gap-6 px-container">
        {links.map((link, index) => {
          const isActive =
            activeLink.includes(link.url) || (!activeLink && index === 0);
          return (
            <li key={link.name} className="relative inline-block">
              <a
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.url);
                  if (!target) return;
                  target.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn("flex h-navbar items-center")}
              >
                {link.name}
              </a>
              {isActive && (
                <motion.div
                  layoutId={indicatorId}
                  className="absolute inset-x-0 bottom-0 h-1 rounded bg-primary"
                ></motion.div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
