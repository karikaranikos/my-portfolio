import { Link } from "wouter";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "Positioning, messaging architecture, and brand identity systems built for growth-stage companies ready to scale.",
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "Art direction, visual storytelling, and campaign concepting that makes your brand impossible to ignore.",
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Scalable, component-driven design languages — from typography and color to full UI libraries your team can own.",
  },
  {
    number: "04",
    title: "AI Integration",
    description:
      "Practical AI workflows woven into your creative and marketing process — faster output, higher signal.",
  },
  {
    number: "05",
    title: "Web & Digital",
    description:
      "High-performance websites, landing pages, and digital experiences that convert and feel worth sharing.",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Nav */}
      <header className="work-page-header">
        <Link href="/" className="work-page-back">← Back</Link>
        <nav className="work-page-nav">
          <Link href="/work" className="work-page-nav-link">Work</Link>
          <a href="#" className="work-page-nav-link">About</a>
          <Link href="/#contact" className="work-page-nav-link">Contact</Link>
        </nav>
      </header>

      {/* Hero */}
      <div className="work-page-hero">
        <h1 className="work-page-title">SERVICES</h1>
      </div>

      {/* List */}
      <div className="services-list">
        {services.map((service, i) => (
          <div key={i} className="services-item">
            <span className="services-item-number">{service.number}</span>
            <div className="services-item-body">
              <h2 className="services-item-title">{service.title}</h2>
              <p className="services-item-description">{service.description}</p>
            </div>
            <span className="services-item-arrow">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
