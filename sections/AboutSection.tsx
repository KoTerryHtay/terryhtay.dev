"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollActive from "@/hooks/useScrollActive";
import { useSectionStore } from "@/store/section";
import THImage from "@/public/TH.webp";

export default function AboutSection() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    gsap.from(q(".title .char"), {
      opacity: 0.3,
      duration: 0.5,
      ease: "power1.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: q(".title"),
        start: "top center",
        scrub: true,
      },
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          const tl = gsap.timeline({
            defaults: {
              stagger: 0.2,
              duration: 0.3,
            },
          });

          tl.fromTo(
            q(".image-animation"),
            {
              x: 200,
            },
            {
              x: 0,
            }
          );

          tl.fromTo(
            q(".text-animation"),
            {
              y: 100,
            },
            {
              y: 0,
            }
          );

          tl.to(q(".experience-count"), {
            innerText: 3,
            duration: 0.5,
            snap: {
              innerText: 1,
            },
          });

          tl.to(
            q(".project-count"),
            {
              innerText: 30,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3"
          );

          tl.to(
            q(".user-count"),
            {
              innerText: 30,
              duration: 0.5,
              snap: {
                innerText: 1,
              },
            },
            "-=0.3"
          );
        },
      },
    });
  }, []);

  // Set Active Session
  const aboutSectionOnView = useScrollActive(sectionRef);
  const { setSection } = useSectionStore();

  useEffect(() => {
    if (aboutSectionOnView) {
      setSection("#about");
    } else {
      setSection("#home");
    }
  }, [aboutSectionOnView, setSection]);

  // console.log("aboutSectionOnView >>>", aboutSectionOnView);
  // console.log("aboutSectionOnView section >>>", section);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-full bg-gray-100 dark:bg-[#161D1F] overflow-hidden py-14 px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col items-center gap-24">
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-20 md:gap-2 lg:gap-10">
          <div className="w-full flex flex-col items-start gap-7 md:gap-9">
            <div className="relative">
              <div className="overflow-hidden">
                <div className="text-animation dark:text-accentColor text-3xl md:text-4xl font-medium">
                  About me
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="overflow-hidden">
                <div className="dark:text-white text-animation">
                  I’m a web developer who specializes in React, Next.js, and
                  TypeScript. Over the past two years, I’ve built multiple
                  real-world full-stack projects—from inventory tracking apps to
                  LMS systems—focusing on clean UI, performance, and solving
                  real problems. <br /> Even though I don’t have company
                  experience yet, I treat every project like production work:
                  planning features, using modern tools like Prisma, Supabase,
                  React Query, Zustand, and deploying real applications. <br />{" "}
                  I’m currently looking for a role where I can learn from a
                  team, contribute to meaningful projects, and grow into a
                  strong frontend or full-stack developer.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center image-animation ">
            <div className="relative w-[180px] h-[170px] lg:w-[300px] lg:h-[290px]">
              <div className="w-full h-full bg-accentColor shadow-md rounded-sm absolute -right-3 -bottom-3" />
              <Image
                className="absolute z-10 object-contain  w-full h-full shadow-sm rounded-sm"
                width={300}
                height={300}
                priority
                alt="terry htay's profile"
                src={THImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
