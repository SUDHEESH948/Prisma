import { Eyebrow, Reveal, TextLink, storage } from "./shared";
import logo from "@/assets/image.png";

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-light">
      <div className="container about-grid">
        <Reveal className="about-image">
          <img src={storage.port} alt="Container terminal viewed from above" />
        </Reveal>

        <Reveal className="about-copy">
          <Eyebrow>Company Background</Eyebrow>

          <h2>
            Architecting
            <br />
            <i>global trust.</i>
          </h2>

          <p>
            Founded in 2020 and operating from Willingdon Island, Cochin, Prisma
            Shipping and Logistics combines licensed customs brokerage
            authority, deep maritime transshipment expertise, and multi-modal
            freight networks to empower businesses to expand across borders with
            total peace of mind.
          </p>

          <TextLink href="/contact">Start a conversation</TextLink>

          <div
            className="about-signature"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginTop: "48px",
            }}
          >
            <img
              src={logo}
              alt="Prisma Official Logo"
              style={{
                width: "56px",
                height: "56px",
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: "10px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
              }}
            />

            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "var(--deep)",
                  letterSpacing: "0.04em",
                }}
              >
                PRISMA SHIPPING & LOGISTICS
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--ink-muted)",
                  fontFamily: "var(--font-mono)",
                  marginTop: "2px",
                }}
              >
                Licensed Customs Broker & Logistics • Cochin
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
