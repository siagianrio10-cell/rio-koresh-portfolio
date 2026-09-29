import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";

interface ExperienceSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onSelectProject,
}) => {
  const [selectedId, setSelectedId] = useState<string>("pepito");

  const selectedExperience =
    EXPERIENCES.find((exp) => exp.id === selectedId) ?? EXPERIENCES[0];

  if (!selectedExperience) return null;

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 border-b border-zinc-200/80 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            <span>Career Pathway</span>
            <span aria-hidden="true">·</span>
            <span>Applied HR Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            Where the work happened.
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Experience across talent management, HR operations, psychological
            assessment, recruitment, and people development.
          </p>
        </div>

        {/* Career Path */}
        <div className="relative">
          {/* Desktop path line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[16.67%] right-[16.67%] top-[38px] h-px bg-zinc-200"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
            {EXPERIENCES.map((exp, index) => {
              const isSelected = selectedId === exp.id;
              const isCurrent = exp.period.includes("Present");

              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedId(exp.id)}
                  className={`group relative text-left rounded-xl md:rounded-none md:bg-transparent transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 ${
                    isSelected
                      ? "bg-zinc-50 border border-zinc-200 md:border-0"
                      : "bg-white border border-zinc-100 md:border-0"
                  }`}
                >
                  <div className="p-4 md:p-0">
                    {/* Node */}
                    <div className="flex items-center gap-3 md:block">
                      <div
                        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border text-[11px] font-mono font-semibold transition-all duration-300 ${
                          isSelected
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : isCurrent
                              ? "bg-white text-blue-700 border-blue-500"
                              : "bg-white text-zinc-500 border-zinc-300 group-hover:border-zinc-700"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 md:pt-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`text-sm font-semibold tracking-tight transition-colors ${
                              isSelected
                                ? "text-zinc-900"
                                : "text-zinc-700 group-hover:text-zinc-900"
                            }`}
                          >
                            {exp.company}
                          </span>

                          {isCurrent && (
                            <span className="text-[10px] font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="text-xs text-blue-900 mt-1">
                          {exp.role}
                        </div>

                        <div className="text-[10px] font-mono text-zinc-400 mt-1">
                          {exp.period}
                        </div>
                      </div>

                      <ChevronRight
                        className={`ml-auto md:hidden w-4 h-4 transition-transform ${
                          isSelected
                            ? "text-zinc-700 translate-x-0.5"
                            : "text-zinc-300"
                        }`}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Experience */}
        <div className="relative border-t border-zinc-200/80 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12">
            {/* Identity Rail */}
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedExperience.logo}
                  alt={`${selectedExperience.company} logo`}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  Selected Experience
                </div>

                <div className="text-xs text-zinc-500 mt-1">
                  {selectedExperience.location}
                </div>
              </div>
            </div>

            {/* Detail */}
            <div className="space-y-6 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    {selectedExperience.role}
                  </h3>

                  <div className="text-base font-medium text-blue-900 mt-1">
                    {selectedExperience.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 shrink-0">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {selectedExperience.period}
                  </span>

                  <span aria-hidden="true">·</span>

                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {selectedExperience.location}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[1fr_280px] gap-8 xl:gap-12 items-start">
                <div className="space-y-5">
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-3xl">
                    {selectedExperience.description}
                  </p>

                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Functional Focus
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.focus.map((item, index) => (
                        <span
                          key={`${selectedExperience.id}-${index}`}
                          className="text-xs text-zinc-700 bg-zinc-50 px-2.5 py-1.5 rounded-lg border border-zinc-200/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="border-l-0 xl:border-l border-zinc-200/80 xl:pl-7">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Related Work
                  </div>

                  {selectedExperience.id === "pepito" && onSelectProject && (
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={() => onSelectProject("project-01")}
                        className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                      >
                        <span>Project 01 · Talent Dashboard</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectProject("project-02")}
                        className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                      >
                        <span>Project 02 · Internal Mobility</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  )}

                  {selectedExperience.id === "dni" && onSelectProject && (
                    <button
                      type="button"
                      onClick={() => onSelectProject("project-05")}
                      className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                    >
                      <span>Project 05 · HR Generalist & HRGA</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  )}

                  {selectedExperience.id === "lpt" && onSelectProject && (
                    <button
                      type="button"
                      onClick={() => onSelectProject("project-04")}
                      className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                    >
                      <span>Project 04 · Recruitment & Selection</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  )}

                  {selectedExperience.id !== "pepito" &&
                    selectedExperience.id !== "dni" &&
                    selectedExperience.id !== "lpt" && (
                      <div className="text-xs text-zinc-400">
                        Experience details
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
