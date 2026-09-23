import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  Clock,
  Ship,
  FileCheck2,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { Eyebrow, Reveal } from "./shared";

const sampleShipments = [
  {
    id: "PRIS-COCH-7842",
    bl: "BL-9928104",
    mode: "Sea Freight (FCL)",
    origin: "Cochin Port ICTT",
    destination: "Rotterdam Gateway",
    vessel: "MSC Alessia v.240B",
    status: "Customs Cleared • Quayside Staged",
    dutyStatus: "Assessed & Paid via ICEGATE",
    eta: "In Transit • On Schedule",
    milestones: [
      { name: "Factory Floor Pick-Up", done: true, time: "Day 1, 09:30 IST" },
      {
        name: "Inland Road Haulage to Cochin",
        done: true,
        time: "Day 1, 17:45 IST",
      },
      {
        name: "Licensed Customs Brokerage Passed",
        done: true,
        time: "Day 2, 11:15 IST",
      },
      {
        name: "Vessel Berthing & Container Loaded",
        done: false,
        time: "Day 3, Estimated",
      },
    ],
  },
  {
    id: "PRIS-VIZH-5519",
    bl: "BL-4481022",
    mode: "Transshipment Cargo",
    origin: "Vizhinjam Deep-Water Port",
    destination: "Jebel Ali, Dubai",
    vessel: "Maersk Camellia v.118",
    status: "Transshipment Feeder Connected",
    dutyStatus: "Bonded Transfer Clearance",
    eta: "Vessel Departed",
    milestones: [
      {
        name: "Mainline Vessel Discharge",
        done: true,
        time: "Day 1, 04:00 IST",
      },
      {
        name: "Transshipment Documentation Cleared",
        done: true,
        time: "Day 1, 10:20 IST",
      },
      {
        name: "Feeder Connecting Vessel Staged",
        done: true,
        time: "Day 1, 19:30 IST",
      },
      {
        name: "Outward Sailing to Gulf Port",
        done: true,
        time: "Day 2, 06:10 IST",
      },
    ],
  },
];

export default function TechnologySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [trackingInput, setTrackingInput] = useState("");
  const current = sampleShipments[activeIdx];

  return (
    <section
      className="technology-section section-ink"
      style={{ padding: "120px 0" }}
    >
      <div
        className="container technology-grid"
        style={{
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <Reveal>
          <Eyebrow light>Shipment Visibility & Compliance</Eyebrow>

          <h2
            style={{
              fontSize: "clamp(38px, 5.2vw, 76px)",
              margin: "24px 0 20px",
              textTransform: "uppercase",
              lineHeight: "0.95",
              letterSpacing: "-0.05em",
            }}
          >
            Real-Time Tracking,
            <br />
            <i>Direct Port Visibility.</i>
          </h2>

          <p
            style={{
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: "16px",
              lineHeight: "1.6",
              marginBottom: "32px",
              maxWidth: "520px",
            }}
          >
            Complete operational oversight from factory dispatch through ICEGATE
            customs appraisal to final vessel departure at Cochin, Vizhinjam,
            and Chennai.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(22, 169, 199, 0.15)",
                  color: "var(--sky)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FileCheck2 size={18} />
              </div>
              <span>Direct ICEGATE & EDI Clearance Integration</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(22, 169, 199, 0.15)",
                  color: "var(--sky)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Clock size={18} />
              </div>
              <span>Immediate Pre-Arrival Documentation Updates</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "rgba(22, 169, 199, 0.15)",
                  color: "var(--sky)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ship size={18} />
              </div>
              <span>Single Point of Contact for All Gateway Movements</span>
            </div>
          </div>
        </Reveal>

        {/* Interactive Tracking Portal Demo */}
        <Reveal
          style={{
            background: "rgba(7, 26, 46, 0.85)",
            border: "1px solid var(--line-light)",
            borderRadius: "8px",
            padding: "28px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Top Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid var(--line-light)",
              paddingBottom: "16px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                Active Consignment Track
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              {sampleShipments.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveIdx(idx)}
                  style={{
                    padding: "4px 10px",
                    background:
                      activeIdx === idx
                        ? "var(--teal)"
                        : "rgba(255,255,255,0.08)",
                    color: "white",
                    fontSize: "10px",
                    fontFamily: "var(--font-mono)",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {s.id.split("-")[1]}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "24px",
                  background: "rgba(255,255,255,0.03)",
                  padding: "16px",
                  borderRadius: "6px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--sky)",
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                    }}
                  >
                    Booking / Reference
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "white",
                      marginTop: "2px",
                    }}
                  >
                    {current.id}
                  </div>
                  <div
                    style={{ fontSize: "11px", opacity: 0.7, marginTop: "2px" }}
                  >
                    {current.mode}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "var(--sky)",
                      fontFamily: "var(--font-mono)",
                      textTransform: "uppercase",
                    }}
                  >
                    Routing Gateways
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "white",
                      marginTop: "2px",
                    }}
                  >
                    {current.origin} → {current.destination}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--gold)",
                      marginTop: "2px",
                    }}
                  >
                    {current.vessel}
                  </div>
                </div>
              </div>

              {/* Milestones Flow with Motion */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontFamily: "var(--font-mono)",
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Milestone Status
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {current.milestones.map((m, i) => (
                    <motion.div
                      key={m.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 14px",
                        background: m.done
                          ? "rgba(8, 126, 153, 0.15)"
                          : "rgba(255,255,255,0.03)",
                        border: m.done
                          ? "1px solid rgba(22, 169, 199, 0.3)"
                          : "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "4px",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        style={{
                          color: m.done
                            ? "var(--sky)"
                            : "rgba(255,255,255,0.3)",
                          flexShrink: 0,
                        }}
                      />
                      <div
                        style={{
                          flex: 1,
                          fontSize: "13px",
                          color: m.done ? "white" : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {m.name}
                      </div>
                      <div
                        style={{
                          fontSize: "10px",
                          fontFamily: "var(--font-mono)",
                          color: m.done
                            ? "var(--gold)"
                            : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {m.time}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Status Bottomline */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--line-light)",
                  fontSize: "12px",
                }}
              >
                <div style={{ color: "rgba(255,255,255,0.7)" }}>
                  Customs Status:{" "}
                  <strong style={{ color: "white" }}>
                    {current.dutyStatus}
                  </strong>
                </div>
                <div
                  style={{
                    color: "var(--gold)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                  }}
                >
                  {current.status}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
