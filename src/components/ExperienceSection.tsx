import React, { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { EXPERIENCES, ExperienceItem } from "../data/portfolioData";

interface ExperienceSectionProps {
  onSelectProject?: (projectId: string) => void;
}

type ExperienceWithLogo = ExperienceItem & {
  logo?: string;
};

type Photo = { src: string; caption: string };

// Field photos per experience id (files live in /public/experience)
const EXPERIENCE_PHOTOS: Record<string, Photo[]> = {
  lpt: [
    { src: "/experience/lpt-assessor.webp", caption: "Assessor · LPT Indonesia" },
    {
      src: "/experience/lpt-bi-scholarship.webp",
      caption: "Facilitator, Bank Indonesia scholarship selection (200+ participants) · LPT Indonesia",
    },
    {
      src: "/experience/lpt-facilitator.webp",
      caption: "Facilitating a large-scale selection session · LPT Indonesia",
    },
    { src: "/experience/lpt-team.webp", caption: "Assessment team · LPT Indonesia" },
  ],
  dni: [{ src: "/experience/dni-onboarding.webp", caption: "Onboarding session · DNI" }],
  "hr-publik": [
    { src: "/experience/hr-publik-outbound.webp", caption: "Outbound training · HR Publik" },
  ],
  crekids: [{ src: "/experience/crekids-trainer.webp", caption: "Trainer team · Crekids" }],
  pepito: [{ src: "/experience/pepito-hclga.webp", caption: "HCLGA team · Pepito" }],
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

  // Pulse hint stops for good once the visitor taps any company
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  // Lightbox state
  const [lightbox, setLightbox] = useState<{ photos: Photo[]; index: number } | null>(null);

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((lb) => (lb ? { ...lb, index: (lb.index + 1) % lb.photos.length } : lb));
      if (e.key === "ArrowLeft")
        setLightbox((lb) =>
          lb ? { ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length } : lb
        );
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const selectedExperience =
    chronologicalExperiences.find((exp) => exp.id === selectedId) ??
    chronologicalExperiences[0];

  if (!selectedExperience) return null;

  const photos = EXPERIENCE_PHOTOS[selectedExperience.id] ?? [];

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
              const filledStyle = isSelected && !exp.logo;
              const showPulse = !isSelected && !hasInteracted;

              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(exp.id);
                    setHasInteracted(true);
                  }}
                  aria-pressed={isSelected}
                  className="group relative text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded-xl"
                >
                  {/* ------------------------------------------------ */}
                  {/* COMPANY LOGO CIRCLE                              */}
                  {/* ------------------------------------------------ */}
                  <div className="relative flex justify-center">
                    <div className="relative">
                      {/* Soft pulse ring (unselected only, stops after first tap) */}
                      {showPulse && (
                        <span
                          aria-hidden="true"
                          style={{ animationDelay: `${index * 0.5}s` }}
                          className="absolute inset-0 rounded-full border border-blue-400/60 animate-[ping_2.6s_cubic-bezier(0,0,0.2,1)_infinite] motion-reduce:hidden"
                        />
                      )}

                      <div
                        className={`relative z-10 w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full border flex items-center justify-center overflow-hidden transition-all duration-300 group-active:scale-95 ${
                          filledStyle ? "bg-zinc-900" : "bg-white"
                        } ${
                          isSelected
                            ? "border-zinc-900 ring-4 ring-zinc-200 shadow-md"
                            : isCurrent
                              ? "border-blue-500 ring-4 ring-blue-50 group-hover:-translate-y-0.5 group-hover:shadow-md"
                              : "border-zinc-300 group-hover:border-zinc-500 group-hover:-translate-y-0.5 group-hover:shadow-md"
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
                                ? "text-white"
                                : "text-zinc-500 group-hover:text-zinc-800"
                            }`}
                          >
                            {getCompanyInitials(exp.company)}
                          </span>
                        )}
                      </div>
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

                  {/* ------------------------------------------------ */}
                  {/* MARKER LINKING SELECTED ITEM TO THE PANEL BELOW  */}
                  {/* (desktop only, sits on the panel's top border)   */}
                  {/* ------------------------------------------------ */}
                  {isSelected && (
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-[53px] w-2.5 h-2.5 rotate-45 bg-zinc-900"
                    />
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

                {/* Description + Focus + Photos */}
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

                  {/* ---------------------------------------------- */}
                  {/* FIELD PHOTOS                                   */}
                  {/* ---------------------------------------------- */}
                  {photos.length > 0 && (
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                        From the Field
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-3xl">
                        {photos.map((photo, i) => (
                          <button
                            key={photo.src}
                            type="button"
                            onClick={() => setLightbox({ photos, index: i })}
                            aria-label={`Open photo: ${photo.caption}`}
                            className="group/photo relative aspect-[4/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
                          >
                            <img
                              src={photo.src}
                              alt={photo.caption}
                              loading="lazy"
                              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/photo:scale-105"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
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

      {/* ====================================================== */}
      {/* LIGHTBOX                                               */}
      {/* ====================================================== */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close photo viewer"
            className="absolute top-4 right-4 p-2 rounded-full text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-6 h-6" />
          </button>

          {lightbox.photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    ...lightbox,
                    index: (lightbox.index - 1 + lightbox.photos.length) % lightbox.photos.length,
                  });
                }}
                aria-label="Previous photo"
                className="absolute left-3 sm:left-6 p-2 rounded-full text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    ...lightbox,
                    index: (lightbox.index + 1) % lightbox.photos.length,
                  });
                }}
                aria-label="Next photo"
                className="absolute right-3 sm:right-6 p-2 rounded-full text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          <figure
            className="max-w-4xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.photos[lightbox.index].src}
              alt={lightbox.photos[lightbox.index].caption}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="text-sm text-white/90 text-center max-w-2xl">
              {lightbox.photos[lightbox.index].caption}
              {lightbox.photos.length > 1 && (
                <span className="text-white/60 ml-2 font-mono text-xs">
                  {lightbox.index + 1} / {lightbox.photos.length}
                </span>
              )}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};
