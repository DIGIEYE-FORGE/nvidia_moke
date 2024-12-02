"use client";
import React, { useId } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const TabsContext = React.createContext<{
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  onValueChange?: (value: number) => void;
  indicatorId: string;
} | null>(null);

export function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a Tabs component");
  }
  return context;
}

interface TabProps extends Omit<React.HTMLProps<HTMLLIElement>, "children"> {
  index: number;
  children: ((active: boolean) => React.ReactNode) | React.ReactNode;
}

export function Tab({ children, index, className, ...props }: TabProps) {
  const { value, setValue, onValueChange, indicatorId } = useTabs();

  return (
    <li
      onClick={() => {
        setValue(index);
        onValueChange?.(index);
      }}
      role="tab"
      className={twMerge("relative cursor-pointer", className)}
      data-active={value === index}
      {...props}
    >
      <span className="relative z-10">
        {children instanceof Function ? children(value === index) : children}
      </span>
      {value === index && (
        <motion.div
          layoutId={indicatorId}
          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
        />
      )}
    </li>
  );
}

interface TabsProps extends React.HTMLProps<HTMLUListElement> {
  defaultValue?: number;
  onValueChange?: (value: number) => void;
}

export function Tabs({
  className,
  defaultValue,
  onValueChange,
  children,
  ...props
}: TabsProps) {
  const [value, setValue] = React.useState(defaultValue ?? 0);
  const indicatorId = useId();
  return (
    <TabsContext.Provider
      value={{ value, setValue, indicatorId, onValueChange }}
    >
      <ul
        role="tablist"
        className={twMerge("relative flex", className)}
        {...props}
      >
        {children}
      </ul>
    </TabsContext.Provider>
  );
}
