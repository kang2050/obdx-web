import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  return (
    <section
      id="pricing"
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
          PRICING
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05]">
          Pay nothing.
          <br />
          <span className="text-[#1A1A1A]/40">Or $4.99 a month.</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-[#1A1A1A]/60 max-w-xl mx-auto">
          Free covers the basics. Plus unlocks unlimited vehicle-specific AI
          analysis. Shop is for independent repair businesses.
        </p>
      </motion.div>

      {/* Pricing grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {PRICING_PLANS.map((plan, i) => {
          const highlighted = plan.highlighted;
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-[28px] border p-7 md:p-8 flex flex-col ${
                highlighted
                  ? "bg-[#1A1A1A] text-white border-white/10 md:scale-[1.02] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)]"
                  : "bg-white text-[#1A1A1A] border-black/5"
              }`}
            >
              {highlighted && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F59E0B] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles size={10} />
                  Most popular
                </span>
              )}

              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
              </div>
              <p
                className={`text-sm ${
                  highlighted ? "text-white/60" : "text-[#1A1A1A]/55"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 mb-7 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    highlighted ? "text-white/55" : "text-[#1A1A1A]/45"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        highlighted ? "text-[#F59E0B]" : "text-[#2563EB]"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span
                      className={
                        highlighted ? "text-white/85" : "text-[#1A1A1A]/75"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#sample"
                className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold transition ${
                  highlighted
                    ? "bg-[#F59E0B] text-[#1A1A1A] hover:bg-white"
                    : "bg-[#1A1A1A] text-white hover:bg-[#2563EB]"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
