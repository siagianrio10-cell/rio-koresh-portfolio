import React, { useState } from "react";
import {
  Users,
  Search,
  FileText,
  Brain,
  MessageSquare,
  CheckCircle,
  Sparkles,
  Award,
  Video,
  FileSpreadsheet,
} from "lucide-react";

interface RecruitmentStage {
  id: string;
  step: string;
  name: string;
  purpose: string;
  method: string;
  decisionCriteria: string;
  output: string;
}

const RECRUITMENT_STAGES: RecruitmentStage[] = [
  {
    id: "stage-1",
    step: "01",
    name: "Hiring Need",
    purpose: "Clarify role requirements, replacement necessity, and job specifications with the hiring manager.",
    method: "Department head submits the standardized Employee Request Form (ERF).",
    decisionCriteria: "Approved headcount and clear competency requirements.",
    output: "Approved Employee Request Form (ERF).",
  },
  {
    id: "stage-2",
    step: "02",
    name: "Recruitment / Sourcing",
    purpose: "Attract a pool of qualified candidates through relevant channels.",
    method: "Job portal postings, local hiring networks, and professional referrals.",
    decisionCriteria: "Alignment of applicant profiles with job requirements.",
    output: "Candidate applicant pool.",
  },
  {
    id: "stage-3",
    step: "03",
    name: "CV Screening",
    purpose: "Filter resumes against core qualifications and experience criteria.",
    method: "Structured screening rubric reviewing education, experience, and stability.",
    decisionCriteria: "Meeting minimum role prerequisites and relevant experience.",
    output: "Shortlist for assessment.",
  },
  {
    id: "stage-4",
    step: "04",
    name: "Assessment",
    purpose: "Assess cognitive ability, work style, and psychological profile.",
    method: "Standardized psychological test batteries and technical tests.",
    decisionCriteria: "Assessment outcome: Recommended, Considered, or Need Development.",
    output: "Psychological assessment report.",
  },
  {
    id: "stage-5",
    step: "05",
    name: "Behavioral Interview",
    purpose: "Explore real examples of past behavior and key competencies.",
    method: "Structured behavioral questions using the STAR approach.",
    decisionCriteria: "Evidence of required competencies, communication, and work attitude.",
    output: "Behavioral interview notes & score.",
  },
  {
    id: "stage-6",
    step: "06",
    name: "Selection Decision",
    purpose: "Evaluate combined assessment and interview findings to make the final offer.",
    method: "Review candidate evaluation with hiring manager.",
    decisionCriteria: "Overall fit across assessment results, interview, and salary alignment.",
    output: "Job Offer Letter.",
  },
  {
    id: "stage-7",
    step: "07",
    name: "Onboarding",
    purpose: "Welcome the new hire and support their operational integration.",
    method: "Company orientation, work area introduction, and initial task review.",
    decisionCriteria: "Completed onboarding checklist and contract signing.",
    output: "Completed onboarding documentation.",
  },
];

interface ToolkitItem {
  id: string;
  title: string;
  focus: string;
  toolDescription: string;
  grounding: string;
}

const SELECTION_TOOLKIT: ToolkitItem[] = [
  {
    id: "tool-cv",
    title: "CV Screening",
    focus: "Initial Qualification Check",
    toolDescription: "Using a consistent screening checklist to review candidates against required education, experience, and skills.",
    grounding: "Helps ensure consistent and fair initial filtering before candidates proceed to testing.",
  },
  {
    id: "tool-psych",
    title: "Psychological Assessment",
    focus: "Cognitive & Behavioral Evaluation",
    toolDescription: "Standardized psychological tests assessing general cognitive ability, work attitude, and personality tendencies.",
    grounding: "Provides an objective assessment of how candidates approach tasks, solve problems, and handle work pressure.",
  },
  {
    id: "tool-bei",
    title: "Behavioral Interview",
    focus: "Evidence-Based Interviewing",
    toolDescription: "Structured questions asking candidates to describe specific past situations, actions, and results (STAR).",
    grounding: "Grounded in the principle that past behavior in real work settings is a reliable indicator of future performance.",
  },
  {
    id: "tool-tech",
    title: "Technical Assessment",
    focus: "Practical Job Knowledge",
    toolDescription: "Practical work sample tests, operational questions, or spreadsheet exercises.",
    grounding: "Verifies whether the candidate has the direct practical knowledge required on day one.",
  },
  {
    id: "tool-mgr",
    title: "Managerial Assessment",
    focus: "Leadership & Decision Making",
    toolDescription: "Case simulations and in-basket exercises for supervisory and managerial candidates.",
    grounding: "Assesses how candidates prioritize tasks, solve problems, and handle team coordination.",
  },
  {
    id: "tool-eval",
    title: "Candidate Evaluation",
    focus: "Comprehensive Candidate Summary",
    toolDescription: "Consolidated report summarizing psychological test findings, interview observations, strengths, and areas for development.",
    grounding: "Gives hiring managers a clear, balanced view of the candidate's profile to support sound hiring decisions.",
  },
  {
    id: "tool-onboard",
    title: "Onboarding",
    focus: "Integration & Early Support",
    toolDescription: "Structured first-week orientation, operational walk-through, and probationary review milestones.",
    grounding: "Helps new employees understand operational routines quickly and feel supported in their new role.",
  },
];

export const RecruitmentCaseStudy: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>("stage-4");
  const [selectedToolId, setSelectedToolId] = useState<string>("tool-psych");

  const activeStage =
    RECRUITMENT_STAGES.find((s) => s.id === selectedStageId) || RECRUITMENT_STAGES[0];
  const activeTool =
    SELECTION_TOOLKIT.find((t) => t.id === selectedToolId) || SELECTION_TOOLKIT[0];

  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 mb-3">
          <span>Project 04</span>
          <span aria-hidden="true">·</span>
          <span>Recruitment · Psychological Assessment</span>
          <span aria-hidden="true">·</span>
          <span>Selection Process</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          Recruitment &amp; Selection
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A structured recruitment and selection process covering sourcing, screening, psychological assessment, behavioral interviews, and candidate evaluation.
        </p>
      </div>

      {/* 2. Context & Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Users className="w-4 h-4 text-blue-600" />
            Context
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Broad Recruitment &amp; Assessment Experience
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Experience across high-volume recruitment, mass hiring, psychological assessment, behavioral interviews, managerial assessment, and recruitment process improvement.
          </p>
        </div>

        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Brain className="w-4 h-4 text-amber-600" />
            Objective
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Structured Basis for People Decisions
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Selection is not only about finding candidates — it is about creating a structured, evidence-grounded basis for hiring decisions using standardized evaluation criteria.
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE ARTIFACT 1: END-TO-END RECRUITMENT FLOW */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Interactive HR Artifact 01
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              END-TO-END RECRUITMENT &amp; SELECTION
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Click each stage to reveal the purpose, method, decision criteria, and output.
            </p>
          </div>
          <div className="text-xs text-zinc-500 font-medium px-3 py-1.5 bg-zinc-100 rounded-lg">
            7-Stage Structured Process
          </div>
        </div>

        {/* Funnel Navigation Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {RECRUITMENT_STAGES.map((stage) => {
            const isSelected = stage.id === activeStage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageId(stage.id)}
                className={`p-3 text-left rounded-xl border text-xs transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-1 ring-blue-600"
                    : "border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                  <span>{stage.step}</span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </div>
                <span className="font-semibold leading-tight">{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              Stage {activeStage.step}: {activeStage.name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            <div className="space-y-1">
              <div className="text-xs font-semibold text-zinc-500">Purpose</div>
              <p className="text-xs text-zinc-700 leading-relaxed">{activeStage.purpose}</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-zinc-500">Method</div>
              <p className="text-xs text-zinc-700 leading-relaxed">{activeStage.method}</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-zinc-500">Decision Criteria</div>
              <p className="text-xs text-zinc-700 leading-relaxed">{activeStage.decisionCriteria}</p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-semibold text-zinc-500">Output</div>
              <p className="text-xs text-zinc-900 font-medium leading-relaxed">{activeStage.output}</p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE ARTIFACT 2: SELECTION TOOLKIT */}
        <div className="pt-6 border-t border-zinc-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                Interactive HR Artifact 02
              </div>
              <h3 className="text-sm font-semibold text-zinc-900">
                SELECTION TOOLKIT
              </h3>
            </div>
            <span className="text-xs text-zinc-400">Click any toolkit component to explore</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {SELECTION_TOOLKIT.map((tool) => {
              const isSelected = tool.id === activeTool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`p-3 text-left rounded-xl border text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  <div className="font-semibold text-xs leading-snug">{tool.title}</div>
                  <div className={`text-[10px] mt-1 truncate ${isSelected ? "text-zinc-300" : "text-zinc-500"}`}>
                    {tool.focus}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-5 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-zinc-900">{activeTool.title}</div>
              <span className="text-[11px] text-zinc-500 font-medium">{activeTool.focus}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 space-y-1">
                <span className="font-semibold text-zinc-900">Usage &amp; Approach:</span>
                <p className="text-zinc-600 leading-relaxed">{activeTool.toolDescription}</p>
              </div>
              <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-200/60 space-y-1">
                <span className="font-semibold text-blue-900">Methodological Value:</span>
                <p className="text-zinc-700 leading-relaxed">{activeTool.grounding}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HIGH-VOLUME ASSESSMENT EXPERIENCE */}
      <div className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Scale &amp; Experience</div>
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
            HIGH-VOLUME ASSESSMENT EXPERIENCE
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-3xl leading-relaxed">
            Facilitating assessment sessions, coordinating with senior psychologists, managing assessment processes, and compiling evaluation reports across high-volume selection projects:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
                200+ participants
              </div>
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Bank Indonesia Scholarship Selection
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Facilitating assessment sessions, coordinating with senior psychologists, managing assessment processes, and compiling evaluation reports for scholarship applicants.
            </p>
          </div>

          <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold tracking-tight text-zinc-900 tabular-nums">
                200+ participants
              </div>
              <Users className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Trans Jateng / Trans Jatim Recruitment
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Facilitating mass psychological assessments, administering testing batteries, coordinating with senior psychologists, and compiling evaluation reports.
            </p>
          </div>
        </div>
      </div>

      {/* 5. PROCESS IMPROVEMENT */}
      <div className="p-6 sm:p-8 bg-white border border-zinc-200 rounded-2xl space-y-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Standardization</div>
        <h2 className="text-xl font-semibold text-zinc-900">
          PROCESS IMPROVEMENT
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-3xl">
          Standardizing the recruitment workflow to ensure consistent, fair, and documented hiring decisions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center space-y-1">
            <div className="text-xs font-semibold text-zinc-900">Standardized ERF</div>
            <p className="text-[11px] text-zinc-500">Employee Request Form</p>
          </div>
          <div className="text-center font-bold text-zinc-400 text-lg hidden md:block">+</div>
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center space-y-1">
            <div className="text-xs font-semibold text-zinc-900">Interview Guidelines</div>
            <p className="text-[11px] text-zinc-500">Structured question guides</p>
          </div>
          <div className="text-center font-bold text-zinc-400 text-lg hidden md:block">+</div>
          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-center space-y-1">
            <div className="text-xs font-semibold text-zinc-900">Selection Criteria</div>
            <p className="text-[11px] text-zinc-500">Consistent evaluation standards</p>
          </div>
        </div>

        <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
          <div className="text-xs text-blue-950 font-medium">
            → More structured and consistent recruitment processes
          </div>
        </div>
      </div>

      {/* 6. Key Takeaway */}
      <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Key Takeaway</div>
        <blockquote className="text-base sm:text-lg text-zinc-100 font-serif italic max-w-3xl">
          “Selection is not only about finding candidates — it is about creating a structured basis for people decisions.”
        </blockquote>
        <p className="text-xs text-zinc-400">
          Using consistent screening, psychological assessment, and behavioral interviewing helps ensure that hiring decisions are objective and reliable.
        </p>
      </div>
    </div>
  );
};
