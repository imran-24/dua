"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import DuaCardHeader from "./header";
import DuaCardBody from "./body";
import DuaCardFooter from "./footer";

interface DuaCardProps {
  referenceEn: string;
  serial: number;
  duaName: string;
  topEn: string;
  duaAradic: string;
  transliterationEn: string;
  translationEn: string;
  audio: string;
}

const DuaCard = ({
  duaAradic,
  duaName,
  referenceEn,
  serial,
  topEn,
  translationEn,
  transliterationEn,
  audio,
}: DuaCardProps) => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const onPlay = () => {
    if (!playerRef.current) return;
    togglePlay();
    // playerRef.current.addEventListener("play", handlePlay);
    // playerRef.current.addEventListener("pause", handlePause);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playerRef.current.paused) {
      playerRef.current.play();
      setPlaying(true);
    } else {
      setPlaying(false);
      playerRef.current.pause();
    }
  };

  return (
    <Link href={""} className='space-y-2'>
      
      {/* header */}
      <DuaCardHeader duaName={duaName} />
      <div
        className='
            border-[1px]
            shadow-sm
            bg-white
            rounded-lg p-4'
      >

        {/* body */}
        <DuaCardBody
        audio={audio}
        duaAradic={duaAradic}
        duaName={duaName}
        onPlay={onPlay}
        playing={playing} 
        playerRef={playerRef}
        referenceEn={referenceEn}
        serial={serial}
        topEn={topEn}
        translationEn={translationEn}
        transliterationEn={transliterationEn}

        />

        {/* footer */}
        <DuaCardFooter />
        
      </div>
    </Link>
  );
};

export default DuaCard;
