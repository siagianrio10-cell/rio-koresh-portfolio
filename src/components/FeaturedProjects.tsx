import React, { useState } from "react";
import {
  ArrowRight,
  BarChart3,
  GitFork,
  BookOpen,
  Users,
  ShieldCheck,
  Scale,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "../data/portfolioData";

interface FeaturedProjectsProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onOpenCaseStudy,
}) => {
  const [filter, setFilter] = useState<string>("All");

  const filterOptions = [
    { label: "All Projects (6)", value: "All" },
    { label: "Talent & Mobility", value: "Talent" },
    { label: "Assessment & Development", value: "Assessment" },
    { label: "HR Operations & Workforce", value: "Operations" },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Talent")
      return p.id === "project-01" || p.id === "project-02";
    if (filter === "Assessment")
      return p.id === "project-03" || p.id === "project-04";
    if (filter === "Operations")
      return p.id === "project-05" || p.id === "project-06";
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "project-01":
        return <BarChart3 className="w-4 h-4 text-blue-600" />;
      case "project-02":
        return <GitFork className="w-4 h-4 text-emerald-600" />;
      case "project-03":
        return <BookOpen className="w-4 h-4 text-indigo-600" />;
      case "project-04":
        return <Users className="w-4 h-4 text-amber-600" />;
      case "project-05":
        return <ShieldCheck className="w-4 h-4 text-sky-600" />;
      case "project-06":
        return <Scale className="w-4 h-4 text-teal-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 border-b border-zinc-200/80 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
              <span>Featured Projects</span>
              <span aria-hidden="true">·</span>
              <span>Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
              Featured Projects
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Case studies showing how I apply psychology, structured HR
              processes, and data to practical people decisions.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1 p-1 bg-zinc-200/60 rounded-lg self-start md:self-end overflow-x-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  filter === opt.value
                    ? "bg-white text-zinc-900 shadow-2xs font-semibold"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isFlagship = project.id === "project-01";

            return (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project.id)}
                className={`group bg-white rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-zinc-300 cursor-pointer ${
                  isFlagship
                    ? "border-blue-200 ring-1 ring-blue-100"
                    : "border-zinc-200/90"
                }`}
              >
                <div className="space-y-4">
                  {/* Project Number */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span className="font-semibold text-zinc-400">
                      PROJECT {project.number}
                    </span>

                    {isFlagship ? (
                      <span className="text-[11px] font-sans font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        Featured Case Study
                      </span>
                    ) : (
                      <span className="text-[11px] font-sans font-medium text-zinc-600 bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">
                        Selected Case Study
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900 group-hover:text-blue-900 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* =====================================================
                      PROJECT 01 — REAL FUNNEL VISUAL
                     ===================================================== */}
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

                      <div className="relative rounded-xl border border-zinc-200/80 bg-[#F8FAFC] overflow-hidden">
                        {/* subtle grid */}
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(161,161,170,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.12) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                          }}
                        />

                        <div className="relative p-4 sm:p-5">
                          {/* Funnel chart */}
                          <div className="relative h-[190px] sm:h-[205px]">
                            <svg
                              viewBox="0 0 520 230"
                              className="w-full h-full overflow-visible"
                              preserveAspectRatio="xMidYMid meet"
                              aria-label="Talent pool promotion readiness funnel"
                            >
                              {/* Funnel stage 1 */}
                              <polygon
                                points="35,15 485,15 420,62 100,62"
                                className="fill-blue-500 group-hover:fill-blue-600 transition-colors duration-300"
                              />

                              {/* Funnel stage 2 */}
                              <polygon
                                points="100,62 420,62 375,110 145,110"
                                className="fill-blue-400 group-hover:fill-blue-500 transition-colors duration-300"
                              />

                              {/* Funnel stage 3 */}
                              <polygon
                                points="145,110 375,110 335,158 185,158"
                                className="fill-blue-300 group-hover:fill-blue-400 transition-colors duration-300"
                              />

                              {/* Funnel stage 4 */}
                              <polygon
                                points="185,158 335,158 315,205 205,205"
                                className="fill-blue-700 group-hover:fill-blue-800 transition-colors duration-300"
                              />

                              {/* Labels */}
                              <text
                                x="260"
                                y="43"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "20px" }}
                              >
                                790
                              </text>

                              <text
                                x="260"
                                y="91"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "19px" }}
                              >
                                322
                              </text>

                              <text
                                x="260"
                                y="139"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "18px" }}
                              >
                                217
                              </text>

                              <text
                                x="260"
                                y="187"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "17px" }}
                              >
                                68
                              </text>

                              {/* Stage labels */}
                              <text
                                x="260"
                                y="57"
                                textAnchor="middle"
                                className="fill-white/80"
                                style={{ fontSize: "7px", letterSpacing: "1px" }}
                              >
                                TALENT POOL
                              </text>

                              <text
                                x="260"
                                y="105"
                                textAnchor="middle"
                                className="fill-white/80"
                                style={{ fontSize: "7px", letterSpacing: "1px" }}
                              >
                                ASSESSED
                              </text>

                              <text
                                x="260"
                                y="153"
                                textAnchor="middle"
                                className="fill-white/80"
                                style={{ fontSize: "7px", letterSpacing: "1px" }}
                              >
                                RECOMMENDED
                              </text>

                              <text
                                x="260"
                                y="200"
                                textAnchor="middle"
                                className="fill-white/90"
                                style={{ fontSize: "7px", letterSpacing: "1px" }}
                              >
                                PROMOTION READY
                              </text>
                            </svg>

                            {/* Left-side stage labels */}
                            <div className="absolute left-0 top-[7%] text-[8px] sm:text-[9px] font-medium text-zinc-400 uppercase tracking-wide">
                              Pool
                            </div>

                            <div className="absolute left-0 top-[29%] text-[8px] sm:text-[9px] font-medium text-zinc-400 uppercase tracking-wide">
                              Assessment
                            </div>

                            <div className="absolute left-0 top-[51%] text-[8px] sm:text-[9px] font-medium text-zinc-400 uppercase tracking-wide">
                              Review
                            </div>

                            <div className="absolute left-0 bottom-[3%] text-[8px] sm:text-[9px] font-semibold text-blue-600 uppercase tracking-wide">
                              Ready
                            </div>
                          </div>

                          {/* Conversion indicators */}
                          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200/80 pt-3 mt-1">
                            <div className="text-center">
                              <div className="text-[9px] font-mono text-zinc-400">
                                ASSESSED
                              </div>
                              <div className="text-[11px] font-semibold text-zinc-700">
                                40.8%
                              </div>
                            </div>

                            <div className="text-center border-l border-zinc-200/70">
                              <div className="text-[9px] font-mono text-zinc-400">
                                RECOMMENDED
                              </div>
                              <div className="text-[11px] font-semibold text-zinc-700">
                                67.4%
                              </div>
                            </div>

                            <div className="text-center border-l border-zinc-200/70">
                              <div className="text-[9px] font-mono text-zinc-400">
                                READY
                              </div>
                              <div className="text-[11px] font-semibold text-blue-700">
                                31.3%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* =====================================================
                       OTHER PROJECTS — EXISTING PREVIEW
                       ===================================================== */
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
                </div>

                {/* CTA */}
                <div className="pt-6 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                  <span>Explore Case Study</span>

                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
