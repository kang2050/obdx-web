import { ASSETS } from "@/lib/constants";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
    { label: "Compare", href: "#compare" },
    { label: "Sample report", href: "#sample" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "mailto:hello@obdx.ai" },
  ],
  Legal: [
    { label: "Privacy", href: "mailto:hello@obdx.ai?subject=Privacy%20policy" },
    { label: "Terms", href: "mailto:hello@obdx.ai?subject=Terms" },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
      <div className="rounded-[28px] bg-[#1A1A1A] text-white p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
          <div className="col-span-2">
            <img
              src={ASSETS.logoDark}
              alt="OBDX"
              className="h-7 md:h-8 mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/55 max-w-xs leading-relaxed">
              AI car diagnostics for the rest of us. Plug in any $10 OBD
              scanner, scan a QR code, get an AI-written repair report in plain
              English.
            </p>
            <p className="text-xs font-mono text-white/30 mt-6">
              obdx.ai · Made for North America
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-mono text-white/40 tracking-wider uppercase mb-4">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/75 hover:text-[#F59E0B] transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-xs text-white/40 font-mono">
            © 2026 OBDX. Your car, decoded.
          </span>
          <span className="text-xs text-white/40">
            Built with AI on 706 GB of vehicle repair knowledge.
          </span>
        </div>
      </div>
    </footer>
  );
}
