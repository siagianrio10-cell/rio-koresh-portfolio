import React, { useEffect } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Share2, Check } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
import { TalentDashboardCaseStudy } from "./case-studies/TalentDashboardCaseStudy";
import { InternalMobilityCaseStudy } from "./case-studies/InternalMobilityCaseStudy";
import { TNACaseStudy } from "./case-studies/TNACaseStudy";
import { RecruitmentCaseStudy } from "./case-studies/RecruitmentCaseStudy";
import { HROperationsCaseStudy } from "./case-studies/HROperationsCaseStudy";
import { WorkforcePlanningCaseStudy } from "./case-studies/WorkforcePlanningCaseStudy";

interface CaseStudyViewProps {
  projectId: string;
  onClose: () => void;
  onSelectProject: (id: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  projectId,
  onClose,
  onSelectProject,
}) => {
  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const currentProject = PROJECTS[currentIndex] || PROJECTS[0];

  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  const renderCaseStudyContent = () => {
    switch (projectId) {
      case "project-01":
        return <TalentDashboardCaseStudy />;
      case "project-02":
        return <InternalMobilityCaseStudy />;
      case "project-03":
        return <TNACaseStudy />;
      case "project-04":
        return <RecruitmentCaseStudy />;
      case "project-05":
        return <HROperationsCaseStudy />;
      case "project-06":
        return <WorkforcePlanningCaseStudy />;
      default:
        return <TalentDashboardCaseStudy />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-24">
      {/* Sticky Case Study Navigation Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 px-4 sm:px-6 lg:px-8 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </button>

            <span className="text-zinc-300 hidden sm:inline">|</span>

            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
              CASE STUDY {currentProject.number} OF 06
            </span>
          </div>

          {/* Quick Jump Project Bar */}
          <div className="hidden lg:flex items-center gap-1">
            {PROJECTS.map((p) => (
              <button
                key={p.id}
                onClick={() => onSelectProject(p.id)}
                className={`px-2.5 py-1 text-xs rounded font-mono transition-colors cursor-pointer ${
                  p.id === projectId
                    ? "bg-zinc-900 text-white font-bold"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
                title={p.title}
              >
                P{p.number}
              </button>
            ))}
          </div>

          {/* Prev / Next controls */}
          <div className="flex items-center gap-1.5">
            <button
              disabled={!prevProject}
              onClick={() => prevProject && onSelectProject(prevProject.id)}
              className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title={prevProject ? `Previous: ${prevProject.title}` : "First project"}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={!nextProject}
              onClick={() => nextProject && onSelectProject(nextProject.id)}
              className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title={nextProject ? `Next: ${nextProject.title}` : "Last project"}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {renderCaseStudyContent()}

        {/* Footer Navigation Between Case Studies */}
        <div className="mt-16 pt-10 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevProject ? (
            <button
              onClick={() => onSelectProject(prevProject.id)}
              className="p-5 text-left bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200 rounded-xl transition-all group cursor-pointer"
            >
              <div className="text-[11px] font-mono text-zinc-500 mb-1 flex items-center gap-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>PREVIOUS CASE STUDY</span>
              </div>
              <div className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                {prevProject.title}
              </div>
              <div className="text-xs text-zinc-500 mt-1">{prevProject.keyCapability}</div>
            </button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <button
              onClick={() => onSelectProject(nextProject.id)}
              className="p-5 text-right bg-zinc-50 hover:bg-zinc-100/80 border border-zinc-200 rounded-xl transition-all group cursor-pointer sm:col-start-2"
            >
              <div className="text-[11px] font-mono text-zinc-500 mb-1 flex items-center justify-end gap-1">
                <span>NEXT CASE STUDY</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors">
                {nextProject.title}
              </div>
              <div className="text-xs text-zinc-500 mt-1">{nextProject.keyCapability}</div>
            </button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};
