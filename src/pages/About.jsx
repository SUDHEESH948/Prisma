import { Link } from "react-router-dom";
import { ShieldCheck, Award, ArrowRight, Compass } from "lucide-react";
import { Eyebrow, Reveal, storage } from "@/components/sections/shared";
import WhySection from "@/components/sections/WhySection";
import logo from "@/assets/image.png";

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-overlay" />
        <div className="page-hero-grid" />
        <div className="container">
          <Reveal>
            <Eyebrow light>Company Profile & Heritage</Eyebrow>
            <h1>
              Navigating Global Trade
              <br />
              <i>with Precision & Trust.</i>
            </h1>
            <p className="page-lead">
              Founded in 2020, Prisma Shipping and Logistics has evolved to
              become one of the most reliable, asset-backed logistics and supply
              chain partners across India's premier maritime gateways.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ width: "auto" }}
              >
                Start a Conversation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="text-link text-link-light"
                style={{ alignSelf: "center" }}
              >
                Explore our services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Heritage & Mission */}
      <section
        className="section-light"
        style={{ padding: "clamp(50px, 8vw, 100px) 0" }}
      >
        <div className="container responsive-two-col">
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(38px, 5vw, 64px)",
                margin: "22px 0 26px",
                lineHeight: "0.95",
                textTransform: "uppercase",
                letterSpacing: "-0.05em",
              }}
            >
              Architecting
              <br />
              <i>End-to-End Supply Chains.</i>
            </h2>
            <p
              style={{
                color: "var(--ink-muted)",
                fontSize: "16px",
                lineHeight: "1.65",
                marginBottom: "20px",
              }}
            >
              Headquartered globally with an expansive operational footprint
              across India’s premier maritime gateways, we specialize in
              simplifying the immense complexities of international trade for
              businesses of all sizes.
            </p>
            <p
              style={{
                color: "var(--ink-muted)",
                fontSize: "15px",
                lineHeight: "1.65",
                marginBottom: "30px",
              }}
            >
              We don't just move cargo; we architect seamless end-to-end supply
              chains that empower businesses to expand across borders with total
              peace of mind. As Licensed Customs Brokers and international
              Freight Forwarders, we bridge the gap between global origin points
              and local destinations.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "20px 24px",
                background: "white",
                border: "1px solid var(--line-dark)",
                borderRadius: "4px",
              }}
            >
              <img
                src={logo}
                alt="Prisma Verified Mark"
                style={{
                  width: "54px",
                  height: "54px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              />
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "16px",
                    color: "var(--deep)",
                    letterSpacing: "0.03em",
                  }}
                >
                  PRISMA SHIPPING & LOGISTICS
                </strong>
                <span
                  style={{
                    fontSize: "12px",
                    color: "var(--teal)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Licensed Customs Broker • Willingdon Island, Cochin
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal style={{ position: "relative" }}>
            <img
              src={storage.port}
              alt="Cochin port aerial operations"
              style={{
                width: "100%",
                height: "520px",
                objectFit: "cover",
                borderRadius: "4px",
                filter: "saturate(0.8)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                background: "rgba(7, 26, 46, 0.9)",
                color: "white",
                padding: "16px 22px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--sky)",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                ESTABLISHED 2020
              </div>
              <div style={{ fontSize: "15px", fontWeight: 600 }}>
                Cochin • Vizhinjam • Chennai
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Licensed Customs Broker Authority */}
      <section className="section-ink" style={{ padding: "90px 0" }}>
        <div className="container">
          <div className="section-heading-row">
            <Reveal>
              <Eyebrow light>Regulatory Credential</Eyebrow>
            </Reveal>
            <Reveal className="heading-side-note">
              <span>Direct Clearance Privileges</span>
            </Reveal>
          </div>

          <Reveal>
            <h2
              className="section-title light-title"
              style={{ marginBottom: "20px" }}
            >
              Why Licensed Brokerage
              <br />
              <i>Changes Everything.</i>
            </h2>
            <p
              style={{
                maxWidth: "660px",
                color: "rgba(255,255,255,0.7)",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Unlike generic freight agents who subcontract customs paperwork to
              third parties, Prisma holds direct customs broker authorization.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px",
              marginTop: "50px",
            }}
          >
            <Reveal
              style={{
                padding: "32px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--line-light)",
                borderRadius: "4px",
              }}
            >
              <ShieldCheck
                size={28}
                style={{ color: "var(--gold)", marginBottom: "16px" }}
              />
              <h4
                style={{
                  fontSize: "20px",
                  color: "white",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                Direct Filing Authority
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Direct integration with ICEGATE and customs appraisal cells for
                instant documentation processing without intermediary markups or
                delays.
              </p>
            </Reveal>

            <Reveal
              style={{
                padding: "32px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--line-light)",
                borderRadius: "4px",
              }}
            >
              <Compass
                size={28}
                style={{ color: "var(--gold)", marginBottom: "16px" }}
              />
              <h4
                style={{
                  fontSize: "20px",
                  color: "white",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                Exim Advisory & Tariffs
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Deep expertise in tariff schedules, anti-dumping duties, GST
                compliance, and trade agreements to legally minimize customs
                duty liability.
              </p>
            </Reveal>

            <Reveal
              style={{
                padding: "32px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--line-light)",
                borderRadius: "4px",
              }}
            >
              <Award
                size={28}
                style={{ color: "var(--gold)", marginBottom: "16px" }}
              />
              <h4
                style={{
                  fontSize: "20px",
                  color: "white",
                  textTransform: "uppercase",
                  margin: "0 0 12px",
                }}
              >
                6+ Years Proven Compliance
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Zero-compromise adherence to local and international customs
                laws, safeguarding your commercial reputation at every gateway.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Prisma Principles Component */}
      <WhySection />
    </div>
  );
}
