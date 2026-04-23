/**
 * Tier 1 — Static DTC reference data
 *
 * These 5 records are synced verbatim from `backend/src/dtc_data.py`, which
 * contains 87 OBD-II fault codes with curated causes, diagnostic procedures,
 * and cost/labor estimates. The fields below (code, description, causes %,
 * diagnostic_steps, cost range, labor hours) are NOT AI-generated — they are
 * the authoritative repair knowledge the backend serves via /api/v1/dtc/{code}
 * and feeds into AI diagnosis prompts.
 *
 * Everything else on the sample report (vehicle, plain-English explanation,
 * technical waveform narrative, urgency label, multi-code correlation) is
 * Tier 2 (CHARM vehicle-specific) or Tier 3 (AI-generated). Those are still
 * hardcoded here for the demo because AI Key + CHARM LMDB are not wired up
 * in the live backend yet.
 *
 * Last sync: 2026-04-23
 */

export const DTC_DB_TOTAL = 87;
export const DTC_DB_SOURCE_PATH = "backend/src/dtc_data.py";

export interface DTCCause {
  cause: string;
  probability: number;
}

export type DTCSeverity = "high" | "medium" | "low";

export interface DTCRecord {
  code: string;
  description_en: string;
  category: string;
  severity: DTCSeverity;
  common_causes: DTCCause[];
  /** Leading numbers stripped; UI renders its own index */
  diagnostic_steps: string[];
  estimated_cost_min: number;
  estimated_cost_max: number;
  labor_hours: number;
}

export const DTC_FIXTURES: Record<string, DTCRecord> = {
  P0420: {
    code: "P0420",
    description_en: "Catalyst System Efficiency Below Threshold (Bank 1)",
    category: "emission",
    severity: "high",
    common_causes: [
      { cause: "Aged/failed catalytic converter", probability: 40 },
      {
        cause: "Faulty upstream O₂ sensor causing mixture issues",
        probability: 20,
      },
      {
        cause: "Faulty downstream O₂ sensor (false reading)",
        probability: 15,
      },
      { cause: "Exhaust leak", probability: 15 },
      {
        cause: "Engine mechanical issue causing oil burning",
        probability: 10,
      },
    ],
    diagnostic_steps: [
      "Compare upstream and downstream O₂ sensor waveforms",
      "Check catalytic converter inlet/outlet temperature difference",
      "Inspect exhaust system for leaks",
      "Check for oil burning symptoms",
      "Replace catalytic converter if confirmed failed",
    ],
    estimated_cost_min: 200,
    estimated_cost_max: 1500,
    labor_hours: 2.0,
  },
  P0301: {
    code: "P0301",
    description_en: "Cylinder 1 Misfire Detected",
    category: "ignition",
    severity: "high",
    common_causes: [
      { cause: "Faulty cylinder 1 spark plug", probability: 35 },
      { cause: "Faulty cylinder 1 ignition coil", probability: 25 },
      { cause: "Faulty cylinder 1 injector", probability: 20 },
      { cause: "Low compression", probability: 15 },
      { cause: "Valve clearance issue", probability: 5 },
    ],
    diagnostic_steps: [
      "Replace cylinder 1 spark plug",
      "Swap ignition coil to test",
      "Check injector operation",
      "Measure cylinder 1 compression",
    ],
    estimated_cost_min: 15,
    estimated_cost_max: 300,
    labor_hours: 1.0,
  },
  P0171: {
    code: "P0171",
    description_en: "System Too Lean (Bank 1)",
    category: "fuel_metering",
    severity: "high",
    common_causes: [
      { cause: "Vacuum leak in intake system", probability: 40 },
      { cause: "Dirty or faulty MAF sensor", probability: 25 },
      { cause: "Insufficient fuel pump pressure", probability: 15 },
      { cause: "Clogged or leaking fuel injector", probability: 10 },
      { cause: "Faulty O₂ sensor", probability: 10 },
    ],
    diagnostic_steps: [
      "Inspect intake duct for cracks or loose clamps",
      "Check MAF sensor readings for normal range",
      "Test fuel pressure (should be 50–58 PSI)",
      "Inspect injector spray pattern",
      "Check O₂ sensor signal waveform",
    ],
    estimated_cost_min: 30,
    estimated_cost_max: 300,
    labor_hours: 1.5,
  },
  P0442: {
    code: "P0442",
    description_en: "EVAP System Small Leak Detected",
    category: "emission",
    severity: "low",
    common_causes: [
      { cause: "Worn fuel cap seal", probability: 40 },
      { cause: "Hairline crack in EVAP hose", probability: 25 },
      { cause: "EVAP canister port leak", probability: 20 },
      { cause: "Fuel tank port leak", probability: 15 },
    ],
    diagnostic_steps: [
      "Replace fuel cap and retest",
      "Smoke test to locate leak",
      "Inspect all EVAP hose fittings",
      "Check EVAP canister",
    ],
    estimated_cost_min: 10,
    estimated_cost_max: 85,
    labor_hours: 1.0,
  },
  P0700: {
    code: "P0700",
    description_en: "Transmission Control System Malfunction",
    category: "transmission",
    severity: "high",
    common_causes: [
      { cause: "TCM has stored additional fault codes", probability: 35 },
      { cause: "Transmission wiring issue", probability: 25 },
      { cause: "Faulty transmission solenoid", probability: 20 },
      { cause: "Transmission mechanical failure", probability: 15 },
      { cause: "TCM failure", probability: 5 },
    ],
    diagnostic_steps: [
      "Read specific fault codes stored in TCM",
      "Check transmission fluid level and condition",
      "Inspect transmission wiring",
      "Check solenoids",
    ],
    estimated_cost_min: 70,
    estimated_cost_max: 1150,
    labor_hours: 2.0,
  },
} as const;

export function formatCostRange(min: number, max: number): string {
  return `$${min.toLocaleString()} – $${max.toLocaleString()}`;
}
