"use client";

import { usePathname, useRouter } from "next/navigation";

import { ButtonItem } from "../../../@types";
import { cn } from "../../../utils";

export const NavItems = (buttons: ButtonItem[]) => {
  const pathname = usePathname();
  const router = useRouter();

  return buttons.map((button) => {
    const Icon = button.icon;
    const isActive = pathname === button.path;

    return (
      <button
        key={button.tab}
        className='relative flex h-12 w-12 cursor-pointer flex-col items-center justify-center gap-0.5 border-none bg-none outline-none'
        onClick={() => router.push(button.path)}
      >
        <Icon
          className={cn("transition-colors", isActive ? "text-clip-primary" : "text-gray-700")}
          size={26}
          strokeWidth={1.5}
        />
        <span
          className={cn(
            "text-xs transition-all",
            isActive ? "font-semibold text-clip-primary" : "font-normal text-gray-800",
          )}
        >
          {button.text}
        </span>
        {isActive && <div className='absolute -z-10 size-5 rounded-full bg-clip-primary' />}
      </button>
    );
  });
};
