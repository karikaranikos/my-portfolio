const base = import.meta.env.BASE_URL || "/";

const CARD_W = 135;
const CARD_H = 95;

interface LogoItem {
  file: string;
  left: number;
  top: number;
  dur: number;
  delay: number;
}

// Center: cx=36%, cy=48%
// Ring 1: ax=10%, ay=12%  (4 logos)
// Ring 2: ax=22%, ay=26%  (7 logos)
// Ring 3: ax=34%, ay=38%  (9 logos)
const logos: LogoItem[] = [
  // ── Ring 1 ──────────────────────────────────────────────
  { file: "logo-01.png", left: 46, top: 48, dur: 6.0, delay: 0.0 },
  { file: "logo-02.png", left: 36, top: 60, dur: 7.2, delay: 1.8 },
  { file: "logo-03.png", left: 26, top: 48, dur: 5.4, delay: 3.1 },
  { file: "logo-04.png", left: 36, top: 36, dur: 8.0, delay: 0.6 },

  // ── Ring 2 ──────────────────────────────────────────────
  { file: "logo-05.png", left: 58, top: 48, dur: 6.8, delay: 2.2 },
  { file: "logo-06.png", left: 50, top: 68, dur: 5.6, delay: 0.9 },
  { file: "logo-07.png", left: 31, top: 73, dur: 7.4, delay: 2.7 },
  { file: "logo-08.png", left: 16, top: 59, dur: 6.2, delay: 1.4 },
  { file: "logo-09.png", left: 16, top: 37, dur: 8.2, delay: 3.4 },
  { file: "logo-10.png", left: 31, top: 23, dur: 5.8, delay: 0.3 },
  { file: "logo-11.png", left: 50, top: 28, dur: 7.0, delay: 2.0 },

  // ── Ring 3 ──────────────────────────────────────────────
  { file: "logo-12.png", left: 70, top: 48, dur: 6.4, delay: 1.1 },
  { file: "logo-13.png", left: 62, top: 72, dur: 7.8, delay: 2.5 },
  { file: "logo-14.png", left: 42, top: 85, dur: 5.2, delay: 0.7 },
  { file: "logo-15.png", left: 19, top: 81, dur: 6.6, delay: 3.2 },
  { file: "logo-16.png", left:  4, top: 61, dur: 8.4, delay: 1.6 },
  { file: "logo-17.png", left:  4, top: 35, dur: 5.0, delay: 2.9 },
  { file: "logo-18.png", left: 19, top: 15, dur: 7.6, delay: 0.4 },
  { file: "logo-19.png", left: 42, top: 11, dur: 6.0, delay: 1.9 },
  { file: "logo-20.png", left: 62, top: 24, dur: 8.0, delay: 3.6 },

  // ── Slots 21-23 ─────────────────────────────────────────
  { file: "logo-21.png", left: 70, top: 30, dur: 6.8, delay: 0.8 },
  { file: "logo-22.png", left: 70, top: 65, dur: 5.6, delay: 2.3 },
  { file: "logo-23.png", left: 36, top: 95, dur: 7.2, delay: 1.2 },
];

export default function LogoCloud() {
  return (
    <div className="logo-cloud">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={`${base}logos/${logo.file}`}
          className="logo-cloud-item"
          alt=""
          style={{
            left: `${logo.left}%`,
            top: `${logo.top}%`,
            width: `${CARD_W}px`,
            height: `${CARD_H}px`,
            animationDuration: `${logo.dur}s`,
            animationDelay: `${logo.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
