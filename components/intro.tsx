'use client';

import React from 'react'
import Image from "next/image";
import Headshot from '@/public/Headshot.jpeg';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div initial={{ rotate: 0 }} animate={{ rotate: [0, 360, 0] }} transition={{ duration: 1.5, ease: "easeInOut", repeatDelay: 1 }} className="h-24 w-24">
                    <Image src={Headshot} alt="Arjun's Headshot" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl hover:shadow-2xl transition-shadow duration-300"/>
                </motion.div>
                <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute text-5xl -top-7 left-3">
                    🫳
                </motion.span>
                <motion.span animate={{ y: [0, 5, 0]  }} transition={{ duration: 2, repeat: Infinity }}  style={{ scaleX: -1 }} className="absolute text-5xl -bottom-7 right-3">
                    🫴
                </motion.span>
            </div>
        </div>
    </section>
  )
}
