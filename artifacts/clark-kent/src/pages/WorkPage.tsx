import { Link } from "wouter";

const projects = [
  { id: 1,  img: "W1.png",  title: "Hampton",            category: "" },
  { id: 2,  img: "W2.png",  title: "Malbon",             category: "" },
  { id: 3,  img: "W3.png",  title: "Malbon Buckets Club",category: "" },
  { id: 4,  img: "W4.png",  title: "AG1",                category: "" },
  { id: 5,  img: "W5.png",  title: "Aje.",               category: "" },
  { id: 6,  img: "W6.png",  title: "Real American Beer", category: "" },
  { id: 7,  img: "W7.png",  title: "TYR",                category: "" },
  { id: 8,  img: "W8.png",  title: "Nike Swim",          category: "" },
  { id: 9,  img: "W9.png",  title: "High Pour",          category: "" },
  { id: 10, img: "W10.png", title: "Lady Bird Soda",     category: "" },
  { id: 11, img: "W11.png", title: "CRAFTD",             category: "" },
  { id: 12, img: "W12.png", title: "APL",                category: "" },
];

const base = import.meta.env.BASE_URL || "/";

export default function WorkPage() {
  return (
    <div className="work-page">
      {/* Nav */}
      <header className="work-page-header">
        <Link href="/" className="work-page-back">← Back</Link>
        <nav className="work-page-nav">
          <Link href="/services" className="work-page-nav-link">Services</Link>
          <a href="/#about" className="work-page-nav-link">About</a>
          <a href="/#contact" className="work-page-nav-link">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <div className="work-page-hero">
        <h1 className="work-page-title">WORK</h1>
      </div>

      {/* Grid */}
      <div className="work-page-grid">
        {projects.map((project) => (
          <div key={project.id} className="work-page-item">
            <div className="work-page-item-image">
              <img
                src={`${base}${project.img}`}
                alt={project.title}
              />
            </div>
            <div className="work-page-item-info">
              <span className="work-page-item-category">{project.category}</span>
              <h3 className="work-page-item-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
