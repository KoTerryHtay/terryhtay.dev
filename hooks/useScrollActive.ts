import { useState, useEffect, RefObject } from "react";

export default function useScrollActive(ref: RefObject<HTMLElement | null>) {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const scrollActive = () => {
      const scrollY = window.pageYOffset ?? 0;

      const sectionHeight = ref.current?.offsetHeight ?? 0;
      const sectionTop = (ref.current?.offsetTop ?? 0) - 80;
      // const sectionTop = ref.current?.offsetTop! - 80;
      if (
        scrollY > sectionTop &&
        scrollY <= sectionTop + (sectionHeight as number)
      ) {
        setState(true);
      } else {
        setState(false);
      }
    };
    scrollActive();
    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [ref]);

  return state;
}
