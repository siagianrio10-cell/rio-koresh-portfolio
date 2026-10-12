import React from "react";
import { ArrowUp, Mail, Linkedin, FileText } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCV }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-zinc-200/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-zinc-100 pb-8">
          <div>
            <div className="text-base font-semibold text-zinc-900 tracking-tight">
              {PROFILE.name}
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">
              {PROFILE.title} · {PROFILE.degree}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-600">
            <button
              onClick={() => onNavigate("home")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("experience")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate("projects")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate("capabilities")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Capabilities
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All case studies and portfolio data presented with confidential operational privacy standards.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-zinc-900 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PROFILE.cvUrl}
              download="Rio_Koresh_Yeremia_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-md transition-colors cursor-pointer ml-2"
              title="Back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
