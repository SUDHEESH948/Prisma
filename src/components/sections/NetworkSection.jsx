import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRightLeft,
  Clock,
  MapPin,
  Ship,
  CheckCircle2,
} from "lucide-react";
import { Eyebrow, Reveal } from "./shared";

const networkPoints = [
  [487, 212, "Cochin Gateway"],
  [510, 240, "Vizhinjam Hub"],
  [535, 205, "Chennai Corridor"],
  [348, 195, "Dubai"],
  [646, 175, "Singapore"],
  [122, 174, "Rotterdam"],
];

const tradeCorridors = [
  {
    id: "cochin",
    name: "Cochin Gateway",
    destination: "Rotterdam & Northern Europe",
    fullRoute: "Cochin ICTT (Vallarpadam) ↔ Rotterdam Gateway",
    mode: "Direct Deep-Sea (FCL / LCL)",
    transit: "18-22 Days",
    frequency: "Weekly Fixed Sailings",
    badge: "Primary European Corridor",
    highlights: [
      "Direct Quayside Berth at ICTT Vallarpadam",
      "ICEGATE On-Site Assessment & Clearance",
      "Reefer & Dangerous Goods (DG) Staging",
    ],
  },
  {
    id: "vizhinjam",
    name: "Vizhinjam Hub",
    destination: "Jebel Ali, Dubai & Gulf Ports",
    fullRoute: "Vizhinjam Deep-Water Port ↔ Jebel Ali Hub",
    mode: "Transshipment & Megamax Feeder",
    transit: "4-6 Days",
    frequency: "Daily Mother-Vessel Connect",
    badge: "Deep-Water Transshipment",
    highlights: [
      "Natural 20m Deep Draught for Ultra-Large Vessels",
      "Zero-Congestion Direct Feeder Connectivity",
      "Expedited Bonded Transfer Documentation",
    ],
  },
  {
    id: "chennai",
    name: "Chennai Corridor",
    destination: "Singapore & Far East Gateways",
    fullRoute: "Chennai Port / Ennore ↔ Singapore Hub",
    mode: "Intra-Asia Express Line",
    transit: "6-8 Days",
    frequency: "Bi-Weekly Scheduled Sailings",
    badge: "Far East Express",
    highlights: [
      "Automotive & Engineering Cargo Staging",
      "Direct Linkage to Kamarajar / Chennai Terminals",
      "Automated EDI Port Ingate Authorizations",
    ],
  },
  {
    id: "inland",
    name: "Inland Haulage",
    destination: "Major ICDs & Industrial Belts",
    fullRoute: "Willingdon Island / ICDs ↔ Coastal Gateways",
    mode: "Bonded Road & Rail Intermodal",
    transit: "24-48 Hours",
    frequency: "Daily Scheduled Shuttles",
    badge: "Door-to-Berth Network",
    highlights: [
      "GPS-Monitored Multi-Axle Fleet",
      "Coimbatore, Bangalore & Tirupur Intermodal",
      "Factory-to-Quayside Bonded Customs Escort",
    ],
  },
];

const statMetrics = [
  { val: 6, decimals: 0, suffix: "+", label: "Years Proven Compliance" },
  { val: 100, decimals: 0, suffix: "%", label: "Licensed Customs Broker" },
  {
    val: 3,
    decimals: 0,
    suffix: " Gateways",
    label: "Cochin, Vizhinjam & Chennai",
  },
  { val: 99.8, decimals: 1, suffix: "%", label: "On-Time Clearance Precision" },
];

function AnimatedMetricCounter({ endValue, decimals = 0, suffix = "" }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 1400;
    const target = parseFloat(endValue);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setDisplayValue(
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toString(),
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, endValue, decimals]);

  return (
    <span ref={ref}>
      {displayValue}
      <b>{suffix}</b>
    </span>
  );
}

export default function NetworkSection() {
  const [selectedCorridor, setSelectedCorridor] = useState(0);

  return (
    <section id="network" className="network-section section-ocean">
      <div className="container">
        <div className="section-heading-row network-head">
          <Reveal>
            <Eyebrow light>Strategic Gateway Network</Eyebrow>
          </Reveal>

          <Reveal className="heading-side-note light-note">
            <span>Cochin • Vizhinjam • Chennai • Worldwide</span>
          </Reveal>
        </div>

        <Reveal>
          <h2 className="section-title light-title network-title">
            One network.
            <br />
            <span
              style={{
                color: "#22d3ee",
                textShadow: "0 0 24px rgba(34, 211, 238, 0.45)",
                fontStyle: "italic",
                display: "inline-block",
              }}
            >
              Every destination.
            </span>
          </h2>
        </Reveal>

        {/* Mobile Trade Corridors View (< 768px) */}
        <div className="network-corridors-mobile">
          <div
            className="corridor-tab-bar"
            role="tablist"
            aria-label="Strategic Corridors"
          >
            {tradeCorridors.map((c, idx) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={selectedCorridor === idx}
                className={`corridor-tab ${selectedCorridor === idx ? "corridor-tab-active" : ""}`}
                onClick={() => setSelectedCorridor(idx)}
              >
                {c.name.split(" ")[0]}
              </button>
            ))}
          </div>

          <div className="corridor-card-active">
            <div className="corridor-header">
              <span className="corridor-badge">
                {tradeCorridors[selectedCorridor].badge}
              </span>
              <span className="corridor-mode">
                {tradeCorridors[selectedCorridor].mode}
              </span>
            </div>

            <div className="corridor-route-title">
              <ArrowRightLeft size={16} className="corridor-route-icon" />
              <h4>{tradeCorridors[selectedCorridor].fullRoute}</h4>
            </div>

            <div className="corridor-metrics">
              <div className="corridor-metric-item">
                <Clock size={14} />
                <div>
                  <span className="metric-label">Transit Time</span>
                  <strong>{tradeCorridors[selectedCorridor].transit}</strong>
                </div>
              </div>
              <div className="corridor-metric-item">
                <Ship size={14} />
                <div>
                  <span className="metric-label">Sailing Frequency</span>
                  <strong>{tradeCorridors[selectedCorridor].frequency}</strong>
                </div>
              </div>
            </div>

            <div className="corridor-features">
              <span className="features-title">Gateway Advantages:</span>
              <ul>
                {tradeCorridors[selectedCorridor].highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={13} className="feature-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick list of other lanes on mobile */}
          <div className="corridor-mini-list">
            <div className="mini-list-title">All Strategic Corridors:</div>
            {tradeCorridors.map((corridor, idx) => (
              <button
                key={corridor.id}
                className={`mini-corridor-row ${selectedCorridor === idx ? "active" : ""}`}
                onClick={() => setSelectedCorridor(idx)}
              >
                <MapPin size={14} className="mini-pin" />
                <span className="mini-lane">
                  {corridor.name} ↔ {corridor.destination}
                </span>
                <span className="mini-transit">{corridor.transit}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop / Large Screen SVG Map (>= 768px) */}
        <div className="network-map-wrap network-map-desktop">
          <svg
            className="network-map"
            viewBox="0 0 1000 420"
            role="img"
            aria-label="Global logistics network map"
          >
            <path
              className="land-shape"
              d="M82 125l38-29 56 7 36 29 27 3 22 28-28 18-42-7-18 31-34-9-6-28-31-9-17-34zm234 71l34-8 31 20 18 33-10 29-31-5-17-27-27-9 2-33zm96-92l28-18 47 4 18 18-8 22-29 4-18 27-28-12-14-26 4-19zm78 36l29-11 38 13 15 33-22 23-25-11-25 11-24-24 14-34zm112-30l42-7 44 16 9 27-22 19-34-12-21 11-25-21 7-33zm88 75l42-19 44 11 9 28-17 27-40 4-23-20-15-11z"
            />

            <path
              className="route-line"
              d="M122 174C235 217 359 177 463 212S702 145 874 192"
            />
            <path
              className="route-line route-line-2"
              d="M212 213C360 250 538 204 640 236S821 251 910 229"
            />
            <path
              className="route-line route-line-3"
              d="M343 103C434 160 483 240 622 274"
            />

            {/* Live Streaming Cargo Corridors */}
            <path
              className="route-streaming"
              d="M122 174C235 217 359 177 463 212S702 145 874 192"
              fill="none"
              strokeWidth="2.2"
            />
            <path
              className="route-streaming"
              d="M212 213C360 250 538 204 640 236S821 251 910 229"
              fill="none"
              strokeWidth="2.2"
              style={{ animationDuration: "2.8s" }}
            />
            <path
              className="route-streaming"
              d="M343 103C434 160 483 240 622 274"
              fill="none"
              strokeWidth="2.2"
              style={{ animationDuration: "2.4s" }}
            />

            {networkPoints.map(([x, y, label]) => {
              const isGateway =
                label.includes("Cochin") ||
                label.includes("Vizhinjam") ||
                label.includes("Chennai");

              return (
                <g key={label} className="map-point">
                  {/* Radar Pulse Blips for Primary Gateways */}
                  {isGateway && (
                    <>
                      <circle cx={x} cy={y} r="5" className="radar-ring" />
                      <circle cx={x} cy={y} r="5" className="radar-ring-2" />
                    </>
                  )}

                  <circle
                    cx={x}
                    cy={y}
                    r={isGateway ? "6" : "5"}
                    fill={isGateway ? "var(--sky)" : "#ffffff"}
                  />
                  <circle cx={x} cy={y} r="12" className="point-ring" />
                  <text
                    x={x + 14}
                    y={y + 4}
                    fill={isGateway ? "#ffffff" : "rgba(255,255,255,0.72)"}
                    fontWeight={isGateway ? "600" : "400"}
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="network-legend">
            <span>
              <i className="legend-dot" /> Prisma Strategic Gateways (Active
              Radar)
            </span>

            <span>Cochin • Vizhinjam • Chennai • Global Connectivity</span>
          </div>
        </div>

        {/* Dynamic Count-Up Performance Metrics Bar with Spring Pop Entry */}
        <div className="network-stats-grid">
          {statMetrics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="network-stat-card"
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: idx * 0.08,
              }}
            >
              <strong>
                <AnimatedMetricCounter
                  endValue={stat.val}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                />
              </strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
