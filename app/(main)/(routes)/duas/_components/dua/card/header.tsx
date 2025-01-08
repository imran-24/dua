import React from 'react'

const DuaCardHeader = ({duaName}: {duaName: string}) => {
  return (
    <div
            className='
            inline-flex 
            w-full
            text-base
            border-[1px]
            shadow-sm
            bg-white
            font-semibold
            rounded-lg p-4'
          >
            <p className='text-black'>
              <span className='text-[#1fa45b] font-semibold'>Section: </span>{" "}
              {duaName}
            </p>
          </div>
  )
}

export default DuaCardHeader