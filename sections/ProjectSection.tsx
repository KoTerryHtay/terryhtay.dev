"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { RoughNotation } from "react-rough-notation";

import { useSectionStore } from "@/store/section";
import useOnScreen from "@/hooks/useOnScreen";
import useScrollActive from "@/hooks/useScrollActive";

import ProjectCard from "@/components/ProjectCard";

import smallEcommerceWebsite from "@/public/projects/small-ecommerce-website-1.webp";
import cmfPhoneOne from "@/public/projects/cmf-phone-1-1.webp";
import lms from "@/public/projects/lms-1.webp";
import BankWeb from "@/public/projects/bank-web-1.webp";
import NoteWeb from "@/public/projects/note-web-1.webp";
import ShopWeb from "@/public/projects/shop-web-1.webp";
import passengerTransportation from "@/public/projects/passenger-transportation-1.webp";

export default function ProjectSection() {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const isOnScreen = useOnScreen(sectionRef);

  const projectSection = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();
  useEffect(() => {
    if (projectSection) {
      setSection("#projects");
    }
  }, [projectSection, setSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>

      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/KoTerryHtay"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Shop Web ( Tracking Stock Web for small shop )",
    type: "FullStack",
    image: (
      <Image
        src={ShopWeb}
        sizes="100vw"
        fill
        alt="Shop Web"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A CRUD-enabled app for small shop owners to track inventory stored at home.",
    tags: ["Nextjs", "TypeScript", "Prisma", "TailwindCSS", "Supabase"],
    codeUrl: "https://github.com/KoTerryHtay/shop-nextjs",
    bgColor: "bg-[#9FD0E3]",
  },
  {
    title: "Passenger Transportation",
    type: "Frontend",
    image: (
      <Image
        src={passengerTransportation}
        sizes="100vw"
        fill
        alt="Passenger Transportation"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "User can see location of gates, bus departure/arrival time and current location of bus(fake location).",
    tags: ["NextJs", "TypeScript", "React Leaflet", "NextUi"],
    liveUrl: "https://transportation-two.vercel.app",
    codeUrl: "https://github.com/KoTerryHtay/passenger-transportation",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Small Ecommerce Website",
    type: "Frontend",
    image: (
      <Image
        src={smallEcommerceWebsite}
        sizes="100vw"
        fill
        alt="Small Ecommerce Website"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Mobile Phone and Accessories Ecommerce Website",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "Redux", "NextUi"],
    liveUrl: "https://online-shop-ecru-five.vercel.app",
    codeUrl: "https://github.com/KoTerryHtay/online-shop",
    bgColor: "bg-[#A6CECE]",
  },
  {
    title: "Banking Management System",
    type: "FullStack",
    image: (
      <Image
        src={BankWeb}
        sizes="100vw"
        fill
        alt="Banking Management System"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Project idea from https://github.com/sannlynnhtun-coding/Banking-Management-System.Role level - Bank staff.Bank staff can create new account, deposit/withdraw account, check remain amount, check account exist or not and check bank account history.",
    tags: ["NextJs", "TypeScript", "PostgreSQL", "Prisma"],
    codeUrl: "https://github.com/KoTerryHtay/banking-management-system-1",
    bgColor: "bg-[#C5E4E7]",
  },
  {
    title: "Note ( Social Media Clone )",
    type: "FullStack",
    image: (
      <Image
        src={NoteWeb}
        sizes="100vw"
        fill
        alt="Note ( Social Media Clone )"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: " Note Web App can have many users.Users can post public or private note.Users can read another user's note who note as public note but not private note.And every user have their profile qr code ( profile link ) and scan another user's qr code.",
    tags: [
      "NextJS",
      "Shadcn ",
      "TailwindCSS",
      "Prisma",
      "qr-x/react",
      "yudiel/react-qr-scanner",
    ],
    codeUrl: "https://github.com/KoTerryHtay/note-nextjs-auth",
    bgColor: "bg-[#EBF4F4]",
  },
  {
    title: "CMF Phone 1 Showcase ( gsap )",
    type: "Frontend",
    image: (
      <Image
        src={cmfPhoneOne}
        sizes="100vw"
        fill
        alt="CMF Phone 1 Showcase ( gsap )"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Showcase for cmf phone 1 with animation using gsap.",
    tags: ["React", "Gsap", "Tailwind", "TypeScript"],
    liveUrl: "https://cmf-phone-1-gsap.vercel.app/",
    codeUrl: "https://github.com/KoTerryHtay/cmf_phone_1_gsap",
    bgColor: "bg-[#FBFBFB]",
  },
  {
    title: "LMS (React)",
    type: "Frontend",
    image: (
      <Image
        src={lms}
        sizes="100vw"
        fill
        alt="LMS (React)"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Contributed to a collaborative React-based LMS project with a team.( One Project One Month )",
    tags: ["React", "Shadcn", "Tailwind", "TypeScript"],
    codeUrl:
      "https://github.com/one-project-one-month/Learning-Management-System-React",
    bgColor: "bg-[#FBFBFB]",
  },
];
