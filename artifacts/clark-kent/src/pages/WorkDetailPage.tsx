import { Link, useParams } from "wouter";
import { projects } from "../data/projects";

const base = import.meta.env.BASE_URL || "/";

export default function WorkDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  if (!project) {
    return (
      <div className="work-detail-page">
        <header className="work-page-header">
          <Link href="/work" className="work-page-back">← Work</Link>
        </header>
        <div style={{ padding: "120px 48px" }}>
          <p>Project not found.</p>
        </div>
      </div>
    );
  }

  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <div className="work-detail-page">
      {/* Nav */}
      <header className="work-page-header">
        <Link href="/work" className="work-page-back">← Work</Link>
        <nav className="work-page-nav">
          <Link href="/services" className="work-page-nav-link">Services</Link>
          <a href="/#about" className="work-page-nav-link">About</a>
          <a href="/#contact" className="work-page-nav-link">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <div className="work-detail-hero">
        <h1 className="work-detail-title">{project.title.toUpperCase()}</h1>
      </div>

      {/* Cover image */}
      <div className="work-detail-cover">
        <img src={`${base}${project.cover ?? project.img}`} alt={project.title} />
      </div>

      {/* Content — placeholder, ready to fill in */}
      <div className="work-detail-content">
        <div className="work-detail-intro">
          <div className="work-detail-intro-left">
            <h2 className="work-detail-section-label">Overview</h2>
          </div>
          <div className="work-detail-intro-right">
            {project.overview ? (
              project.overview.split("\n\n").map((para, i) => (
                <p key={i} className="work-detail-body" dangerouslySetInnerHTML={{ __html: para }} />
              ))
            ) : (
              <p className="work-detail-body">
                This is where you'll describe what you did for {project.title} — the strategy, the story, and the impact. Add your copy here whenever you're ready.
              </p>
            )}
          </div>
        </div>

        {/* Media grid — placeholder slots */}
        <div className="work-detail-media-grid">
          <div className="work-detail-media-placeholder" />
          <div className="work-detail-media-placeholder" />
          <div className="work-detail-media-placeholder" />
          <div className="work-detail-media-placeholder" />
          <div className="work-detail-media-placeholder" />
          <div className="work-detail-media-placeholder" />
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="work-detail-nav">
        <div className="work-detail-nav-item">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="work-detail-nav-link work-detail-nav-prev">
              <span className="work-detail-nav-dir">← Previous</span>
              <span className="work-detail-nav-name">{prev.title}</span>
              <img src={`${base}${prev.img}`} alt={prev.title} className="work-detail-nav-thumb" />
            </Link>
          ) : <div />}
        </div>
        <div className="work-detail-nav-divider" />
        <div className="work-detail-nav-item work-detail-nav-item--right">
          {next ? (
            <Link href={`/work/${next.slug}`} className="work-detail-nav-link work-detail-nav-next">
              <span className="work-detail-nav-dir">Next →</span>
              <span className="work-detail-nav-name">{next.title}</span>
              <img src={`${base}${next.img}`} alt={next.title} className="work-detail-nav-thumb" />
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
