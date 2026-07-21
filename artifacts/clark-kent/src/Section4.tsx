export default function Section4() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left — profile picture */}
        <div className="about-image-col">
          <img src="/kari-profile.png" alt="Kari Karanikos" className="about-image" />
        </div>

        {/* Right — text */}
        <div className="about-text-col">
          <h2 className="about-heading">ABOUT</h2>
          <p className="about-body">
            I'm Kari, a content and creative strategist. I partner with brands to build the full arc of content, from concept and creative direction through execution, with past clients including Nike, Rothy's, AG1, and Malbon.
          </p>
          <p className="about-body">
            Based in New York City, I work with brands in a freelance or fractional capacity, and frequently partner with teams in Los Angeles and Austin.
          </p>
          <p className="about-body">
            I do my best work with growth-stage companies that have the budget to support large-scale content initiatives, whether that's an in-house production team ready to execute or the resources to bring in the right creative partners. I build the strategy, and together we bring it to life.
          </p>
        </div>
      </div>
    </section>
  );
}
