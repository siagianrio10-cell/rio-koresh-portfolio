import React from "react";
import { Sparkles, Users, Award, ShieldCheck, BarChart3, Scale, Check } from "lucide-react";
import { CAPABILITIES } from "../data/portfolioData";

export const CapabilitiesSection: React.FC = () => {
  const getIcon = (domain: string) => {
    switch (domain) {
      case "Talent & People Development":
        return <Users className="w-5 h-5 text-blue-600" />;
      case "Recruitment & Assessment":
        return <Award className="w-5 h-5 text-emerald-600" />;
      case "HR Operations":
        return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case "Data & Analytics":
        return <BarChart3 className="w-5 h-5 text-indigo-600" />;
      case "Workforce Planning":
        return <Scale className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="capabilities" className="py-20 sm:py-24 border-b border-zinc-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider">
            <span>Areas of Practice</span>
            <span aria-hidden="true">·</span>
            <span>Skill Inventory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            HR Capabilities
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            My experience spans Talent Management, Recruitment, HR Operations, People Development, Psychological Assessment, and Workforce Planning.
          </p>
        </div>

        {/* 5 Distinct Capability Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((group) => {
            const domainIcon = getIcon(group.domain);

            return (
              <div
                key={group.domain}
                className="bg-zinc-50/70 border border-zinc-200/90 rounded-2xl p-6 sm:p-7 space-y-5 hover:bg-zinc-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                    {domainIcon}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {group.skills.length} Areas
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-semibold text-zinc-900 tracking-tight">
                    {group.domain}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skills List */}
                <div className="pt-3 border-t border-zinc-200/80 space-y-2">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
