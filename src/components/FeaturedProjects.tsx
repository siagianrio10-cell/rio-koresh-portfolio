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

    if (filter === "Talent") {
      return p.id === "project-01" || p.id === "project-02";
    }

    if (filter === "Assessment") {
      return p.id === "project-03" || p.id === "project-04";
    }

    if (filter === "Operations") {
      return p.id === "project-05" || p.id === "project-06";
    }

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
        {/* Header & Filter Controls */}
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

          {/* Interactive Filter Control Tabs */}
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

        {/* Projects Grid */}
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
                  {/* Card Lead */}
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

                  {/* ===================================================== */}
                  {/* PROJECT 01 — TALENT POOL & PROMOTION READINESS       */}
                  {/* ===================================================== */}
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
                        <div
                          className="absolute inset-0 opacity-40"
                          style={{
                            backgroundImage:
                              "linear-gradient(to right, rgba(161,161,170,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.12) 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                          }}
                        />

                        <div className="relative px-3 sm:px-4 pt-3 sm:pt-4 pb-4">
                          <div className="relative h-[215px] sm:h-[225px]">
                            <svg
                              viewBox="0 0 520 250"
                              className="w-full h-full overflow-visible"
                              preserveAspectRatio="xMidYMid meet"
                              aria-label="Talent pool promotion readiness funnel"
                            >
                              <polygon
                                points="20,15 500,15 425,70 95,70"
                                className="fill-blue-500 group-hover:fill-blue-600 transition-colors duration-300"
                              />

                              <polygon
                                points="95,70 425,70 375,125 145,125"
                                className="fill-blue-400 group-hover:fill-blue-500 transition-colors duration-300"
                              />

                              <polygon
                                points="145,125 375,125 335,180 185,180"
                                className="fill-blue-300 group-hover:fill-blue-400 transition-colors duration-300"
                              />

                              <polygon
                                points="185,180 335,180 310,235 210,235"
                                className="fill-blue-700 group-hover:fill-blue-800 transition-colors duration-300"
                              />

                              <text
                                x="260"
                                y="46"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "22px" }}
                              >
                                790
                              </text>

                              <text
                                x="260"
                                y="101"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "21px" }}
                              >
                                322
                              </text>

                              <text
                                x="260"
                                y="156"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "20px" }}
                              >
                                217
                              </text>

                              <text
                                x="260"
                                y="211"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "19px" }}
                              >
                                68
                              </text>

                              <text
                                x="260"
                                y="62"
                                textAnchor="middle"
                                className="fill-white/85"
                                style={{
                                  fontSize: "7px",
                                  letterSpacing: "1px",
                                }}
                              >
                                TALENT POOL
                              </text>

                              <text
                                x="260"
                                y="117"
                                textAnchor="middle"
                                className="fill-white/85"
                                style={{
                                  fontSize: "7px",
                                  letterSpacing: "1px",
                                }}
                              >
                                ASSESSED
                              </text>

                              <text
                                x="260"
                                y="172"
                                textAnchor="middle"
                                className="fill-white/85"
                                style={{
                                  fontSize: "7px",
                                  letterSpacing: "1px",
                                }}
                              >
                                RECOMMENDED
                              </text>

                              <text
                                x="260"
                                y="227"
                                textAnchor="middle"
                                className="fill-white/90"
                                style={{
                                  fontSize: "7px",
                                  letterSpacing: "0.8px",
                                }}
                              >
                                PROMOTION READY
                              </text>
                            </svg>
                          </div>

                          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200/80 pt-3 mt-1">
                            <div className="text-center">
                              <div className="text-[9px] font-mono text-zinc-400 uppercase">
                                Assessed
                              </div>

                              <div className="text-[11px] font-semibold text-zinc-700 mt-0.5">
                                40.8%
                              </div>
                            </div>

                            <div className="text-center border-l border-zinc-200/70">
                              <div className="text-[9px] font-mono text-zinc-400 uppercase">
                                Recommended
                              </div>

                              <div className="text-[11px] font-semibold text-zinc-700 mt-0.5">
                                67.4%
                              </div>
                            </div>

                            <div className="text-center border-l border-zinc-200/70">
                              <div className="text-[9px] font-mono text-zinc-400 uppercase">
                                Ready
                              </div>

                              <div className="text-[11px] font-semibold text-blue-700 mt-0.5">
                                31.3%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  /* ===================================================== */
                  /* PROJECT 02 — WORKFORCE FULFILLMENT                  */
                  /* ===================================================== */
                  ) : project.id === "project-02" ? (
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
                            <div className="px-5 py-2 rounded-lg bg-zinc-900 text-white text-[11px] font-semibold tracking-wide">
                              VACANCY
                            </div>

                            <div className="w-px h-5 bg-zinc-300" />

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

                            <div className="px-5 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-[10px] font-semibold tracking-wide">
                              POSITION FULFILLED
                            </div>
                          </div>

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

                  /* ===================================================== */
                  /* PROJECT 03 — TNA & INDIVIDUAL DEVELOPMENT PLANNING */
                  /* ===================================================== */
                  ) : project.id === "project-03" ? (
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
                          <svg
                            viewBox="0 0 520 235"
                            className="w-full h-[215px] sm:h-[225px]"
                            preserveAspectRatio="xMidYMid meet"
                            aria-label="Development planning from competency gaps to individual development plan"
                          >
                            {/* Input labels */}
                            <text
                              x="35"
                              y="38"
                              className="fill-zinc-400"
                              style={{
                                fontSize: "9px",
                                letterSpacing: "1px",
                              }}
                            >
                              INPUTS
                            </text>

                            <text
                              x="35"
                              y="72"
                              className="fill-zinc-700 font-medium"
                              style={{ fontSize: "11px" }}
                            >
                              Assessment Results
                            </text>

                            <text
                              x="35"
                              y="105"
                              className="fill-zinc-700 font-medium"
                              style={{ fontSize: "11px" }}
                            >
                              Development Needs
                            </text>

                            <text
                              x="35"
                              y="138"
                              className="fill-zinc-700 font-medium"
                              style={{ fontSize: "11px" }}
                            >
                              Competency Gaps
                            </text>

                            {/* Connecting lines */}
                            <path
                              d="M 165 68 C 205 68, 210 105, 245 105"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-zinc-300"
                            />

                            <path
                              d="M 165 102 C 205 102, 210 105, 245 105"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-zinc-300"
                            />

                            <path
                              d="M 165 136 C 205 136, 210 105, 245 105"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-zinc-300"
                            />

                            {/* Center diagnosis */}
                            <circle
                              cx="285"
                              cy="105"
                              r="43"
                              className="fill-indigo-600 group-hover:fill-indigo-700 transition-colors duration-300"
                            />

                            <text
                              x="285"
                              y="101"
                              textAnchor="middle"
                              className="fill-white font-semibold"
                              style={{ fontSize: "11px" }}
                            >
                              COMPETENCY
                            </text>

                            <text
                              x="285"
                              y="116"
                              textAnchor="middle"
                              className="fill-white font-semibold"
                              style={{ fontSize: "11px" }}
                            >
                              GAP
                            </text>

                            {/* Action line */}
                            <path
                              d="M 328 105 C 355 105, 360 105, 390 105"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className="text-indigo-300"
                            />

                            <polygon
                              points="390,105 380,100 380,110"
                              className="fill-indigo-300"
                            />

                            {/* Action */}
                            <text
                              x="390"
                              y="65"
                              className="fill-zinc-400"
                              style={{
                                fontSize: "9px",
                                letterSpacing: "1px",
                              }}
                            >
                              ACTION
                            </text>

                            <rect
                              x="390"
                              y="78"
                              width="92"
                              height="55"
                              rx="9"
                              className="fill-white stroke-zinc-200"
                              strokeWidth="1"
                            />

                            <rect
                              x="402"
                              y="91"
                              width="48"
                              height="5"
                              rx="2.5"
                              className="fill-indigo-200"
                            />

                            <rect
                              x="402"
                              y="102"
                              width="62"
                              height="5"
                              rx="2.5"
                              className="fill-indigo-300"
                            />

                            <rect
                              x="402"
                              y="113"
                              width="35"
                              height="5"
                              rx="2.5"
                              className="fill-indigo-400"
                            />

                            <text
                              x="436"
                              y="151"
                              textAnchor="middle"
                              className="fill-zinc-500"
                              style={{ fontSize: "9px" }}
                            >
                              Development Action
                            </text>

                            {/* Bottom output */}
                            <path
                              d="M 285 149 L 285 178"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="text-zinc-300"
                            />

                            <polygon
                              points="285,187 280,177 290,177"
                              className="fill-zinc-300"
                            />

                            <rect
                              x="195"
                              y="187"
                              width="180"
                              height="32"
                              rx="8"
                              className="fill-zinc-900 group-hover:fill-indigo-700 transition-colors duration-300"
                            />

                            <text
                              x="285"
                              y="207"
                              textAnchor="middle"
                              className="fill-white font-semibold"
                              style={{
                                fontSize: "10px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              INDIVIDUAL DEVELOPMENT PLAN
                            </text>
                          </svg>

                          <div className="border-t border-zinc-200/80 pt-3 mt-1 text-center">
                            <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
                              From identified gaps to development actions
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  /* ===================================================== */
                  /* PROJECT 04 — RECRUITMENT & SELECTION                */
                  /* ===================================================== */
                  ) : project.id === "project-04" ? (
                    <div className="pt-2">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-700">
                          {getProjectIcon(project.id)}
                          <span>Recruitment & Selection</span>
                        </div>

                        <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
                          End-to-end
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
                          <div className="relative h-[215px] sm:h-[225px] flex items-center">
                            <svg
                              viewBox="0 0 520 220"
                              className="w-full h-full"
                              preserveAspectRatio="xMidYMid meet"
                              aria-label="End-to-end recruitment and selection process"
                            >
                              {/* Main flowing line */}
                              <path
                                d="M 42 110 C 105 110, 105 75, 160 75 S 220 145, 275 110 S 335 75, 380 110 S 440 145, 478 110"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-zinc-300"
                              />

                              {/* Nodes */}
                              {[
                                {
                                  x: 42,
                                  y: 110,
                                  label: "REQUEST",
                                  color: "fill-zinc-900",
                                },
                                {
                                  x: 150,
                                  y: 75,
                                  label: "SOURCE",
                                  color: "fill-blue-500",
                                },
                                {
                                  x: 265,
                                  y: 110,
                                  label: "SCREEN",
                                  color: "fill-blue-500",
                                },
                                {
                                  x: 375,
                                  y: 110,
                                  label: "ASSESS",
                                  color: "fill-amber-500",
                                },
                                {
                                  x: 478,
                                  y: 110,
                                  label: "SELECT",
                                  color: "fill-zinc-900",
                                },
                              ].map((node) => (
                                <React.Fragment key={node.label}>
                                  <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="18"
                                    className={`${node.color} group-hover:opacity-90 transition-opacity duration-300`}
                                  />

                                  <circle
                                    cx={node.x}
                                    cy={node.y}
                                    r="5"
                                    className="fill-white"
                                  />

                                  <text
                                    x={node.x}
                                    y={node.y + 39}
                                    textAnchor="middle"
                                    className="fill-zinc-600 font-semibold"
                                    style={{
                                      fontSize: "9px",
                                      letterSpacing: "0.7px",
                                    }}
                                  >
                                    {node.label}
                                  </text>
                                </React.Fragment>
                              ))}

                              {/* Interview as parallel evaluation point */}
                              <circle
                                cx="320"
                                cy="158"
                                r="13"
                                className="fill-amber-400"
                              />

                              <circle
                                cx="320"
                                cy="158"
                                r="4"
                                className="fill-white"
                              />

                              <text
                                x="320"
                                y="185"
                                textAnchor="middle"
                                className="fill-zinc-500 font-medium"
                                style={{ fontSize: "8px" }}
                              >
                                INTERVIEW
                              </text>

                              <path
                                d="M 320 145 L 320 125"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="3 3"
                                className="text-zinc-300"
                              />

                              {/* Onboarding endpoint */}
                              <path
                                d="M 478 128 L 478 175"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-zinc-300"
                              />

                              <circle
                                cx="478"
                                cy="185"
                                r="18"
                                className="fill-emerald-600 group-hover:fill-emerald-700 transition-colors duration-300"
                              />

                              <text
                                x="478"
                                y="189"
                                textAnchor="middle"
                                className="fill-white font-bold"
                                style={{ fontSize: "8px" }}
                              >
                                JOIN
                              </text>

                              <text
                                x="478"
                                y="215"
                                textAnchor="middle"
                                className="fill-zinc-500 font-medium"
                                style={{
                                  fontSize: "8px",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                ONBOARD
                              </text>
                            </svg>
                          </div>

                          <div className="border-t border-zinc-200/80 pt-3 mt-1 flex items-center justify-center">
                            <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
                              From hiring request to onboarding
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                  /* ===================================================== */
                  /* PROJECT 05–06 — EXISTING ARTIFACT                   */
                  /* ===================================================== */
                  ) : (
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

                {/* Card Footer */}
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
