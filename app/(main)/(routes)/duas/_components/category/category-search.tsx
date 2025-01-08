import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react';
import React from 'react'

interface CategorySearchProps{
    searchQuery: string;
    handleSearch: (value: string) => void;
}

const CategorySearch = ({handleSearch, searchQuery}:CategorySearchProps) => {
  return (
    <div className='lg:flex items-center relative px-3 hidden'>
          <Input
            type='text'
            placeholder='Search categories'
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className='pl-10 h-10 focus-visible:ring-[#1fa45b] placeholder:text-sm placeholder:font-light'
          />
          <div
            role='button'
            className='z-20 h-9 w-9 absolute left-4 flex items-center justify-center transition rounded-lg '
          >
            <Search className='h-4 w-4 text-neutral-500 ' />
          </div>
        </div>
  )
}

export default CategorySearch