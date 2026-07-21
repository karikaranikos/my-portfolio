import { Link, useParams } from "wouter";
import { projects, MediaSlot, SideSection } from "../data/projects";

const base = import.meta.env.BASE_URL || "/";

function renderSlot(slot: MediaSlot | null, i: number, base: string) {
  const rowSpan = slot?.rowSpan ?? 1;
  const style: React.CSSProperties = rowSpan > 1 ? { gridRow: `span ${rowSpan}` } : {};

  if (slot?.images && slot.images.length > 0) {
    return (
      <div key={i} className="work-detail-media-slot" style={style}>
        {slot.images.map((src, j) => (
          <img key={j} src={`${base}${src}`} alt="" className="work-detail-media-img" />
        ))}
      </div>
    );
  }
  if (slot?.video) {
    const ar = slot.aspectRatio ?? "9/16";
    return (
      <div key={i} className="work-detail-media-slot" style={{ ...style, aspectRatio: ar }}>
        <video
          src={`${base}${slot.video}`}
          className="work-detail-media-video"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    );
  }
  const ar = slot?.aspectRatio ?? "4/5";
  return (
    <div
      key={i}
      className="work-detail-media-placeholder"
      style={{ ...style, aspectRatio: ar }}
    />
  );
}

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

        {/* Full-width horizontal header video */}
        {project.headerVideo && (
          <div className="work-detail-header-video">
            <video
              src={`${base}${project.headerVideo}`}
              className="work-detail-header-video-el"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        )}

        {/* Media grid (flat) */}
        {project.mediaGrid && (
          <div className="work-detail-media-grid" style={project.mediaGridColumns ? { gridTemplateColumns: `repeat(${project.mediaGridColumns}, 1fr)` } : undefined}>
            {(project.mediaGrid ?? Array(6).fill(null)).map((slot, i) => renderSlot(slot, i, base))}
          </div>
        )}

        {/* Media rows (per-row column counts) */}
        {project.mediaRows && project.mediaRows.map((row, ri) => (
          <div key={ri} style={{ marginTop: ri > 0 ? 16 : 0 }}>
            {row.label && (
              <p className="work-detail-section-label" style={{ marginBottom: 12 }}>{row.label}</p>
            )}
            {row.layout === "tall-left" ? (
              <div style={{ maxWidth: "72%", margin: "0 auto" }}>
                {(() => {
                  const hasRightCol = row.slots.length > 5;
                  const cols = hasRightCol ? "1fr 0.711fr 0.711fr 0.85fr" : "1fr 0.711fr 0.711fr";
                  return (
                    <div style={{ display: "grid", gridTemplateColumns: cols, gridTemplateRows: "auto auto", gap: 16, alignItems: "center" }}>
                      {/* First slot: 9:16, spans both rows */}
                      <div style={{ gridRow: "1 / 3", alignSelf: "center" }}>
                        {row.slots[0]?.video && (
                          <div style={{ aspectRatio: row.slots[0].aspectRatio ?? "9/16", overflow: "hidden" }}>
                            <video
                              src={`${base}${row.slots[0].video}`}
                              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                              controls
                              playsInline
                              preload="metadata"
                            />
                          </div>
                        )}
                      </div>
                      {/* Middle 2×2 */}
                      {row.slots.slice(1, 5).map((slot, i) => renderSlot(slot, i, base))}
                      {/* Right column: stacked photos, each stretches to fill its row */}
                      {hasRightCol && row.slots.slice(5).map((slot, i) => (
                        <div key={`rc-${i}`} style={{ alignSelf: "stretch", overflow: "hidden" }}>
                          {slot?.images?.map((src, j) => (
                            <img key={j} src={`${base}${src}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div
                className="work-detail-media-grid"
                style={{ gridTemplateColumns: `repeat(${row.columns}, 1fr)` }}
              >
                {row.slots.map((slot, i) => renderSlot(slot, i, base))}
              </div>
            )}
          </div>
        ))}

        {/* Side sections: text left, videos right */}
        {project.sideSections && project.sideSections.map((section: SideSection, si: number) => (
          <div key={si} className="work-detail-side-section">
            <div className="work-detail-side-left">
              <p className="work-detail-side-label">{section.label}</p>
              <p className="work-detail-body">{section.text}</p>
            </div>
            <div className="work-detail-side-right">
              <div
                className="work-detail-media-grid"
                style={{ gridTemplateColumns: `repeat(${section.columns ?? 2}, 1fr)` }}
              >
                {section.slots.map((slot, i) => renderSlot(slot, i, base))}
              </div>
            </div>
          </div>
        ))}

        {/* Comment screenshots — side by side, centered */}
        {project.commentImages && project.commentImages.length > 0 && (
          <div className="work-detail-comments-row">
            {project.commentImages.map((src, i) => (
              <img key={i} src={`${base}${src}`} alt="" className="work-detail-comment-img" />
            ))}
          </div>
        )}
      </div>

      {/* Prev / Next navigation */}
      <div className="work-detail-nav">
        <div className="work-detail-nav-item">
          {prev ? (
            <Link href={`/work/${prev.slug}`} className="work-detail-nav-link work-detail-nav-prev">
              <span className="work-detail-nav-dir">← Previous</span>
              <span className="work-detail-nav-name">{prev.title}</span>
            </Link>
          ) : <div />}
        </div>
        <div className="work-detail-nav-divider" />
        <div className="work-detail-nav-item work-detail-nav-item--right">
          {next ? (
            <Link href={`/work/${next.slug}`} className="work-detail-nav-link work-detail-nav-next">
              <span className="work-detail-nav-dir">Next →</span>
              <span className="work-detail-nav-name">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
