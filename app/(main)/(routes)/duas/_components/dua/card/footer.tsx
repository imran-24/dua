"use client";

import { AlertOctagon, Bookmark, Copy, Lightbulb, Share2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const DuaCardFooter = () => {
  const handleClick = () => {
    toast("Comming Soon");
  };
  return (
    <div className='w-full flex items-center justify-end space-x-2 mt-6'>
      <button
        onClick={handleClick}
        type='button'
        className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
      >
        <Copy className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
      </button>
      <button
        onClick={handleClick}
        type='button'
        className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
      >
        <Bookmark className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
      </button>
      <button
        onClick={handleClick}
        type='button'
        className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
      >
        <Lightbulb className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
      </button>
      <button
        onClick={handleClick}
        type='button'
        className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
      >
        <Share2 className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
      </button>
      <button
        onClick={handleClick}
        type='button'
        className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
      >
        <AlertOctagon className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
      </button>
    </div>
  );
};

export default DuaCardFooter;
