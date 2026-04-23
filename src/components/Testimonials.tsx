import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Check engine light came on the morning I was buying a used Tacoma. Scanned it in the parking lot. Report said P0171 — vacuum leak, $80 fix. Seller dropped $600. OBDX paid for itself before I downloaded the app.",
    name: "Marcus R.",
    role: "DIY owner",
    location: "Austin, TX",
    vehicle: "2015 Toyota Tacoma",
    rating: 5,
  },
  {
    quote:
      "I run an independent shop. I use OBDX on every customer intake. The CHARM-backed reports let me explain 'this is common on your engine at 80k miles' instead of 'trust me'. Conversion to repair is up 40%.",
    name: "Linh V.",
    role: "Shop owner",
    location: "Garden Grove, CA",
    vehicle: "Vanh's Auto Repair",
    rating: 5,
  },
  {
    quote:
      "Bought a used F-150 without OBDX. Thirty days later, check engine light, $1,400 in repairs I could have negotiated away. Bought one for my daughter's car the same week.",
    name: "Dan K.",
    role: "Dad who learned the hard way",
    location: "Milwaukee, WI",
    vehicle: "2017 Ford F-150",
    rating: 5,
  },
];

const STATS = [
  { value: "4.9", unit: "/5", label: "average rating" },
  { value: "12k+", unit: "", label: "reports run" },
  { value: "98%", unit: "", label: "would recommend" },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
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
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold tracking-wider mb-4">
          WHAT PEOPLE SAY
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05]">
          Real drivers.
          <br />
          <span className="text-[#1A1A1A]/40">Real savings.</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`${i > 0 ? "border-l border-black/10 pl-8 md:pl-12" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tabular-nums">
                {s.value}
                <span className="text-[#F59E0B] text-xl md:text-2xl ml-0.5">
                  {s.unit}
                </span>
              </div>
              <div className="text-xs font-mono text-[#1A1A1A]/55 uppercase tracking-wider mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {TESTIMONIALS.map((t, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`rounded-[28px] p-7 md:p-8 flex flex-col gap-5 min-h-[360px] ${
              i === 1
                ? "bg-[#1A1A1A] text-white"
                : "bg-white border border-black/5 text-[#1A1A1A]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-0.5 ${
                  i === 1 ? "text-[#F59E0B]" : "text-[#F59E0B]"
                }`}
              >
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <Quote
                size={20}
                className={i === 1 ? "text-white/20" : "text-[#1A1A1A]/15"}
              />
            </div>

            <p
              className={`text-base md:text-lg leading-relaxed flex-1 ${
                i === 1 ? "text-white/90" : "text-[#1A1A1A]/80"
              }`}
            >
              “{t.quote}”
            </p>

            <div
              className={`pt-4 border-t ${
                i === 1 ? "border-white/10" : "border-black/5"
              }`}
            >
              <div className="font-bold">{t.name}</div>
              <div
                className={`text-xs mt-0.5 ${
                  i === 1 ? "text-white/55" : "text-[#1A1A1A]/55"
                }`}
              >
                {t.role} · {t.location}
              </div>
              <div
                className={`text-[11px] font-mono mt-1.5 ${
                  i === 1 ? "text-white/35" : "text-[#1A1A1A]/35"
                }`}
              >
                {t.vehicle}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
