"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function DuaCardSkeleton() {
    return (
      <div className='space-y-2'>
        <div
          className='
        inline-flex 
        w-full
        text-base
        border
        shadow-sm
        bg-white
        font-semibold
        rounded-lg
        space-x-2
        p-4
      '
        >
          <Skeleton className='h-4 w-10 rounded-xl' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
  
        <div
          className='
        border
        shadow-sm
        bg-white
        rounded-lg
        p-4
      '
        >
          <div className='flex flex-col space-y-4 lg:space-y-6 font-semibold'>
            <div className='flex items-center space-x-3'>
              <Skeleton className='h-10 w-10 rounded-full shrink-0' />
              <Skeleton className='h-4 w-full' />
            </div>
  
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-10 w-10 rounded-full' />
          </div>
          <div className='w-full flex items-center justify-end space-x-2 mt-6'>
            <div className='flex items-center justify-end space-x-4'>
              <Skeleton className='h-10 w-10 rounded-md' />
              <Skeleton className='h-10 w-10 rounded-md' />
              <Skeleton className='h-10 w-10 rounded-md' />
              <Skeleton className='h-10 w-10 rounded-md' />
              <Skeleton className='h-10 w-10 rounded-md' />
            </div>
          </div>
        </div>
      </div>
    );
  }
  