'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion"; 

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}>
        <SectionHeading>About Me 🥸</SectionHeading>
        <p className="mb-3">
          A recent computer science co-op graduate from the University of Prince Edward Island &#40;UPEI&#41; with a track record of reliability and a strong understanding of computer fundamentals 🎓.
        </p>
        <p className="mb-3">
          Some guiding principles of my tech journey thus far have been <span className="italic">persistence</span> and <span className="italic">curiosity</span> &#40;and perhaps a bit of stubbornness at times as well 🐥&#41;. A well-versed Python developer, I also have experience working with languages such as 
          Java and C. Additionally, I <span className="font-bold underline">love</span> using CLI Tools, API Tools, CI/CD-Tools, and Web Scraping Tools to further enhance automation capabilities 🙌. 
        </p>
        <p className="mb-3">
          As a recent grad looking to kickstart their tech career, I am currently looking for a <span className="font-medium">full-time position</span> in <span className="underline">DevOps-related</span> and <span className="underline">Cybersecurity-related</span> realms, as that is where I believe my expertise would be best utilised 🍀. 
        </p>
        <p>
          <span className="italic">Outside of honing my computer knowledge</span>, I enjoy going to the gym, watching football, reading &#40;primarily about finance and politics&#41;, and exploring the world &#40;<a className="underline text-blue-900 hover:text-red-400 visited:text-purple-600" target="_blank" href="https://www.youtube.com/watch?v=bKNHtNM4quI">Click here to learn about my exchange semester in Finland!</a>&#41; 🏋️‍♂️⚽️📕✈️. 
        </p>
    </motion.section>
  )
}
