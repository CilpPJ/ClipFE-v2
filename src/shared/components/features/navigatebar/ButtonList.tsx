"use client";

import { NAVIGATE_BUTTON_LIST } from "../../../constants";
import { ClipSaveButton } from "../../common";

import { NavItems } from "./NavItems";

export const ButtonList = () => {
  return (
    <>
      <ClipSaveButton />
      <div className='relative mx-auto h-[65px] w-full max-w-[500px] rounded-t-[20px] bg-white'>
        <div className='flex h-full items-center'>
          <div className='flex flex-1 justify-around'>
            {NavItems(NAVIGATE_BUTTON_LIST.slice(0, Math.ceil(NAVIGATE_BUTTON_LIST.length / 2)))}
          </div>
          <div className='w-20' />
          <div className='flex flex-1 justify-around'>
            {NavItems(NAVIGATE_BUTTON_LIST.slice(Math.ceil(NAVIGATE_BUTTON_LIST.length / 2)))}
          </div>
        </div>
      </div>
    </>
  );
};
