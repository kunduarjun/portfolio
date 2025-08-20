import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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

