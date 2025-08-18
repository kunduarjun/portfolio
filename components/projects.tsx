import React from 'react'
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects() {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-0">
        <SectionHeading>Projects 🫆</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            ))}
        </div>
    </section>
  )
}
