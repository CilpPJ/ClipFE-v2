"use client";

import Link from "next/link";

import { Plus } from "lucide-react";

import { ROUTER_PATH } from "../../../constants";

export const ClipSaveButton = () => {
  return (
    <Link
      className='absolute top-0 left-1/2 z-10 flex size-16 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-none bg-clip-primary text-white shadow-[0_4px_12px_rgba(191,215,77,0.4)] transition-colors hover:bg-clip-primary/90'
      href={ROUTER_PATH.CLIP_SAVE}
    >
      <Plus className='size-6' strokeWidth={3} />
    </Link>
  );
};
