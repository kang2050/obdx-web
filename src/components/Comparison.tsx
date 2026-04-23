import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { COMPETITORS } from "@/lib/constants";

const COLS = [
  { key: "name", label: "Product" },
  { key: "price", label: "Price" },
  { key: "ai", label: "AI" },
  { key: "plain", label: "Plain English" },
  { key: "advantage", label: "OBDX advantage" },
] as const;

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check size={18} className="text-[#10B981]" strokeWidth={2.5} />;
  }
  if (value === false) {
    return <X size={18} className="text-[#1A1A1A]/30" strokeWidth={2.5} />;
  }
  if (value === "Partial" || value === "Basic") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#F59E0B]">
        <Minus size={14} />
        {value}
      </span>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export default function Comparison() {
  return (
    <section
      id="compare"
      className="px-4 md:px-6 lg:px-8 pb-8 md:pb-12 space-y-4 md:space-y-5"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-[28px] bg-[#1A1A1A] text-white p-8 md:p-12 text-center relative overflow-hidden"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-semibold tracking-wider mb-4">
          THE COMPETITION
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
          $60 scanners.
          <br />
          <span className="text-white/40">$3,000 scanners.</span>
          <br />
          <span className="text-[#F59E0B]">Or free.</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/60 max-w-xl mx-auto">
          OBDX uses your existing $10 scanner and beats every paid competitor on
          AI depth and clarity.
        </p>
      </motion.div>

      {/* Desktop table */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="hidden md:block rounded-[28px] bg-white border border-black/5 overflow-hidden"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-[#FAFAF7] border-b border-black/5">
              {COLS.map((col) => (
                <th
                  key={col.key}
                  className="text-left px-6 py-4 text-xs font-mono text-[#1A1A1A]/50 tracking-wider font-semibold uppercase"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* OBDX row (highlighted) */}
            <tr className="bg-[#2563EB]/5 border-b border-[#2563EB]/15">
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-2 font-bold text-[#2563EB] text-base">
                  OBDX
                  <span className="px-2 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] font-semibold">
                    YOU
                  </span>
                </span>
              </td>
              <td className="px-6 py-5 font-bold text-[#1A1A1A]">
                Free
                <span className="text-xs text-[#1A1A1A]/50 font-normal ml-1">
                  / Plus $4.99
                </span>
              </td>
              <td className="px-6 py-5">
                <Check size={18} className="text-[#10B981]" strokeWidth={2.5} />
              </td>
              <td className="px-6 py-5">
                <Check size={18} className="text-[#10B981]" strokeWidth={2.5} />
              </td>
              <td className="px-6 py-5 text-sm text-[#1A1A1A]/70">
                Vehicle-specific + 706 GB knowledge base
              </td>
            </tr>
            {COMPETITORS.map((c) => (
              <tr key={c.name} className="border-b border-black/5 last:border-0">
                <td className="px-6 py-4 font-semibold text-[#1A1A1A]">
                  {c.name}
                </td>
                <td className="px-6 py-4 text-[#1A1A1A]/75">{c.price}</td>
                <td className="px-6 py-4">
                  <Cell value={c.ai} />
                </td>
                <td className="px-6 py-4">
                  <Cell value={c.plain} />
                </td>
                <td className="px-6 py-4 text-sm text-[#1A1A1A]/55 italic">
                  {c.advantage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-4">
        <div className="rounded-[28px] bg-[#2563EB] text-white p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xl font-bold">OBDX</span>
            <span className="px-2 py-0.5 rounded-full bg-white text-[#2563EB] text-[10px] font-bold">
              YOU
            </span>
          </div>
          <div className="text-3xl font-extrabold mb-3">
            Free <span className="text-base text-white/70 font-normal">or $4.99/mo</span>
          </div>
          <div className="text-sm text-white/85">
            ✓ AI · ✓ Plain English · Vehicle-specific + 706 GB knowledge
          </div>
        </div>
        {COMPETITORS.map((c) => (
          <div
            key={c.name}
            className="rounded-[28px] bg-white border border-black/5 p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-[#1A1A1A]">{c.name}</span>
              <span className="text-sm text-[#1A1A1A]/60">{c.price}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1 text-[#1A1A1A]/65">
                AI <Cell value={c.ai} />
              </span>
              <span className="flex items-center gap-1 text-[#1A1A1A]/65">
                Plain <Cell value={c.plain} />
              </span>
            </div>
            <div className="text-xs text-[#1A1A1A]/55 italic mt-2">
              {c.advantage}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
