import React, { useState } from "react";
import {
  GraduationCap,
  Brain,
  CheckCircle2,
  FileText,
  ArrowRight,
} from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface AboutSectionProps {
  onOpenCV: () => void;
  onExploreProjects: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenCV,
  onExploreProjects,
}) => {
  const [imgSrc, setImgSrc] = useState(PROFILE.avatar);
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-zinc-200/80 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 lg:space-y-12">
        {/* ---------- Mobile / tablet hero (hidden on desktop) ---------- */}
        <div className="lg:hidden space-y-4">
          <div className="relative h-[28rem] sm:h-[34rem] rounded-3xl overflow-hidden bg-zinc-800 shadow-sm">
            {!imageError && (
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
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            )}

            {/* Dark fade so the text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 space-y-3">
              <div className="text-[11px] sm:text-xs font-medium text-white/80 tracking-wide">
                B.Psi. in Psychology · HR Professional · Bali
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white leading-[1.05]">
                {PROFILE.name}
              </h1>

              <p className="text-sm text-white/80 leading-relaxed max-w-xs sm:max-w-md">
                Curious about how things work, especially when people are involved.
              </p>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={onExploreProjects}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-zinc-900 bg-white rounded-xl active:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <span>View Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={PROFILE.cvUrl}
                  download="Rio_Koresh_Yeremia_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-white/15 border border-white/40 backdrop-blur-sm rounded-xl active:bg-white/25 transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Key numbers, taken from the work experience entries */}
          <div className="grid grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden">
            {[
              { value: "43", label: "stores supported" },
              { value: "70+", label: "employees on payroll" },
              { value: "40%", label: "less manual processing" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white px-2 py-3.5 text-center">
                <div className="text-xl font-semibold tracking-tight text-zinc-900">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[11px] leading-tight text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Main grid (desktop layout unchanged) ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Portrait & Credentials Column */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-5">
            {/* Portrait: desktop only, phones use the hero above */}
            <div className="hidden lg:block relative mx-auto max-w-sm rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm bg-zinc-100 aspect-square">
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

          {/* Editorial Bio & Highlights */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-6">
            {/* Kicker: desktop only, phones show it in the hero */}
            <div className="hidden lg:flex flex-wrap items-center gap-2 text-xs text-zinc-500 font-medium">
              <span>B.Psi. in Psychology</span>
              <span aria-hidden="true">·</span>
              <span>HR Professional</span>
              <span aria-hidden="true">·</span>
              <span>Bali</span>
            </div>

            <h2 className="font-serif text-[1.75rem] sm:text-4xl font-medium sm:font-semibold tracking-tight text-zinc-900 leading-snug">
              Hi, I’m Rio. I like figuring things out.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed">
              <p>
                I’ve always been curious about how things work — especially when people are involved. That curiosity led me to Psychology, and eventually into HR, where I found a space that combines people, problem-solving, and the practical side of getting things done.
              </p>
              <p>
                I enjoy work that makes me think, ask questions, and occasionally go, “there has to be a better way to do this.” That mindset has followed me across different sides of HR — from assessment and training to HR operations and, now, talent management.
              </p>
              {/* Shorter on phones: the third paragraph shows from tablet up */}
              <p className="hidden sm:block">
                Along the way, I’ve learned that working with people rarely comes with a simple formula. Sometimes the answer is in the data, sometimes it comes from understanding the person behind it, and often, it takes a bit of both. That’s probably what I enjoy most about HR — there’s always a real person, a real problem, and a practical side to figure out.
              </p>
              <p className="italic text-zinc-500">
                That’s only part of the story. The rest is probably easier to understand through the work itself — so, keep going.
              </p>
            </div>

            {/* Core Practice Highlights: chips on phones, grid from tablet up */}
            <div className="flex flex-wrap gap-2 sm:grid sm:grid-cols-3 sm:gap-3 pt-2">
              {[
                "Talent Management",
                "Recruitment & Selection",
                "Psychological Assessment",
                "People Development (TNA/IDP)",
                "HR Operations & Payroll",
                "Workforce Planning",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-medium text-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200 bg-white sm:p-0 sm:border-0 sm:bg-transparent sm:rounded-none"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: phones already have them in the hero */}
            <div className="hidden sm:flex flex-wrap items-center gap-3 pt-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};
