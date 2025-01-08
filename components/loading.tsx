'use client'

import {  Loader2 } from "lucide-react"

const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center w-full">
        <Loader2 size={26} className="text-[#1fa45b] animate-spin " />
    </div>
  )
}

export default Loading