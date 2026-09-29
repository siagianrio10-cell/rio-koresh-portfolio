import React, { useState } from "react";
import { GraduationCap, Briefcase, Brain, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface AboutSectionProps {
  onOpenCV: () => void;
  onExploreProjects: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCV, onExploreProjects }) => {
  const [imgSrc, setImgSrc] = useState(PROFILE.avatar);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-zinc-200/80 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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

            {/* Quick Credentials Panel: Exact Education copy from user prompt */}
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

          {/* Editorial Bio & Background */}
          <div className="lg:col-span-7 space-y-6">
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
            <div className="flex flex-wrap items-center gap-3 pt-4">
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
