import React from "react";
import { CgWorkAlt, CgData } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import ytReduxImage from "@/public/ytReduxImage.png"; 

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science Student",
    location: "Charlottetown, PE",
    description: "Graduated with first-class standing. Recognized for contributions to the university community and academic excellence.",
    icon: React.createElement(LuGraduationCap, { style: { color: "#4b5563" } }),
    date:"2020 - 2025",
  },
  {
    title: "DevOps Analyst (Co-op)",
    location: "Charlottetown, PE",
    description: "Performed system administration tasks, managed various platforms used within CI/CD pipeline, and led the migration of project management platforms. Awarded 2024 Rookie of the Year.",
    icon: React.createElement(CgWorkAlt),
    date:"2023 - 2025",
  },
  {
    title: "Cyber Security Mentor",
    location: "Charlottetown, PE",
    description: "Prepare middle and high school students for global CyberPatriot competition. Provide mentorship on cyber security concepts, teamwork, and problem-solving skills.",
    icon: React.createElement(CgData),
    date:"2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "YouTube Redux Firefox Plugin",
    description: "This is a simple Firefox Browser Extension that allows for users to clean up their YouTube interface to allow for more focused watching.",
    tags: ["JavaScript", "JSON", "HTML", "CSS", "Browser Extension"],
    imageUrl: ytReduxImage 
  }
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C",
  "Node.js",
  "Git",
  "Docker",
  "SQL",
  "PowerShell",
  "Linux",
  "Windows Server",
  "Active Directory",
  "Wireshark",
  "REST APIs",
  "Postman",
  "Selenium",
  "HTML",
  "CSS",
  "JavaScript",
  "JSON",
  "Next.js",
  "Flask"
] as const;

