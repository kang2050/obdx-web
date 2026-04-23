import { motion } from "framer-motion";
import {
  Car,
  Clock,
  Sparkles,
  AlertTriangle,
  Wrench,
  Share2,
} from "lucide-react";

const SAMPLE = {
  vehicle: "2018 Honda Civic 1.5L Turbo",
  mileage: "108,432",
  scannedAgo: "2 min ago",
  analysisTime: "9.8 sec",
  healthScore: 78,
  healthGrade: "B+",
  healthLabel: "Good",
  issues: [
    {
      dtc: "P0420",
      title: "Catalytic Converter Degradation",
      desc:
        "Catalyst efficiency is below threshold. Common on 2016–2018 Civics past 80k miles. Not urgent, but worth budgeting for.",
      severityLabel: "Plan within 2 weeks",
      severityColor: "#F59E0B",
      cost: "$400 – $650",
    },
    {
      dtc: "P0171",
      title: "Lean Fuel Condition (Bank 1)",
      desc:
        "Engine is running lean — likely a vacuum leak or dirty MAF sensor. Cheap to diagnose, cheap to fix.",
      severityLabel: "Easy fix",
      severityColor: "#10B981",
      cost: "$80 – $120",
    },
    {
      dtc: "P0496",
      title: "EVAP Flow During Non-Purge",
      desc:
        "Likely a stuck purge valve. Often resolved with a $20 part and 30 minutes of labor.",
      severityLabel: "Easy fix",
      severityColor: "#10B981",
      cost: "$40 – $80",
    },
  ],
  aiSummary:
    "Your Civic is in solid shape for 108k miles. The catalytic converter is the only item I'd plan to address in the next two weeks — it's not urgent, but past 80k miles on the 1.5L turbo it's worth budgeting for. The lean condition and EVAP code are quick, cheap fixes you can ask your mechanic to bundle into the same visit.",
  totalLow: 520,
  totalHigh: 850,
} as const;

export default function SampleReport() {
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
          after a 10-second scan. No login. No app install.
        </p>
      </motion.div>

      {/* Report container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-[#FAFAF7] border border-black/5 overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
      >
        {/* Top strip — vehicle + scan timestamp */}
        <div className="px-6 md:px-10 py-5 md:py-6 border-b border-black/5 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest">
              <Car size={13} /> Vehicle
            </div>
            <div className="text-xl md:text-2xl font-bold text-[#1A1A1A] mt-1">
              {SAMPLE.vehicle}
            </div>
            <div className="text-sm text-[#1A1A1A]/55 mt-0.5 font-mono">
              {SAMPLE.mileage} mi
            </div>
          </div>
          <div className="md:text-right">
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 uppercase tracking-widest md:justify-end">
              <Clock size={13} /> Scanned
            </div>
            <div className="text-base font-semibold text-[#1A1A1A] mt-1">
              {SAMPLE.scannedAgo}
            </div>
            <div className="text-xs font-mono text-[#10B981] mt-0.5">
              analysis time: {SAMPLE.analysisTime}
            </div>
          </div>
        </div>

        {/* Body grid */}
        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Health score card */}
          <div className="md:col-span-4 rounded-[24px] bg-[#1A1A1A] text-white p-7 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 tracking-widest">
              HEALTH SCORE
            </div>
            <div>
              <div className="flex items-end gap-1">
                <div className="text-7xl md:text-8xl font-extrabold tabular-nums leading-none">
                  {SAMPLE.healthScore}
                </div>
                <div className="text-xl text-white/30 mb-2 font-mono">/100</div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-sm font-bold">
                  {SAMPLE.healthGrade} · {SAMPLE.healthLabel}
                </span>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border-[12px] border-[#10B981]/15 pointer-events-none" />
          </div>

          {/* AI Summary card */}
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

          {/* Issues — full width */}
          <div className="md:col-span-12 rounded-[24px] bg-white border border-black/5 p-6 md:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/40 tracking-widest">
                <AlertTriangle size={13} /> 3 ISSUES FOUND
              </div>
              <span className="text-[10px] font-mono text-[#1A1A1A]/35 tracking-widest">
                PRIORITY ORDER
              </span>
            </div>
            <ul className="space-y-3">
              {SAMPLE.issues.map((issue) => (
                <li
                  key={issue.dtc}
                  className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-[#FAFAF7] border border-black/5"
                >
                  <span
                    className="font-mono text-base font-bold shrink-0 md:w-20 md:pt-1"
                    style={{ color: issue.severityColor }}
                  >
                    {issue.dtc}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[#1A1A1A]">
                      {issue.title}
                    </div>
                    <p className="text-sm text-[#1A1A1A]/65 mt-1 leading-relaxed">
                      {issue.desc}
                    </p>
                  </div>
                  <div className="md:text-right shrink-0 flex md:flex-col items-center md:items-end gap-3 md:gap-1">
                    <div className="text-sm md:text-base font-bold text-[#1A1A1A] tabular-nums">
                      {issue.cost}
                    </div>
                    <div
                      className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{
                        background: `${issue.severityColor}1F`,
                        color: issue.severityColor,
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: issue.severityColor }}
                      />
                      {issue.severityLabel}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip — total + CTAs */}
        <div className="px-6 md:px-10 py-6 md:py-7 bg-[#1A1A1A] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <div className="text-[10px] font-mono text-white/40 tracking-widest">
              TOTAL ESTIMATED REPAIR COST
            </div>
            <div className="text-3xl md:text-4xl font-extrabold tabular-nums mt-1">
              ${SAMPLE.totalLow}{" "}
              <span className="text-white/30 font-bold">–</span> $
              {SAMPLE.totalHigh}
            </div>
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
