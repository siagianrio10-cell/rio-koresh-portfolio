import React, { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface HeroProps {
  onExploreProjects: () => void;
  onViewExperience: () => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onViewExperience,
  onOpenCaseStudy,
}) => {
  const [activeTab, setActiveTab] = useState<"pipeline" | "framework" | "analytics">("pipeline");

  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 font-medium">
              <span>B.Psi. in Psychology</span>
              <span aria-hidden="true">·</span>
              <span>HR Professional</span>
              <span aria-hidden="true">·</span>
              <span>Bali</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15] text-balance">
              A people-focused foundation, applied to HR decisions.
            </h1>

            {/* Concise Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              Applying a background in Psychology to practical HR work across talent management, recruitment, people development, HR operations, and data-informed decision making.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors shadow-xs cursor-pointer"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewExperience}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 hover:border-zinc-400 transition-colors cursor-pointer"
              >
                <span>Experience Timeline</span>
              </button>
            </div>

            {/* 4 Clean Capability Cards */}
            <div className="pt-6 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-900">Psychology Grounded</div>
                <div className="text-[11px] text-zinc-500 mt-1 leading-snug">
                  Psychological assessment &amp; people insight
                </div>
              </div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-900">Structured Process</div>
                <div className="text-[11px] text-zinc-500 mt-1 leading-snug">
                  Clear workflows &amp; consistent standards
                </div>
              </div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-900">Data Informed</div>
                <div className="text-[11px] text-zinc-500 mt-1 leading-snug">
                  HR data supporting better decisions
                </div>
              </div>
              <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/60">
                <div className="text-xs font-semibold text-zinc-900">Workforce Perspective</div>
                <div className="text-[11px] text-zinc-500 mt-1 leading-snug">
                  Connecting people needs with operational requirements
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Case Study Preview */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 shadow-xs space-y-5">
              {/* Header: Featured Case Study */}
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

              {/* Dynamic Interactive Card Content */}
              {activeTab === "pipeline" && (
                <div className="space-y-3.5 bg-white p-4 rounded-xl border border-zinc-200/80">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-zinc-900">Retail Store Network Pipeline</span>
                    <span className="text-zinc-600 font-mono text-[11px] bg-zinc-100 px-2 py-0.5 rounded">
                      4 Levels
                    </span>
                  </div>

                  {/* Flow items: Exactly matching user prompt */}
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
      </div>
    </section>
  );
};
