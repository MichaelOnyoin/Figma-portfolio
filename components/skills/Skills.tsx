"use client";

import {
  RectangleGroupIcon,
  SwatchIcon,
  CursorArrowRippleIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components/skills/SkillCard";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile App Development",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript,Typescript and frameworks like React, NextJS and React Native.",
  },
  {
    icon: CursorArrowRippleIcon,
    title: " Web Optimization",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: ServerStackIcon,
    title: "Server & Database Administration",
    children:
      "My Back-end development skills go hand-in-hand with my Server and Database administration skills. I create secure databases that provide storage for websites and mobile apps, providing a seamless UI using databases like Supabase,Firebase, MySQL, MongoDB & Postgres.",
  },
  {
    icon: CpuChipIcon,
    title: "AI Engineering and Data Science",
    children:
      "I rigorously test and train AI models to create customized chatbots, co-pilots & other AI apps for users. Your ease of use is as important to me as the functionality of your project.",
  },
];
//mt-3 text-lg text-zinc-100 max-md:max-w-full
export function Skills() {
  return (
    <section className="px-8 mt-2">
      <div className="container mx-auto mb-20 text-center">
        <span className="mb-2 block font-bold uppercase text-teal-400 tracking-widest text-xl">
          My Skills
        </span>
        <h1 className="mb-4 text-4xl font-extrabold text-blue-gray-900">
          What I do
        </h1>
        
        <p className="mx-auto w-full text-zinc-100 lg:w-10/12 xl:w-8/12 text-lg">
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </p>
      </div>
      <div className="container mx-auto grid m-4 grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;