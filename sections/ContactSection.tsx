"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useSectionStore } from "@/store/section";
import useScrollActive from "@/hooks/useScrollActive";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".title-animation"),
            {
              y: "200%",
            },
            {
              y: 0,
            }
          );

          gsap.fromTo(
            q(".end-title"),
            { scale: 0 },
            { scale: 1, ease: "back.inOut" }
          );
        },
      },
    });
  }, []);

  const contactSectionOnView = useScrollActive(sectionRef);

  const { setSection } = useSectionStore();

  useEffect(() => {
    if (contactSectionOnView) setSection("#contact");
  }, [contactSectionOnView, setSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="max-h-max   py-[140px] px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-20 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <div className="title-animation text-5xl navlink text-accentColor">
              Contact me!
            </div>
          </div>
          <div className="title-animation flex justify-center space-x-12 mb-4 pt-20">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.link}
                title={social.title}
                target="_blank"
                rel="noopener noreferrer"
                className="transform scale-150 md:scale-125 link-outline"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="overflow-hidden flex justify-center items-center">
            <div className="title-animation w-full md:max-w-[80%] text-center dark:text-gray-400">
              Actively seeking a full-time role as a Frontend or Full Stack
              Developer, preferably using React, Next.js, and Node.js. Open to
              remote or onsite opportunities with collaborative teams
            </div>
          </div>
          <div className="end-title dark:text-white text-md">
            Made with <Icons.heart /> by
            <span className="text-accentColor text-lg font-semibold ml-2">
              Terry Htay
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const socialLinks = [
  {
    id: 1,
    title: "Terry Htay's Github Profile",
    link: "https://github.com/KoTerryHtay",
    svg: <Icons.github />,
  },
  {
    id: 2,
    title: "Terry Htay's LinkedIn Profile",
    link: "https://www.linkedin.com/in/terry-htay-335132376",
    svg: <Icons.linkedIn />,
  },
  {
    id: 4,
    title: "Terry Htay's Profile on Facebook",
    link: "https://www.facebook.com/lu.aye.9883",
    svg: <Icons.facebook />,
  },
];
