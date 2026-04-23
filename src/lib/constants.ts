export const ASSETS = {
  logoIcon: "/brand/logo/obdx-logo-icon-v2.svg",
  logoDark: "/brand/logo/obdx-logo-primary-dark-v2.svg",
  logoLight: "/brand/logo/obdx-logo-primary-light-v2.svg",
  logoTagline: "/brand/logo/obdx-logo-tagline-dark-v2.svg",

  sceneRide: "/brand/scenes/obdx-scene-ride-16x9.png",
  sceneCheckup: "/brand/scenes/obdx-scene-checkup-16x9.png",
  sceneDone: "/brand/scenes/obdx-scene-done-16x9.png",
  sceneRideSquare: "/brand/scenes/obdx-scene-ride-square.png",
  sceneCheckupSquare: "/brand/scenes/obdx-scene-checkup-square.png",
  sceneDoneSquare: "/brand/scenes/obdx-scene-done-square.png",

  wrench: "/brand/ip/wrench/default.png",
  wrenchUncle: "/brand/ip/wrench-uncle/default.png",
  wrenchUncleWithDash: "/brand/ip/wrench-uncle/with-dash.png",
  dash: "/brand/ip/dash/default.png",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Compare", href: "#compare" },
] as const;

export const STATS = [
  { value: "706", unit: "GB", label: "Repair Knowledge" },
  { value: "82", unit: "", label: "Car Brands" },
  { value: "24,935", unit: "", label: "Vehicle Models" },
  { value: "10", unit: "sec", label: "Diagnosis" },
] as const;

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/forever",
    description: "Get started with basic diagnostics",
    features: [
      "3 scans per month",
      "Basic fault code reading",
      "Health score overview",
      "1 vehicle profile",
    ],
    cta: "Download Free",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$4.99",
    period: "/month",
    description: "Full AI-powered diagnostics",
    features: [
      "Unlimited scans",
      "Complete AI analysis",
      "Vehicle-specific insights",
      "Repair cost estimates",
      "History & trends",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Shop",
    price: "$19.99",
    period: "/month",
    description: "For independent repair shops",
    features: [
      "Everything in Plus",
      "Branded reports",
      "Customer management",
      "Multi-vehicle scanning",
      "Business analytics",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
] as const;

export const COMPETITORS = [
  { name: "FIXD", price: "$59.99", app: true, ai: "Basic", plain: true, advantage: "Deeper AI + Free" },
  { name: "BlueDriver", price: "$99.95", app: true, ai: false, plain: false, advantage: "AI + 50% cheaper" },
  { name: "CarMD", price: "$99.99", app: true, ai: false, plain: "Partial", advantage: "Full AI + Modern UX" },
  { name: "Innova", price: "$200+", app: false, ai: false, plain: false, advantage: "4x cheaper + AI" },
  { name: "Snap-on", price: "$3,000+", app: false, ai: false, plain: false, advantage: "Different league" },
] as const;
