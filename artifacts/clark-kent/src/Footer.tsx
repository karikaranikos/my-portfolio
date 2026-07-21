import { useState } from "react";
import LogoCloud from "./LogoCloud";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string; prefill?: { name?: string; email?: string } }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/karikaranikos-/interest-call";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        prefill: { name, email, customAnswers: { a1: message } },
      });
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-inner">

        <div className="footer-top">

          {/* Left — heading + form */}
          <div className="footer-top-left">
            <h2 className="footer-heading">
              LET'S WORK<br />TOGETHER.
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label className="contact-form-label">Name</label>
                  <input
                    className="contact-form-input"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="contact-form-field">
                  <label className="contact-form-label">Email</label>
                  <input
                    className="contact-form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label">Message</label>
                <textarea
                  className="contact-form-input contact-form-textarea"
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>
              <button type="submit" className="contact-form-submit">
                Book a Call
              </button>
            </form>
          </div>

          {/* Right — floating logo cloud */}
          <div className="footer-top-right">
            <LogoCloud />
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© Kari Karanikos 2026</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/zakaria-karanikos/" target="_blank" rel="noopener noreferrer" className="footer-social-link">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
