import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Car,
  Clock,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const CASES = [
  {
    dtc: "P0420",
    title: "Catalytic Converter Efficiency",
    vehicle: "2018 Honda Civic 1.5L Turbo",
    mileage: "108,432 mi",
    plainEnglish:
      "Your catalytic converter is past its prime. Not urgent — you have 1–2 weeks — but past 80k miles on this engine it's almost expected.",
    severity: "Plan within 2 weeks",
    severityColor: "#F59E0B",
    cost: "$400 – $650",
    drivable: "Yes, safely 1–2 weeks",
    action: "Independent mechanic is fine — no dealer needed.",
  },
  {
    dtc: "P0301",
    title: "Cylinder 1 Misfire",
    vehicle: "2020 Toyota Camry 2.5L",
    mileage: "64,100 mi",
    plainEnglish:
      "One of your 4 cylinders is firing inconsistently. Usually a spark plug or ignition coil on cylinder 1. Cheap to rule out before assuming anything bigger.",
    severity: "Easy fix",
    severityColor: "#10B981",
    cost: "$80 – $200",
    drivable: "Drive gently until fixed",
    action: "Start with a $30 plug + 30 min labor. If it comes back, swap the coil.",
  },
  {
    dtc: "P0171",
    title: "Lean Fuel Condition (Bank 1)",
    vehicle: "2015 Ford F-150 5.0L V8",
    mileage: "108,204 mi",
    plainEnglish:
      "Engine is getting too much air or not enough fuel. Usually a vacuum leak, dirty MAF sensor, or weak fuel pump — in that order of likelihood.",
    severity: "Easy fix",
    severityColor: "#10B981",
    cost: "$80 – $220",
    drivable: "Yes, but expect worse MPG",
    action: "Smoke test for a vacuum leak first (~$30 at any shop).",
  },
  {
    dtc: "P0442",
    title: "EVAP System Small Leak",
    vehicle: "2019 Chevy Equinox 1.5L",
    mileage: "72,800 mi",
    plainEnglish:
      "A small leak somewhere in your fuel vapor recovery system. 9 times out of 10 it's the gas cap — check whether it clicks when you tighten it.",
    severity: "Easy fix",
    severityColor: "#10B981",
    cost: "$5 – $120",
    drivable: "Yes, completely safe",
    action: "Swap the gas cap first ($5). If it returns, check the purge hose.",
  },
  {
    dtc: "P0700",
    title: "Transmission Control System Fault",
    vehicle: "2017 Jeep Grand Cherokee 3.6L",
    mileage: "94,100 mi",
    plainEnglish:
      "Your transmission computer detected an internal fault. P0700 is only the trigger — the specific P07xx code it stored alongside is what you actually need to read next.",
    severity: "Urgent — diagnose now",
    severityColor: "#EF4444",
    cost: "$100 diag – $3,500 rebuild",
    drivable: "Drive to a shop, not daily",
    action: "Don't DIY. Dealer or a transmission specialist. Fluid change first if never serviced.",
  },
];

const AUTO_INTERVAL_MS = 6000;

export default function DTCCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useRef<boolean>(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setIdx((prev) => (prev + 1) % CASES.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const current = CASES[idx];
  const goTo = (next: number) => {
    setDirection(next > idx ? 1 : -1);
    setIdx((next + CASES.length) % CASES.length);
  };
  const goPrev = () => goTo(idx - 1);
  const goNext = () => goTo(idx + 1);

  return (
    <section
      id="cases"
      className="px-4 md:px-6 lg:px-8 pb-8 md:pb-12 space-y-4 md:space-y-5"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-white border border-black/5 p-8 md:p-12 text-center"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold tracking-wider mb-4">
          REAL DTC LOOKUPS
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05]">
          Five codes.
          <br />
          <span className="text-[#1A1A1A]/40">
            Five plain-English answers.
          </span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
          Type a DTC into OBDX. Here's exactly what you'd get back.
        </p>
      </motion.div>

      {/* Carousel container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-[#FAFAF7] border border-black/5 p-5 md:p-7 relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
      >
        {/* Slide area */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={idx}
              custom={direction}
              initial={{ opacity: 0, x: reducedMotion.current ? 0 : 30 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reducedMotion.current ? 0 : -30 * direction }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
            >
              {/* INPUT card */}
              <div className="md:col-span-5 rounded-[24px] bg-[#1A1A1A] text-white p-7 md:p-8 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 tracking-widest">
                  <ChevronRight size={12} /> INPUT
                </div>
                <div>
                  <div
                    className="font-mono text-6xl md:text-7xl font-extrabold tracking-tight leading-none"
                    style={{ color: current.severityColor }}
                  >
                    {current.dtc}
                  </div>
                  <div className="mt-4 text-lg md:text-xl font-bold text-white leading-snug">
                    {current.title}
                  </div>
                </div>
                <div className="space-y-2 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/65">
                    <Car size={12} /> {current.vehicle}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-white/40">
                    <Clock size={12} /> {current.mileage}
                  </div>
                </div>
              </div>

              {/* OUTPUT card */}
              <div className="md:col-span-7 rounded-[24px] bg-white border border-black/5 p-7 md:p-8 min-h-[340px] flex flex-col gap-5">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#2563EB] tracking-widest">
                    <Sparkles size={12} /> AI DIAGNOSIS
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      background: `${current.severityColor}1F`,
                      color: current.severityColor,
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: current.severityColor }}
                    />
                    {current.severity}
                  </span>
                </div>

                <p className="text-base md:text-lg text-[#1A1A1A]/85 italic leading-relaxed flex-1">
                  “{current.plainEnglish}”
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-black/5">
                  <div>
                    <div className="text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
                      Cost estimate
                    </div>
                    <div className="text-base md:text-lg font-bold text-[#1A1A1A] mt-1 tabular-nums">
                      {current.cost}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
                      Can you drive?
                    </div>
                    <div className="text-sm font-semibold text-[#1A1A1A] mt-1">
                      {current.drivable}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
                      First move
                    </div>
                    <div className="text-xs text-[#1A1A1A]/70 mt-1 leading-snug">
                      {current.action}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress bar (auto-advance indicator) */}
        <div className="mt-5 h-[3px] bg-[#1A1A1A]/5 rounded-full overflow-hidden">
          <motion.div
            key={`bar-${idx}-${paused ? "p" : "r"}`}
            initial={{ width: "0%" }}
            animate={{ width: paused ? "0%" : "100%" }}
            transition={{ duration: paused ? 0 : AUTO_INTERVAL_MS / 1000, ease: "linear" }}
            className="h-full bg-[#2563EB]"
          />
        </div>

        {/* Controls row */}
        <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            {CASES.map((c, i) => (
              <button
                key={c.dtc}
                type="button"
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx
                    ? "w-8 bg-[#1A1A1A]"
                    : "w-1.5 bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40"
                }`}
                aria-label={`Show example ${i + 1}: ${c.dtc}`}
                aria-current={i === idx}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#1A1A1A]/40 tabular-nums">
              {String(idx + 1).padStart(2, "0")}
              <span className="text-[#1A1A1A]/20 mx-1">/</span>
              {String(CASES.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white border border-black/10 text-[#1A1A1A] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition"
              aria-label="Previous example"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-[#2563EB] transition"
              aria-label="Next example"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Status indicator */}
        <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/30">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              paused ? "bg-[#1A1A1A]/20" : "bg-[#10B981] animate-pulse"
            }`}
          />
          {paused
            ? "Paused — move mouse out to resume"
            : `Auto-advancing every ${AUTO_INTERVAL_MS / 1000}s · hover to pause`}
        </div>
      </motion.div>
    </section>
  );
}
