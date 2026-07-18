import { Link } from "wouter";
import { projects } from "../data/projects";

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
          <Link key={project.id} href={`/work/${project.slug}`} className="work-page-item">
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
          </Link>
        ))}
      </div>
    </div>
  );
}
