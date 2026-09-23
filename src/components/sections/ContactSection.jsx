import { MapPin, Phone } from "lucide-react";
import { Eyebrow, Reveal, TextLink, storage } from "./shared";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        backgroundImage: `url(${storage.hero})`,
      }}
    >
      <div className="contact-overlay" />

      <div className="container contact-content">
        <Reveal>
          <Eyebrow light>Get In Touch</Eyebrow>

          <h2>
            Your cargo.
            <br />
            <i>Our responsibility.</i>
          </h2>

          <p style={{ maxWidth: "580px", marginBottom: "22px" }}>
            Let's architect your global supply chain. Connect directly with our
            Licensed Customs Brokers and freight specialists at Willingdon
            Island, Cochin.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "32px",
              fontSize: "14px",
              color: "rgba(255,255,255,0.88)",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
            >
              <MapPin
                size={18}
                style={{ color: "var(--sky)", flexShrink: 0, marginTop: "2px" }}
              />
              <span>
                Unit no 2 & 3, Ex electrical Building, Indira Gandhi Road,
                Willingdon Island, Cochin 682003, Kerala, India
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:+919995406130"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "white",
                }}
              >
                <Phone size={16} style={{ color: "var(--sky)" }} /> +91
                9995406130
              </a>
              <span style={{ opacity: 0.4 }}>|</span>
              <a
                href="tel:+919447736001"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "white",
                }}
              >
                <Phone size={16} style={{ color: "var(--sky)" }} /> +91
                9447736001
              </a>
            </div>
          </div>

          <div className="contact-links">
            <TextLink light href="tel:+919995406130">
              Call +91 9995406130
            </TextLink>

            <TextLink light href="/network">
              View Strategic Gateways
            </TextLink>
          </div>
        </Reveal>
      </div>

      <div className="contact-bottom">
        <span>WILLINGDON ISLAND, COCHIN 682003</span>
        <span>+91 9995406130 • +91 9447736001</span>
      </div>
    </section>
  );
}
