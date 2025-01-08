import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface SettingsItemProps {
  label: string;
  icon: LucideIcon;
  id: number;
  onClick: (id: number) => void;
  isOpen: number;
}
const SettingsItem = ({
  label,
  icon: Icon,
  id,
  onClick,
  isOpen,
}: SettingsItemProps) => {
  return (
    <div>
      <Button
        onClick={() => onClick(id)}
        variant={"secondary"}
        className="w-full"
      >
        <Icon className='h-4 w-4 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
        <span className='text-xs hover:text-black text-neutral-500'>
          {label}
        </span>
      </Button>
      {isOpen === id && <div className='flex items-center gap-2 mt-2'>
        <Button variant={"ghost"}  className='bg-green-500 hover:bg-green-400 hover:text-white   text-white w-full'>English</Button>
        <Button variant={"outline"} className="w-full">Bangla</Button>
      </div>}
    </div>
  );
};

export default SettingsItem;
