import { Link } from "wouter";

const services = [
  {
    number: "01",
    title: "Fractional Retainers",
    description:
      "For teams that want an embedded content strategist without a full time hire. I plug into your existing team on an ongoing basis, shaping the content strategy behind everything you ship, month over month.",
  },
  {
    number: "02",
    title: "Campaign Launch Support",
    description:
      "For brands with a specific moment on the calendar. I build the strategy from concept through execution planning, including messaging, creative direction, and the roadmap your production team runs with, so the launch has a clear point of view from day one.",
  },
  {
    number: "03",
    title: "Kickstart your Brand",
    description:
      "For early-stage brands who know they need a social strategy but don't know where to start. I come in with an intensive that gives you brand positioning and a 90-day roadmap built specifically for social, so you leave with a clear blueprint instead of a blank page.",
  },
  {
    number: "04",
    title: "1:1 Consulting",
    description:
      "For teams working through a specific challenge, like a repositioning question, a campaign concept that isn't landing, or a strategy that needs a second set of eyes. We work together in focused sessions to get you unstuck and moving with a clear plan.",
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
          <a href="/#about" className="work-page-nav-link">About</a>
          <a href="/#contact" className="work-page-nav-link">Contact</a>
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
