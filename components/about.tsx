'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion"; 
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About"); 

  return (
    <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }} id="about">
        <SectionHeading>About me 🥸</SectionHeading>
        <p className="mb-3">
          A recent computer science co-op graduate from the University of Prince Edward Island &#40;UPEI&#41; with a track record of reliability and strong communication skills 🎓.
        </p>
        <p className="mb-3">
          Some guiding principles of my tech journey thus far have been <Italic>persistence</Italic> and <Italic>curiosity</Italic> &#40;and perhaps a bit of stubbornness at times as well 🐥&#41;. A well-versed Python developer, I also have experience working with languages such as 
          Java and C. I enjoy using <Italic>CLIs</Italic>, <Italic>APIs</Italic>, <Italic>CI/CD tools</Italic>, <Italic>AI tools</Italic>, and <Italic>Web Scraping tools</Italic> to enhance automation capabilities 🙌. 
        </p>
        <p className="mb-3">
          As a recent grad looking to kickstart their tech career, I am currently looking for a <span className="font-medium">full-time position</span> in <span className="underline">DevOps-related</span> and <span className="underline">Cybersecurity-related</span> realms, as that is where I believe my expertise would be best utilised 🍀. Blockchain and FinTech also captivate me 💫. 
        </p>
        <p className="mb-3">
          <Italic>When I'm not sitting in front of a screen</Italic>, I enjoy going to the gym, watching football, reading, and exploring the world &#40;<a className="underline text-blue-900 hover:text-red-400 visited:text-purple-600" target="_blank" href="https://www.youtube.com/watch?v=bKNHtNM4quI">Click here to learn about my exchange semester in Finland!</a>&#41; 🏋️‍♂️⚽️📕✈️. 
        </p>
        <p>
          Special shoutout to <a className="underline text-blue-900 hover:text-red-400 visited:text-purple-600" href="https://www.youtube.com/@ByteGrad" target="_blank">Wesley from ByteGrad</a> for helping me create this portfolio website 🍻. 
        </p>
    </motion.section>
  )
}

const Italic = ({ children }: { children: React.ReactNode }) => <span className="italic">{children}</span>;