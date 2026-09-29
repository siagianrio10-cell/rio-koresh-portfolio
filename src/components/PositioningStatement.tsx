import React, { useState } from "react";
import { Brain, Layers, ShieldCheck, LineChart, ChevronRight } from "lucide-react";

interface PositioningStatementProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const PositioningStatement: React.FC<PositioningStatementProps> = ({
  onOpenCaseStudy,
}) => {
  const [activeTab, setActiveTab] = useState<"pipeline" | "framework" | "analytics">("pipeline");

  return (
    <section className="py-16 sm:py-20 border-b border-zinc-200/80 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: How I Work text */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
              How I Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 leading-snug">
              Bringing Psychology into Practical HR Work
            </h2>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
              My background in Psychology has shaped how I approach HR — from understanding people through assessment to working with structured processes and HR data.
            </p>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              My experience covers Talent Management, Recruitment, HR Operations, People Development, Psychological Assessment, and Workforce Planning. I enjoy working on HR processes where people information needs to be translated into clear and practical decisions.
            </p>
          </div>

          {/* Right: Featured Case Study Card */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                    Featured Case Study
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 mt-0.5">
                    Talent Pool &amp; Promotion Readiness Dashboard
                  </div>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">Talent · Analytics</span>
              </div>

              {/* Segmented Control Tabs */}
              <div className="flex items-center p-1 bg-white border border-zinc-200 rounded-lg text-xs">
                <button
                  onClick={() => setActiveTab("pipeline")}
                  className={`flex-1 py-1.5 font-medium rounded-md transition-colors ${
                    activeTab === "pipeline"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Talent Pipeline
                </button>
                <button
                  onClick={() => setActiveTab("framework")}
                  className={`flex-1 py-1.5 font-medium rounded-md transition-colors ${
                    activeTab === "framework"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Readiness Logic
                </button>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`flex-1 py-1.5 font-medium rounded-md transition-colors ${
                    activeTab === "analytics"
                      ? "bg-zinc-900 text-white"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  Workforce Load
                </button>
              </div>

              {activeTab === "pipeline" && (
                <div className="space-y-3.5 bg-white p-4 rounded-xl border border-zinc-200/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-900">Retail Store Network Pipeline</span>
                    <span className="text-zinc-600 font-mono text-[11px] bg-zinc-100 px-2 py-0.5 rounded">
                      4 Levels
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                      <span className="text-zinc-600">1. Talent Pool Identified</span>
                      <span className="font-semibold font-mono text-zinc-900">790 Candidates</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                      <span className="text-zinc-600">2. Psychologically Assessed</span>
                      <span className="font-semibold font-mono text-blue-900">322 Assessed</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-zinc-50 rounded-lg">
                      <span className="text-zinc-700">3. Assessment Recommended</span>
                      <span className="font-semibold font-mono text-zinc-900">217 Recommended</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50/70 border border-blue-100 rounded-lg">
                      <span className="text-blue-950 font-medium">4. Role Readiness Verified</span>
                      <span className="font-semibold font-mono text-blue-800">68 Ready Candidates</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy("project-01")}
                    className="w-full mt-2 py-2 text-xs font-semibold text-blue-600 hover:text-blue-800 text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeTab === "framework" && (
                <div className="space-y-3 bg-white p-4 rounded-xl border border-zinc-200/80 text-xs">
                  <div className="font-semibold text-zinc-900">Promotion Readiness Assessment Logic</div>
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg space-y-1">
                    <div className="font-semibold text-emerald-800">Ready Candidate</div>
                    <div className="text-[11px] text-zinc-600">
                      Recommended in Assessment + Role Readiness Verified
                    </div>
                  </div>
                  <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg space-y-1">
                    <div className="font-semibold text-amber-800">Development Candidates</div>
                    <div className="text-[11px] text-zinc-600">
                      Recommended in Assessment + Role Readiness in progress
                    </div>
                  </div>
                  <div className="p-2.5 bg-zinc-100 rounded-lg space-y-1">
                    <div className="font-semibold text-zinc-800">Further Development</div>
                    <div className="text-[11px] text-zinc-600">
                      Need Development outcome across target competencies
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy("project-01")}
                    className="w-full mt-1 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-3 bg-white p-4 rounded-xl border border-zinc-200/80 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-zinc-900">Store Staffing Scenario</span>
                    <span className="text-[11px] font-mono text-zinc-500">Retail Format A</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/60">
                      <div className="text-[11px] text-zinc-500">Required Headcount</div>
                      <div className="text-xl font-bold font-mono text-zinc-900 mt-1">36 HC</div>
                    </div>
                    <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/60">
                      <div className="text-[11px] text-zinc-500">Monthly Employee Cost</div>
                      <div className="text-sm font-bold font-mono text-zinc-900 mt-1.5">IDR 187.2M</div>
                    </div>
                  </div>
                  <div className="p-2.5 bg-blue-50/70 border border-blue-200 rounded-lg text-zinc-700 text-[11px] leading-relaxed">
                    <strong>Workforce Planning:</strong> Connecting store requirements, headcount gaps, and employee costs to support better staffing decisions.
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy("project-06")}
                    className="w-full mt-1 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 text-center flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Explore Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <div className="text-[11px] text-zinc-400 text-center pt-1">
                Illustrative / Synthetic Data · Grounded in practical HR execution
              </div>
            </div>
          </div>
        </div>

        {/* Four Simple Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Brain className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Psychology &amp; Assessment</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Using psychological assessment and structured evaluation to understand employee potential, readiness, and development needs.
            </p>
          </div>

          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Structured HR Processes</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Building clear workflows for recruitment, promotion, development, and employee administration.
            </p>
          </div>

          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">HR Operations</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Hands-on experience in day-to-day HR administration, payroll, attendance, HRIS, BPJS, and employee documentation.
            </p>
          </div>

          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <LineChart className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Data-Informed Decisions</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Using HR data, dashboards, and reporting to monitor people metrics and support HR decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
