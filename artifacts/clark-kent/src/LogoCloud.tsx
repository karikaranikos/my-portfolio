const base = import.meta.env.BASE_URL || "/";

// All cards display at 135×95px (540×380 @2x source, 10:7 ratio)
const CARD_W = 135;
const CARD_H = 95;

interface LogoItem {
  file: string;
  left: number;  // % from left
  top: number;   // % from top
  dur: number;   // float duration (s)
  delay: number; // animation delay (s)
}

const logos: LogoItem[] = [
  { file: "logo-01.png", left: 2,  top: 3,  dur: 6.0, delay: 0.0 },
  { file: "logo-02.png", left: 27, top: 1,  dur: 7.0, delay: 1.1 },
  { file: "logo-03.png", left: 56, top: 5,  dur: 5.2, delay: 2.3 },
  { file: "logo-04.png", left: 2,  top: 22, dur: 8.0, delay: 0.5 },
  { file: "logo-05.png", left: 27, top: 21, dur: 6.5, delay: 1.7 },
  { file: "logo-06.png", left: 56, top: 23, dur: 7.5, delay: 2.8 },
  { file: "logo-07.png", left: 2,  top: 41, dur: 5.8, delay: 0.9 },
  { file: "logo-08.png", left: 27, top: 40, dur: 6.2, delay: 3.1 },
  { file: "logo-09.png", left: 56, top: 42, dur: 7.0, delay: 0.4 },
  { file: "logo-10.png", left: 2,  top: 60, dur: 5.0, delay: 2.0 },
  { file: "logo-11.png", left: 27, top: 59, dur: 8.2, delay: 1.3 },
  { file: "logo-12.png", left: 56, top: 61, dur: 6.8, delay: 0.7 },
  { file: "logo-13.png", left: 2,  top: 79, dur: 5.5, delay: 1.9 },
  { file: "logo-14.png", left: 27, top: 78, dur: 7.2, delay: 2.6 },
  { file: "logo-15.png", left: 56, top: 80, dur: 6.0, delay: 0.2 },
  { file: "logo-16.png", left: 2,  top: 98, dur: 7.8, delay: 1.6 },
  { file: "logo-17.png", left: 27, top: 97, dur: 8.0, delay: 0.6 },
  { file: "logo-18.png", left: 56, top: 99, dur: 5.0, delay: 2.4 },
  { file: "logo-19.png", left: 2,  top: 117,dur: 6.6, delay: 1.0 },
  { file: "logo-20.png", left: 27, top: 116,dur: 7.0, delay: 3.3 },
  { file: "logo-21.png", left: 56, top: 118,dur: 6.3, delay: 1.8 },
  { file: "logo-22.png", left: 2,  top: 136,dur: 5.7, delay: 2.1 },
  { file: "logo-23.png", left: 27, top: 135,dur: 7.4, delay: 0.8 },
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
