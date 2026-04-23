import { motion } from "framer-motion";
import {
  Wrench,
  QrCode,
  FileText,
  ArrowRight,
  Car,
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Wrench,
    title: "Plug in",
    desc: "Insert any $10 OBD-II scanner under your steering wheel. Bluetooth or Wi-Fi — both work.",
    color: "#1A1A1A",
  },
  {
    num: "02",
    icon: QrCode,
    title: "Scan QR",
    desc: "Device shows a QR code. Open your phone camera. Tap the link. No app install needed.",
    color: "#2563EB",
  },
  {
    num: "03",
    icon: FileText,
    title: "Read report",
    desc: "AI report opens in your browser in 10 seconds. Plain English. Cost estimates included.",
    color: "#E07856",
  },
];

const CASES = [
  {
    persona: "DIY Owner",
    vehicle: "2018 Honda Civic 1.5L Turbo",
    symptom: "Check engine light came on yesterday.",
    dtc: "P0420",
    dtcMeaning: "Catalyst System Efficiency Below Threshold",
    diagnosis:
      "Your catalytic converter is degrading. You can drive safely for 1–2 weeks, but plan a repair. Very common on 2016–2018 Civics past 80k miles. Independent shop is fine — no need for the dealer.",
    severityLabel: "Plan within 2 weeks",
    cost: "$400 – $650",
    cardClass: "bg-[#FAFAF7] text-[#1A1A1A] border-black/5",
    severityColor: "#F59E0B",
  },
  {
    persona: "Used Car Buyer",
    vehicle: "2015 Ford F-150 5.0L V8 · 108k mi",
    symptom: "Considering this truck — what am I getting into?",
    dtc: "P0316 + P0171 + P0496",
    dtcMeaning: "Misfire (cyl 1) · Lean fuel · EVAP leak",
    diagnosis:
      "Misfire = carbon buildup, typical of 5.0L past 100k. Lean and EVAP codes are cheap fixes. Show this report to the seller and negotiate ~$1,200 off the asking price.",
    severityLabel: "Negotiate before buying",
    cost: "$800 – $1,400 total",
    cardClass: "bg-[#1A1A1A] text-white border-white/10",
    severityColor: "#E07856",
  },
  {
    persona: "Repair Shop",
    vehicle: "2020 Toyota Camry 2.5L (customer)",
    symptom: "“Random shaking when I idle.”",
    dtc: "P0301",
    dtcMeaning: "Cylinder 1 Misfire Detected",
    diagnosis:
      "Most likely: spark plug or coil pack on cyl 1. Start with a $30 spark plug + 30 min labor. If misfire persists, swap the coil pack (~$60). Send the customer this branded report.",
    severityLabel: "Easy fix",
    cost: "$80 – $200",
    cardClass: "bg-[#2563EB] text-white border-white/10",
    severityColor: "#10B981",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
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
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E07856]/10 text-[#E07856] text-xs font-semibold tracking-wider mb-4">
          HOW IT WORKS
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05]">
          See it in action.
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/60 max-w-xl mx-auto">
          Three steps. Ten seconds. A real AI repair report you can show your
          mechanic — or your buyer.
        </p>
      </motion.div>

      {/* Steps */}
      <div
        id="how"
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
      >
        {STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[28px] bg-[#FAFAF7] border border-black/5 p-7 md:p-8 min-h-[220px] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#1A1A1A]/40 tracking-wider">
                  STEP {step.num}
                </span>
                <Icon size={22} style={{ color: step.color }} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#1A1A1A]/60 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Cases header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between px-2 pt-4"
      >
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold tracking-wider mb-3">
            REAL EXAMPLES
          </span>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1A1A1A] leading-tight">
            Three drivers.
            <br className="md:hidden" />{" "}
            <span className="text-[#1A1A1A]/40">Three diagnoses.</span>
          </h3>
        </div>
      </motion.div>

      {/* Cases grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        {CASES.map((c, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-[28px] border ${c.cardClass} p-6 md:p-7 flex flex-col gap-5 min-h-[460px]`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                {c.persona}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                style={{
                  background: `${c.severityColor}22`,
                  color: c.severityColor,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: c.severityColor }}
                />
                {c.severityLabel}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 opacity-70">
                <Car size={14} />
                <span className="text-xs font-medium">{c.vehicle}</span>
              </div>
              <p className="mt-2 text-base italic opacity-90">
                {c.symptom}
              </p>
            </div>

            <div
              className={`rounded-2xl p-4 ${
                c.cardClass.includes("bg-[#FAFAF7]")
                  ? "bg-white border border-black/5"
                  : "bg-white/10"
              }`}
            >
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  className="font-mono text-lg font-bold"
                  style={{ color: c.severityColor }}
                >
                  {c.dtc}
                </span>
                <span className="text-xs opacity-60">{c.dtcMeaning}</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed opacity-85 flex-1">
              {c.diagnosis}
            </p>

            <div
              className={`flex items-center justify-between pt-4 border-t ${
                c.cardClass.includes("bg-[#FAFAF7]")
                  ? "border-black/5"
                  : "border-white/10"
              }`}
            >
              <span className="text-xs font-mono opacity-50">EST. COST</span>
              <span className="text-lg font-bold">{c.cost}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-gradient-to-br from-[#E07856] to-[#C45F3F] text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            Got a check engine light? Run your own diagnosis.
          </h3>
          <p className="mt-2 text-white/85 text-sm md:text-base">
            Grab any $10 OBD-II scanner. Plug in. Scan the QR. Done.
          </p>
        </div>
        <a
          href="#sample"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1A1A1A] font-semibold hover:bg-[#1A1A1A] hover:text-white transition whitespace-nowrap"
        >
          Run a demo report
          <ArrowRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
