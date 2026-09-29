import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "../data/portfolioData";

interface ExperienceSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectProject }) => {
  const [expandedId, setExpandedId] = useState<string>("pepito");

  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            <span>Career Pathway</span>
            <span aria-hidden="true">·</span>
            <span>Applied HR Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            Professional Experience Timeline
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Hands-on experience across talent management, end-to-end HR operations, psychological assessment, and training delivery.
          </p>
        </div>

        {/* Visual Timeline Layout */}
        <div className="relative border-l border-zinc-200 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.period.includes("Present");

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline Dot Indicator */}
                <span
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white transition-colors ${
                    isCurrent
                      ? "border-blue-600 ring-4 ring-blue-50"
                      : "border-zinc-400 group-hover:border-zinc-700"
                  }`}
                />

                {/* Experience Card */}
                <div className="bg-zinc-50/70 hover:bg-zinc-50 border border-zinc-200/90 rounded-2xl p-5 sm:p-7 transition-all">
                  <div
                    onClick={() => setExpandedId(isExpanded ? "" : exp.id)}
                    className="cursor-pointer flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                  >
                    <div>
                      {/* Company & Role */}
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-zinc-900 tracking-tight">
                          {exp.company}
                        </h3>
                        {isCurrent && (
                          <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="text-sm font-medium text-blue-900 mt-0.5">
                        {exp.role}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 mt-2">
                        <span className="flex items-center gap-1 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                          {exp.period}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-start">
                      <span className="text-xs text-zinc-500 font-medium hidden sm:inline">
                        {isExpanded ? "Collapse Focus" : "View Focus"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-500" />
                      )}
                    </div>
                  </div>

                  {/* Concise Role Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 mt-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Expanded Focus Areas & Capabilities */}
                  {isExpanded && (
                    <div className="mt-5 pt-4 border-t border-zinc-200/80 space-y-3">
                      <div className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                        Core Functional Focus Areas:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.focus.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white text-zinc-700 px-3 py-1.5 rounded-lg border border-zinc-200/90 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Associated Case Study Hook */}
                      {exp.id === "pepito" && onSelectProject && (
                        <div className="pt-2 flex items-center gap-2 text-xs">
                          <span className="text-zinc-500">Related Case Studies:</span>
                          <button
                            onClick={() => onSelectProject("project-01")}
                            className="text-blue-600 font-medium hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                          >
                            Project 01 (Talent Dashboard)
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                          <span className="text-zinc-300">·</span>
                          <button
                            onClick={() => onSelectProject("project-02")}
                            className="text-blue-600 font-medium hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                          >
                            Project 02 (Internal Mobility)
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}

                      {exp.id === "dni" && onSelectProject && (
                        <div className="pt-2 flex items-center gap-2 text-xs">
                          <span className="text-zinc-500">Related Case Study:</span>
                          <button
                            onClick={() => onSelectProject("project-05")}
                            className="text-blue-600 font-medium hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                          >
                            Project 05 (HR Operations Control Center)
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}

                      {exp.id === "lpt" && onSelectProject && (
                        <div className="pt-2 flex items-center gap-2 text-xs">
                          <span className="text-zinc-500">Related Case Study:</span>
                          <button
                            onClick={() => onSelectProject("project-04")}
                            className="text-blue-600 font-medium hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                          >
                            Project 04 (Recruitment &amp; Selection)
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
