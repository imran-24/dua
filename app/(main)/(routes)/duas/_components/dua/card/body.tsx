

import clsx from 'clsx'
import { AudioLines, Play } from 'lucide-react'
import Image from 'next/image'
import React, { LegacyRef } from 'react'

interface DuaCardBodyProps{
    serial: number;
    duaName: string;
    topEn: string;
    duaAradic: string;
    transliterationEn: string;
    translationEn: string;
    referenceEn: string;
    audio: string;
    playing: boolean;
    onPlay: () => void;
    playerRef: LegacyRef<HTMLAudioElement> | undefined
}

const DuaCardBody = ({audio, duaAradic, duaName, referenceEn, serial, topEn, translationEn, transliterationEn, onPlay, playing, playerRef}: DuaCardBodyProps) => {
  return (
    <div className='flex flex-col space-y-4 lg:space-y-6 font-semibold'>
          <div className='flex items-center '>
            <Image
              width={40}
              height={40}
              className='object-contain mr-2'
              alt='allah'
              src={"/allah.png"}
            />
            <p className='text-[#1fa45b] text-base'>
              {serial}. {duaName}
            </p>
          </div>
          <p className='md:text-lg'>{topEn}</p>
          <p
            className='text-black text-2xl md:text-3xl tracking-widest text-right font-medium'
            style={{ lineHeight: "3rem" }}
          >
            {duaAradic}
          </p>
          {transliterationEn && (
            <div className='inline-flex w-full   md:text-lg'>
              <p className='text-black italic'>
                <span className=''>Transliteration: </span> {transliterationEn}
              </p>
            </div>
          )}
          {translationEn && (
            <div className='inline-flex w-full md:text-lg'>
              <p className='text-black'>
                <span className=''>Translation: </span> {translationEn}
              </p>
            </div>
          )}
          {referenceEn && (
            <div>
              <span className='text-[#1fa45b]'>Reference:</span>
              <p className='md:text-lg'>{referenceEn}</p>
            </div>
          )}
          <div>
            {audio && (
              <div>
                <audio controls className='hidden' ref={playerRef}>
                  <source src={audio} type='audio/mp3' />
                </audio>
                {/* <audio controls className='hidden' ref={playerRef}>
                  <source
                    src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                    type='audio/mp3'
                  />
                </audio> */}

                <button
                  type='button'
                  onClick={onPlay}
                  className={clsx(
                    "rounded-full h-10 w-10 flex items-center justify-center transition  bg-[#1fa45b] hover:bg-green-600",
                    playing && "bg-green-600"
                  )}
                >
                  {playing ? (
                    <AudioLines
                      size={16}
                      className='ml-0.5 fill-white text-white'
                    />
                  ) : (
                    <Play size={16} className='ml-0.5 fill-white text-white' />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
  )
}

export default DuaCardBody