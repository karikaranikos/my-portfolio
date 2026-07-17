import { Link } from "wouter";

const projects = [
  { id: 1, img: "W1.png", title: "Porcelain Crane", category: "Design" },
  { id: 2, img: "W2.png", title: "Flamingo Dreams", category: "Direction" },
  { id: 3, img: "W3.png", title: "Red Equestrian", category: "AI" },
  { id: 4, img: "W4.png", title: "Blue Tulip", category: "Design" },
  { id: 5, img: "W5.png", title: "Opera Mask", category: "Direction" },
  { id: 6, img: "W6.png", title: "Blue Bloom", category: "AI" },
  { id: 7, img: "W7.png", title: "First Contact", category: "Code" },
  { id: 8, img: "W8.png", title: "White Yak", category: "Design" },
  { id: 9, img: "W9.png", title: "Heron Girl", category: "Direction" },
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
