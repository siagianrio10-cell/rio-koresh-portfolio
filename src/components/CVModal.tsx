import React from "react";
import { X, Printer, Mail, Linkedin, MapPin, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { PROFILE, EXPERIENCES, CAPABILITIES } from "../data/portfolioData";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Toolbar (hidden on print) */}
        <div className="px-6 py-3.5 bg-zinc-100/90 border-b border-zinc-200 flex items-center justify-between print:hidden">
          <div className="text-xs font-semibold text-zinc-700">
            Curriculum Vitae — Professional Summary
          </div>
          <div className="flex items-center gap-2">
            <a
              href={PROFILE.cvUrl}
              download="Rio_Koresh_Yeremia_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <span>Download Attached PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-200/80 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-white text-zinc-900 font-sans">
          {/* Header Block */}
          <div className="border-b border-zinc-200 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                {PROFILE.name}
              </h1>
              <span className="text-xs font-mono text-zinc-500">{PROFILE.headlineIdentity}</span>
            </div>

            <div className="text-sm font-semibold text-blue-900">
              {PROFILE.title}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                {PROFILE.email}
              </span>
              <span aria-hidden="true">·</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Linkedin className="w-3.5 h-3.5 text-zinc-400" />
                linkedin.com/in/riokoreshyeremia/
              </a>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {PROFILE.location}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2">
              HR professional with a Psychology background and hands-on experience across Talent Management, Recruitment, HR Operations, People Development, Psychological Assessment, and Workforce Planning. Focused on practical HR processes where people information translates into clear and sound decisions.
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center gap-2 border-b border-zinc-200 pb-1.5">
              <Briefcase className="w-3.5 h-3.5" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-semibold text-zinc-900">
                    <span className="text-sm font-bold">{exp.role}</span>
                    <span className="text-zinc-500 font-mono text-[11px] font-normal">{exp.period}</span>
                  </div>
                  <div className="text-zinc-700 font-medium">{exp.company} · {exp.location}</div>
                  <p className="text-zinc-600 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.focus.map((f, i) => (
                      <span key={i} className="text-[10px] bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded font-mono">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center gap-2 border-b border-zinc-200 pb-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
              <div>
                <div className="font-bold text-zinc-900">Bachelor of Psychology (B.Psi.)</div>
                <div className="text-zinc-600">Universitas Negeri Semarang · GPA 3.35 / 4.00</div>
              </div>
              <div className="text-zinc-500 font-mono text-[11px]">Core Background: Psychological Assessment &amp; People Understanding</div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center gap-2 border-b border-zinc-200 pb-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              HR Capabilities
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {CAPABILITIES.map((cap) => (
                <div key={cap.domain} className="p-2.5 bg-zinc-50 rounded border border-zinc-200 space-y-1">
                  <div className="font-semibold text-zinc-900 text-[11px]">{cap.domain}</div>
                  <div className="text-[10px] text-zinc-600 leading-relaxed">
                    {cap.skills.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500 print:hidden">
          <span>References and credentials available upon request.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
