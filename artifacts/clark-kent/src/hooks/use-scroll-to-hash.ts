import { useEffect } from "react";

export function useScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Give GSAP/ScrollTrigger time to pin sections before scrolling
    const id = hash.replace("#", "");
    const attempt = (tries: number) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 150);
      }
    };

    setTimeout(() => attempt(10), 300);
  }, []);
}
