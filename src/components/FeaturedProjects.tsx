{/* Project 02 — Workforce Fulfillment */}
{project.id === "project-02" ? (
  <div className="pt-2">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-700">
        {getProjectIcon(project.id)}
        <span>Workforce Fulfillment</span>
      </div>

      <span className="text-[10px] font-mono uppercase tracking-wide text-zinc-400">
        Process view
      </span>
    </div>

    <div className="relative rounded-xl border border-zinc-200/80 bg-[#F8FAFC] overflow-hidden">
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(161,161,170,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(161,161,170,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative p-4 sm:p-5">
        {/* Starting Point */}
        <div className="flex flex-col items-center">
          <div className="px-5 py-2 rounded-lg bg-zinc-900 text-white text-[11px] font-semibold tracking-wide">
            VACANCY
          </div>

          <div className="w-px h-5 bg-zinc-300" />

          {/* Split */}
          <div className="relative w-full max-w-[420px]">
            <div className="absolute left-1/2 top-0 w-[calc(50%-42px)] h-px bg-zinc-300" />
            <div className="absolute right-1/2 top-0 w-[calc(50%-42px)] h-px bg-zinc-300" />

            <div className="grid grid-cols-2 gap-5 pt-4">
              {/* Internal */}
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-wider text-emerald-600 mb-2">
                  Internal
                </div>

                <div className="space-y-1.5">
                  {[
                    "Succession",
                    "Assessment",
                    "Readiness",
                    "Acting",
                    "Panel",
                    "Promotion",
                  ].map((step, index) => (
                    <React.Fragment key={step}>
                      <div
                        className={`px-2.5 py-1.5 rounded-md border text-[10px] font-medium ${
                          index === 5
                            ? "bg-emerald-600 text-white border-emerald-600"
                            : "bg-white text-zinc-700 border-zinc-200"
                        }`}
                      >
                        {step}
                      </div>

                      {index < 5 && (
                        <div className="w-px h-2 bg-zinc-300 mx-auto" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* External */}
              <div className="text-center">
                <div className="text-[9px] font-mono uppercase tracking-wider text-blue-600 mb-2">
                  External
                </div>

                <div className="space-y-1.5">
                  {[
                    "Recruitment",
                    "Interview",
                    "Selection",
                    "Join",
                    "Appointment",
                  ].map((step, index) => (
                    <React.Fragment key={step}>
                      <div
                        className={`px-2.5 py-1.5 rounded-md border text-[10px] font-medium ${
                          index === 4
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-zinc-700 border-zinc-200"
                        }`}
                      >
                        {step}
                      </div>

                      {index < 4 && (
                        <div className="w-px h-2 bg-zinc-300 mx-auto" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Convergence */}
          <div className="w-full max-w-[420px] mt-3">
            <div className="grid grid-cols-2 gap-5">
              <div className="h-5 border-r border-zinc-300" />
              <div className="h-5 border-l border-zinc-300" />
            </div>

            <div className="relative h-5">
              <div className="absolute left-[25%] top-0 w-[25%] h-px bg-zinc-300" />
              <div className="absolute right-[25%] top-0 w-[25%] h-px bg-zinc-300" />
              <div className="absolute left-1/2 top-0 w-px h-5 bg-zinc-300 -translate-x-1/2" />
            </div>
          </div>

          {/* Final Outcome */}
          <div className="px-5 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-[10px] font-semibold tracking-wide">
            POSITION FULFILLED
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mt-5 pt-3 border-t border-zinc-200/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[9px] text-zinc-500">Internal mobility</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[9px] text-zinc-500">External hiring</span>
          </div>
        </div>
      </div>
    </div>
  </div>
) : project.id === "project-01" ? (
