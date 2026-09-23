import { Link } from "react-router-dom";
import {
  ShipWheel,
  FileCheck2,
  Truck,
  Boxes,
  Warehouse,
  Plane,
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe2,
} from "lucide-react";
import { Eyebrow, Reveal, storage } from "@/components/sections/shared";
import ServicesSection from "@/components/sections/ServicesSection";

const pillarDetails = [
  {
    num: "01",
    title: "Multi-Modal Freight Forwarding",
    icon: ShipWheel,
    lead: "Customized global routing via Sea Freight (FCL/LCL) and Air Freight tailored to your deadlines and budgets.",
    points: [
      "FCL (Full Container Load) & LCL Consolidation",
      "Direct carrier contracts across major sea lanes",
      "IATA air freight express & scheduled charters",
      "Specialized temperature-controlled cargo",
    ],
  },
  {
    num: "02",
    title: "Licensed Customs Broker",
    icon: FileCheck2,
    lead: "Swift handling of complex Import and Export compliance, duty valuations, and documentation to avoid costly port delays.",
    points: [
      "Direct customs filing under official Broker License",
      "Accurate HS code classification & tariff review",
      "Port health, phytosanitary & regulatory clearances",
      "Bonded warehouse clearances & SEZ documentation",
    ],
  },
  {
    num: "03",
    title: "Inland Transportation & Logistics",
    icon: Truck,
    lead: "A robust, reliable domestic network linking local manufacturing hubs directly to international ports via road and rail.",
    points: [
      "Factory-to-quay dedicated container haulage",
      "Container trailers & multi-axle heavy trailers",
      "Rail freight integration for inland ICDs",
      "GPS tracking and round-the-clock transit updates",
    ],
  },
  {
    num: "04",
    title: "Exim Consultation",
    icon: Boxes,
    lead: "Strategic legal and financial consultation regarding tariff codes, trade regulations, and incentive schemes.",
    points: [
      "EPCG, Advance Authorization & RoDTEP guidance",
      "FTA & CEPA preferential duty optimizations",
      "Customs audit compliance and dispute resolution",
      "Import-export regulatory risk assessments",
    ],
  },
  {
    num: "05",
    title: "Warehousing & Distribution",
    icon: Warehouse,
    lead: "Asset-backed storage and inventory control with seamless transition between manufacturing hubs and maritime ports.",
    points: [
      "Secured bonded and general warehousing facilities",
      "Palletization, labeling, and cargo stuffing/de-stuffing",
      "Inventory tracking with real-time stock visibility",
      "Cross-docking and regional distribution networks",
    ],
  },
  {
    num: "06",
    title: "Project Cargo & Heavy Lift",
    icon: Plane,
    lead: "End-to-end engineering for out-of-gauge (OOG) machinery, heavy industrial cargo, and turn-key factory relocations.",
    points: [
      "Route feasibility surveys & bridge load approvals",
      "Flat rack, open top & breakbulk vessel chartering",
      "On-site stevedoring and heavy crane rigging",
      "Comprehensive transit insurance and port handling",
    ],
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-grid" />
        <div className="container">
          <Reveal>
            <Eyebrow light>What We Do • Core Pillars</Eyebrow>
            <h1>
              Comprehensive Logistics,
              <br />
              <i>Licensed Precision.</i>
            </h1>
            <p className="page-lead">
              As Licensed Customs Brokers and international Freight Forwarders,
              Prisma Shipping and Logistics bridges the gap between global
              origin points and local destinations across India's premier
              maritime gateways.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ width: "auto" }}
              >
                Request a Custom Quote <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 Core Pillars Deep Dive */}
      <section className="section-light" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <Eyebrow>Service Portfolio</Eyebrow>
            </Reveal>
            <Reveal className="heading-side-note">
              <span>Licensed Customs Brokerage & Multi-Modal Freight</span>
            </Reveal>
          </div>

          <Reveal>
            <h2
              className="section-title dark-title"
              style={{ marginBottom: "20px" }}
            >
              Architecting
              <br />
              <i>End-to-End Solutions.</i>
            </h2>
            <p
              style={{
                maxWidth: "640px",
                color: "var(--ink-muted)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              We simplify international trade complexities for businesses of all
              sizes with asset-backed execution, transparent tracking, and
              compliance excellence.
            </p>
          </Reveal>

          <div className="pillar-grid">
            {pillarDetails.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <Reveal
                  key={pillar.num}
                  delay={idx * 0.08}
                  className="pillar-card"
                >
                  <div className="pillar-card-icon">
                    <Icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.lead}</p>
                  <ul>
                    {pillar.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Mode Explorer from ServicesSection */}
      <ServicesSection />

      {/* Capabilities Guarantee Banner */}
      <section className="section-ocean" style={{ padding: "90px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "40px",
            }}
          >
            <Reveal
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <ShieldCheck size={32} style={{ color: "var(--gold)" }} />
              <h4
                style={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Licensed Broker Direct
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.85,
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                Direct filing and clearance privileges without third-party
                intermediaries, accelerating your turnaround at Cochin,
                Vizhinjam, and Chennai ports.
              </p>
            </Reveal>

            <Reveal
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Clock size={32} style={{ color: "var(--gold)" }} />
              <h4
                style={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Zero Costly Port Delays
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.85,
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                Pre-arrival documentation and swift duty valuations ensure cargo
                moves off the quay rapidly to save demurrage and detention
                charges.
              </p>
            </Reveal>

            <Reveal
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Globe2 size={32} style={{ color: "var(--gold)" }} />
              <h4
                style={{
                  fontSize: "20px",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Global Multi-Modal Routes
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  opacity: 0.85,
                  margin: 0,
                  lineHeight: "1.6",
                }}
              >
                Seamless sea-air and road-rail combinations connecting regional
                manufacturing factories to worldwide commercial destinations.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
