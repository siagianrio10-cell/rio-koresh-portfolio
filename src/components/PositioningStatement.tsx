import React from "react";
import { Brain, Layers, ShieldCheck, LineChart } from "lucide-react";

export const PositioningStatement: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-b border-zinc-200/80 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
            How I Work
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 leading-snug">
            Bringing Psychology into Practical HR Work
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
            My background in Psychology has shaped how I approach HR — from understanding people through assessment to working with structured processes and HR data.
          </p>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            My experience covers Talent Management, Recruitment, HR Operations, People Development, Psychological Assessment, and Workforce Planning. I enjoy working on HR processes where people information needs to be translated into clear and practical decisions.
          </p>
        </div>

        {/* Four Simple Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Brain className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Psychology &amp; Assessment</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Using psychological assessment and structured evaluation to understand employee potential, readiness, and development needs.
            </p>
          </div>

          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Structured HR Processes</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Building clear workflows for recruitment, promotion, development, and employee administration.
            </p>
          </div>

          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">HR Operations</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Hands-on experience in day-to-day HR administration, payroll, attendance, HRIS, BPJS, and employee documentation.
            </p>
          </div>

          <div className="p-5 bg-white border border-zinc-200/80 rounded-xl space-y-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
              <LineChart className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900">Data-Informed Decisions</h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Using HR data, dashboards, and reporting to monitor people metrics and support HR decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
