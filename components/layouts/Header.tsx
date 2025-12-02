"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import { useSectionStore } from "@/store/section";
import { Icons } from "../icons";
import { navLinks } from "@/constants/navLinks";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { section } = useSectionStore();

  const themeBtnRef = useRef<HTMLButtonElement>(null);

  // update theme button aria-label according to theme value
  useEffect(() => {
    const themeBtn = themeBtnRef.current;
    if (themeBtn) {
      themeBtn.ariaLabel = theme ?? "light";
    }
  }, [theme]);

  // console.log("section >>>", section);

  return (
    <header>
      <div
        className={
          "lower-glassmorphism bg-bglight/50 dark:bg-bgdark/50 z-30 top-0 shadow-sm fixed duration-400 px-4 sm:px-8 h-16 w-full"
        }
      >
        <div className="w-full h-full mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="text-xl sm:text-2xl md:hover:text-marrsgreen dark:md:hover:text-carrigreen focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen"
          >
            Terry Htay
            <span className="text-marrsgreen dark:text-carrigreen">.dev</span>
          </Link>
          <nav className="flex items-center">
            <div className="glassmorphism md:bg-transparent md:dark:bg-transparent md:backdrop-blur-none fixed md:static bottom-4 z-30 left-1/2 md:left-auto transform -translate-x-1/2 md:transform-none bg-bglight/50 dark:bg-carddark/60 dark:text-textlight w-11/12 rounded drop-shadow-lg md:drop-shadow-none">
              <ul className="flex justify-evenly items-center py-1">
                {navLinks.map((navLink) => (
                  <li key={navLink.url}>
                    <a
                      href={navLink.url}
                      className={`text-sm md:text-lg flex flex-col items-center w-18 md:w-auto dark:fill-textlight md:mr-6 md:hover:text-marrsgreen md:dark:hover:text-carrigreen link-outline ${
                        section === navLink.url.toLocaleLowerCase() &&
                        "text-marrsgreen dark:text-carrigreen fill-marrsgreen dark:fill-carrigreen"
                      }`}
                    >
                      <span className="md:hidden">
                        <navLink.svg />
                      </span>
                      <span className="whitespace-nowrap">{navLink.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              title="Toggles light & dark theme"
              aria-live="polite"
              className="w-8 h-8 ml-1 rounded-lg flex justify-center items-center link-outline"
            >
              <Icons.day />
              <Icons.night />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
