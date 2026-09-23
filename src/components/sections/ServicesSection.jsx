import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  FileCheck2,
  Plane,
  ShipWheel,
  Truck,
  Warehouse,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Eyebrow, Reveal, storage } from "./shared";

const services = [
  {
    number: "01",
    label: "Multi-Modal Freight Forwarding",
    meta: "Sea (FCL/LCL) & Air Freight tailored to deadlines & budgets",
    icon: ShipWheel,
    image: storage.hero,
    highlights: [
      "Global FCL & LCL Consolidation",
      "Direct Ocean Carrier Contracts",
      "Time-Critical Air Charters",
    ],
  },
  {
    number: "02",
    label: "Licensed Customs Broker",
    meta: "Swift handling of import/export compliance & duty valuations",
    icon: FileCheck2,
    image: storage.port,
    highlights: [
      "Direct ICEGATE & EDI Clearance",
      "HS Code Classification & Valuation",
      "Zero-Delay Quayside Release",
    ],
  },
  {
    number: "03",
    label: "Inland Transportation & Logistics",
    meta: "Road & rail linking manufacturing hubs directly to ports",
    icon: Truck,
    image: storage.ship,
    highlights: [
      "GPS-Tracked Multi-Axle Fleet",
      "Bonded Factory-to-Berth Escorts",
      "Heavy-Lift Industrial Lowbeds",
    ],
  },
  {
    number: "04",
    label: "Exim Consultation",
    meta: "Tariff codes, trade regulations & incentive schemes",
    icon: Boxes,
    image: storage.air,
    highlights: [
      "Duty Drawback & EPCG Advisory",
      "FTA & Preferential Trade Benefits",
      "Regulatory Risk Audit",
    ],
  },
  {
    number: "05",
    label: "Warehousing & Distribution",
    meta: "Asset-backed inventory control at every handoff",
    icon: Warehouse,
    image: storage.port,
    highlights: [
      "Bonded & General Port Warehousing",
      "Cross-Docking & Palletization",
      "WMS Real-Time Stock Audits",
    ],
  },
  {
    number: "06",
    label: "Project Cargo",
    meta: "Heavy lift and complex industrial moves, carefully made",
    icon: Plane,
    image: storage.hero,
    highlights: [
      "Breakbulk & Out-of-Gauge (OOG)",
      "Route Surveys & Jetty Permissions",
      "Turnkey Site Delivery",
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(0);

  const toggleMobileAccordion = (index) => {
    setMobileExpanded(mobileExpanded === index ? -1 : index);
  };

  return (
    <section id="services" className="services-section section-dark">
      <div className="container">
        {/* =========================================
            SECTION HEADER
        ========================================== */}

        <div className="section-heading-row flex flex-row items-center justify-between gap-2 flex-nowrap w-full">
          <Reveal className="shrink-0">
            <Eyebrow
              light
              className="whitespace-nowrap text-[9px] sm:text-[10px]"
            >
              Our Core Pillars
            </Eyebrow>
          </Reveal>

          <Reveal className="heading-side-note shrink-0 text-right">
            <span className="whitespace-nowrap text-[8px] sm:text-[9px] text-cyan-400">
              <span className="hidden sm:inline">
                Licensed Customs Broker & Freight Forwarding
              </span>
              <span className="sm:hidden">Customs Broker & Forwarding</span>
            </span>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="section-title light-title">
            Logistics,
            <br />
            <i>without limits.</i>
          </h2>
        </Reveal>

        {/* =========================================
            MOBILE ACCORDION (< 768px, Tailwind CSS)
        ========================================== */}
        <div className="md:hidden flex flex-col gap-3 mt-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = mobileExpanded === index;

            return (
              <motion.div
                key={service.number}
                layout
                className={`bg-[#031525] border rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-cyan-500/50 shadow-[0_10px_25px_-5px_rgba(3,21,37,0.8),0_0_15px_rgba(6,182,212,0.15)]"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(index)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center gap-3 py-3.5 px-4 bg-transparent border-0 text-white cursor-pointer text-left min-h-[52px]"
                >
                  <span className="font-mono text-[13px] font-semibold text-cyan-400 tracking-wider shrink-0">
                    {service.number}
                  </span>
                  <span className="w-[34px] h-[34px] rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="flex-1 text-sm font-bold uppercase tracking-tight text-white line-clamp-1">
                    {service.label}
                  </span>
                  <ChevronDown
                    className={`text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : "rotate-0"
                    }`}
                    size={18}
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden px-4 pb-4 border-t border-slate-800/80"
                    >
                      {/* Cinematic 16:9 Aerial Cargo Header */}
                      <div className="relative w-full aspect-video max-h-[190px] overflow-hidden rounded-lg mt-3 mb-3.5 bg-slate-950 border border-white/10 group">
                        <img
                          src={service.image}
                          alt={service.label}
                          loading="lazy"
                          className="w-full h-full object-cover object-center block transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#031525]/90 via-[#031525]/20 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 z-10 rounded border border-white/20 bg-[#031525]/75 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-widest text-cyan-400 backdrop-blur-md">
                          {service.number} • MARITIME
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className="text-white/80 text-[13px] leading-relaxed mb-3.5">
                        {service.meta}
                      </p>

                      {/* 3 Checkmark Features */}
                      <div className="flex flex-col gap-2 mb-4">
                        {service.highlights.map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-white/90"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-cyan-400 shrink-0"
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Solid Cyan CTA Button with Shimmer */}
                      <Link
                        to="/contact"
                        className="w-full min-h-[44px] flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#00A8B5] to-[#06B6D4] text-[#031525] font-bold text-xs uppercase tracking-wider rounded-lg shadow-[0_4px_14px_rgba(6,182,212,0.3)] hover:brightness-105 active:scale-[0.99] transition-all relative overflow-hidden group"
                      >
                        <span className="relative z-10">
                          INQUIRE FOR THIS SERVICE
                        </span>
                        <ArrowRight size={14} className="relative z-10" />
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* =========================================
            DESKTOP SERVICE LIST (>= 768px)
        ========================================== */}
        <div
          className="hidden md:block service-list"
          style={{
            backgroundImage: `url(${services[activeService].image})`,
          }}
        >
          {/* Background Image Crossfade Layers */}
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`service-bg-layer ${
                activeService === index ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />
          ))}

          {/* Vignette / Contrast Overlay */}
          <div className="service-image-overlay" />

          {/* Desktop Service Rows */}
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <button
                key={service.number}
                type="button"
                className={`service-row ${
                  activeService === index ? "service-active" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                onClick={() => setActiveService(index)}
              >
                <span className="service-number">{service.number}</span>
                <span className="service-icon">
                  <Icon size={19} strokeWidth={1.3} />
                </span>
                <span className="service-name">{service.label}</span>
                <span className="service-meta">{service.meta}</span>
                <ChevronRight
                  className="service-arrow"
                  size={20}
                  strokeWidth={1.2}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
