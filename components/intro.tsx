'use client';

import React from 'react';
import Image from "next/image";
import Headshot from '@/public/Headshot.jpeg';
import { motion, useAnimation } from 'framer-motion';

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
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          {/* Rotating Image */}
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: [0, 360, 0] }} transition={{ duration: 1.5, ease: "easeInOut", }} className="h-24 w-24">
            <Image src={Headshot} alt="Arjun's Headshot" width="192" height="192" quality="95" priority={true} className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"/>
          </motion.div>
          
          {/* Top Hand */}
          <motion.span initial={{ opacity: 1, y: 0 }} animate={topHandControls} className="absolute text-5xl -top-7 left-3">
            🫳
          </motion.span>
          
          {/* Bottom Hand */}
          <motion.span initial={{ opacity: 1, y: 0 }} animate={bottomHandControls} style={{ scaleX: -1 }} className="absolute text-5xl -bottom-7 right-3">
            🫴
          </motion.span>
        </div>
      </div>

    <p>
        <span className="font-bold">{`Welcome to the portfolio of Arjun Kundu 👋`}</span><br/>{`I'm a `}
        <span className="font-bold">{`Python Developer`}</span> {`and`} <span className="font-bold">{`DevOps Analyst`}</span> {`with `}
        <span className="font-bold">{`5 years`}</span> {`of combined experience. `}<br/>
        {`As a recent Computer Science graduate from UPEI, I am currently on the lookout for Development-related and DevOps-related opportunities.`}
    </p>
    </section>
  )
}
