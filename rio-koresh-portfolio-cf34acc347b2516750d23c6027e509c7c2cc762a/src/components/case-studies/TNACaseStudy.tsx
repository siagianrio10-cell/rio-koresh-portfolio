import React, { useState } from "react";
import {
  Sparkles,
  BookOpen,
  Target,
  Layers,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Compass,
} from "lucide-react";

interface NeedSource {
  id: string;
  name: string;
  category: string;
  description: string;
  sampleInput: string;
  impactOnTNA: string;
}

const NEED_SOURCES: NeedSource[] = [
  {
    id: "src-1",
    name: "Assessment Gap",
    category: "Assessment Result",
    description: "Identified when an employee's psychological assessment or role-readiness evaluation indicates a competency gap for the target role.",
    sampleInput: "Candidate scored 2.4 / 5.0 in Problem Solving during promotion readiness assessment.",
    impactOnTNA: "Triggers targeted mentoring and practical assignments on root-cause analysis.",
  },
  {
    id: "src-2",
    name: "Performance Gap",
    category: "Performance Review",
    description: "Identified from periodic performance appraisals where key KPIs or operational benchmarks were not met.",
    sampleInput: "Department inventory shrinkage exceeded the quarterly store target.",
    impactOnTNA: "Focuses development on inventory reconciliation procedures and receiving standards.",
  },
  {
    id: "src-3",
    name: "Mandatory Need",
    category: "Compliance Requirement",
    description: "Mandatory organizational, regulatory, or food safety hygiene requirements.",
    sampleInput: "Food safety & hygiene certification required for all fresh food supervisors.",
    impactOnTNA: "Scheduled as a mandatory compliance training module for target staff.",
  },
  {
    id: "src-4",
    name: "360° Feedback",
    category: "Feedback Input",
    description: "Feedback from direct reports, peer supervisors, or store managers regarding daily collaboration.",
    sampleInput: "Feedback indicates difficulty delegating tasks during weekend peak hours.",
    impactOnTNA: "Identifies need for supervisory coaching on delegation and clear communication.",
  },
  {
    id: "src-5",
    name: "Development Request",
    category: "Employee / Business Request",
    description: "Development requests submitted by department heads or initiated by employees for their growth.",
    sampleInput: "Store team requested training on point-of-sale reporting and store data checks.",
    impactOnTNA: "Reviewed against departmental priorities to structure on-the-job guidance.",
  },
];

interface CompetencyItem {
  id: string;
  name: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: "High" | "Medium" | "Low";
  recommendations: {
    method: "Coaching" | "Training" | "Stretch Assignment" | "Job Shadowing" | "On-the-job Development";
    action: string;
  }[];
}

const COMPETENCIES: CompetencyItem[] = [
  {
    id: "comp-lead",
    name: "Leadership",
    currentLevel: 2.2,
    requiredLevel: 4.0,
    gap: -1.8,
    priority: "High",
    recommendations: [
      { method: "Coaching", action: "1-on-1 coaching sessions with Store Manager focusing on shift delegation and constructive feedback." },
      { method: "Training", action: "Foundational supervisory skills training." },
      { method: "Stretch Assignment", action: "Lead morning shift briefings and coordinate weekly store stocktake." },
    ],
  },
  {
    id: "comp-comm",
    name: "Communication",
    currentLevel: 3.1,
    requiredLevel: 4.0,
    gap: -0.9,
    priority: "Medium",
    recommendations: [
      { method: "Job Shadowing", action: "Shadow Assistant Store Manager during supplier discussions and store meetings." },
      { method: "Training", action: "Clear and assertive communication workshop." },
    ],
  },
  {
    id: "comp-prob",
    name: "Problem Solving",
    currentLevel: 2.4,
    requiredLevel: 4.0,
    gap: -1.6,
    priority: "High",
    recommendations: [
      { method: "On-the-job Development", action: "Review weekly inventory discrepancies using 5-Whys root cause analysis." },
      { method: "Coaching", action: "Mentoring on store operational data and markdown tracking." },
      { method: "Training", action: "Operational problem solving workshop." },
    ],
  },
  {
    id: "comp-tech",
    name: "Technical Capability",
    currentLevel: 3.8,
    requiredLevel: 4.0,
    gap: -0.2,
    priority: "Low",
    recommendations: [
      { method: "On-the-job Development", action: "Complete POS system inventory audits and daily reconciliation checklists." },
    ],
  },
  {
    id: "comp-cust",
    name: "Customer Orientation",
    currentLevel: 3.2,
    requiredLevel: 4.0,
    gap: -0.8,
    priority: "Medium",
    recommendations: [
      { method: "Stretch Assignment", action: "Take charge of resolving escalated customer requests during promotional weekends." },
      { method: "Training", action: "Customer service and complaint handling training." },
    ],
  },
];

export const TNACaseStudy: React.FC = () => {
  const [selectedSourceId, setSelectedSourceId] = useState<string>("src-1");
  const [selectedCompId, setSelectedCompId] = useState<string>("comp-lead");

  const activeSource = NEED_SOURCES.find((s) => s.id === selectedSourceId) || NEED_SOURCES[0];
  const activeComp = COMPETENCIES.find((c) => c.id === selectedCompId) || COMPETENCIES[0];

  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 mb-3">
          <span>Project 03</span>
          <span aria-hidden="true">·</span>
          <span>People Development · Talent Management</span>
          <span aria-hidden="true">·</span>
          <span>TNA &amp; IDP Workflow</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          TNA &amp; Individual Development Planning
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A structured approach for turning assessment results, development needs, and competency gaps into individual development plans.
        </p>
      </div>

      {/* 2. Context & Problem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Context
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Identifying Where Employees Need Support
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Development needs may originate from employee or business requests, mandatory development requirements, assessment results, performance gaps, feedback, or other organizational needs.
          </p>
        </div>

        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Target className="w-4 h-4 text-amber-600" />
            Objective
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Connecting Gaps to Practical Development Actions
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The goal is to structure Training Needs Analysis (TNA) so that identified competency gaps are prioritized and formulated into actionable Individual Development Plans (IDP).
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE ARTIFACT: FROM DEVELOPMENT NEED TO IDP */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Interactive HR Artifact
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              FROM DEVELOPMENT NEED TO IDP
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Click any source of development need below to follow how it moves from identification to the talent pool update.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-zinc-100 text-zinc-600 text-xs rounded-lg font-medium self-start sm:self-center">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Development Process Flow
          </div>
        </div>

        {/* Clickable Development Need Sources */}
        <div className="space-y-3">
          <div className="text-xs font-medium text-zinc-500">
            Sources of Development Need (Click to select):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {NEED_SOURCES.map((source) => {
              const isSelected = source.id === activeSource.id;
              return (
                <button
                  key={source.id}
                  onClick={() => setSelectedSourceId(source.id)}
                  className={`p-3 text-left rounded-xl border text-xs transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-1 ring-blue-600"
                      : "border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  <span className="text-[10px] uppercase font-mono text-zinc-400 mb-1">{source.category}</span>
                  <span className="font-semibold text-xs leading-snug">{source.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pipeline Flow Visualization */}
        <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 flex items-center gap-2">
            <Workflow className="w-4 h-4" />
            Flow for: {activeSource.name}
          </div>

          {/* Sequential Steps Flow exactly matching prompt */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              "1. Development Need",
              "2. TNA / Needs Analysis",
              "3. Competency & Skill Gap",
              "4. Development Priority",
              "5. Individual Development Plan",
              "6. Development Program",
              "7. Participation Tracking",
              "8. Talent Pool Update",
            ].map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-md font-medium text-zinc-800 shadow-2xs whitespace-nowrap">
                  {step}
                </span>
                {idx < 7 && <ArrowRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />}
              </React.Fragment>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 border-t border-zinc-200 text-xs">
            <div>
              <div className="font-semibold text-zinc-900 mb-1">Source Description:</div>
              <p className="text-zinc-600 leading-relaxed">{activeSource.description}</p>
            </div>
            <div>
              <div className="font-semibold text-zinc-900 mb-1">Example Case:</div>
              <p className="text-zinc-700 font-mono text-[11px] bg-white p-2 rounded border border-zinc-200 leading-relaxed">
                {activeSource.sampleInput}
              </p>
            </div>
            <div>
              <div className="font-semibold text-zinc-900 mb-1">TNA Action:</div>
              <p className="text-zinc-600 leading-relaxed">{activeSource.impactOnTNA}</p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE COMPETENCY MATRIX */}
        <div className="pt-6 border-t border-zinc-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Interactive Competency Matrix
              </h3>
              <p className="text-xs text-zinc-500">
                Click a competency below to see illustrative development recommendations (Coaching, Training, Stretch Assignment, Job Shadowing, On-the-job Development).
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 bg-zinc-100 rounded text-zinc-600 font-medium">
              Illustrative / Synthetic Data
            </span>
          </div>

          {/* Table Container */}
          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-100/70 border-b border-zinc-200 text-zinc-600">
                  <tr>
                    <th className="p-3 font-semibold">Competency</th>
                    <th className="p-3 font-semibold text-center">Current Level</th>
                    <th className="p-3 font-semibold text-center">Required Level</th>
                    <th className="p-3 font-semibold text-center">Gap</th>
                    <th className="p-3 font-semibold text-center">Development Priority</th>
                    <th className="p-3 font-semibold text-right">Recommendations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {COMPETENCIES.map((comp) => {
                    const isSelected = comp.id === activeComp.id;
                    const priorityColor =
                      comp.priority === "High"
                        ? "text-red-700 bg-red-50 border-red-200"
                        : comp.priority === "Medium"
                        ? "text-amber-700 bg-amber-50 border-amber-200"
                        : "text-zinc-600 bg-zinc-100 border-zinc-200";

                    return (
                      <tr
                        key={comp.id}
                        onClick={() => setSelectedCompId(comp.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? "bg-blue-50/50" : "hover:bg-zinc-50/60"
                        }`}
                      >
                        <td className="p-3 font-medium text-zinc-900 flex items-center gap-2">
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                          {comp.name}
                        </td>
                        <td className="p-3 text-center tabular-nums text-zinc-700 font-mono">
                          {comp.currentLevel.toFixed(1)} / 5.0
                        </td>
                        <td className="p-3 text-center tabular-nums text-zinc-700 font-mono">
                          {comp.requiredLevel.toFixed(1)} / 5.0
                        </td>
                        <td className="p-3 text-center font-mono font-semibold tabular-nums text-red-600">
                          {comp.gap.toFixed(1)}
                        </td>
                        <td className="p-3 text-center">
                          <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-medium border ${priorityColor}`}>
                            {comp.priority}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedCompId(comp.id);
                            }}
                            className="text-blue-600 font-medium hover:underline text-xs cursor-pointer"
                          >
                            View actions →
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Selected Competency IDP Interventions Card */}
          <div className="p-5 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Development Recommendations for: {activeComp.name}
              </div>
              <span className="text-xs text-zinc-500">
                Gap: <strong className="text-red-600">{activeComp.gap.toFixed(1)}</strong> · Priority:{" "}
                <strong>{activeComp.priority}</strong>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {activeComp.recommendations.map((rec, i) => (
                <div key={i} className="p-3.5 bg-zinc-50 border border-zinc-200/80 rounded-lg space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-900">{rec.method}</span>
                    <span className="text-[10px] font-mono text-zinc-400">Action Plan</span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">{rec.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Talent Management Role vs. Training Execution Team */}
      <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Roles &amp; Collaboration</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
            Talent Management Role in Development
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl">
            In our workflow, Talent Management focuses on diagnosis, analysis, and tracking, while actual development programs are executed by the training team:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              <Compass className="w-4 h-4" />
              Talent Management Role
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Identify development needs:</strong> Gather inputs from assessment outcomes, performance reviews, and store requests.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Structure TNA:</strong> Analyze competency gaps and determine priority areas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Support IDP formulation:</strong> Help managers structure practical development plans for candidates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Track participation / progress:</strong> Monitor whether development activities are completed.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Update talent development records:</strong> Record progress in the talent pool to update promotion readiness.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
              <Layers className="w-4 h-4" />
              Training Execution Team
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span><strong>Curriculum &amp; Materials:</strong> Develop training syllabus, workbooks, and presentations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span><strong>Training Delivery:</strong> Facilitate classroom, virtual, or on-site workshops and practical exercises.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span><strong>Classroom Evaluation:</strong> Conduct pre- and post-tests to measure knowledge retention.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                <span><strong>Training Logistics:</strong> Coordinate room schedules, attendance lists, and trainer assignments.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Key Takeaway */}
      <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Key Takeaway</div>
        <blockquote className="text-base sm:text-lg text-zinc-100 font-serif italic max-w-3xl">
          “Development becomes more actionable when it is connected to evidence, competency gaps, and individual needs.”
        </blockquote>
        <p className="text-xs text-zinc-400">
          Connecting training to specific assessment and performance gaps ensures development time is spent where it is most needed.
        </p>
      </div>
    </div>
  );
};
