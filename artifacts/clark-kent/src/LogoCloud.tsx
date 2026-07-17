const base = import.meta.env.BASE_URL || "/";

interface LogoItem {
  file: string;
  left: number;   // % from left
  top: number;    // % from top
  width: number;  // px
  height: number; // px  (set so object-fit:cover crops whitespace to card ratio)
  dur: number;    // float animation duration (s)
  delay: number;  // animation delay (s)
}

// height is set to card's native ~10:7 ratio so object-fit:cover crops whitespace
const logos: LogoItem[] = [
  { file: "logo-01.png", left: 2,  top: 3,  width: 112, height: 78,  dur: 6.0, delay: 0.0 },
  { file: "logo-02.svg", left: 27, top: 1,  width: 130, height: 91,  dur: 7.0, delay: 1.1 },
  { file: "logo-03.svg", left: 54, top: 5,  width: 108, height: 76,  dur: 5.2, delay: 2.3 },
  { file: "logo-04.svg", left: 76, top: 2,  width: 120, height: 84,  dur: 8.0, delay: 0.5 },
  { file: "logo-05.svg", left: 8,  top: 23, width: 126, height: 88,  dur: 6.5, delay: 1.7 },
  { file: "logo-06.svg", left: 31, top: 21, width: 110, height: 77,  dur: 7.5, delay: 2.8 },
  { file: "logo-07.svg", left: 57, top: 24, width: 118, height: 83,  dur: 5.8, delay: 0.9 },
  { file: "logo-08.svg", left: 75, top: 20, width: 132, height: 92,  dur: 6.2, delay: 3.1 },
  { file: "logo-09.svg", left: 1,  top: 43, width: 116, height: 81,  dur: 7.0, delay: 0.4 },
  { file: "logo-10.svg", left: 27, top: 42, width: 122, height: 85,  dur: 5.0, delay: 2.0 },
  { file: "logo-11.svg", left: 53, top: 45, width: 112, height: 78,  dur: 8.2, delay: 1.3 },
  { file: "logo-12.svg", left: 76, top: 41, width: 126, height: 88,  dur: 6.8, delay: 0.7 },
  { file: "logo-13.svg", left: 5,  top: 63, width: 120, height: 84,  dur: 5.5, delay: 1.9 },
  { file: "logo-14.svg", left: 29, top: 62, width: 116, height: 81,  dur: 7.2, delay: 2.6 },
  { file: "logo-15.svg", left: 56, top: 65, width: 130, height: 91,  dur: 6.0, delay: 0.2 },
  { file: "logo-16.svg", left: 75, top: 61, width: 110, height: 77,  dur: 7.8, delay: 1.6 },
  { file: "logo-17.svg", left: 10, top: 82, width: 112, height: 78,  dur: 8.0, delay: 0.6 },
  { file: "logo-18.svg", left: 33, top: 80, width: 126, height: 88,  dur: 5.0, delay: 2.4 },
  { file: "logo-19.svg", left: 57, top: 83, width: 118, height: 83,  dur: 6.6, delay: 1.0 },
  { file: "logo-20.svg", left: 77, top: 81, width: 122, height: 85,  dur: 7.0, delay: 3.3 },
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
            width: `${logo.width}px`,
            height: `${logo.height}px`,
            animationDuration: `${logo.dur}s`,
            animationDelay: `${logo.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
