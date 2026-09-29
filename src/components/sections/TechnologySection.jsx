import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Ship, FileCheck2, Anchor, ArrowRight } from "lucide-react";
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
      {
        name: "Factory Floor Pick-Up",
        done: true,
        time: "Day 1, 09:30 IST",
        sub: "Origin CFS dispatch recorded",
      },
      {
        name: "Inland Road Haulage to Cochin",
        done: true,
        time: "Day 1, 17:45 IST",
        sub: "Port toll gate in-scan verified",
      },
      {
        name: "Licensed Customs Brokerage Passed",
        done: true,
        time: "Day 2, 11:15 IST",
        sub: "Bill of Entry assessment cleared",
      },
      {
        name: "Vessel Berthing & Container Loaded",
        done: false,
        active: true,
        time: "Day 3, Estimated",
        sub: "Berth scheduled at Terminal 2",
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
        sub: "Container unloaded to yard",
      },
      {
        name: "Transshipment Documentation Cleared",
        done: true,
        time: "Day 1, 10:20 IST",
        sub: "EDI transfer manifest filed",
      },
      {
        name: "Feeder Connecting Vessel Staged",
        done: true,
        time: "Day 1, 19:30 IST",
        sub: "Gantry crane loading complete",
      },
      {
        name: "Outward Sailing to Gulf Port",
        done: true,
        time: "Day 2, 06:10 IST",
        sub: "Pilot discharged, vessel underway",
      },
    ],
  },
];

export default function TechnologySection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = sampleShipments[activeIdx];

  return (
    <section className="relative overflow-hidden bg-[#06121e] py-20 text-white md:py-28">
      {/* Background radial glow for natural depth */}
      <div className="pointer-events-none absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-48 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Core Guarantees */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow light>Shipment Visibility & Compliance</Eyebrow>

              <h2 className="mt-4 font-serif text-3xl font-light uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Real-Time Tracking,
                <br />
                <span className="italic text-cyan-400">Direct Port Visibility.</span>
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-slate-300 md:text-base">
                Operational oversight from factory dispatch through ICEGATE
                customs appraisal to vessel departure at Cochin, Vizhinjam, and
                Chennai gateways.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: FileCheck2,
                    title: "Direct ICEGATE & EDI Integration",
                    desc: "Automated Bill of Entry tracking and customs duty reconciliation.",
                  },
                  {
                    icon: Clock,
                    title: "Pre-Arrival Documentation",
                    desc: "Advance filing to prevent detention and port demurrage charges.",
                  },
                  {
                    icon: Ship,
                    title: "Gateway Berth Oversight",
                    desc: "Direct coordination with quayside operators and feeder vessels.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-950/40 text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-white">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Right Column: Live Tracking Console */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-[#0a1a2b]/90 shadow-2xl backdrop-blur-xl">
                {/* Console Top Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/50 px-6 py-4">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                      Live Consignment Telemetry
                    </span>
                  </div>

                  {/* Consignment Switcher */}
                  <div className="flex rounded-lg border border-slate-700/60 bg-slate-900/60 p-1">
                    {sampleShipments.map((s, idx) => {
                      const portTag = s.id.split("-")[1];
                      return (
                        <button
                          key={s.id}
                          onClick={() => setActiveIdx(idx)}
                          className={`rounded px-3 py-1 font-mono text-xs transition-all ${
                            activeIdx === idx
                              ? "bg-cyan-500/20 text-cyan-300 shadow-sm"
                              : "text-slate-400 hover:text-white"
                          }`}
                        >
                          {portTag}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Animated Body */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="p-6 md:p-8"
                  >
                    {/* Shipment Meta Card */}
                    <div className="grid grid-cols-1 gap-4 rounded-xl border border-slate-700/40 bg-slate-900/40 p-5 sm:grid-cols-2">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                          Booking ID / Reference
                        </span>
                        <div className="mt-1 flex items-center gap-2">
                          <span className="font-mono text-lg font-semibold tracking-tight text-white">
                            {current.id}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">
                          {current.mode} &bull; {current.bl}
                        </span>
                      </div>

                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">
                          Corridor & Vessel
                        </span>
                        <div className="mt-1 flex items-center gap-2 text-sm font-medium text-white">
                          <span>{current.origin}</span>
                          <ArrowRight size={13} className="text-cyan-400" />
                          <span>{current.destination}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-1.5 text-xs text-amber-300/90">
                          <Anchor size={12} />
                          <span>{current.vessel}</span>
                        </div>
                      </div>
                    </div>

                    {/* Natural Vertical Timeline */}
                    <div className="mt-8">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
                          Operational Milestones
                        </span>
                        <span className="font-mono text-[11px] text-cyan-400">
                          {current.eta}
                        </span>
                      </div>

                      <div className="relative pl-7">
                        {/* Continuous Vertical Timeline Line */}
                        <div className="absolute bottom-3 left-[11px] top-3 w-[2px] bg-slate-700/60" />

                        <div className="space-y-6">
                          {current.milestones.map((m, i) => (
                            <motion.div
                              key={m.name}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.06 }}
                              className="relative"
                            >
                              {/* Step Node Marker */}
                              <div className="absolute -left-7 top-1 flex items-center justify-center">
                                {m.done ? (
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-950 ring-4 ring-[#0a1a2b]">
                                    <CheckCircle2
                                      size={18}
                                      className="text-cyan-400"
                                    />
                                  </div>
                                ) : m.active ? (
                                  <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/20 ring-4 ring-[#0a1a2b]">
                                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-amber-400 opacity-75" />
                                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                                  </div>
                                ) : (
                                  <div className="h-2.5 w-2.5 rounded-full border border-slate-500 bg-slate-800 ring-4 ring-[#0a1a2b]" />
                                )}
                              </div>

                              {/* Step Content */}
                              <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                                <div>
                                  <div
                                    className={`text-sm font-medium ${
                                      m.done
                                        ? "text-white"
                                        : m.active
                                        ? "text-amber-200"
                                        : "text-slate-400"
                                    }`}
                                  >
                                    {m.name}
                                  </div>
                                  <p className="mt-0.5 text-xs text-slate-400">
                                    {m.sub}
                                  </p>
                                </div>

                                <span
                                  className={`mt-1 font-mono text-xs sm:mt-0 ${
                                    m.done
                                      ? "text-slate-300"
                                      : m.active
                                      ? "text-amber-300 font-semibold"
                                      : "text-slate-400"
                                  }`}
                                >
                                  {m.time}
                                </span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Natural Status Badges Bar */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700/60 pt-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                          Customs:
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-medium text-emerald-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {current.dutyStatus}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-medium text-cyan-300">
                        {current.status}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}