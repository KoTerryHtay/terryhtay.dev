"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LinkButton from "@/components/LinkButton";
import { Icons } from "@/components/icons";

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const q = gsap.utils.selector(sectionRef);

    const textAnimationTimeline = gsap.timeline({
      defaults: { stagger: 0.2, duration: 0.3 },
    });

    textAnimationTimeline.fromTo(
      q(".text-animation"),
      {
        y: 100,
      },
      {
        y: 0,
        delay: 0.5,
      }
    );
    textAnimationTimeline.fromTo(
      ".bio-animation ",
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "back",
        duration: 0.6,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-16 sm:mt-8 pt-8 lg:pt-0 px-4 sm:px-8 md:px-20 max-w-5xl sm:pb-24 min-h-[769px] mx-auto sm:flex sm:flex-col sm:justify-center sm:items-center lg:flex-row-reverse"
    >
      <div className="lg:basis-2/3 z-10 relative ">
        <span className="text-animation text-marrsgreen lg:text-lg font-medium dark:text-carrigreen">
          My name is
        </span>
        <div className="overflow-hidden">
          <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
            Terry Htay
          </h1>
        </div>
        <div className="overflow-hidden">
          <span className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-marrsgreen dark:text-carrigreen font-medium">
            A Front-End Developer
          </span>
        </div>
        <div className="bio-animation mt-2 my-4 md:mb-8">
          <p>
            Passionate web developer specializing in Next.js, React, and
            TypeScript. Experienced in building full-stack applications with a
            focus on performance, scalability, and modern UI/UX. Eager to
            contribute to innovative teams and continue learning
          </p>
        </div>
        <LinkButton href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
          contact me
        </LinkButton>
      </div>
      <a
        href="#about"
        className="group absolute link-outline animate-bounce hidden md:bottom-14 lg:bottom-16 left-1/2 transform -translate-x-1/2 md:flex items-center flex-col"
      >
        <span className="group-hover:text-marrsgreen dark:group-hover:text-carrigreen">
          Scroll
        </span>

        <Icons.mouse />
        <Icons.downArrow />
      </a>
    </section>
  );
}
