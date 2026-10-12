import React, { useState } from "react";
import {
  GitFork,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  Building2,
} from "lucide-react";

interface PathwayStage {
  id: string;
  number: string;
  name: string;
  purpose: string;
  hrActivity: string;
  decisionOutput: string;
}

const INTERNAL_STAGES: PathwayStage[] = [
  {
    id: "int-1",
    number: "01",
    name: "Vacancy Identification",
    purpose: "Understand the vacancy and replacement need with the relevant Department Head or Store Manager.",
    hrActivity: "Coordinate with store/department leadership to confirm vacancy details, timing, and requirements.",
    decisionOutput: "Confirmed vacancy & job requirements.",
  },
  {
    id: "int-2",
    number: "02",
    name: "Succession Planning",
    purpose: "Review the internal talent pool for potential successors before moving to external recruitment.",
    hrActivity: "Review talent pool data to identify employees who are ready or currently in development for the target role.",
    decisionOutput: "Shortlist of potential internal successors.",
  },
  {
    id: "int-3",
    number: "03",
    name: "Assessment / Readiness Review",
    purpose: "Evaluate candidate readiness through psychological assessment and technical performance.",
    hrActivity: "Review past assessment results, role readiness indicators, and performance records.",
    decisionOutput: "Readiness review summary & recommendation.",
  },
  {
    id: "int-4",
    number: "04",
    name: "Promotion Proposal",
    purpose: "Submit formal proposal for candidate progression.",
    hrActivity: "Prepare candidate profile including assessment results, performance, and readiness status.",
    decisionOutput: "Endorsed Promotion Proposal.",
  },
  {
    id: "int-5",
    number: "05",
    name: "Acting / Transition Period",
    purpose: "Evaluate leadership and task execution in the target role.",
    hrActivity: "Assign candidate into the target position under a structured acting period with regular check-ins.",
    decisionOutput: "Acting period progress notes.",
  },
  {
    id: "int-6",
    number: "06",
    name: "Final Evaluation",
    purpose: "Review candidate performance and improvement project.",
    hrActivity: "Coordinate project presentation and feedback review with department and store leadership.",
    decisionOutput: "Panel feedback & final evaluation.",
  },
  {
    id: "int-7",
    number: "07",
    name: "Promotion Decision",
    purpose: "Formalize the promotion and update records.",
    hrActivity: "Issue promotion letter, update HRIS master data, and adjust role level.",
    decisionOutput: "Official Promotion Letter.",
  },
];

const EXTERNAL_STAGES: PathwayStage[] = [
  {
    id: "ext-1",
    number: "01",
    name: "Vacancy",
    purpose: "Identify vacancy when no ready internal successor is available.",
    hrActivity: "Confirm with department head that external recruitment is needed.",
    decisionOutput: "Approved hiring request.",
  },
  {
    id: "ext-2",
    number: "02",
    name: "Recruitment Request",
    purpose: "Clarify role specifications, shift needs, and requirements with hiring manager.",
    hrActivity: "Review job profile, necessary experience, and target store placement.",
    decisionOutput: "Finalized job brief.",
  },
  {
    id: "ext-3",
    number: "03",
    name: "Sourcing",
    purpose: "Attract applicant candidates across targeted channels.",
    hrActivity: "Post job openings on job boards, local hiring networks, and referrals.",
    decisionOutput: "Applicant candidate pool.",
  },
  {
    id: "ext-4",
    number: "04",
    name: "Screening",
    purpose: "Filter resumes against core qualifications and experience.",
    hrActivity: "Review CVs against job criteria and conduct initial phone screening.",
    decisionOutput: "Shortlist for assessment & interview.",
  },
  {
    id: "ext-5",
    number: "05",
    name: "Assessment / Interview",
    purpose: "Evaluate candidate fit, competencies, and work style.",
    hrActivity: "Conduct psychological assessment and structured behavioral interview.",
    decisionOutput: "Assessment summary & interview notes.",
  },
  {
    id: "ext-6",
    number: "06",
    name: "Selection",
    purpose: "Final hiring decision and offer.",
    hrActivity: "User interview, final candidate selection, and offer letter preparation.",
    decisionOutput: "Signed offer letter.",
  },
  {
    id: "ext-7",
    number: "07",
    name: "Onboarding",
    purpose: "Welcome candidate and introduce store operational processes.",
    hrActivity: "Facilitate company orientation, store walk-through, and probationary review setup.",
    decisionOutput: "Completed onboarding checklist.",
  },
];

const CAREER_LEVELS = [
  {
    level: "Staff",
    readinessFocus: "Operational Execution & SOP Compliance",
    coreExpectation:
      "Understanding store procedures, customer service standards, product handling, and daily task reliability.",
    advancementTriggers:
      "Consistent SOP adherence, strong performance ratings, and proactive attitude on the store floor.",
  },
  {
    level: "Supervisor",
    readinessFocus: "Shift Coordination & Team Guidance",
    coreExpectation:
      "Coordinating daily shifts, supporting frontline employees, handling customer escalations, and maintaining smooth store operations.",
    advancementTriggers:
      "Demonstrated ability to guide peers, handle operational pressure, and meet the capability requirements of the target role.",
  },
  {
    level: "Assistant Manager",
    readinessFocus: "Department Coordination & Performance Monitoring",
    coreExpectation:
      "Overseeing department operations, managing shrink, supporting store profitability, and coaching supervisors.",
    advancementTriggers:
      "Good problem-solving ability, clear communication across departments, and successful completion of acting period projects.",
  },
  {
    level: "Manager",
    readinessFocus: "Store Leadership & People Management",
    coreExpectation:
      "Overall store management, customer satisfaction, store manpower planning, and building a supportive team culture.",
    advancementTriggers:
      "Strong track record in store management, positive team retention, and reliable people decision-making.",
  },
];

export const InternalMobilityCaseStudy: React.FC = () => {
  const [activePathway, setActivePathway] = useState<"internal" | "external">("internal");
  const [selectedStageId, setSelectedStageId] = useState<string>("int-2");
  const [selectedLevelIndex, setSelectedLevelIndex] = useState<number>(1);

  const currentStages = activePathway === "internal" ? INTERNAL_STAGES : EXTERNAL_STAGES;
  const currentStage =
    currentStages.find((s) => s.id === selectedStageId) || currentStages[0];

  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 mb-3">
          <span>Project 02</span>
          <span aria-hidden="true">·</span>
          <span>Talent Management · Workforce Fulfillment</span>
          <span aria-hidden="true">·</span>
          <span>Supervisory &amp; Managerial Positions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          Workforce Fulfillment &amp; Internal Mobility
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A practical workflow for handling supervisory and managerial vacancies through internal succession or external recruitment.
        </p>
      </div>

      {/* 2. Context & Problem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Building2 className="w-4 h-4 text-blue-600" />
            Context
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Handling Supervisory &amp; Managerial Vacancies
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            When a supervisory or managerial vacancy occurs, HR coordinates directly with the relevant Department Head or Store Manager to understand the vacancy and replacement need.
          </p>
        </div>

        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <GitFork className="w-4 h-4 text-amber-600" />
            Objective
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Clear Pathways for Internal vs. External Hiring
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The goal is to prioritize internal successors who have been prepared through succession planning and assessment, while maintaining a clear and structured external recruitment process when needed.
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE ARTIFACT: DUAL PATHWAY EXPLORER */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Interactive HR Artifact
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              INTERNAL MOBILITY vs EXTERNAL RECRUITMENT
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Select a pathway below and click any stage to view the purpose, HR activity, and output.
            </p>
          </div>

          {/* Pathway Selector */}
          <div className="flex items-center p-1 bg-zinc-100 rounded-lg">
            <button
              onClick={() => {
                setActivePathway("internal");
                setSelectedStageId("int-1");
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activePathway === "internal"
                  ? "bg-white text-zinc-900 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Internal Mobility
            </button>
            <button
              onClick={() => {
                setActivePathway("external");
                setSelectedStageId("ext-1");
              }}
              className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activePathway === "external"
                  ? "bg-white text-zinc-900 shadow-xs"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              External Recruitment
            </button>
          </div>
        </div>

        {/* Process Flow Ribbon */}
        <div className="space-y-3">
          <div className="text-xs font-medium text-zinc-500">
            Process Stages (Click to view details):
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {currentStages.map((stage) => {
              const isSelected = stage.id === currentStage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-1 ring-blue-600"
                      : "border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                    <span>{stage.number}</span>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </div>
                  <span className="font-semibold leading-tight">{stage.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            Stage {currentStage.number}: {currentStage.name}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-zinc-500">Purpose</div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {currentStage.purpose}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-zinc-500">HR Activity</div>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                {currentStage.hrActivity}
              </p>
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-zinc-500">Decision / Output</div>
              <p className="text-xs sm:text-sm text-zinc-900 font-medium leading-relaxed">
                {currentStage.decisionOutput}
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE CAREER PATHWAY */}
        <div className="pt-6 border-t border-zinc-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Interactive Career Pathway
              </h3>
              <p className="text-xs text-zinc-500">
                Click each level to see its general readiness focus.
              </p>
            </div>
            <span className="text-xs text-zinc-400">Staff → Supervisor → Assistant Manager → Manager</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CAREER_LEVELS.map((cl, idx) => (
              <button
                key={cl.level}
                onClick={() => setSelectedLevelIndex(idx)}
                className={`p-3 text-left rounded-xl border text-xs transition-colors cursor-pointer ${
                  selectedLevelIndex === idx
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50"
                }`}
              >
                <div className={`text-[10px] font-mono ${selectedLevelIndex === idx ? "text-zinc-400" : "text-zinc-400"}`}>
                  Level {idx + 1}
                </div>
                <div className="font-semibold text-sm mt-0.5">{cl.level}</div>
              </button>
            ))}
          </div>

          <div className="p-5 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                {CAREER_LEVELS[selectedLevelIndex].level} Readiness Focus
              </div>
              <span className="text-xs text-zinc-500 font-medium">
                {CAREER_LEVELS[selectedLevelIndex].readinessFocus}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-zinc-600">
              <div className="space-y-1">
                <span className="font-semibold text-zinc-900">General Expectation:</span>
                <p className="leading-relaxed">{CAREER_LEVELS[selectedLevelIndex].coreExpectation}</p>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-zinc-900">Readiness Triggers:</span>
                <p className="leading-relaxed">{CAREER_LEVELS[selectedLevelIndex].advancementTriggers}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section: Why Internal Mobility? */}
      <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Why Internal Mobility?</div>
        <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
          Why Internal Mobility?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-xs font-semibold text-zinc-900">Familiarity with Operations</div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Internal successors already know daily store procedures, products, and team rhythms.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-xs font-semibold text-zinc-900">Career Development</div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Clear progression pathways motivate employees and support retention.
            </p>
          </div>
          <div className="p-4 bg-white border border-zinc-200/80 rounded-xl space-y-1">
            <div className="text-xs font-semibold text-zinc-900">Faster Transition</div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Prepared candidates can step into supervisory roles with less downtime.
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2">
          Succession planning helps identify and prepare potential successors before vacancies occur, while external recruitment provides an alternative when internal talent is not yet available.
        </p>
      </div>

      {/* 5. Key Takeaway */}
      <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Key Takeaway</div>
        <blockquote className="text-base sm:text-lg text-zinc-100 font-serif italic max-w-3xl">
          “Connecting workforce needs with internal talent development.”
        </blockquote>
        <p className="text-xs text-zinc-400">
          Succession planning helps identify and prepare potential successors before vacancies occur, while external recruitment provides an alternative when internal talent is not yet available.
        </p>
      </div>
    </div>
  );
};
