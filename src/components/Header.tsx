import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, ArrowUpRight } from "lucide-react";
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
        isScrolled
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

          <a
            href={PROFILE.cvUrl}
            download="Rio_Koresh_Yeremia_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                activeSection === link.id && !isCaseStudyOpen
                  ? "bg-zinc-100 text-zinc-900 font-semibold"
                  : "text-zinc-600 hover:bg-zinc-50"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-100 flex gap-2">
            <button
              onClick={() => handleNavClick("projects")}
              className="flex-1 py-2 text-xs font-medium text-center text-zinc-700 bg-zinc-50 border border-zinc-200 rounded-lg"
            >
              Browse Projects
            </button>
            <a
              href={PROFILE.cvUrl}
              download="Rio_Koresh_Yeremia_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-xs font-medium text-center text-white bg-zinc-900 rounded-lg inline-flex items-center justify-center gap-1.5"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
