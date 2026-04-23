import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    q: "Do I really not need to install an app?",
    a: "Correct. Plug in any $10 OBD-II scanner, it shows a QR code, you scan it with your phone camera, and the report opens in Safari or Chrome. No App Store, no Google Play, no login. Bookmark the URL if you want to keep the report.",
  },
  {
    q: "Which OBD scanner should I buy?",
    a: "Any Bluetooth or Wi-Fi OBD-II scanner from the last 5 years — ELM327 compatible is the standard. Amazon has dozens for $10–$15. We don't push a specific brand because there's no need. If you want specifics: Vgate iCar Pro, Panlong ELM327, or BAFX Products are all fine.",
  },
  {
    q: "Does it work on my car?",
    a: "If your car was sold in the US or Canada between 1996 and today, yes. OBDX covers 82 brands and 24,935 vehicle models through the 2013 model year via the CHARM repair database, plus generic OBD-II code support for anything newer.",
  },
  {
    q: "How is this different from FIXD or BlueDriver?",
    a: "FIXD sells a $60 branded scanner that only works with their app. BlueDriver is $100. Both give you fault code translation. Only OBDX feeds codes + live data + your specific year/engine into an AI trained on 706 GB of factory repair data — so you get 'common on 2016–2018 Civics past 80k miles' instead of 'check your catalytic converter'.",
  },
  {
    q: "Is my data private?",
    a: "Reports are stored by report ID only. No account required, no email, no phone number. Share the URL with your mechanic if you want — they can't see who you are. Delete the report URL and it's gone from our system within 7 days.",
  },
  {
    q: "What if the AI is wrong?",
    a: "AI suggests likely causes in priority order with probabilities — it's not a replacement for physically testing parts. Every report has the raw DTC, freeze-frame data, and CHARM citation so a mechanic can verify. Think of OBDX as a better starting point, not a final verdict.",
  },
  {
    q: "Why is there a paid tier if the basic scan is free?",
    a: "Free covers 3 scans a month with the same AI analysis — enough for a DIY owner. Plus ($4.99/mo) unlocks unlimited scans, history, and the ability to share branded reports. Shop ($19.99/mo) adds customer management and API access for independent repair businesses.",
  },
  {
    q: "Can I try a demo without a scanner?",
    a: "Yes — scroll up to 'What you'll actually see' for a full sample report on a 2018 Civic with three real DTCs. Toggle between Easy and Pro views. That's exactly the interface you get on your phone.",
  },
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
  index,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`rounded-2xl border transition-colors ${
        open
          ? "bg-white border-black/10 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.08)]"
          : "bg-white/70 border-black/5 hover:bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4"
        aria-expanded={open}
      >
        <span
          className={`font-semibold text-[#1A1A1A] ${
            open ? "" : ""
          } text-base md:text-lg`}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open
              ? "bg-[#1A1A1A] text-white"
              : "bg-[#1A1A1A]/5 text-[#1A1A1A]/55"
          }`}
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
              <p className="text-sm md:text-base text-[#1A1A1A]/70 leading-relaxed">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section
      id="faq"
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
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A1A1A]/5 text-[#1A1A1A]/60 text-xs font-semibold tracking-wider mb-4">
          FAQ
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1A1A] leading-[1.05]">
          The questions
          <br />
          <span className="text-[#1A1A1A]/40">everyone asks first.</span>
        </h2>
      </motion.div>

      {/* Accordion */}
      <div className="space-y-3">
        {FAQS.map((item, i) => (
          <FAQItem
            key={i}
            index={i}
            q={item.q}
            a={item.a}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? null : i)}
          />
        ))}
      </div>

      {/* Helper link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center pt-3 text-sm text-[#1A1A1A]/50"
      >
        Still not sure?{" "}
        <a href="#sample" className="text-[#2563EB] hover:underline font-semibold">
          See the sample report
        </a>{" "}
        or{" "}
        <a href="mailto:hello@obdx.ai" className="text-[#2563EB] hover:underline font-semibold">
          email us
        </a>
        .
      </motion.div>
    </section>
  );
}
