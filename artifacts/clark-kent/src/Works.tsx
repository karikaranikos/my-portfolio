import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./data/projects";

gsap.registerPlugin(ScrollTrigger);

const base = import.meta.env.BASE_URL || "/";

const slugMap: Record<string, string> = Object.fromEntries(
  projects.map((p) => [p.title, p.slug])
);

const worksData = [
  { id: 1,  img: "W1.png",  title: "Hampton" },
  { id: 2,  img: "W2.png",  title: "Malbon" },
  { id: 3,  img: "W3.png",  title: "Malbon Buckets Club" },
  { id: 4,  img: "W4.png",  title: "AG1" },
  { id: 5,  img: "W5.png",  title: "Aje." },
  { id: 7,  img: "W7.png",  title: "TYR" },
  { id: 9,  img: "W9.png",  title: "High Pour" },
  { id: 10, img: "W10.png", title: "Lady Bird Soda" },
  { id: 11, img: "W11.png", title: "CRAFTD" },
  { id: 12, img: "W12.png", title: "APL" },
  { id: 13, img: "W1.png",  title: "Hampton" },
  { id: 14, img: "W2.png",  title: "Malbon" },
  { id: 15, img: "W3.png",  title: "Malbon Buckets Club" },
  { id: 16, img: "W4.png",  title: "AG1" },
  { id: 17, img: "W5.png",  title: "Aje." },
  { id: 19, img: "W7.png",  title: "TYR" },
  { id: 21, img: "W9.png",  title: "High Pour" },
  { id: 22, img: "W10.png", title: "Lady Bird Soda" },
  { id: 23, img: "W11.png", title: "CRAFTD" },
  { id: 24, img: "W12.png", title: "APL" },
];

type SlotConfig = {
  size: number;
  x: number;
};

export default function Works() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [slots, setSlots] = useState<SlotConfig[]>([]);

  const initialVisibleCount = 5;
  const initialVisible = worksData.slice(0, initialVisibleCount);
  const queuedItems = worksData.slice(initialVisibleCount);
  const domItems = [...[...queuedItems].reverse(), ...initialVisible];

  useEffect(() => {
    const handleResize = () => {
      const vw = window.innerWidth;

      const sizes = [
        vw * 0.12,
        vw * 0.16,
        vw * 0.2,
        vw * 0.24,
        vw * 0.28,
      ];

      const computedSlots: SlotConfig[] = [];
      let currentX = 0;

      for (let i = 0; i < initialVisibleCount; i++) {
        computedSlots.push({
          size: sizes[i],
          x: currentX,
        });
        currentX += sizes[i];
      }

      setSlots(computedSlots);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (slots.length === 0) return;

    gsap.set(".works-item", {
      position: "absolute",
      bottom: 0,
      left: 0,
      x: 0,
      width: 0,
      height: 0,
      opacity: 0,
    });

    initialVisible.forEach((item, index) => {
      const slot = slots[index];
      gsap.set(`.works-item--${item.id}`, {
        x: slot.x,
        width: slot.size,
        height: slot.size,
        opacity: 1,
      });
    });

    const worksTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${queuedItems.length * 100}%`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 2,
      },
    });

    const currentScreen = initialVisible.map((item) => item.id);

    queuedItems.forEach((queuedItem, cycleIndex) => {
      const enteringId = queuedItem.id;
      const startTime = cycleIndex;

      gsap.set(`.works-item--${enteringId}`, { opacity: 1 });
      worksTl.to(
        `.works-item--${enteringId}`,
        {
          x: slots[0].x,
          width: slots[0].size,
          height: slots[0].size,
          duration: 1,
          ease: "none",
        },
        startTime,
      );

      currentScreen.forEach((screenId, index) => {
        if (index < initialVisibleCount - 1) {
          const nextSlot = slots[index + 1];

          worksTl.to(
            `.works-item--${screenId}`,
            {
              x: nextSlot.x,
              width: nextSlot.size,
              height: nextSlot.size,
              duration: 1,
              ease: "none",
            },
            startTime,
          );
        } else {
          const lastSlot = slots[initialVisibleCount - 1];
          worksTl.to(
            `.works-item--${screenId}`,
            {
              x: lastSlot.x + lastSlot.size,
              duration: 1,
              ease: "none",
            },
            startTime,
          );
        }
      });

      currentScreen.unshift(enteringId);
      currentScreen.pop();
    });

    return () => {
      worksTl.scrollTrigger?.kill();
      worksTl.kill();
    };
  }, [slots]);

  return (
    <section
      className="works-section"
      ref={sectionRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fff",
        position: "relative",
      }}
    >
      <div className="works-text-block">
        <h2 className="works-heading">
          CREATIVE STRATEGY<br />FOR GROWTH-STAGE BRANDS.
        </h2>
        <nav className="works-nav">
          <a href="/work" className="works-nav-link">Work</a>
          <a href="/services" className="works-nav-link">Services</a>
          <a href="/#about" className="works-nav-link">About</a>
          <a href="/#contact" className="works-nav-link">Contact</a>
        </nav>
      </div>
      <div
        className="works-track"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {domItems.map((item) => (
          <a
            key={item.id}
            href={`/work/${slugMap[item.title] ?? ""}`}
            className={`works-item works-item--${item.id}`}
            style={{
              overflow: "hidden",
              position: "absolute",
              bottom: 0,
              left: 0,
              display: "block",
              cursor: "pointer",
            }}
          >
            <img
              src={`${base}${item.img}`}
              alt={item.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "bottom left",
                display: "block",
              }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
