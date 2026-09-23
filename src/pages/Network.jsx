import { Link } from "react-router-dom";
import {
  Anchor,
  Navigation,
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Eyebrow, Reveal } from "@/components/sections/shared";
import NetworkSection from "@/components/sections/NetworkSection";

const gateways = [
  {
    name: "Cochin Gateway Hub",
    tag: "Gateway Roots • Transshipment",
    location: "Willingdon Island & Vallarpadam ICTT",
    description:
      "Capitalizing on India’s historic maritime gateway and the International Container Transshipment Terminal (ICTT). Full-service operational headquarters providing immediate customs clearance, coastal feeding, and ocean carrier access.",
    highlights: [
      "Immediate proximity to international East-West sea lanes",
      "Full on-site Licensed Customs Brokerage presence",
      "Specialized reefer and general container handling",
      "Direct coastal feeder connectivity to West & East Coast",
    ],
  },
  {
    name: "Vizhinjam Deep-Water Port",
    tag: "Premier Mega Transshipment Hub",
    location: "South Kerala • Deep Draft Berth",
    description:
      "Positioned at India’s flagship deep-water mega transshipment port. Accommodates the world’s largest ultra-large container vessels (ULCVs) with zero draft restrictions and direct international trunk line connections.",
    highlights: [
      "Natural 20-meter deep-water basin draft",
      "Minimal sea-lane diversion of just 10 nautical miles",
      "Seamless mainline-to-feeder transshipment agility",
      "Strategic transshipment bypass for Colombo/Singapore",
    ],
  },
  {
    name: "Chennai Industrial Corridor",
    tag: "Southern Manufacturing Gateway",
    location: "Tamil Nadu Manufacturing Hubs",
    description:
      "Driving efficient logistics management and rapid export clearance across the highly industrialized Southern manufacturing corridor, supporting automotive, engineering, and tech industries.",
    highlights: [
      "Direct integration with Sriperumbudur & Oragadam auto hubs",
      "Multi-modal ICD road and rail connectivity",
      "Fast-track documentation for high-velocity supply chains",
      "Regular direct sailings to Far East and European hubs",
    ],
  },
];

export default function Network() {
  return (
    <div className="network-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-grid" />
        <div className="container">
          <Reveal>
            <Eyebrow light>Strategic Maritime Footprint</Eyebrow>
            <h1>
              At the Epicenter of
              <br />
              <i>Indian Maritime Commerce.</i>
            </h1>
            <p className="page-lead">
              Prisma operates at the absolute epicenter of Indian maritime
              commerce. We maintain a full-service operational presence at
              India's most critical deep-water ports and premier international
              transshipment gateways.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ width: "auto" }}
              >
                Connect With Our Port Team <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gateway Spotlights */}
      <section className="section-dark" style={{ padding: "100px 0 60px" }}>
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <Eyebrow light>Premier Maritime Gateways</Eyebrow>
            </Reveal>
            <Reveal className="heading-side-note">
              <span>Cochin • Vizhinjam • Chennai</span>
            </Reveal>
          </div>

          <Reveal>
            <h2
              className="section-title light-title"
              style={{ marginBottom: "20px" }}
            >
              Strategic Roots,
              <br />
              <i>Global Reach.</i>
            </h2>
            <p
              style={{
                maxWidth: "620px",
                color: "rgba(255,255,255,0.7)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Our operational footprint directly anchors the deepest draft ports
              and the most active manufacturing clusters in South India.
            </p>
          </Reveal>

          <div className="gateway-grid">
            {gateways.map((gw, idx) => (
              <Reveal key={gw.name} delay={idx * 0.1} className="gateway-card">
                <span className="gateway-badge">{gw.tag}</span>
                <h3>{gw.name}</h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--sky)",
                    fontSize: "12px",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "16px",
                  }}
                >
                  <MapPin size={14} /> {gw.location}
                </div>
                <p>{gw.description}</p>
                <div
                  style={{
                    borderTop: "1px solid var(--line-light)",
                    paddingTop: "18px",
                    marginTop: "auto",
                  }}
                >
                  {gw.highlights.map((hl, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "12px",
                        color: "rgba(255,255,255,0.85)",
                        marginBottom: "10px",
                        lineHeight: "1.5",
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        style={{
                          color: "var(--gold)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SVG Map and Network Section */}
      <NetworkSection />

      {/* Inland Connectivity Section */}
      <section className="section-light" style={{ padding: "90px 0" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          <Reveal>
            <Eyebrow>Inland Connectivity</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                margin: "20px 0",
                lineHeight: "1",
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
              }}
            >
              Linking Factory Floors
              <br />
              <i>Directly to Quayside.</i>
            </h2>
            <p
              style={{
                color: "var(--ink-muted)",
                fontSize: "15px",
                lineHeight: "1.65",
                marginBottom: "24px",
              }}
            >
              A robust port network is only as effective as the domestic supply
              chain behind it. Prisma provides dedicated road trailers,
              container haulage, and rail cargo solutions connecting industrial
              estates across Kerala, Tamil Nadu, and Karnataka straight to the
              vessel hatch.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div
                style={{
                  padding: "18px",
                  background: "white",
                  border: "1px solid var(--line-dark)",
                  borderRadius: "4px",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontSize: "24px",
                    color: "var(--deep)",
                    marginBottom: "6px",
                  }}
                >
                  100%
                </strong>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Direct Port Access
                </span>
              </div>
              <div
                style={{
                  padding: "18px",
                  background: "white",
                  border: "1px solid var(--line-dark)",
                  borderRadius: "4px",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontSize: "24px",
                    color: "var(--deep)",
                    marginBottom: "6px",
                  }}
                >
                  24/7
                </strong>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Live Haulage Tracking
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal
            style={{
              background: "var(--deep)",
              color: "white",
              padding: "40px",
              borderRadius: "6px",
              border: "1px solid var(--line-light)",
            }}
          >
            <Anchor
              size={36}
              style={{ color: "var(--sky)", marginBottom: "16px" }}
            />
            <h3
              style={{
                fontSize: "22px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Need Transshipment or Inland Logistics?
            </h3>
            <p
              style={{
                fontSize: "14px",
                opacity: 0.8,
                lineHeight: "1.6",
                marginBottom: "24px",
              }}
            >
              Speak with our Cochin headquarters to coordinate vessel berthing,
              bonded transfers, or multi-modal inland container transport.
            </p>
            <Link
              to="/contact"
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Contact Operations Desk
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
