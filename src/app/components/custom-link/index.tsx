import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CustomLinkProps {
  href: string;
  name: string;
  className?: string;
}
export function CustomLink({ name, href, className }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "group flex w-fit flex-wrap items-center gap-1 font-bold",
        className,
      )}
    >
      {name.split(" ").map((word, index) => (
        <span key={index}>{word}</span>
      ))}
      <ChevronRightIcon
        strokeWidth={3}
        className="shrink-0 text-primary transition-[color,transform] duration-500 group-hover:translate-x-1 group-hover:text-foreground"
      />
    </Link>
  );
}
