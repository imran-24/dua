'use client'

import { Languages, LayoutGrid, Settings2, Type } from "lucide-react"
import SettingsItem from "./settings-item"
import { useState } from "react"

const Settings = () => {
  const [isOpen, setIsOpen] = useState(1);

  const onOpen = (id: number) => setIsOpen(id)
  return (
    <div 
    className='
    hidden
    xl:flex 
    xl:col-span-2
    xl:h-[560px]
    xl:bg-white
    xl:border-[1px]
    shadow-sm
    rounded-lg
    xl:flex-col
    xl:px-3
    '>
      <div className="py-4 mb-3">
        <h2 className="text-xl text-center text-black font-semibold">Settings</h2>
      </div>
      <div className="space-y-2">

        <div>
          <SettingsItem
          id={1}
          onClick={(id)=> onOpen(id)}
          isOpen={isOpen}
          icon={Languages}
          label="Language Settings"
          />
        </div>
          
          <SettingsItem
          id={2}
          isOpen={isOpen}
          onClick={(id)=> onOpen(id)}
          icon={Settings2}
          label="General Settings"
          />
          <SettingsItem
          id={3}
          isOpen={isOpen}
          onClick={(id)=> onOpen(id)}
          icon={Type}
          label="Font Settings"
          />
          <SettingsItem
          id={4}
          isOpen={isOpen}
          onClick={(id)=> onOpen(id)}
          icon={LayoutGrid}
          label="Appearance Settings"
          />
      </div>
    </div>
        

  )
}

export default Settings