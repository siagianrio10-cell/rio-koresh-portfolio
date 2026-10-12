import React, { useState } from "react";
import {
  Clock,
  DollarSign,
  FileCheck,
  ShieldCheck,
  Building,
  Sparkles,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  Workflow,
} from "lucide-react";

interface OperationalArea {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof Clock;
  input: string;
  process: string[];
  output: string;
}

const OPERATIONAL_AREAS: OperationalArea[] = [
  {
    id: "att",
    name: "ATTENDANCE & LEAVE",
    subtitle: "Attendance monitoring, leave administration, data validation",
    icon: Clock,
    input: "Biometric clock logs, attendance records, medical certificates, and leave request forms.",
    process: [
      "Attendance monitoring across clinic locations and shift rosters.",
      "Leave administration checking annual leave balances, sick leave, and permits.",
      "Data validation to reconcile overtime and attendance hours before payroll cutoff.",
    ],
    output: "Validated Monthly Attendance and Overtime Summary.",
  },
  {
    id: "pay",
    name: "PAYROLL",
    subtitle: "Attendance input, payroll preparation, validation, BPJS administration",
    icon: DollarSign,
    input: "Validated attendance summary, allowances, incentives, deductions, and BPJS data.",
    process: [
      "Attendance input into payroll calculations for accurate salary computation.",
      "Payroll preparation including base salary, overtime, and deductions.",
      "Validation checks to ensure calculation accuracy before bank disbursement.",
      "BPJS administration including monthly BPJS Ketenagakerjaan and BPJS Kesehatan reporting.",
    ],
    output: "Employee Payslips, Bank Transfer File, and BPJS Monthly Reports.",
  },
  {
    id: "adm",
    name: "EMPLOYEE ADMINISTRATION",
    subtitle: "Employee data, employment contracts, documentation",
    icon: FileCheck,
    input: "New hire information, employee identity documents, contract templates, and personal files.",
    process: [
      "Employee data management in central files and HRIS.",
      "Employment contracts preparation (PKWT / PKWTT) and contract renewal monitoring.",
      "Documentation of employment letters, certificates, and personnel files.",
    ],
    output: "Signed Employment Contracts, Updated HRIS Master Data, and Personnel Records.",
  },
  {
    id: "gov",
    name: "RECRUITMENT GOVERNANCE",
    subtitle: "Employee Request Form, interview guidelines, standardized recruitment process",
    icon: ShieldCheck,
    input: "Clinic replacement requests, job descriptions, and hiring approvals.",
    process: [
      "Employee Request Form (ERF) review and approval before starting recruitment.",
      "Interview guidelines provided to clinic managers for consistent candidate interviews.",
      "Standardized recruitment process from job posting to offer letter.",
    ],
    output: "Approved Requisitions, Interview Scorecards, and Standardized Offer Letters.",
  },
  {
    id: "ga",
    name: "GENERAL AFFAIRS",
    subtitle: "Inventory, facility / operational support, vendor coordination",
    icon: Building,
    input: "Operational supply requests, clinic facility needs, and vendor invoices.",
    process: [
      "Inventory monitoring for office stationery, forms, and administrative supplies.",
      "Facility and operational support to keep clinic work areas running smoothly.",
      "Vendor coordination for maintenance, permits, and routine facility services.",
    ],
    output: "Supply Inventory Records, Facility Support Logs, and Vendor Receipts.",
  },
];

export const HROperationsCaseStudy: React.FC = () => {
  const [selectedAreaId, setSelectedAreaId] = useState<string>("att");

  const currentArea =
    OPERATIONAL_AREAS.find((a) => a.id === selectedAreaId) || OPERATIONAL_AREAS[0];
  const IconComponent = currentArea.icon;

  return (
    <div className="space-y-12">
      {/* 1. Header */}
      <div className="border-b border-zinc-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 mb-3">
          <span>Project 05</span>
          <span aria-hidden="true">·</span>
          <span>HR Operations · HRIS</span>
          <span aria-hidden="true">·</span>
          <span>DNI Skin Centre Indonesia</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          HR Operations &amp; Process Improvement
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 max-w-3xl leading-relaxed">
          A practical HR operations workflow covering attendance, payroll, employee administration, recruitment governance, and general affairs.
        </p>
      </div>

      {/* 2. Context & Objectives */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <Clock className="w-4 h-4 text-blue-600" />
            Context
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Daily HR Operations Across Clinics
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Managing day-to-day HR operations across multiple clinic locations requires reliable routines for shift attendance, payroll preparation, BPJS administration, contracts, and general operational support.
          </p>
        </div>

        <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
            <CheckCircle2 className="w-4 h-4 text-amber-600" />
            Objective
          </div>
          <h2 className="text-lg font-semibold text-zinc-900">
            Process Reliability &amp; Structured Workflows
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The objective was to improve operational reliability by moving away from manual spreadsheet checks to structured, HRIS-supported workflows with clear input, process, and output stages.
          </p>
        </div>
      </div>

      {/* 3. INTERACTIVE ARTIFACT: HR OPERATIONS CONTROL CENTER */}
      <section className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-100 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              Interactive HR Artifact
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              HR OPERATIONS CONTROL CENTER
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Click the five areas below to inspect: Input → HR Process → Output.
            </p>
          </div>
          <div className="text-xs text-zinc-500 font-medium px-3 py-1.5 bg-zinc-100 rounded-lg">
            Input → HR Process → Output
          </div>
        </div>

        {/* Five Clickable Operational Area Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {OPERATIONAL_AREAS.map((area) => {
            const isSelected = area.id === currentArea.id;
            const AreaIcon = area.icon;

            return (
              <button
                key={area.id}
                onClick={() => setSelectedAreaId(area.id)}
                className={`p-4 text-left rounded-xl border text-xs transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? "border-blue-600 bg-blue-50/70 text-blue-950 ring-1 ring-blue-600"
                    : "border-zinc-200 bg-zinc-50/60 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? "bg-blue-600 text-white" : "bg-zinc-200/70 text-zinc-700"}`}>
                    <AreaIcon className="w-4 h-4" />
                  </div>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </div>
                <div>
                  <div className="font-semibold text-xs leading-snug">{area.name}</div>
                  <div className={`text-[10px] mt-0.5 line-clamp-2 ${isSelected ? "text-zinc-600" : "text-zinc-400"}`}>
                    {area.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Area Input -> Process -> Output Breakdown */}
        <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-600 text-white">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-900">{currentArea.name}</h3>
                <span className="text-xs text-zinc-500">{currentArea.subtitle}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            {/* 1. INPUT */}
            <div className="p-4 bg-white border border-zinc-200 rounded-lg space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                <Workflow className="w-3.5 h-3.5" />
                Input
              </div>
              <p className="text-zinc-600 leading-relaxed">{currentArea.input}</p>
            </div>

            {/* 2. HR PROCESS */}
            <div className="p-4 bg-white border border-zinc-200 rounded-lg space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 uppercase tracking-wider">
                <Workflow className="w-3.5 h-3.5" />
                HR Process
              </div>
              <ul className="space-y-1.5 text-zinc-600 leading-relaxed">
                {currentArea.process.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. OUTPUT */}
            <div className="p-4 bg-white border border-emerald-200/90 rounded-lg space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Output
              </div>
              <p className="text-zinc-900 font-medium leading-relaxed">{currentArea.output}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS IMPROVEMENT: BEFORE vs AFTER */}
      <section className="p-6 sm:p-8 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">Operational Results</div>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900">
              PROCESS IMPROVEMENT
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-semibold">
            <TrendingDown className="w-4 h-4 text-emerald-600" />
            40% reduction in manual processing.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="p-6 bg-white border border-zinc-200 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">BEFORE</span>
              <span className="text-xs font-mono text-zinc-500">Previous Workflow</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 font-bold">•</span>
                <span>Manual processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 font-bold">•</span>
                <span>Multiple checks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 font-bold">•</span>
                <span>Manual consolidation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 font-bold">•</span>
                <span>Higher administrative workload</span>
              </li>
            </ul>
          </div>

          {/* After */}
          <div className="p-6 bg-white border border-blue-200/80 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">AFTER</span>
              <span className="text-xs font-mono text-emerald-700 font-medium">Improved Workflow</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>HRIS-supported process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Centralized data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>More structured processing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Improved efficiency</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Foundation Flow: Administrative Accuracy -> Employee Experience -> Business Continuity */}
        <div className="p-5 bg-white border border-zinc-200 rounded-xl space-y-3">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
            Operational Impact Flow
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 text-center w-full sm:w-1/3">
              <div className="font-semibold text-zinc-900 text-sm">Administrative Accuracy</div>
              <div className="text-zinc-500 text-[11px] mt-0.5">Accurate attendance, payroll, and employee records</div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 rotate-90 sm:rotate-0" />
            <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 text-center w-full sm:w-1/3">
              <div className="font-semibold text-zinc-900 text-sm">Employee Experience</div>
              <div className="text-zinc-500 text-[11px] mt-0.5">On-time salary, clear records, and prompt support</div>
            </div>
            <ArrowRight className="w-5 h-5 text-blue-600 shrink-0 rotate-90 sm:rotate-0" />
            <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 text-center w-full sm:w-1/3">
              <div className="font-semibold text-zinc-900 text-sm">Business Continuity</div>
              <div className="text-zinc-500 text-[11px] mt-0.5">Smooth clinic operations and compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Takeaway */}
      <div className="bg-zinc-900 text-zinc-100 rounded-2xl p-6 sm:p-8 text-center sm:text-left space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">Key Takeaway</div>
        <blockquote className="text-base sm:text-lg text-zinc-100 font-serif italic max-w-3xl">
          “Reliable HR operations create the foundation for better people decisions.”
        </blockquote>
        <p className="text-xs text-zinc-400">
          Clean administrative processes and accurate employee data ensure the organization can make sound people decisions.
        </p>
      </div>
    </div>
  );
};
