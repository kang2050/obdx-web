import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Clock,
  Sparkles,
  AlertTriangle,
  Wrench,
  Share2,
  Gauge,
  Activity,
  Database,
  User,
  Cog,
  CheckCircle2,
  CircleAlert,
  CircleSlash,
  LineChart,
  Zap,
  FlaskConical,
  Info,
} from "lucide-react";
import { useState } from "react";

type ViewMode = "easy" | "pro";

const SAMPLE = {
  vehicle: {
    make: "Honda",
    model: "Civic",
    engine: "1.5L Turbo L4",
    year: 2018,
    vinMasked: "1HGFC2F57JH••••XXX",
    mileage: "108,432",
  },
  meta: {
    scannedAgo: "2 min ago",
    analysisSeconds: 9.8,
    aiModel: "DeepSeek-R1",
    sourceCharm: true,
    dataPoints: 47,
  },
  health: {
    overall: 78,
    grade: "B+",
    label: "Good",
    subsystems: [
      { name: "Powertrain", score: 70, color: "#F59E0B" },
      { name: "Emission", score: 62, color: "#F59E0B" },
      { name: "Fuel System", score: 82, color: "#10B981" },
      { name: "Electrical", score: 88, color: "#10B981" },
      { name: "Chassis", score: 92, color: "#10B981" },
    ],
  },
  aiSummary:
    "Your Civic is in solid shape for 108k miles. The catalytic converter is degrading — not urgent, but past 80k on this engine it's almost expected. The lean fuel condition is likely related and cheap to fix. The EVAP code is almost certainly the gas cap. Fix the lean condition first ($80–220), drive 2 weeks, then re-test the cat. You may save $400–650.",
  faults: [
    {
      code: "P0420",
      title: "Catalyst System Efficiency Below Threshold (Bank 1)",
      category: "Emission",
      severity: "medium",
      severityColor: "#F59E0B",
      urgency: "Plan within 2 weeks",
      simple:
        "Your catalytic converter is past its prime. Not urgent — you have 1–2 weeks — but past 80k miles on this engine it's almost expected.",
      technical:
        "Downstream O₂ sensor waveform is mimicking the upstream sensor's cycling pattern, indicating the cat is no longer storing and releasing enough oxygen to convert emissions efficiently. On 2016–2018 Civics with the 1.5L Turbo past 80k miles this is very common due to the engine's known oil-burn tendency.",
      causes: [
        { cause: "Aged/failed catalytic converter", probability: 40 },
        { cause: "Faulty upstream O₂ sensor (mixture issue)", probability: 20 },
        { cause: "Faulty downstream O₂ sensor (false reading)", probability: 15 },
        { cause: "Exhaust leak before downstream O₂", probability: 15 },
        { cause: "Engine oil consumption fouling cat", probability: 10 },
      ],
      steps: [
        "Compare upstream and downstream O₂ waveforms at 2500 RPM",
        "Measure cat inlet/outlet temperature delta (should be +50°F min)",
        "Smoke test exhaust for leaks upstream of downstream sensor",
        "Check oil consumption rate over 1,000 miles",
        "Replace catalytic converter if above confirm failure",
      ],
      whenMonitored: "Warm engine, steady 1500–3000 RPM cruise",
      setCondition: "Downstream O₂ activity > 60% of upstream over 2 drive cycles",
      cost: { min: 400, max: 650 },
      laborHours: 1.5,
      charmSourced: true,
    },
    {
      code: "P0171",
      title: "Fuel System Too Lean (Bank 1)",
      category: "Fuel Metering",
      severity: "medium",
      severityColor: "#F59E0B",
      urgency: "Service soon",
      simple:
        "Your engine is getting too much air or not enough fuel. Cheap to diagnose. On this platform it's almost always a vacuum leak.",
      technical:
        "LTFT is +12.5% on Bank 1 (past the +10% threshold). Combined with STFT +8.2%, the ECU is consistently commanding more fuel to compensate. On the 1.5L Turbo the most common cause is a cracked PCV hose or carbon-clogged MAF sensor.",
      causes: [
        { cause: "Vacuum leak in intake system", probability: 40 },
        { cause: "Dirty or faulty MAF sensor", probability: 25 },
        { cause: "Insufficient fuel pump pressure", probability: 15 },
        { cause: "Clogged or leaking fuel injector", probability: 10 },
        { cause: "Faulty O₂ sensor", probability: 10 },
      ],
      steps: [
        "Inspect intake duct and PCV hose for cracks",
        "Check MAF sensor reading against spec (3–6 g/s at idle)",
        "Test fuel pressure (should be 50–58 PSI)",
        "Smoke test intake system for vacuum leaks",
        "Inspect injector spray pattern if all above OK",
      ],
      whenMonitored: "Warm engine, closed-loop cruising",
      setCondition: "LTFT > +10% on Bank 1 over 2 drive cycles",
      cost: { min: 80, max: 220 },
      laborHours: 1.0,
      charmSourced: true,
    },
    {
      code: "P0442",
      title: "EVAP System Small Leak Detected",
      category: "Emission",
      severity: "low",
      severityColor: "#10B981",
      urgency: "Easy fix",
      simple:
        "Small leak somewhere in your fuel vapor system. 9 out of 10 times it's the gas cap — check whether it clicks when you tighten it.",
      technical:
        "EVAP leak detected > 0.020-inch orifice equivalent. No driveability impact — emissions only. Gas cap seal is the statistically dominant failure mode on Hondas.",
      causes: [
        { cause: "Worn fuel cap seal", probability: 40 },
        { cause: "Hairline crack in EVAP hose", probability: 25 },
        { cause: "EVAP canister port leak", probability: 20 },
        { cause: "Fuel tank port leak", probability: 15 },
      ],
      steps: [
        "Replace fuel cap first ($5) and drive 2 cycles",
        "If code returns, smoke test EVAP system",
        "Inspect EVAP hose fittings at canister and tank",
        "Check EVAP canister and purge valve",
      ],
      whenMonitored: "Cold start EVAP self-test",
      setCondition: "Pressure decay > spec during timed test",
      cost: { min: 10, max: 120 },
      laborHours: 0.5,
      charmSourced: false,
    },
  ],
  freezeFrame: [
    { label: "Engine RPM", value: "1,420", unit: "rpm", ok: true },
    { label: "Engine Load", value: "34", unit: "%", ok: true },
    { label: "Coolant Temp", value: "192", unit: "°F", ok: true },
    { label: "Intake Air Temp", value: "78", unit: "°F", ok: true },
    { label: "MAF", value: "4.8", unit: "g/s", ok: true },
    { label: "STFT B1", value: "+8.2", unit: "%", ok: false },
    { label: "LTFT B1", value: "+12.5", unit: "%", ok: false },
    { label: "O₂ Upstream", value: "0.34", unit: "V", ok: true },
    { label: "O₂ Downstream", value: "0.55", unit: "V", ok: false },
    { label: "Throttle Pos", value: "12", unit: "%", ok: true },
    { label: "Vehicle Speed", value: "38", unit: "mph", ok: true },
    { label: "Timing Adv", value: "18", unit: "°", ok: true },
  ],
  readiness: [
    { name: "Misfire Monitor", status: "ready" },
    { name: "Fuel System", status: "ready" },
    { name: "Comprehensive Component", status: "ready" },
    { name: "Catalyst", status: "ready" },
    { name: "EVAP System", status: "pending" },
    { name: "O₂ Sensor", status: "ready" },
    { name: "O₂ Sensor Heater", status: "ready" },
    { name: "EGR System", status: "notReady" },
  ] as const,
  correlation:
    "P0171 and P0420 are likely linked — running lean over time has accelerated catalyst degradation by causing incomplete combustion and higher-than-spec exhaust temperatures. Recommended order: fix the lean condition first (~$80–220), drive 2 weeks, then re-test catalyst efficiency. If P0420 clears on its own, you save $400–650.",
  totalCost: { min: 490, max: 990 },
} as const;

function StatusDot({ status }: { status: string }) {
  if (status === "ready") return <CheckCircle2 size={14} className="text-[#10B981]" />;
  if (status === "pending") return <CircleAlert size={14} className="text-[#F59E0B]" />;
  if (status === "notReady") return <CircleAlert size={14} className="text-[#EF4444]" />;
  return <CircleSlash size={14} className="text-[#1A1A1A]/30" />;
}

export default function SampleReport() {
  const [mode, setMode] = useState<ViewMode>("easy");

  return (
    <section
      id="sample"
      className="px-4 md:px-6 lg:px-8 pb-8 md:pb-12 space-y-4 md:space-y-5"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-white border border-black/5 p-8 md:p-12 text-center"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-semibold tracking-wider mb-4">
          SAMPLE REPORT · LIVE PREVIEW
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05]">
          What you'll actually see.
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
          A complete AI repair report — exactly what shows up on your phone
          after a 10-second scan. Simple view for you. Pro view for your mechanic.
        </p>

        {/* View toggle */}
        <div className="mt-7 inline-flex items-center p-1 rounded-full bg-[#F5F1EA] border border-black/5">
          <button
            type="button"
            onClick={() => setMode("easy")}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition ${
              mode === "easy"
                ? "bg-[#1A1A1A] text-white shadow-sm"
                : "text-[#1A1A1A]/55 hover:text-[#1A1A1A]"
            }`}
          >
            <User size={14} />
            Easy view
          </button>
          <button
            type="button"
            onClick={() => setMode("pro")}
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition ${
              mode === "pro"
                ? "bg-[#1A1A1A] text-white shadow-sm"
                : "text-[#1A1A1A]/55 hover:text-[#1A1A1A]"
            }`}
          >
            <Cog size={14} />
            Pro view
          </button>
        </div>
      </motion.div>

      {/* Dashboard container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-[#FAFAF7] border border-black/5 overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
      >
        {/* Top strip — vehicle + scan */}
        <div className="px-6 md:px-10 py-5 md:py-6 border-b border-black/5 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
              <Car size={13} /> Vehicle
            </div>
            <div className="text-xl md:text-2xl font-bold text-[#1A1A1A] mt-1">
              {SAMPLE.vehicle.year} {SAMPLE.vehicle.make} {SAMPLE.vehicle.model}{" "}
              <span className="text-[#1A1A1A]/55 font-semibold">
                {SAMPLE.vehicle.engine}
              </span>
            </div>
            <div className="text-sm text-[#1A1A1A]/55 mt-0.5 font-mono flex flex-wrap items-center gap-x-3 gap-y-0.5">
              <span>{SAMPLE.vehicle.mileage} mi</span>
              {mode === "pro" && (
                <>
                  <span className="text-[#1A1A1A]/20">·</span>
                  <span>VIN {SAMPLE.vehicle.vinMasked}</span>
                </>
              )}
            </div>
          </div>
          <div className="md:text-right">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest md:justify-end">
              <Clock size={13} /> Scanned
            </div>
            <div className="text-base font-semibold text-[#1A1A1A] mt-1">
              {SAMPLE.meta.scannedAgo}
            </div>
            <div className="text-xs font-mono text-[#10B981] mt-0.5 flex md:justify-end items-center gap-2">
              analysis {SAMPLE.meta.analysisSeconds}s
              {mode === "pro" && (
                <>
                  <span className="text-[#1A1A1A]/20">·</span>
                  <span className="text-[#2563EB]">
                    {SAMPLE.meta.aiModel}
                  </span>
                  {SAMPLE.meta.sourceCharm && (
                    <>
                      <span className="text-[#1A1A1A]/20">·</span>
                      <span className="text-[#E07856]">CHARM ✓</span>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {mode === "easy" ? (
              <motion.div
                key="easy"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <EasyView />
              </motion.div>
            ) : (
              <motion.div
                key="pro"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <ProView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer strip — cost + CTAs */}
        <div className="px-6 md:px-10 py-6 md:py-7 bg-[#1A1A1A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-[10px] font-mono text-white/40 tracking-widest">
              ESTIMATED REPAIR COST — ALL ISSUES
            </div>
            <div className="text-3xl md:text-4xl font-extrabold tabular-nums mt-1">
              ${SAMPLE.totalCost.min}{" "}
              <span className="text-white/30 font-bold">–</span> $
              {SAMPLE.totalCost.max}
            </div>
            {mode === "pro" && (
              <div className="text-xs font-mono text-white/40 mt-1">
                based on priority-ordered fix plan (see correlation)
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F59E0B] text-[#1A1A1A] font-semibold hover:bg-white transition"
            >
              <Wrench size={16} />
              Try with your car
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition"
            >
              <Share2 size={16} />
              Send to mechanic
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────── Easy view */
function EasyView() {
  const issueRingColor = "#10B981";
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
      {/* Health ring */}
      <div className="md:col-span-4 rounded-[24px] bg-[#1A1A1A] text-white p-7 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
        <div className="text-[10px] font-mono text-white/40 tracking-widest">
          HEALTH SCORE
        </div>
        <div>
          <div className="flex items-end gap-1">
            <div className="text-7xl md:text-8xl font-extrabold tabular-nums leading-none">
              {SAMPLE.health.overall}
            </div>
            <div className="text-xl text-white/30 mb-2 font-mono">/100</div>
          </div>
          <div className="mt-4">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold"
              style={{
                background: `${issueRingColor}20`,
                color: issueRingColor,
              }}
            >
              {SAMPLE.health.grade} · {SAMPLE.health.label}
            </span>
          </div>
        </div>
        <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border-[12px] border-[#10B981]/15 pointer-events-none" />
      </div>

      {/* AI Summary */}
      <div className="md:col-span-8 rounded-[24px] bg-white border border-black/5 p-7 flex flex-col gap-4 min-h-[260px]">
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#2563EB] tracking-widest">
          <Sparkles size={13} /> AI SUMMARY
        </div>
        <p className="text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed flex-1 italic">
          {SAMPLE.aiSummary}
        </p>
        <div className="flex items-center gap-2 text-[11px] font-mono text-[#1A1A1A]/35 pt-2 border-t border-black/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          Generated from 706 GB of vehicle-specific repair knowledge
        </div>
      </div>

      {/* Simplified issues */}
      <div className="md:col-span-12 rounded-[24px] bg-white border border-black/5 p-6 md:p-7">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest">
            <AlertTriangle size={13} /> {SAMPLE.faults.length} ISSUES FOUND
          </div>
          <span className="text-[10px] font-mono text-[#1A1A1A]/35 tracking-widest">
            PRIORITY ORDER
          </span>
        </div>
        <ul className="space-y-3">
          {SAMPLE.faults.map((f) => (
            <li
              key={f.code}
              className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#FAFAF7] border border-black/5"
            >
              <span
                className="font-mono text-base font-bold shrink-0 md:w-20 md:pt-1"
                style={{ color: f.severityColor }}
              >
                {f.code}
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#1A1A1A]">{f.title}</div>
                <p className="text-sm text-[#1A1A1A]/65 mt-1 leading-relaxed">
                  {f.simple}
                </p>
              </div>
              <div className="md:text-right shrink-0 flex md:flex-col items-center md:items-end gap-3 md:gap-1">
                <div className="text-sm md:text-base font-bold text-[#1A1A1A] tabular-nums">
                  ${f.cost.min}–${f.cost.max}
                </div>
                <div
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                  style={{
                    background: `${f.severityColor}1F`,
                    color: f.severityColor,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: f.severityColor }}
                  />
                  {f.urgency}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── Pro view */
function ProView() {
  return (
    <div className="space-y-5">
      {/* Row 1: 5-dimension health scores */}
      <div className="rounded-[24px] bg-white border border-black/5 p-6 md:p-7">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest">
            <Gauge size={13} /> SYSTEM HEALTH · 5 SUBSYSTEMS
          </div>
          <span className="text-xs font-mono text-[#1A1A1A]/60">
            OVERALL{" "}
            <span className="text-[#1A1A1A] font-bold tabular-nums">
              {SAMPLE.health.overall}
            </span>
            <span className="text-[#1A1A1A]/30">/100</span>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {SAMPLE.health.subsystems.map((sub) => (
            <div key={sub.name} className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold text-[#1A1A1A]/70">
                  {sub.name}
                </span>
                <span
                  className="text-lg font-extrabold tabular-nums"
                  style={{ color: sub.color }}
                >
                  {sub.score}
                </span>
              </div>
              <div className="h-1.5 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${sub.score}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ background: sub.color }}
                  className="h-full rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Fault cards (detailed) */}
      <div className="space-y-4">
        {SAMPLE.faults.map((f) => (
          <div
            key={f.code}
            className="rounded-[24px] bg-white border border-black/5 p-6 md:p-7"
          >
            {/* Fault header */}
            <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div className="flex items-start gap-4">
                <div
                  className="font-mono text-2xl md:text-3xl font-extrabold"
                  style={{ color: f.severityColor }}
                >
                  {f.code}
                </div>
                <div>
                  <div className="text-base md:text-lg font-bold text-[#1A1A1A] leading-snug">
                    {f.title}
                  </div>
                  <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A]/55">
                      {f.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#1A1A1A]/35">
                      LABOR {f.laborHours}h
                    </span>
                    {f.charmSourced && (
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E07856]/10 text-[#E07856]">
                        CHARM ✓
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-lg md:text-xl font-bold text-[#1A1A1A] tabular-nums">
                  ${f.cost.min}–${f.cost.max}
                </div>
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                  style={{
                    background: `${f.severityColor}1F`,
                    color: f.severityColor,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: f.severityColor }}
                  />
                  {f.urgency}
                </span>
              </div>
            </div>

            {/* Technical explanation */}
            <p className="text-sm text-[#1A1A1A]/75 leading-relaxed mb-5">
              {f.technical}
            </p>

            {/* Grid: causes + steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Causes with probability */}
              <div>
                <div className="text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest mb-3">
                  PROBABLE CAUSES
                </div>
                <ul className="space-y-2.5">
                  {f.causes.map((c, i) => (
                    <li key={i}>
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="text-sm text-[#1A1A1A]/80">
                          {c.cause}
                        </span>
                        <span
                          className="text-xs font-mono font-bold tabular-nums"
                          style={{ color: f.severityColor }}
                        >
                          {c.probability}%
                        </span>
                      </div>
                      <div className="h-1 bg-[#1A1A1A]/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.probability}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.08 }}
                          style={{ background: f.severityColor }}
                          className="h-full"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnostic steps */}
              <div>
                <div className="text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest mb-3">
                  DIAGNOSTIC STEPS
                </div>
                <ol className="space-y-2">
                  {f.steps.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-[#1A1A1A]/75 leading-relaxed"
                    >
                      <span
                        className="font-mono font-bold text-xs shrink-0 mt-0.5 tabular-nums"
                        style={{ color: f.severityColor }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Monitoring conditions */}
            <div className="mt-5 pt-4 border-t border-black/5 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <div className="text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest">
                  WHEN MONITORED
                </div>
                <div className="text-xs text-[#1A1A1A]/70 mt-1">
                  {f.whenMonitored}
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest">
                  SET CONDITION
                </div>
                <div className="text-xs text-[#1A1A1A]/70 mt-1 font-mono">
                  {f.setCondition}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Row 3: Freeze Frame + Readiness + Correlation */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        {/* Freeze Frame */}
        <div className="md:col-span-7 rounded-[24px] bg-white border border-black/5 p-6 md:p-7">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest">
              <LineChart size={13} /> FREEZE FRAME DATA
            </div>
            <span className="text-[10px] font-mono text-[#1A1A1A]/35">
              CAPTURED AT FAULT
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-3">
            {SAMPLE.freezeFrame.map((p) => (
              <div key={p.label}>
                <div className="text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-wider">
                  {p.label}
                </div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-base md:text-lg font-bold tabular-nums ${
                      p.ok ? "text-[#1A1A1A]" : "text-[#F59E0B]"
                    }`}
                  >
                    {p.value}
                  </span>
                  <span className="text-xs font-mono text-[#1A1A1A]/35">
                    {p.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Readiness Monitors */}
        <div className="md:col-span-5 rounded-[24px] bg-[#1A1A1A] text-white p-6 md:p-7">
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest mb-4">
            <Activity size={13} /> I/M READINESS
          </div>
          <ul className="space-y-2">
            {SAMPLE.readiness.map((m) => (
              <li
                key={m.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-white/80">{m.name}</span>
                <span className="flex items-center gap-1.5 text-xs font-mono">
                  <StatusDot status={m.status} />
                  <span
                    className={
                      m.status === "ready"
                        ? "text-[#10B981]"
                        : m.status === "pending"
                          ? "text-[#F59E0B]"
                          : m.status === "notReady"
                            ? "text-[#EF4444]"
                            : "text-white/30"
                    }
                  >
                    {m.status === "ready"
                      ? "Ready"
                      : m.status === "pending"
                        ? "Pending"
                        : m.status === "notReady"
                          ? "Not Ready"
                          : "N/A"}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Fault Correlation */}
        <div className="md:col-span-12 rounded-[24px] bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white p-6 md:p-7">
          <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 tracking-widest mb-3">
            <FlaskConical size={13} /> MULTI-CODE CORRELATION
          </div>
          <p className="text-base md:text-lg leading-relaxed text-white/95">
            {SAMPLE.correlation}
          </p>
          <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-white/50 pt-3 border-t border-white/10">
            <Info size={12} />
            This analysis is only possible when multiple codes are present and
            the vehicle is known (CHARM matched).
          </div>
        </div>
      </div>

      {/* Meta footer */}
      <div className="rounded-[24px] bg-white border border-black/5 p-4 md:p-5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#1A1A1A]/40">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Database size={12} /> 706 GB CHARM
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles size={12} /> {SAMPLE.meta.aiModel}
          </span>
          <span className="flex items-center gap-1.5">
            <Zap size={12} /> {SAMPLE.meta.analysisSeconds}s ·{" "}
            {SAMPLE.meta.dataPoints} data points
          </span>
        </div>
        <span>Raw JSON available via /api/v1/report/{"{id}"}</span>
      </div>
    </div>
  );
}
