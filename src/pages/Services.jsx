import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Globe2 } from "lucide-react";

import { Eyebrow, Reveal } from "@/components/sections/shared";
import ServicesSection from "@/components/sections/ServicesSection";

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Licensed Broker Direct",
    description:
      "Direct filing and clearance privileges without third-party intermediaries, accelerating your turnaround at Cochin, Vizhinjam, and Chennai ports.",
  },
  {
    icon: Clock,
    title: "Zero Costly Port Delays",
    description:
      "Pre-arrival documentation and swift duty valuations ensure cargo moves off the quay rapidly to save demurrage and detention charges.",
  },
  {
    icon: Globe2,
    title: "Global Multi-Modal Routes",
    description:
      "Seamless sea-air and road-rail combinations connecting regional manufacturing factories to worldwide commercial destinations.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      {/* PAGE HERO */}
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
                Request a Custom Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LUXURY SERVICES SECTION (Mobile Accordion with 16:9 Headers / Desktop Cinematic List) */}
      <ServicesSection />

      {/* VALUE PROPOSITIONS */}
      <section
        className="section-ocean"
        style={{ padding: "clamp(60px, 8vw, 100px) 0" }}
      >
        <div className="container">
          <div className="value-props-grid">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: idx * 0.12, duration: 0.4 }}
                  className="value-prop-tile"
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: [0.6, 1.12, 1], opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.12 + 0.1,
                    }}
                    className="value-prop-icon-wrap"
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </motion.div>

                  <h4
                    style={{
                      fontSize: "20px",
                      textTransform: "uppercase",
                      margin: 0,
                      color: "#ffffff",
                      letterSpacing: "-0.02em",
                      fontWeight: 600,
                    }}
                  >
                    {prop.title}
                  </h4>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.84)",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {prop.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
