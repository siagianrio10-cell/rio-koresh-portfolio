import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Brain,
  CheckCircle2,
  FileText,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface AboutSectionProps {
  onOpenCV: () => void;
  onExploreProjects: () => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenCV,
  onExploreProjects,
  onOpenCaseStudy,
}) => {
  const [imgSrc, setImgSrc] = useState(PROFILE.avatar);
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<"pipeline" | "framework" | "analytics">("pipeline");

  return (
    <section
      id="about"
      className="pt-28 sm:pt-32 pb-20 sm:pb-24 border-b border-zinc-200/80 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Portrait & Credentials Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm bg-zinc-100 aspect-square">
              {!imageError ? (
                <img
                  src={imgSrc}
                  alt={`${PROFILE.name} - ${PROFILE.title}`}
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (imgSrc !== PROFILE.fallbackAvatar) {
                      setImgSrc(PROFILE.fallbackAvatar);
                    } else {
                      setImageError(true);
                    }
                  }}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-zinc-100">
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-3">
                    RKY
                  </div>
                  <div className="font-semibold text-zinc-900">{PROFILE.name}</div>
                  <div className="text-xs text-zinc-500 mt-1">{PROFILE.title}</div>
                </div>
              )}
            </div>

            {/* Quick Credentials Panel */}
            <div className="p-4 bg-white border border-zinc-200 rounded-xl space-y-3 max-w-sm mx-auto">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-700 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Education</div>
                  <div className="text-xs font-semibold text-zinc-900 mt-0.5">Bachelor of Psychology</div>
                  <div className="text-xs text-zinc-600">Universitas Negeri Semarang</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-0.5">GPA 3.35 / 4.00</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-zinc-100">
                <div className="p-2 rounded-lg bg-zinc-100 text-zinc-700 shrink-0 mt-0.5">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Core Background</div>
                  <div className="text-xs font-semibold text-zinc-900 mt-0.5">
                    Psychological Assessment &amp; People Understanding
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Bio, Highlights & Featured Case Study */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker (from previous hero) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 font-medium">
              <span>B.Psi. in Psychology</span>
              <span aria-hidden="true">·</span>
              <span>HR Professional</span>
              <span aria-hidden="true">·</span>
              <span>Bali</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 leading-snug">
              A Psychology graduate working across different areas of HR.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <p>
                My background in Psychology has shaped how I approach HR — from understanding people through assessment to working with structured processes and HR data.
              </p>
              <p>
                My experience covers Talent Management, Recruitment, HR Operations, People Development, Psychological Assessment, and Workforce Planning. I enjoy working on HR processes where people information needs to be translated into clear and practical decisions.
              </p>
              <p>
                Across my roles, I have worked with talent pools and promotion readiness, recruitment and assessment, payroll and HR administration, TNA and IDP, HR dashboards, and workforce planning scenarios.
              </p>
            </div>

            {/* Core Practice Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                "Talent Management",
                "Recruitment & Selection",
                "Psychological Assessment",
                "People Development (TNA/IDP)",
                "HR Operations & Payroll",
                "Workforce Planning",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-zinc-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={PROFILE.cvUrl}
                download="Rio_Koresh_Yeremia_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Featured Case Study Card (from previous hero) */}
            <div className="bg-zinc-50 border border-zinc-200/90 rounded-2xl p-6 shadow-xs space-y-5 mt-4">
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
      </div>
    </section>
  );
};
