import React, { useMemo, useState } from "react";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "../data/portfolioData";

interface ExperienceSectionProps {
  onSelectProject?: (projectId: string) => void;
}

type ExperienceWithLogo = ExperienceItem & {
  logo?: string;
};

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const getStartDateValue = (period: string) => {
  const match = period.match(
    /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{4})/
  );

  if (!match) return Number.MIN_SAFE_INTEGER;

  const [, month, year] = match;

  return Number(year) * 12 + MONTHS[month];
};

const getCompanyInitials = (company: string) => {
  const words = company
    .replace(/[()]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onSelectProject,
}) => {
  const chronologicalExperiences = useMemo(() => {
    return [...EXPERIENCES]
      .map((exp) => exp as ExperienceWithLogo)
      .sort(
        (a, b) =>
          getStartDateValue(b.period) - getStartDateValue(a.period)
      );
  }, []);

  const [selectedId, setSelectedId] = useState<string>(
    chronologicalExperiences.find((exp) => exp.id === "pepito")?.id ??
      chronologicalExperiences[0]?.id ??
      ""
  );

  const selectedExperience =
    chronologicalExperiences.find((exp) => exp.id === selectedId) ??
    chronologicalExperiences[0];

  if (!selectedExperience) return null;

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 border-b border-zinc-200/80 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* ====================================================== */}
        {/* HEADER                                                 */}
        {/* ====================================================== */}
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

        {/* ====================================================== */}
        {/* SELECTABLE EXPERIENCE TIMELINE                        */}
        {/* ====================================================== */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-[10%] right-[10%] top-[36px] h-px bg-zinc-200"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 md:gap-x-6">

            {chronologicalExperiences.map((exp, index) => {
              const isSelected = selectedId === exp.id;
              const isCurrent = exp.period.includes("Present");

              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setSelectedId(exp.id)}
                  aria-pressed={isSelected}
                  className="group text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded-xl"
                >
                  {/* ------------------------------------------------ */}
                  {/* COMPANY LOGO CIRCLE                              */}
                  {/* ------------------------------------------------ */}
                  <div className="relative flex justify-center">
                    <div
                      className={`relative z-10 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full bg-white border flex items-center justify-center overflow-hidden transition-all duration-300 ${
                        isSelected
                          ? "border-zinc-900 ring-4 ring-zinc-100 shadow-sm"
                          : isCurrent
                            ? "border-blue-500 ring-4 ring-blue-50"
                            : "border-zinc-200 group-hover:border-zinc-500"
                      }`}
                    >
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                        />
                      ) : (
                        <span
                          className={`text-xs sm:text-sm font-semibold tracking-tight ${
                            isSelected
                              ? "text-zinc-900"
                              : "text-zinc-500 group-hover:text-zinc-800"
                          }`}
                        >
                          {getCompanyInitials(exp.company)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ------------------------------------------------ */}
                  {/* SMALL NUMBER OUTSIDE CIRCLE                     */}
                  {/* ------------------------------------------------ */}
                  <div
                    className={`mt-2 text-[9px] font-mono tracking-[0.16em] transition-colors ${
                      isSelected ? "text-zinc-900" : "text-zinc-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* ------------------------------------------------ */}
                  {/* COMPANY NAME                                     */}
                  {/* ------------------------------------------------ */}
                  <div
                    className={`mt-1.5 text-xs font-semibold tracking-tight leading-snug transition-colors ${
                      isSelected
                        ? "text-zinc-900"
                        : "text-zinc-600 group-hover:text-zinc-900"
                    }`}
                  >
                    {exp.company}
                  </div>

                  {/* ------------------------------------------------ */}
                  {/* ROLE                                              */}
                  {/* ------------------------------------------------ */}
                  <div className="text-[10px] text-blue-900 mt-1 leading-snug">
                    {exp.role}
                  </div>

                  {/* ------------------------------------------------ */}
                  {/* CURRENT BADGE                                     */}
                  {/* ------------------------------------------------ */}
                  {isCurrent && (
                    <div className="inline-flex mt-2 text-[9px] font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      Current
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ====================================================== */}
        {/* SELECTED EXPERIENCE                                    */}
        {/* ====================================================== */}
        <div className="border-t border-zinc-200/80 pt-8">

          <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr] gap-8 lg:gap-12">

            {/* -------------------------------------------------- */}
            {/* LEFT IDENTITY                                     */}
            {/* -------------------------------------------------- */}
            <div className="space-y-4">

              <div className="w-14 h-14 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center overflow-hidden">
                {selectedExperience.logo ? (
                  <img
                    src={selectedExperience.logo}
                    alt={`${selectedExperience.company} logo`}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-xs font-semibold text-zinc-500">
                    {getCompanyInitials(selectedExperience.company)}
                  </span>
                )}
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

            {/* -------------------------------------------------- */}
            {/* RIGHT DETAIL                                      */}
            {/* -------------------------------------------------- */}
            <div className="space-y-6 min-w-0">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">

                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    {selectedExperience.role}
                  </h3>

                  <div className="text-base font-medium text-blue-900 mt-1">
                    {selectedExperience.company}
                  </div>

                  <div className="text-xs text-zinc-400 mt-2">
                    {selectedExperience.tagline}
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

                {/* Description + Focus */}
                <div className="space-y-6">

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

                {/* ------------------------------------------------ */}
                {/* RELATED WORK                                    */}
                {/* ------------------------------------------------ */}
                <div className="border-l-0 xl:border-l border-zinc-200/80 xl:pl-7">

                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                    Related Work
                  </div>

                  {selectedExperience.id === "pepito" &&
                    onSelectProject && (
                      <div className="space-y-1">

                        <button
                          type="button"
                          onClick={() => onSelectProject("project-01")}
                          className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                        >
                          <span>
                            Project 01 · Talent Dashboard
                          </span>

                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </button>

                        <button
                          type="button"
                          onClick={() => onSelectProject("project-02")}
                          className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                        >
                          <span>
                            Project 02 · Internal Mobility
                          </span>

                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </button>

                      </div>
                    )}

                  {selectedExperience.id === "dni" &&
                    onSelectProject && (
                      <button
                        type="button"
                        onClick={() => onSelectProject("project-05")}
                        className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                      >
                        <span>
                          Project 05 · HR Generalist & HRGA
                        </span>

                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    )}

                  {selectedExperience.id === "lpt" &&
                    onSelectProject && (
                      <button
                        type="button"
                        onClick={() => onSelectProject("project-04")}
                        className="w-full text-left text-xs text-blue-700 hover:text-blue-900 inline-flex items-center justify-between gap-3 py-2 group/link"
                      >
                        <span>
                          Project 04 · Recruitment & Selection
                        </span>

                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </button>
                    )}

                  {selectedExperience.id === "crekids" && (
                    <div className="text-xs text-zinc-400 leading-relaxed">
                      Learning delivery and instructional experience.
                    </div>
                  )}

                  {selectedExperience.id === "hr-publik" && (
                    <div className="text-xs text-zinc-400 leading-relaxed">
                      Project-based training and facilitation experience.
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
