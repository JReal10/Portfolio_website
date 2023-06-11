import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experience",
    title: "Experience",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Language Translator",
    company_name: "Legacy Company",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [                                                                                             
      "Translated communications between Japanese-speaking and English-speaking parties as required.",
      "Traveled around with the team on foreign trips to serve as a translator and set up equipment for events.",
      "Completed backlog of written translations and entered information into a digital database.",
      "Authored informational booklet of common phrases and cultural mannerisms to help learners during international communications, improving productivity.",
      "Reviewed final works to spot and correct errors in punctuation, grammar and translation, reducing of errors in communication."
      
    ],
  },
  {
    title: "Computer System Consultant",
    company_name: "Suntech Co.Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Property advertisement and management on various digital platforms.",
      "Modified and tested systems and networks to add functionality and improve workflow.",
      "Assisted internal and external customers to solve computer problems in a timely manner.",
      "Served as liaison between clients, developers, and programmers to facilitate expedient communication and efficient workflow.",
    ],
  },
  {
    title: "Bachelor's Student",
    company_name: "University of Essex",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "B.Sc (Hons) in Computer Science (in Progress/GPA within First Class range)",
      "Executive of the Japanese International Society, Organized events and acted as the bridge between the Japanese students and non-Japanese students",
      "Collaborated with the classmates to create professionla software products",
      "Actively participated in sports activity such as football, judo and basketball",
    ],
  },
 
];

const projects = [
  {
    name: "AI Image Generation",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nail Salon Sharon",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, projects };