import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface HeaderProps {
  onOpenCV: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isCaseStudyOpen: boolean;
  onCloseCaseStudy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCV,
  activeSection,
  onNavigate,
  isCaseStudyOpen,
  onCloseCaseStudy,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the full-screen mobile menu is open, close on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Capabilities", id: "capabilities" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    if (isCaseStudyOpen) {
      onCloseCaseStudy();
    }
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        mobileMenuOpen
          ? "bg-white border-b border-zinc-200"
          : isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-2xs"
          : "bg-[#FAFAFA]/90 backdrop-blur-xs border-b border-zinc-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Wordmark */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick("home")}
            className="text-left group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
          >
            <span className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-blue-900 transition-colors">
              {PROFILE.name}
            </span>
          </button>
        </div>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-600">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`transition-colors hover:text-zinc-900 py-1 border-b-2 whitespace-nowrap cursor-pointer ${
                activeSection === link.id && !isCaseStudyOpen
                  ? "border-zinc-900 text-zinc-900 font-semibold"
                  : "border-transparent text-zinc-600"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick("projects")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 hover:border-zinc-400 transition-colors whitespace-nowrap cursor-pointer"
          >
            Case Studies
          </button>

          {/* On phones the CV button lives inside the menu to keep the bar clean */}
          <a
            href={PROFILE.cvUrl}
            download="Rio_Koresh_Yeremia_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 -mr-2 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu: full-screen panel below the header bar */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full h-[calc(100dvh-4rem)] bg-white flex flex-col px-6 pt-6 pb-8 overflow-y-auto">
          <nav className="flex-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id && !isCaseStudyOpen;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex w-full items-center justify-between py-3.5 border-b border-zinc-100 text-left font-serif text-[1.65rem] leading-tight tracking-tight transition-colors cursor-pointer ${
                    isActive ? "text-blue-600" : "text-zinc-900 active:text-blue-600"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 space-y-4">
            <a
              href={PROFILE.cvUrl}
              download="Rio_Koresh_Yeremia_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-zinc-900 rounded-xl active:bg-zinc-800"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <div className="flex items-center gap-3 text-zinc-500">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg border border-zinc-200 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="p-2.5 rounded-lg border border-zinc-200 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
