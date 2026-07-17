export default function Section4() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        {/* Left — profile picture */}
        <div className="about-image-col">
          <div className="about-image-placeholder">
            <span className="about-image-label">Profile Photo</span>
          </div>
        </div>

        {/* Right — text */}
        <div className="about-text-col">
          <h2 className="about-heading">
            BUILDING BRANDS<br />THAT MEAN<br />SOMETHING.
          </h2>
          <p className="about-body">
            I'm a creative strategist working at the intersection of brand, design, and growth. I help ambitious companies find their voice, sharpen their story, and show up in the world with clarity and conviction.
          </p>
          <p className="about-body">
            With a background spanning art direction, digital product, and AI-assisted creative — I bring a rare combination of strategic thinking and hands-on execution to every engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
