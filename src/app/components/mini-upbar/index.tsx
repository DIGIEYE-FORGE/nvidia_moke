"use client";
import React from "react";
import Logo from "../logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, SearchIcon } from "lucide-react";

type LinkItem = {
  name: string;
  href: string;
};

const links: LinkItem[] = [
  { name: "Solutions", href: "/solutions" },
  { name: "Industries", href: "/industries" },
];

export default function MiniUpbar() {
  return (
    <Sheet>
      <header className="fixed left-0 top-0 z-10 h-upbar w-full bg-background shadow">
        <nav className="container flex h-full items-center gap-4">
          <Link href="/">
            <Logo className="h-7 w-24" />
          </Link>
          <div className="flex w-1 flex-1 items-center max-md:hidden">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button variant="ghost">{link.name}</Button>
              </Link>
            ))}
            <Button variant="outline" className="ml-auto aspect-square px-0">
              <SearchIcon />
            </Button>
          </div>
          <SheetTrigger asChild>
            <Button variant="ghost" className="ml-auto md:hidden">
              <MenuIcon />
            </Button>
          </SheetTrigger>
        </nav>
      </header>
      <SheetContent>
        <SheetHeader>
          <Link href="/" className="mr-4">
            <Logo className="h-7 w-24" />
          </Link>
          <SheetTitle></SheetTitle>
          <SheetDescription hidden />
        </SheetHeader>
        <nav className="mt-4 flex h-full flex-col">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="w-full">
              <SheetClose asChild>
                <Button variant="ghost" className="w-full justify-start">
                  {link.name}
                </Button>
              </SheetClose>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
