import React from 'react'
import Image from "next/image";
import Headshot from '@/public/Headshot.jpeg';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="relative">
                <Image 
                    src={Headshot} alt="Arjun's Headshot" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                <span className="absolute text-5xl -top-7 left-3">
                    🫳
                </span>
                <span className="scale-x-[-1] absolute text-5xl -bottom-7 right-3">
                    🫴
                </span>
            </div>
        </div>
    </section>
  )
}
