import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Anchor,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Layers,
  Truck,
  Radio,
} from "lucide-react";
import { Eyebrow, Reveal } from "@/components/sections/shared";
import NetworkSection from "@/components/sections/NetworkSection";

const gateways = [
  {
    id: "cochin",
    name: "Cochin Gateway Hub",
    pillLabel: "ICTT Cochin",
    tag: "Gateway Roots • Transshipment",
    location: "Willingdon Island & Vallarpadam ICTT",
    description:
      "Capitalizing on India’s historic maritime gateway and the International Container Transshipment Terminal (ICTT). Full-service operational headquarters providing immediate customs clearance, coastal feeding, and ocean carrier access.",
    badges: [
      "Direct East-West Sea Lane (11 NM)",
      "14.5m Draft Berths",
      "On-Site Customs Brokerage",
      "Dedicated Reefer Staging",
    ],
    specs: [
      { label: "Terminal Operator", value: "DP World Cochin (ICTT)" },
      { label: "Channel Draft", value: "14.5 meters alongside" },
      { label: "Quay Length", value: "600+ meters continuous berth" },
      {
        label: "Key Advantage",
        value: "Direct ICEGATE Customs Assessment Unit",
      },
    ],
    highlights: [
      "Immediate proximity to international East-West sea lanes",
      "Full on-site Licensed Customs Brokerage presence",
      "Specialized reefer and general container handling",
      "Direct coastal feeder connectivity to West & East Coast",
    ],
  },
  {
    id: "vizhinjam",
    name: "Vizhinjam Deep-Water Port",
    pillLabel: "Vizhinjam Hub",
    tag: "Premier Mega Transshipment Hub",
    location: "South Kerala • Deep Draft Berth",
    description:
      "Positioned at India’s flagship deep-water mega transshipment port. Accommodates the world’s largest ultra-large container vessels (ULCVs) with zero draft restrictions and direct international trunk line connections.",
    badges: [
      "Natural 20m Deep Draught",
      "Megamax ULCV Berthing",
      "10 NM Sea-Lane Diversion",
      "Fast Transshipment Agility",
    ],
    specs: [
      { label: "Port Type", value: "Natural Deep-Water Transshipment" },
      { label: "Natural Draft", value: "20.0 meters (No dredging required)" },
      { label: "Vessel Capability", value: "Megamax / 24,000+ TEU ULCVs" },
      {
        label: "Trunk Feeder Sync",
        value: "Direct transshipment bypass for Colombo/Singapore",
      },
    ],
    highlights: [
      "Natural 20-meter deep-water basin draft",
      "Minimal sea-lane diversion of just 10 nautical miles",
      "Seamless mainline-to-feeder transshipment agility",
      "Strategic transshipment bypass for Colombo/Singapore",
    ],
  },
  {
    id: "chennai",
    name: "Chennai Industrial Corridor",
    pillLabel: "Chennai Corridor",
    tag: "Southern Manufacturing Gateway",
    location: "Tamil Nadu Manufacturing Hubs",
    description:
      "Driving efficient logistics management and rapid export clearance across the highly industrialized Southern manufacturing corridor, supporting automotive, engineering, and tech industries.",
    badges: [
      "Automotive Export Priority",
      "Direct ICD Intermodal Rail",
      "Kamarajar & Chennai Port Access",
      "High-Velocity Document Turnaround",
    ],
    specs: [
      {
        label: "Primary Terminals",
        value: "Chennai Port Trust & Ennore (Kamarajar)",
      },
      {
        label: "Connectivity",
        value: "Direct Rail Link to Whitefield / Tughlakabad ICDs",
      },
      {
        label: "Industrial Cluster",
        value: "Sriperumbudur & Oragadam Automotive Hubs",
      },
      {
        label: "Carrier Lineups",
        value: "Bi-weekly express services to Singapore & Busan",
      },
    ],
    highlights: [
      "Direct integration with Sriperumbudur & Oragadam auto hubs",
      "Multi-modal ICD road and rail connectivity",
      "Fast-track documentation for high-velocity supply chains",
      "Regular direct sailings to Far East and European hubs",
    ],
  },
];

export default function Network() {
  const [activeTab, setActiveTab] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);

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

      {/* Gateway Spotlights with Interactive Hub Tabs */}
      <section
        className="section-dark"
        style={{ padding: "clamp(60px, 8vw, 100px) 0 60px" }}
      >
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
                color: "rgba(255,255,255,0.72)",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "32px",
              }}
            >
              Our operational footprint directly anchors the deepest draft ports
              and the most active manufacturing clusters in South India. Select
              a gateway below to inspect capabilities.
            </p>
          </Reveal>

          {/* Hub Tab Pills */}
          <div
            className="gateway-tabs-container"
            role="tablist"
            aria-label="Maritime Gateways"
          >
            {gateways.map((gw, idx) => (
              <button
                key={gw.id}
                role="tab"
                aria-selected={activeTab === idx}
                className={`gateway-tab-pill ${activeTab === idx ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(idx);
                  setShowSpecs(false);
                }}
              >
                <Layers size={15} />
                <span>{gw.pillLabel}</span>
              </button>
            ))}
          </div>

          {/* Active Gateway Detailed View with Crossfade Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={gateways[activeTab].id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="gateway-detail-card"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <span
                    className="gateway-badge"
                    style={{ marginBottom: "8px", display: "inline-block" }}
                  >
                    {gateways[activeTab].tag}
                  </span>
                  <h3
                    style={{
                      fontSize: "clamp(22px, 3.2vw, 32px)",
                      textTransform: "uppercase",
                      color: "#ffffff",
                      margin: "6px 0 10px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {gateways[activeTab].name}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "var(--sky)",
                      fontSize: "13px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    <MapPin size={15} /> {gateways[activeTab].location}
                  </div>
                </div>
              </div>

              {/* Upfront High-Level Badges */}
              <div className="gateway-quick-badges">
                {gateways[activeTab].badges.map((badge, i) => (
                  <span key={i} className="gateway-badge-chip">
                    {badge}
                  </span>
                ))}
              </div>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "15px",
                  lineHeight: "1.65",
                  marginBottom: "24px",
                  maxWidth: "820px",
                }}
              >
                {gateways[activeTab].description}
              </p>

              {/* Staggered Bullet Reveal */}
              <div
                style={{
                  borderTop: "1px solid var(--line-light)",
                  paddingTop: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    color: "var(--sky)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "14px",
                  }}
                >
                  Core Strategic Capabilities:
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {gateways[activeTab].highlights.map((hl, i) => (
                    <motion.div
                      key={hl}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "13px",
                        color: "rgba(255, 255, 255, 0.9)",
                        lineHeight: "1.45",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.07)",
                        padding: "12px 14px",
                        borderRadius: "8px",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{
                          color: "var(--gold)",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      />
                      <span>{hl}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Expandable Port Specs Toggle */}
              <div>
                <button
                  type="button"
                  className="port-specs-toggle-btn"
                  onClick={() => setShowSpecs(!showSpecs)}
                >
                  <span>
                    {showSpecs
                      ? "Hide Technical Specifications"
                      : "View Port Specifications"}
                  </span>
                  {showSpecs ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {showSpecs && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginTop: "16px",
                      padding: "20px 22px",
                      background: "rgba(4, 20, 36, 0.8)",
                      border: "1px solid rgba(22, 169, 199, 0.25)",
                      borderRadius: "10px",
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "16px",
                    }}
                  >
                    {gateways[activeTab].specs.map((s, i) => (
                      <div key={i}>
                        <div
                          style={{
                            fontSize: "10px",
                            fontFamily: "var(--font-mono)",
                            color: "rgba(255, 255, 255, 0.55)",
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            marginBottom: "4px",
                          }}
                        >
                          {s.label}
                        </div>
                        <div
                          style={{
                            fontSize: "13px",
                            color: "#ffffff",
                            fontWeight: 500,
                            lineHeight: "1.4",
                          }}
                        >
                          {s.value}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SVG Map and Network Section */}
      <NetworkSection />

      {/* Inland Connectivity Section */}
      <section
        className="section-light"
        style={{ padding: "clamp(50px, 8vw, 90px) 0" }}
      >
        <div className="container responsive-two-col">
          <Reveal>
            <Eyebrow>Inland Connectivity</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(30px, 4.5vw, 54px)",
                margin: "20px 0",
                lineHeight: "1.06",
                textTransform: "uppercase",
                letterSpacing: "-0.04em",
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
                marginBottom: "28px",
              }}
            >
              A robust port network is only as effective as the domestic supply
              chain behind it. Prisma provides dedicated road trailers,
              container haulage, and rail cargo solutions connecting industrial
              estates across Kerala, Tamil Nadu, and Karnataka straight to the
              vessel hatch.
            </p>

            {/* Side-by-Side 2-Column Haulage Cards with Elevation Motion */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "20px 18px",
                  background: "white",
                  border: "1px solid var(--line-dark)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(8, 126, 153, 0.1)",
                      color: "var(--teal)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Truck size={20} />
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--teal)",
                      background: "rgba(8, 126, 153, 0.08)",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      fontWeight: 600,
                    }}
                  >
                    PORT DIRECT
                  </span>
                </div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "28px",
                    color: "var(--deep)",
                    marginBottom: "4px",
                  }}
                >
                  100%
                </strong>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-muted)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                  }}
                >
                  Direct Port Access
                </span>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "20px 18px",
                  background: "white",
                  border: "1px solid var(--line-dark)",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(16, 185, 129, 0.12)",
                      color: "#10b981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Radio size={20} />
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "10px",
                      fontFamily: "var(--font-mono)",
                      color: "#065f46",
                      background: "rgba(16, 185, 129, 0.15)",
                      padding: "3px 8px",
                      borderRadius: "9999px",
                      fontWeight: 600,
                    }}
                  >
                    <span className="live-pulse-dot" />
                    ACTIVE GPS
                  </div>
                </div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "28px",
                    color: "var(--deep)",
                    marginBottom: "4px",
                  }}
                >
                  24/7
                </strong>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--ink-muted)",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                  }}
                >
                  Live Haulage Tracking
                </span>
              </motion.div>
            </div>
          </Reveal>

          {/* Operations Desk CTA with Floating Anchor & Magnetic Glow */}
          <Reveal
            style={{
              background: "var(--deep)",
              color: "white",
              padding: "clamp(28px, 4vw, 44px)",
              borderRadius: "10px",
              border: "1px solid var(--line-light)",
              boxShadow: "0 14px 36px rgba(0, 0, 0, 0.35)",
            }}
          >
            <Anchor
              size={38}
              className="floating-anchor"
              style={{
                color: "var(--sky)",
                marginBottom: "18px",
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "22px",
                textTransform: "uppercase",
                marginBottom: "14px",
                letterSpacing: "-0.02em",
              }}
            >
              Need Transshipment or Inland Logistics?
            </h3>
            <p
              style={{
                fontSize: "14px",
                opacity: 0.82,
                lineHeight: "1.6",
                marginBottom: "28px",
              }}
            >
              Speak with our Cochin headquarters to coordinate vessel berthing,
              bonded transfers, or multi-modal inland container transport.
            </p>
            <Link to="/contact" className="btn-primary cta-glow-btn">
              <span>Contact Operations Desk</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
