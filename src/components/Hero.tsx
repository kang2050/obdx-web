import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Gauge, Database, Car, Clock } from "lucide-react";
import { ASSETS, NAV_LINKS, STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-12 auto-rows-min">
        {/* Navbar bento */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-12 flex items-center justify-between px-5 md:px-6 py-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm"
        >
          <img src={ASSETS.logoLight} alt="OBDX" className="h-7 md:h-8" />
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#1A1A1A]/70">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-[#2563EB] transition">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#showcase"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-sm font-semibold hover:bg-[#2563EB] transition"
          >
            See it in action
            <ArrowRight size={14} />
          </a>
        </motion.header>

        {/* Big hero bento (8 cols, 2 rows tall) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-8 md:row-span-2 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#FAFAF7] via-[#F5F1EA] to-[#EBE4D5] border border-black/5 p-8 md:p-12 lg:p-14 min-h-[520px] flex flex-col justify-between shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)]"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#1A1A1A 1px, transparent 1px), linear-gradient(90deg, #1A1A1A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold tracking-wide mb-7">
              <Sparkles size={12} />
              AI-POWERED DIAGNOSTICS
            </span>
            <h1 className="text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold tracking-tight text-[#1A1A1A] leading-[1.02]">
              Your car,
              <br />
              <span className="text-[#2563EB]">decoded</span>
              <span className="text-[#E07856]">.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#1A1A1A]/65 leading-relaxed max-w-md">
              Plug in a $10 OBD scanner. Scan the QR code. Get a full AI repair report in plain English — in 10 seconds.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#showcase"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white font-semibold hover:bg-[#2563EB] transition"
              >
                See it in action
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 text-[#1A1A1A] font-semibold hover:bg-black/5 transition"
              >
                How it works
              </a>
            </div>
          </div>

          {/* Wrench Uncle mascot — bottom right, vignette gray bg masked to bg */}
          <motion.img
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            src={ASSETS.wrenchUncle}
            alt="Wrench Uncle, the OBDX mechanic mascot"
            className="absolute -bottom-10 -right-12 md:-bottom-14 md:-right-14 w-60 md:w-[20rem] lg:w-[26rem] object-contain pointer-events-none select-none mix-blend-multiply"
            style={{
              maskImage:
                "radial-gradient(ellipse 62% 75% at 52% 38%, black 50%, transparent 95%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 62% 75% at 52% 38%, black 50%, transparent 95%)",
            }}
          />
        </motion.div>

        {/* Bento: diagnosis time (dark) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-4 rounded-[28px] bg-[#1A1A1A] text-white p-6 md:p-7 flex flex-col justify-between min-h-[240px] relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-white/40 tracking-wider">
            <Clock size={13} />
            DIAGNOSIS TIME
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-extrabold tabular-nums leading-none">
              10<span className="text-[#F59E0B] text-3xl ml-1">sec</span>
            </div>
            <div className="text-sm text-white/60 mt-3">From plug-in to full AI report</div>
          </div>
          {/* Pulse dot */}
          <div className="absolute top-6 right-6 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] font-mono text-white/40">LIVE</span>
          </div>
        </motion.div>

        {/* Bento: knowledge base (terracotta) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-4 rounded-[28px] bg-[#E07856] text-white p-6 md:p-7 flex flex-col justify-between min-h-[240px] relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-white/70 tracking-wider">
            <Database size={13} />
            KNOWLEDGE BASE
          </div>
          <div>
            <div className="text-6xl md:text-7xl font-extrabold tabular-nums leading-none">
              706<span className="text-white/80 text-3xl ml-1">GB</span>
            </div>
            <div className="text-sm text-white/85 mt-3">
              82 brands · 24,935 vehicle models
            </div>
          </div>
          {/* Decorative car icon bg */}
          <Car
            size={120}
            className="absolute -bottom-4 -right-4 text-white/10"
            strokeWidth={1.5}
          />
        </motion.div>

        {/* Stats row (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="md:col-span-12 rounded-[28px] bg-white border border-black/5 p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)]"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`${i > 0 ? "md:border-l md:border-black/5 md:pl-6" : ""}`}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tabular-nums leading-none">
                {s.value}
                {s.unit && (
                  <span className="text-[#2563EB] text-xl md:text-2xl ml-1 font-bold">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="text-sm text-[#1A1A1A]/55 mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Feature preview bento row */}
        <motion.div
          id="features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-6 rounded-[28px] bg-[#FAFAF7] border border-black/5 p-6 md:p-7 min-h-[200px] flex flex-col justify-between scroll-mt-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#1A1A1A]/40 tracking-wider">
            <Gauge size={13} />
            VEHICLE-SPECIFIC
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
              Not generic code lookup.
            </h3>
            <p className="text-sm text-[#1A1A1A]/60 mt-2 max-w-sm">
              OBDX knows your exact model &amp; engine variant. P0301 on a Civic
              ≠ P0301 on an F-150.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="md:col-span-6 rounded-[28px] bg-[#2563EB] text-white p-6 md:p-7 min-h-[200px] flex flex-col justify-between relative overflow-hidden"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-white/60 tracking-wider">
            <Sparkles size={13} />
            PLAIN ENGLISH
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              No jargon.
              <br />
              Just what's wrong &amp; how much.
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
