'use client';

import React from 'react';
import Image from "next/image";
import Headshot from '@/public/Headshot.jpeg';
import { motion, useAnimation } from 'framer-motion';
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const topHandControls = useAnimation();
  const bottomHandControls = useAnimation();

  React.useEffect(() => {
    // Define a lambda function inside the parent lambda 
    const sequence = async () => {
      // First bounce cycle (softer bounce)
      await topHandControls.start({ y: [0, -8, 0], transition: { duration: 0.8, ease: [0.2, 0.8, 0.4, 1] } });
      await bottomHandControls.start({ y: [0, 8, 0], transition: { duration: 0.8, ease: [0.2, 0.8, 0.4, 1] } });
      
      // Final fade out
      await Promise.all([topHandControls.start({ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } }), bottomHandControls.start({ opacity: 0, transition: { duration: 0.6, ease: "easeOut" } })]); 
    };
    // Call that function
    sequence();
  }, [topHandControls, bottomHandControls]);

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Rotating Image */}
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: [0, 360, 0] }} transition={{ duration: 1.5, ease: "easeInOut", }} className="h-24 w-24">
            <Image src={Headshot} alt="Arjun's Headshot" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-[#9F2B68]/70 shadow-[0_0_10px_4px_rgba(159,43,104,0.4)]"/>
          </motion.div>
          
          {/* Top Hand */}
          <motion.span initial={{ opacity: 1, y: 0 }} animate={topHandControls} className="absolute text-5xl -top-8 left-3">
            🫳
          </motion.span>
          
          {/* Bottom Hand */}
          <motion.span initial={{ opacity: 1, y: 0 }} animate={bottomHandControls} style={{ scaleX: -1 }} className="absolute text-5xl -bottom-8 right-3">
            🫴
          </motion.span>
        </div>
      </div>

      <motion.h1 className="mb-10 mt-5 px-4 text-xl font-medium !leading-[1.5] sm:text-2xl" initial={{ opacity: 0, y: 100 }} animate={{opacity: 1, y: 0 }}>
        <span className="font-bold">{`Welcome to the portfolio of Arjun Kundu 👋`}</span> {`I'm a `}
        <span className="font-bold">{`Backend Developer`}</span>{`, `} <span className='font-bold'>{`Cybersecurity Mentor`}</span>{`, and`} <span className="font-bold">{`DevOps Analyst`}</span> {`with over `}
        <span className="font-bold">{`2 years`}</span> {`of experience. `} 
        {`I'm currently seeking `} <span className="underline">{`DevOps-related`}</span> {` and `} <span className="underline">{`Cybersecurity-related`}</span> {` opportunities.`}
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me ✉️ <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>
        <a href="/Resume.pdf" download={true} className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10">Download Resume 💻 <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>
        <a href="https://www.linkedin.com/in/arjun-kundu/" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"> <BsLinkedin /></a>
        <a href="https://github.com/kunduarjun" target="_blank" className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"> <FaGithubSquare /></a>
      </motion.div>
    </section>
  )
}
