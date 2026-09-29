import React, { useState } from "react";
import {
  Sparkles,
  Store,
  Scale,
  ArrowRight,
  BarChart3,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

type ScenarioMode = "UNDERSTAFFED" | "BALANCED" | "OVERSTAFFED";

interface StoreScenarioData {
  mode: ScenarioMode;
  label: string;
  storeType: string;
  currentHC: number;
  requiredHC: number;
  hcGap: number;
  monthlyEmployeeCost: number;
  projectedAnnualCost: number;
  operationalImpact: string;
  costImpact: string;
  mppDecision: string;
  riskWarning?: string;
}

const SCENARIOS: Record<ScenarioMode, StoreScenarioData> = {
  UNDERSTAFFED: {
    mode: "UNDERSTAFFED",
    label: "UNDERSTAFFED",
    storeType: "Retail Supermarket (Illustrative Store A)",
    currentHC: 28,
    requiredHC: 36,
    hcGap: -8,
    monthlyEmployeeCost: 28 * 5200000,
    projectedAnnualCost: 28 * 5200000 * 13,
    operationalImpact: "High overtime hours, cashier queue buildup during peak hours, delayed aisle restocking, and higher risk of staff fatigue.",
    costImpact: "Lower direct base payroll, but increased overtime expenses and potential store service loss.",
    mppDecision: "Prioritize filling the 8-person deficit through internal store transfer or targeted recruitment.",
    riskWarning: "Sustained understaffing affects store service standards and operational continuity.",
  },
  BALANCED: {
    mode: "BALANCED",
    label: "BALANCED",
    storeType: "Retail Supermarket (Illustrative Store A)",
    currentHC: 36,
    requiredHC: 36,
    hcGap: 0,
    monthlyEmployeeCost: 36 * 5200000,
    projectedAnnualCost: 36 * 5200000 * 13,
    operationalImpact: "Shifts run smoothly, store service standards are maintained, and rest schedules comply with labor regulations.",
    costImpact: "Employee costs match store manpower budget without unnecessary overtime or idle labor expense.",
    mppDecision: "Maintain current headcount; focus on cross-training and building supervisor succession readiness.",
  },
  OVERSTAFFED: {
    mode: "OVERSTAFFED",
    label: "OVERSTAFFED",
    storeType: "Retail Supermarket (Illustrative Store A)",
    currentHC: 43,
    requiredHC: 36,
    hcGap: +7,
    monthlyEmployeeCost: 43 * 5200000,
    projectedAnnualCost: 43 * 5200000 * 13,
    operationalImpact: "Workload per employee is low during non-peak hours, leading to idle time and overlapping duties.",
    costImpact: "Unnecessary employee cost burden of IDR 36,400,000 / month above operational budget.",
    mppDecision: "Freeze hiring for this branch; reallocate surplus staff to nearby new or understaffed stores.",
    riskWarning: "Excess headcount creates an unnecessary cost burden for the individual store.",
  },
};

export const WorkforcePlanningCaseStudy: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioMode>("BALANCED");
  const data = SCENARIOS[activeScenario];

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 mb-3">
          <span>Project 06</span>
          <span aria-hidden="true">·</span>
          <span>Workforce Planning · HR Analytics</span>
          <span aria-hidden="true">·</span>
          <span>Retail Store Manpower</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          Workforce Planning &amp; Employee Cost Analysis
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A workforce planning scenario connecting store requirements, headcount gaps, employee cost, and manpower decisions.
        </p>
      </div>

      {/* 2. Context & Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Store className="w-4 h-4 text-blue-600" />
            Context
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Targeted Workforce Placement Across Stores
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The analysis supports more targeted workforce placement across multiple retail stores by considering operational workforce requirements and employee cost, helping avoid unnecessary employee cost burden at individual stores.
          </p>
        </div>

        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Scale className="w-4 h-4 text-amber-600" />
            Objective
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Connecting Manpower with Cost Realities
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Workforce planning needs to connect operational needs with responsible employee cost decisions, helping management decide whether to recruit, reallocate, or adjust shift allocations.
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE ARTIFACT: WORKFORCE PLANNING SCENARIO */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Interactive HR Artifact
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              WORKFORCE PLANNING SCENARIO
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Switch between the three scenarios to see how headcount gaps affect store operations and employee cost.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-100 text-zinc-600 text-xs rounded-lg font-medium self-start sm:self-center">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Illustrative / Synthetic Scenario
          </div>
        </div>

        {/* Scenario Switcher Controls */}
        <div className="flex flex-wrap gap-2">
          {(["UNDERSTAFFED", "BALANCED", "OVERSTAFFED"] as ScenarioMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveScenario(mode)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                activeScenario === mode
                  ? mode === "BALANCED"
                    ? "bg-zinc-900 text-white"
                    : mode === "UNDERSTAFFED"
                    ? "bg-amber-700 text-white"
                    : "bg-zinc-800 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Scenario Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-xs font-medium text-zinc-500">Current HC</div>
            <div className="text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
              {data.currentHC} <span className="text-xs font-normal text-zinc-500">HC</span>
            </div>
            <div className="text-[11px] text-zinc-400">Current store staff</div>
          </div>

          <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-xs font-medium text-zinc-500">Required HC</div>
            <div className="text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
              {data.requiredHC} <span className="text-xs font-normal text-zinc-500">HC</span>
            </div>
            <div className="text-[11px] text-zinc-400">Store requirement</div>
          </div>

          <div
            className={`p-4 rounded-xl border space-y-1 ${
              data.hcGap === 0
                ? "bg-emerald-50/70 border-emerald-200"
                : data.hcGap < 0
                ? "bg-amber-50/70 border-amber-200"
                : "bg-red-50/70 border-red-200"
            }`}
          >
            <div className="text-xs font-medium text-zinc-600">HC Gap</div>
            <div
              className={`text-2xl font-bold tracking-tight tabular-nums ${
                data.hcGap === 0
                  ? "text-emerald-700"
                  : data.hcGap < 0
                  ? "text-amber-700"
                  : "text-red-700"
              }`}
            >
              {data.hcGap > 0 ? `+${data.hcGap}` : data.hcGap} <span className="text-xs font-normal">HC</span>
            </div>
            <div className="text-[11px] text-zinc-500">
              {data.hcGap === 0 ? "Balanced" : data.hcGap < 0 ? "Understaffed" : "Overstaffed"}
            </div>
          </div>

          <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-xs font-medium text-zinc-500">Monthly Employee Cost</div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 tabular-nums">
              {formatIDR(data.monthlyEmployeeCost)}
            </div>
            <div className="text-[11px] text-zinc-400">Monthly store payroll</div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-200/70 rounded-xl space-y-1">
            <div className="text-xs font-medium text-blue-900">Projected Annual Cost</div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-blue-800 tabular-nums">
              {formatIDR(data.projectedAnnualCost)}
            </div>
            <div className="text-[11px] text-blue-600">Annual cost projection</div>
          </div>
        </div>

        {/* Operational & Cost Impact Breakdown */}
        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-3">
            <h3 className="text-sm font-semibold text-zinc-900">
              Scenario Analysis: {data.label}
            </h3>
            <span className="text-xs text-zinc-500">{data.storeType}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-4 bg-white border border-zinc-200 rounded-lg space-y-2">
              <div className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                Operational Requirement &amp; Impact
              </div>
              <p className="text-zinc-600 leading-relaxed">{data.operationalImpact}</p>
            </div>

            <div className="p-4 bg-white border border-zinc-200 rounded-lg space-y-2">
              <div className="text-xs font-semibold text-zinc-900 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Employee Cost Impact
              </div>
              <p className="text-zinc-600 leading-relaxed">{data.costImpact}</p>
            </div>
          </div>

          {/* MPP Decision Recommendation */}
          <div className="p-4 bg-white border border-blue-200 rounded-lg space-y-1.5">
            <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
              MPP Decision
            </div>
            <p className="text-xs text-zinc-800 font-medium leading-relaxed">{data.mppDecision}</p>
            {data.riskWarning && (
              <div className="text-[11px] text-amber-700 bg-amber-50 p-2 rounded border border-amber-200 flex items-center gap-1.5 mt-2">
                <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                <span>{data.riskWarning}</span>
              </div>
            )}
          </div>
        </div>

        {/* Visual Flow exactly matching prompt */}
        <div className="space-y-3 pt-4 border-t border-zinc-200">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Workforce Planning Flow
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              "Operational Requirement",
              "HC Requirement",
              "MPP Decision",
              "Employee Cost Impact",
              "Workforce Decision",
            ].map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-md font-medium text-zinc-800">
                  {step}
                </span>
                {idx < 4 && <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RIGHT PEOPLE. RIGHT STORE. RIGHT COST. */}
      <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Principle</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
            RIGHT PEOPLE. RIGHT STORE. RIGHT COST.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
            Workforce planning should consider:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <span className="text-xs font-semibold text-zinc-900">• Operational needs</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Evaluating store sales volume, customer traffic, peak hours, and store floor area.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <span className="text-xs font-semibold text-zinc-900">• Required HC</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Determining the required headcount needed to handle daily store operations and customer service.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <span className="text-xs font-semibold text-zinc-900">• Existing HC</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Checking current active staff, tenure, role coverage, and attendance.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <span className="text-xs font-semibold text-zinc-900">• Vacancy / HC gap</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Identifying whether the store is operating at a deficit, balanced, or with surplus headcount.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <span className="text-xs font-semibold text-zinc-900">• Employee cost</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Reviewing monthly payroll and annual projected costs to avoid unnecessary financial burden.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <span className="text-xs font-semibold text-zinc-900">• Appropriate placement</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Allocating staff through internal transfer where possible before opening external recruitment.
            </p>
          </div>
        </div>

        <div className="p-4 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-500">
          <strong>Illustrative / Synthetic Scenario:</strong> The figures and scenario above are synthetic portfolio illustrations designed to demonstrate workforce planning logic without using confidential company financial records.
        </div>
      </div>

      {/* 5. Key Takeaway */}
      <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Key Takeaway</div>
        <blockquote className="text-base sm:text-lg text-zinc-100 font-serif italic max-w-3xl">
          “Workforce planning connects operational requirements with responsible people-cost decisions.”
        </blockquote>
        <p className="text-xs text-zinc-400">
          Balancing headcount needs with employee cost helps avoid store understaffing while preventing unnecessary cost burden.
        </p>
      </div>
    </div>
  );
};
