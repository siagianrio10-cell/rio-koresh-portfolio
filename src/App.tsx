import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { PositioningStatement } from "./components/PositioningStatement";
import { ExperienceSection } from "./components/ExperienceSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { CapabilitiesSection } from "./components/CapabilitiesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { CaseStudyView } from "./components/CaseStudyView";
import { CVModal } from "./components/CVModal";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  // Sync with browser URL hash for deep linking (e.g. #project-01)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash.startsWith("project-")) {
        setActiveCaseStudyId(hash);
      } else if (hash) {
        setActiveCaseStudyId(null);
        setActiveSection(hash);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleOpenCaseStudy = (projectId: string) => {
    setActiveCaseStudyId(projectId);
    window.location.hash = projectId;
  };

  const handleCloseCaseStudy = () => {
    setActiveCaseStudyId(null);
    window.location.hash = "projects";

    // Smooth scroll back to projects section
    setTimeout(() => {
      const el = document.getElementById("projects");

      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveCaseStudyId(null);
    setActiveSection(sectionId);
    window.location.hash = sectionId;

    if (sectionId === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Universal 3-zone Header */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
        isCaseStudyOpen={!!activeCaseStudyId}
        onCloseCaseStudy={handleCloseCaseStudy}
      />

      {/* Main Content Area: Dedicated Case Study View OR Homepage Overview */}
      {activeCaseStudyId ? (
        <main className="pt-16">
          <CaseStudyView
            projectId={activeCaseStudyId}
            onClose={handleCloseCaseStudy}
            onSelectProject={handleOpenCaseStudy}
          />
        </main>
      ) : (
        <main>
          {/* 1. About Me (top of page) */}
          <div id="home">
            <AboutSection
              onOpenCV={() => setIsCVModalOpen(true)}
              onExploreProjects={() => handleNavigate("projects")}
            />
          </div>

          {/* 2. How I Work / Positioning (includes Featured Case Study card) */}
          <PositioningStatement onOpenCaseStudy={handleOpenCaseStudy} />

          {/* 3. Experience Overview Timeline */}
          <ExperienceSection onSelectProject={handleOpenCaseStudy} />

          {/* 4. Featured Projects with 6 Interactive Case Studies */}
          <FeaturedProjects onOpenCaseStudy={handleOpenCaseStudy} />

          {/* 5. HR Capabilities / Practice Areas */}
          <CapabilitiesSection />

          {/* 6. Professional Contact CTA */}
          <ContactSection onOpenCV={() => setIsCVModalOpen(true)} />
        </main>
      )}

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Professional CV Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
