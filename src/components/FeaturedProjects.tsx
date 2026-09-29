import React, { useState } from "react";
import { PROJECTS } from "../data/portfolioData";

const filterOptions = [
  { label: "All Projects (6)", value: "All" },
  { label: "Talent & Mobility", value: "Talent" },
  { label: "Assessment & Development", value: "Assessment" },
  { label: "HR Operations & Workforce", value: "Operations" },
];

const getProjectIcon = (id: string) => {
  const iconMap: Record<string, { symbol: string; color: string }> = {
    "project-01": {
      symbol: "↗",
      color: "text-blue-600",
    },
    "project-02": {
      symbol: "⑂",
      color: "text-emerald-600",
    },
    "project-03": {
      symbol: "✦",
      color: "text-indigo-600",
    },
    "project-04": {
      symbol: "◎",
      color: "text-amber-600",
    },
    "project-05": {
      symbol: "✓",
      color: "text-sky-600",
    },
    "project-06": {
      symbol: "≡",
      color: "text-teal-600",
    },
  };

  const icon = iconMap[id] ?? {
    symbol: "•",
    color: "text-zinc-500",
  };

  return (
    <span
      className={`text-[13px] font-semibold leading-none ${icon.color}`}
      aria-hidden="true"
    >
      {icon.symbol}
    </span>
  );
};

const matchesFilter = (projectId: string, filter: string) => {
  if (filter === "All") return true;

  if (filter === "Talent") {
    return projectId === "project-01" || projectId === "project-02";
  }

  if (filter === "Assessment") {
    return projectId === "project-03" || projectId === "project-04";
  }

  if (filter === "Operations") {
    return projectId === "project-05" || projectId === "project-06";
  }

  return true;
};

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = PROJECTS.filter((project) =>
    matchesFilter(project.id, activeFilter)
  );

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />

              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500">
                Selected Work
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Projects & Case Studies
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-500 max-w-xl">
              Practical HR work across talent, development, recruitment,
              operations, and workforce planning.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
                className={`px-3.5 py-2 rounded-full border text-[11px] font-medium transition-all ${
                  activeFilter === option.value
                    ? "bg-zinc-900 text-white border-zinc-900"
                    : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300 hover:text-zinc-800"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`group rounded-2xl border border-zinc-200/80 bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] ${
                project.id === "project-01" ? "md:col-span-2" : ""
              }`}
            >
              {/* Project top */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center shrink-0">
                    {getProjectIcon(project.id)}
                  </div>

                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-400 mb-1">
                      Project {project.number}
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900">
                      {project.title}
                    </h3>

                    <div className="text-[11px] text-zinc-400 mt-1">
                      {project.category}
                    </div>
                  </div>
                </div>

                <span
                  className="text-lg text-zinc-300 group-hover:text-zinc-700 group-hover:translate-x-0.5 transition-all shrink-0"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-relaxed text-zinc-500 max-w-2xl mb-5">
                {project.shortDescription}
              </p>

              {/* =========================================================
                  PROJECT 01
                  TALENT POOL & PROMOTION READINESS
              ========================================================= */}
              {project.id === "project-01" ? (
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-700">
                      {getProjectIcon(project.id)}
                      <span>Promotion Readiness</span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
                      Illustrative view
                    </span>
                  </div>

                  <div className="rounded-xl border border-zinc-200/80 bg-[#F8FAFC] overflow-hidden">
                    <div className="relative h-[215px] sm:h-[225px] flex items-center justify-center">
                      <div
                        className="absolute inset-0 opacity-35"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, rgba(161,161,170,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.12) 1px, transparent 1px)",
                          backgroundSize: "32px 32px",
                        }}
                      />

                      <svg
                        viewBox="0 0 520 250"
                        className="relative w-full max-w-[650px] h-auto px-3"
                        role="img"
                        aria-label="Illustrative talent pool funnel from 790 candidates to 68 promotion-ready candidates"
                      >
                        {/* Funnel stage 1 */}
                        <polygon
                          points="20,15 500,15 425,70 95,70"
                          fill="rgba(59,130,246,0.10)"
                          stroke="rgba(59,130,246,0.35)"
                          strokeWidth="1"
                        />

                        {/* Funnel stage 2 */}
                        <polygon
                          points="95,70 425,70 375,125 145,125"
                          fill="rgba(59,130,246,0.14)"
                          stroke="rgba(59,130,246,0.38)"
                          strokeWidth="1"
                        />

                        {/* Funnel stage 3 */}
                        <polygon
                          points="145,125 375,125 335,180 185,180"
                          fill="rgba(59,130,246,0.19)"
                          stroke="rgba(59,130,246,0.42)"
                          strokeWidth="1"
                        />

                        {/* Funnel stage 4 */}
                        <polygon
                          points="185,180 335,180 310,235 210,235"
                          fill="rgba(37,99,235,0.28)"
                          stroke="rgba(37,99,235,0.55)"
                          strokeWidth="1"
                        />

                        {/* Values */}
                        <text
                          x="260"
                          y="50"
                          textAnchor="middle"
                          className="fill-zinc-900"
                          fontSize="22"
                          fontWeight="700"
                        >
                          790
                        </text>

                        <text
                          x="260"
                          y="104"
                          textAnchor="middle"
                          className="fill-zinc-900"
                          fontSize="20"
                          fontWeight="700"
                        >
                          322
                        </text>

                        <text
                          x="260"
                          y="159"
                          textAnchor="middle"
                          className="fill-zinc-900"
                          fontSize="19"
                          fontWeight="700"
                        >
                          217
                        </text>

                        <text
                          x="260"
                          y="215"
                          textAnchor="middle"
                          className="fill-white"
                          fontSize="18"
                          fontWeight="700"
                        >
                          68
                        </text>

                        {/* Labels */}
                        <text
                          x="260"
                          y="66"
                          textAnchor="middle"
                          className="fill-zinc-500"
                          fontSize="7"
                          fontWeight="600"
                          letterSpacing="1.2"
                        >
                          TALENT POOL
                        </text>

                        <text
                          x="260"
                          y="120"
                          textAnchor="middle"
                          className="fill-zinc-500"
                          fontSize="7"
                          fontWeight="600"
                          letterSpacing="1.2"
                        >
                          ASSESSED
                        </text>

                        <text
                          x="260"
                          y="175"
                          textAnchor="middle"
                          className="fill-zinc-500"
                          fontSize="7"
                          fontWeight="600"
                          letterSpacing="1.2"
                        >
                          RECOMMENDED
                        </text>

                        <text
                          x="260"
                          y="231"
                          textAnchor="middle"
                          className="fill-white"
                          fontSize="7"
                          fontWeight="600"
                          letterSpacing="1.2"
                        >
                          PROMOTION READY
                        </text>
                      </svg>
                    </div>

                    <div className="grid grid-cols-3 border-t border-zinc-200/80 bg-white">
                      <div className="px-3 py-3 text-center border-r border-zinc-200/80">
                        <div className="text-sm font-bold font-mono text-zinc-900">
                          40.8%
                        </div>

                        <div className="text-[9px] text-zinc-400 mt-0.5">
                          Assessed
                        </div>
                      </div>

                      <div className="px-3 py-3 text-center border-r border-zinc-200/80">
                        <div className="text-sm font-bold font-mono text-zinc-900">
                          67.4%
                        </div>

                        <div className="text-[9px] text-zinc-400 mt-0.5">
                          Recommended
                        </div>
                      </div>

                      <div className="px-3 py-3 text-center">
                        <div className="text-sm font-bold font-mono text-zinc-900">
                          31.3%
                        </div>

                        <div className="text-[9px] text-zinc-400 mt-0.5">
                          Ready
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : project.id === "project-02" ? (
                /* =========================================================
                   PROJECT 02
                   WORKFORCE FULFILLMENT
                ========================================================= */
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-700">
                      {getProjectIcon(project.id)}
                      <span>Workforce Fulfillment</span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
                      Process view
                    </span>
                  </div>

                  <div className="relative rounded-xl border border-zinc-200/80 bg-[#F8FAFC] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-35"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(161,161,170,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.12) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    <div className="relative p-4 sm:p-5">
                      <div className="flex flex-col items-center">
                        {/* Vacancy */}
                        <div className="px-5 py-2 rounded-lg bg-zinc-900 text-white text-[11px] font-semibold tracking-wide">
                          VACANCY
                        </div>

                        <div className="w-px h-5 bg-zinc-300" />

                        {/* Two paths */}
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-[420px]">
                          {/* Internal */}
                          <div className="text-center">
                            <div className="text-[9px] font-mono uppercase tracking-wider text-emerald-600 mb-2">
                              Internal
                            </div>

                            <div className="space-y-1.5">
                              {[
                                "Succession",
                                "Assessment",
                                "Readiness",
                                "Acting",
                                "Panel",
                                "Promotion",
                              ].map((step, index) => (
                                <React.Fragment key={step}>
                                  <div
                                    className={`px-2.5 py-1.5 rounded-md border text-[10px] font-medium ${
                                      index === 5
                                        ? "bg-emerald-600 text-white border-emerald-600"
                                        : "bg-white text-zinc-700 border-zinc-200"
                                    }`}
                                  >
                                    {step}
                                  </div>

                                  {index < 5 && (
                                    <div className="w-px h-2 bg-zinc-300 mx-auto" />
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          {/* External */}
                          <div className="text-center">
                            <div className="text-[9px] font-mono uppercase tracking-wider text-blue-600 mb-2">
                              External
                            </div>

                            <div className="space-y-1.5">
                              {[
                                "Recruitment",
                                "Interview",
                                "Selection",
                                "Join",
                                "Appointment",
                              ].map((step, index) => (
                                <React.Fragment key={step}>
                                  <div
                                    className={`px-2.5 py-1.5 rounded-md border text-[10px] font-medium ${
                                      index === 4
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-zinc-700 border-zinc-200"
                                    }`}
                                  >
                                    {step}
                                  </div>

                                  {index < 4 && (
                                    <div className="w-px h-2 bg-zinc-300 mx-auto" />
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Merge */}
                        <div className="w-full max-w-[420px]">
                          <div className="grid grid-cols-2 gap-4 sm:gap-5">
                            <div className="h-5 border-r border-zinc-300" />
                            <div className="h-5 border-l border-zinc-300" />
                          </div>

                          <div className="relative h-5">
                            <div className="absolute left-1/4 right-1/2 top-0 border-t border-zinc-300" />

                            <div className="absolute left-1/2 right-1/4 top-0 border-t border-zinc-300" />

                            <div className="absolute left-1/2 top-0 h-5 border-l border-zinc-300 -translate-x-1/2" />
                          </div>
                        </div>

                        {/* Result */}
                        <div className="px-5 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-[10px] font-semibold tracking-wide">
                          POSITION FULFILLED
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-5 pt-3 border-t border-zinc-200/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />

                          <span className="text-[9px] text-zinc-500">
                            Internal mobility
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />

                          <span className="text-[9px] text-zinc-500">
                            External hiring
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : project.id === "project-03" ? (
                /* =========================================================
                   PROJECT 03
                   TNA & INDIVIDUAL DEVELOPMENT PLANNING
                   INPUT → GAP → ACTION → IDP
                ========================================================= */
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-700">
                      {getProjectIcon(project.id)}
                      <span>Development Planning</span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
                      Gap → Action
                    </span>
                  </div>

                  <div className="relative rounded-xl border border-zinc-200/80 bg-[#F8FAFC] overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(161,161,170,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.12) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />

                    <div className="relative p-4 sm:p-5">
                      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-5 items-center">
                        {/* INPUTS */}
                        <div>
                          <div className="text-[9px] font-mono uppercase tracking-[0.16em] text-zinc-400 mb-2.5">
                            Inputs
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white border border-zinc-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />

                              <span className="text-[10px] font-medium text-zinc-700">
                                Assessment Results
                              </span>
                            </div>

                            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white border border-zinc-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />

                              <span className="text-[10px] font-medium text-zinc-700">
                                Development Needs
                              </span>
                            </div>

                            <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white border border-zinc-200">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />

                              <span className="text-[10px] font-medium text-zinc-700">
                                Competency Gaps
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* COMPETENCY GAP */}
                        <div className="flex flex-col items-center justify-center">
                          <div className="hidden sm:block w-8 h-px bg-zinc-300 mb-3" />

                          <div className="relative w-[128px] h-[128px] rounded-full border border-indigo-200 bg-indigo-50/80 flex flex-col items-center justify-center text-center">
                            <div className="absolute inset-2 rounded-full border border-dashed border-indigo-200" />

                            <span className="relative text-[9px] font-mono uppercase tracking-[0.16em] text-indigo-500">
                              Diagnosis
                            </span>

                            <span className="relative mt-1 text-sm font-semibold text-indigo-950">
                              Competency
                            </span>

                            <span className="relative text-sm font-semibold text-indigo-950">
                              Gap
                            </span>
                          </div>

                          <div className="hidden sm:block w-8 h-px bg-zinc-300 mt-3" />
                        </div>

                        {/* ACTION */}
                        <div>
                          <div className="text-[9px] font-mono uppercase tracking-[0.16em] text-zinc-400 mb-2.5">
                            Action
                          </div>

                          <div className="rounded-lg bg-white border border-zinc-200 p-3">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] font-semibold text-zinc-800">
                                Development Action
                              </span>

                              <span className="text-[9px] font-mono text-indigo-500">
                                GAP → ACTION
                              </span>
                            </div>

                            {/* Visual representation only */}
                            <div className="space-y-2">
                              <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                                <div className="h-full w-[72%] rounded-full bg-indigo-300" />
                              </div>

                              <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                                <div className="h-full w-[52%] rounded-full bg-indigo-400" />
                              </div>

                              <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                                <div className="h-full w-[84%] rounded-full bg-indigo-500" />
                              </div>
                            </div>

                            <div className="mt-3 text-[9px] text-zinc-400">
                              Prioritized from identified development gaps
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Connector */}
                      <div className="flex justify-center py-3">
                        <div className="h-5 w-px bg-zinc-300" />
                      </div>

                      {/* IDP OUTPUT */}
                      <div className="rounded-xl border border-indigo-200 bg-white overflow-hidden">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                              <span className="text-sm">✦</span>
                            </div>

                            <div>
                              <div className="text-[9px] font-mono uppercase tracking-[0.14em] text-indigo-500">
                                Output
                              </div>

                              <div className="text-xs font-semibold text-zinc-900">
                                Individual Development Plan
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-[9px] text-zinc-400 font-mono uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />

                            From skill gaps to development actions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* =========================================================
                   PROJECT 04–06
                   GENERIC ARTIFACT
                ========================================================= */
                <div className="p-3.5 bg-zinc-50 group-hover:bg-zinc-100/70 rounded-xl border border-zinc-200/70 transition-colors space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-medium text-zinc-700">
                      {getProjectIcon(project.id)}

                      <span>Interactive Artifact</span>
                    </div>

                    <span className="text-[11px] font-mono text-zinc-400">
                      Interactive
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between pt-1">
                    <span className="text-base sm:text-lg font-bold font-mono text-zinc-900 tabular-nums">
                      {project.headlineMetric}
                    </span>

                    <span className="text-[11px] text-zinc-500 text-right">
                      {project.metricLabel}
                    </span>
                  </div>
                </div>
              )}

              {/* Bottom metadata */}
              <div className="flex items-center justify-between gap-4 mt-5 pt-4 border-t border-zinc-100">
                <div className="text-[10px] font-mono uppercase tracking-[0.12em] text-zinc-400">
                  {project.keyCapability}
                </div>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 text-[10px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  View project

                  <span className="text-xs">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
