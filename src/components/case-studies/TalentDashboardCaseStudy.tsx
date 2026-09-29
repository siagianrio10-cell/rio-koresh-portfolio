import React, { useState } from "react";
import {
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Layers,
  Sparkles,
  Info,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";

interface EmployeeCandidate {
  id: string;
  name: string;
  department: string;
  currentLevel: string;
  targetLevel: string;
  psychOutcome: "Recommended" | "Need Development";
  roleReadiness: "Verified" | "In Progress" | "Development Needed";
  idpStatus: "Active" | "Completed" | "Pending Review";
}

const SAMPLE_EMPLOYEES: EmployeeCandidate[] = [
  {
    id: "EMP-041",
    name: "Candidate A (Illustrative)",
    department: "Store Operations",
    currentLevel: "Staff",
    targetLevel: "Supervisor",
    psychOutcome: "Recommended",
    roleReadiness: "Verified",
    idpStatus: "Completed",
  },
  {
    id: "EMP-108",
    name: "Candidate B (Illustrative)",
    department: "Merchandising",
    currentLevel: "Supervisor",
    targetLevel: "Assistant Manager",
    psychOutcome: "Recommended",
    roleReadiness: "In Progress",
    idpStatus: "Active",
  },
  {
    id: "EMP-215",
    name: "Candidate C (Illustrative)",
    department: "Store Operations",
    currentLevel: "Supervisor",
    targetLevel: "Assistant Manager",
    psychOutcome: "Need Development",
    roleReadiness: "In Progress",
    idpStatus: "Active",
  },
  {
    id: "EMP-304",
    name: "Candidate D (Illustrative)",
    department: "Inventory & Logistics",
    currentLevel: "Assistant Manager",
    targetLevel: "Manager",
    psychOutcome: "Recommended",
    roleReadiness: "Verified",
    idpStatus: "Completed",
  },
  {
    id: "EMP-412",
    name: "Candidate E (Illustrative)",
    department: "Fresh Food & Bakery",
    currentLevel: "Staff",
    targetLevel: "Supervisor",
    psychOutcome: "Need Development",
    roleReadiness: "Development Needed",
    idpStatus: "Pending Review",
  },
  {
    id: "EMP-519",
    name: "Candidate F (Illustrative)",
    department: "Customer Service",
    currentLevel: "Staff",
    targetLevel: "Supervisor",
    psychOutcome: "Recommended",
    roleReadiness: "In Progress",
    idpStatus: "Active",
  },
];

export const TalentDashboardCaseStudy: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>("All");
  const [readinessFilter, setReadinessFilter] = useState<string>("All");
  const [expandedEmployee, setExpandedEmployee] = useState<string | null>("EMP-041");

  // Dynamic calculation based on user's selected tier
  const tierMultiplier: Record<string, number> = {
    All: 1.0,
    Staff: 0.52,
    Supervisor: 0.31,
    "Assistant Manager": 0.12,
    Manager: 0.05,
  };

  const factor = tierMultiplier[selectedTier] || 1;
  const potentialCount = Math.round(790 * factor);
  const assessedCount = Math.round(322 * factor);
  const recommendedCount = Math.round(217 * factor);
  const needDevCount = Math.round(105 * factor);
  const readinessEvaluated = Math.round(188 * factor);
  const readyCount = Math.round(68 * factor);
  const devCandidatesCount = Math.round(105 * factor);

  const getReadiness = (psych: "Recommended" | "Need Development", roleReadiness: string) => {
    if (psych === "Recommended" && roleReadiness === "Verified") {
      return {
        label: "Ready Candidate",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200",
        pill: "bg-emerald-100 text-emerald-800",
        description: "Meets both psychological assessment criteria and role readiness requirements. Ready for promotion review.",
      };
    }
    if (psych === "Recommended") {
      return {
        label: "Development Candidates",
        color: "text-amber-700 bg-amber-50 border-amber-200",
        pill: "bg-amber-100 text-amber-800",
        description: "Psychological assessment is Recommended, while role readiness assessment or target preparation is in progress.",
      };
    }
    return {
      label: "Further Development",
      color: "text-zinc-600 bg-zinc-100 border-zinc-200",
      pill: "bg-zinc-200 text-zinc-700",
      description: "Assessment outcome indicates development needs across competencies. Enrolled in an individual development plan before re-evaluation.",
    };
  };

  const filteredEmployees = SAMPLE_EMPLOYEES.filter((emp) => {
    if (selectedTier !== "All" && emp.currentLevel !== selectedTier) return false;
    const readiness = getReadiness(emp.psychOutcome, emp.roleReadiness).label;
    if (readinessFilter !== "All" && readiness !== readinessFilter) return false;
    return true;
  });

  return (
    <div className="space-y-12">
      {/* 1. Context & Overview Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 mb-3">
          <span>Project 01</span>
          <span aria-hidden="true">·</span>
          <span>Talent Management · HR Analytics</span>
          <span aria-hidden="true">·</span>
          <span>Retail Store &amp; Support Network</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          Talent Pool &amp; Promotion Readiness Dashboard
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A structured dashboard for tracking talent candidates, assessment results, readiness progress, and promotion status across four management levels: Staff → Supervisor → Assistant Manager → Manager.
        </p>
      </div>

      {/* 2. Context & Problem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Info className="w-4 h-4 text-blue-600" />
            Context
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Tracking Talent Across Expanding Retail Stores
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            In a multi-store retail environment, vacancies for supervisory and managerial roles require visibility into available talent, assessment progress, development needs, and readiness.
          </p>
        </div>

        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            Core Objective
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Making Candidate Progress Visible &amp; Actionable
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Create a clearer way to monitor potential candidates, assessment outcomes, development needs, and promotion readiness in one place.
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE HR ARTIFACT: DASHBOARD & PIPELINE */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Interactive HR Artifact
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              Talent Pool &amp; Promotion Readiness Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Filter by management level to see how candidate numbers and readiness logic update.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-100 text-zinc-600 text-xs rounded-lg font-medium self-start sm:self-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Illustrative / Synthetic Data
          </div>
        </div>

        {/* Tier Selector Filter Controls */}
        <div className="space-y-3">
          <div className="text-xs font-medium text-zinc-500">Filter by Management Level:</div>
          <div className="flex flex-wrap gap-2">
            {["All", "Staff", "Supervisor", "Assistant Manager", "Manager"].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedTier === tier
                    ? "bg-zinc-900 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {tier === "All" ? "All Levels" : tier}
              </button>
            ))}
          </div>
        </div>

        {/* Metric Cards Grid - Portfolio Dashboard Figures */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-zinc-500">Potential Candidates</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
              {potentialCount}
            </div>
            <div className="text-[10px] text-zinc-400">Identified in pool</div>
          </div>

          <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-zinc-500">Assessed</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-blue-900 tabular-nums">
              {assessedCount}
            </div>
            <div className="text-[10px] text-zinc-400">Psych assessment</div>
          </div>

          <div className="p-4 bg-emerald-50/60 border border-emerald-200/70 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-emerald-800">Recommended</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-700 tabular-nums">
              {recommendedCount}
            </div>
            <div className="text-[10px] text-emerald-600">Meets profile</div>
          </div>

          <div className="p-4 bg-amber-50/60 border border-amber-200/70 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-amber-800">Need Development</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-amber-700 tabular-nums">
              {needDevCount}
            </div>
            <div className="text-[10px] text-amber-600">Competency gaps</div>
          </div>

          <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-zinc-500">Readiness Evaluated</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
              {readinessEvaluated}
            </div>
            <div className="text-[10px] text-zinc-400">Role readiness</div>
          </div>

          <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-blue-800">Ready Candidates</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-blue-700 tabular-nums">
              {readyCount}
            </div>
            <div className="text-[10px] text-blue-600">Review eligible</div>
          </div>

          <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl space-y-1">
            <div className="text-[11px] font-medium text-amber-800">Development Candidates</div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight text-amber-700 tabular-nums">
              {devCandidatesCount}
            </div>
            <div className="text-[10px] text-amber-600">IDP preparation</div>
          </div>
        </div>

        {/* Promotion Readiness Assessment Logic */}
        <div className="p-5 bg-zinc-50/80 border border-zinc-200 rounded-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Promotion Readiness Assessment Logic
            </div>
            <span className="text-xs text-zinc-500">Public logic · Internal criteria confidential</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-4 bg-white border border-blue-100 rounded-lg space-y-2">
              <span className="text-xs font-semibold text-zinc-900">Psychological Assessment</span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Potential, behavioral profile, and development indicators evaluated through standardized instruments.
              </p>
            </div>

            <div className="p-4 bg-white border border-blue-100 rounded-lg space-y-2">
              <span className="text-xs font-semibold text-zinc-900">Role Readiness Assessment</span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Job-related capability and performance readiness required for daily operational execution at the next level.
              </p>
            </div>

            <div className="p-4 bg-white border border-blue-100 rounded-lg space-y-2">
              <span className="text-xs font-semibold text-zinc-900">Promotion Readiness</span>
              <p className="text-xs text-zinc-600 leading-relaxed">
                A broader review combining assessment information, role readiness, development needs, and relevant HR considerations.
              </p>
            </div>
          </div>
        </div>

        {/* Expandable Employee-Level Examples */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Candidate-Level Tracking Examples
              </h3>
              <p className="text-xs text-zinc-500">
                Click any candidate row below to view detailed assessment status and readiness indicators.
              </p>
            </div>

            {/* Sub-filter by readiness label */}
            <div className="flex items-center gap-1 self-start sm:self-center text-xs">
              <span className="text-zinc-500 mr-1">Status:</span>
              {["All", "Ready Candidate", "Development Candidates", "Further Development"].map((rf) => (
                <button
                  key={rf}
                  onClick={() => setReadinessFilter(rf)}
                  className={`px-2.5 py-1 rounded text-[11px] transition-colors cursor-pointer ${
                    readinessFilter === rf
                      ? "bg-zinc-800 text-white font-medium"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {rf}
                </button>
              ))}
            </div>
          </div>

          <div className="border border-zinc-200 rounded-xl overflow-hidden divide-y divide-zinc-200">
            {filteredEmployees.map((emp) => {
              const readiness = getReadiness(emp.psychOutcome, emp.roleReadiness);
              const isExpanded = expandedEmployee === emp.id;

              return (
                <div key={emp.id} className="bg-white">
                  <div
                    onClick={() => setExpandedEmployee(isExpanded ? null : emp.id)}
                    className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-50/80 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-zinc-400">
                        {emp.id}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900">{emp.name}</div>
                        <div className="text-[11px] text-zinc-500">
                          {emp.department} · {emp.currentLevel} → {emp.targetLevel}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-end sm:self-center">
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded border ${
                          emp.psychOutcome === "Recommended"
                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                            : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}
                      >
                        {emp.psychOutcome}
                      </span>

                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${readiness.pill}`}>
                        {readiness.label}
                      </span>

                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Detail Panel */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 bg-zinc-50/60 border-t border-zinc-100 text-xs space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-3 bg-white rounded-lg border border-zinc-200/80">
                          <div className="text-[11px] text-zinc-500 font-medium">Psychological Assessment</div>
                          <div className="text-xs font-semibold text-zinc-900 mt-1">
                            {emp.psychOutcome}
                          </div>
                          <div className="text-[11px] text-zinc-500 mt-0.5">
                            Standardized competency evaluation
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg border border-zinc-200/80">
                          <div className="text-[11px] text-zinc-500 font-medium">Role Readiness Assessment</div>
                          <div className="text-xs font-semibold text-zinc-900 mt-1">
                            {emp.roleReadiness}
                          </div>
                          <div className="text-[11px] text-zinc-500 mt-0.5">
                            Job-related capability &amp; performance
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-lg border border-zinc-200/80">
                          <div className="text-[11px] text-zinc-500 font-medium">Individual Development Plan (IDP)</div>
                          <div className="text-xs font-semibold text-zinc-900 mt-1">
                            {emp.idpStatus}
                          </div>
                          <div className="text-[11px] text-zinc-500 mt-0.5">
                            Targeted competency development
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-blue-50/60 border border-blue-100 rounded-lg text-[11px] text-zinc-700 flex items-center gap-2">
                        <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>
                          <strong>HR Decision Support:</strong> {readiness.description}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. My Role & Promotion Process */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">My Role</div>
          <h2 className="text-xl font-semibold text-zinc-900">
            Talent Identification, Tracking &amp; Dashboarding
          </h2>
          <ul className="space-y-2.5 text-sm text-zinc-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
              <span>
                <strong>Organizing Candidate Data:</strong> Collected and maintained talent candidate records across retail stores and departments.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
              <span>
                <strong>Assessment &amp; Data Tracking:</strong> Coordinated assessment activities and maintained candidate evaluation records.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
              <span>
                <strong>Dashboard Building:</strong> Built and updated spreadsheet and dashboard tools to track readiness categories across Staff, Supervisor, and Manager levels.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
              <span>
                <strong>Supporting Promotion Decisions:</strong> Prepared candidate readiness summaries for Department Heads and promotion review meetings.
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Process</div>
          <h2 className="text-xl font-semibold text-zinc-900">
            Promotion Readiness Process
          </h2>
          <div className="space-y-3">
            {[
              {
                step: "01",
                title: "Talent Pooling",
                desc: "Identify potential employees based on tenure, performance, and departmental recommendations.",
              },
              {
                step: "02",
                title: "Psychological Assessment",
                desc: "Evaluate potential, behavioral profile, and development indicators through standardized assessments.",
              },
              {
                step: "03",
                title: "Role Readiness Assessment",
                desc: "Assess job-related capability and performance readiness for daily execution in the target role.",
              },
              {
                step: "04",
                title: "Promotion Review",
                desc: "Conduct broader review combining assessment information, role readiness, and development needs with leadership.",
              },
            ].map((st) => (
              <div key={st.step} className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-zinc-400 mt-0.5">{st.step}</span>
                <div>
                  <div className="text-xs font-semibold text-zinc-900">{st.title}</div>
                  <div className="text-xs text-zinc-600 mt-0.5">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Output / Impact & Key Takeaway */}
      <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Output &amp; Impact</div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            Clearer Visibility for Fair and Timely Promotion Decisions
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
            Having a central dashboard and clear readiness rules made it much easier for HR and department heads to see who is ready for promotion, who needs technical preparation, and who needs an IDP.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800 pt-6">
          <div>
            <div className="text-xs text-zinc-400">Visibility</div>
            <div className="text-sm font-semibold text-white mt-1">Easy to Monitor Pipeline</div>
            <p className="text-xs text-zinc-400 mt-1">
              Candidate status, assessment results, and readiness are tracked in one place.
            </p>
          </div>
          <div>
            <div className="text-xs text-zinc-400">Clarity</div>
            <div className="text-sm font-semibold text-white mt-1">Consistent Criteria</div>
            <p className="text-xs text-zinc-400 mt-1">
              Structured evaluation across assessment and role readiness reduces guesswork in promotions.
            </p>
          </div>
          <div>
            <div className="text-xs text-zinc-400">Actionability</div>
            <div className="text-sm font-semibold text-white mt-1">Targeted Development</div>
            <p className="text-xs text-zinc-400 mt-1">
              Employees who are not yet ready receive focused individual development plans.
            </p>
          </div>
        </div>

        <div className="p-4 bg-zinc-800/80 border border-zinc-700 rounded-xl text-center sm:text-left">
          <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">Key Takeaway</div>
          <p className="text-sm text-zinc-200 italic font-serif">
            “Talent decisions become clearer when candidate progress, assessment results, and readiness information are organized in one place.”
          </p>
        </div>
      </div>
    </div>
  );
};
