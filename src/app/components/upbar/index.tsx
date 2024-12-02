"use client";
import React from "react";
import Logo from "../logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems, MenuItem as TMenuItem } from "./data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";
import { Tab, Tabs } from "../tabs";

function getRootLevel(item: TMenuItem, parentLevel = 0): number {
  if (item.items) return getRootLevel(item.items[0], parentLevel + 1);
  return parentLevel;
}

function OneLevelMenuItem({ items }: { items: TMenuItem[] }) {
  return (
    <div className="bg-gray-100">
      <ul className={twMerge("container flex gap-4")}>
        {items.map((item, index) => (
          <li key={index}>
            <Link
              className="inline-block py-2 font-normal text-gray-600 hover:text-foreground"
              href={item.href!}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TwoLevelMenuItem({ items }: { items: TMenuItem[] }) {
  return (
    <div className="bg-gray-100">
      <ul className="container grid grid-cols-6 gap-x-6 gap-y-3 py-4 pb-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={cn("border-b-2 border-foreground/10", {
              "col-span-2": item.items && item.items.length > 12,
              "col-span-4": item.items && item.items.length > 16,
            })}
          >
            <h4 className="py-2 font-medium">{item.name}</h4>
          </li>
        ))}
        {items.map((item, index) => (
          <li
            key={index}
            className={cn({
              "col-span-2": item.items && item.items.length > 12,
              "col-span-4": item.items && item.items.length > 16,
            })}
          >
            {
              <ul
                className={cn("grid gap-x-4 gap-y-4", {
                  "grid-cols-2": item.items && item.items.length > 12,
                  "grid-cols-4": item.items && item.items.length > 16,
                })}
              >
                {item.items?.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    {subItem.href && (
                      <Link
                        className="inline-block max-w-[16rem] font-normal text-gray-600 transition-colors duration-300 hover:text-foreground"
                        href={subItem.href!}
                      >
                        {subItem.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

function ThreeLevelMenuItem({ items }: { items: TMenuItem[] }) {
  const [active, setActive] = React.useState(0);
  const subItems = items[active].items;
  return (
    <div className="bg-gray-50">
      <div className="container">
        <Tabs onValueChange={(value) => setActive(value)}>
          {items.map((item, index) => (
            <Tab
              key={index}
              index={index}
              className="px-3 py-2 font-normal text-gray-600 data-[active=true]:text-foreground"
            >
              {item.name}
            </Tab>
          ))}
        </Tabs>
      </div>
      {subItems && <TwoLevelMenuItem items={subItems} />}
    </div>
  );
}

function MenuItem({ menuItem }: { menuItem: TMenuItem }) {
  const { items } = menuItem;
  const rootLevel = getRootLevel(menuItem);
  if (!items) return null;

  if (rootLevel === 1) return <OneLevelMenuItem items={items} />;

  if (rootLevel === 2) return <TwoLevelMenuItem items={items} />;

  if (rootLevel === 3) return <ThreeLevelMenuItem items={items} />;

  return null;
}

export default function Upbar() {
  const withItems = menuItems.filter((item) => item.items);
  const withHref = menuItems.filter((item) => item.href);
  return (
    <NavigationMenu className="fixed left-0 top-0 z-20 h-upbar w-full max-w-none justify-start bg-background shadow">
      <div className="container flex">
        <div className="w-fit">
          <NavigationMenuList className="w-full!">
            <NavigationMenuItem className={cn("cursor-pointer")}>
              <Link href="/" legacyBehavior>
                <Logo className="h-6 fill-foreground" />
              </Link>
            </NavigationMenuItem>
            {withItems.map((item, index) => {
              const { name } = item;
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="cursor-pointer font-normal text-gray-600 hover:text-foreground">
                    {name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-screen bg-white text-sm">
                    <MenuItem menuItem={item} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </div>
        <div className="ml-auto w-fit">
          <NavigationMenuList className="w-full!">
            {withHref.map((item, index) => {
              const { name, href } = item;
              return (
                <NavigationMenuItem key={index}>
                  <Link href={href!} legacyBehavior>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "cursor-pointer font-normal text-gray-600 hover:text-foreground",
                      )}
                    >
                      {name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
}
