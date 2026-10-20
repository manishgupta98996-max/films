export default function PipelineDiagram() {
  const phases = [
    { num: "01", name: "Pre-Production", desc: "Script & Shot List" },
    { num: "02", name: "Asset Pre-Viz", desc: "Character & Location Plates" },
    { num: "03", name: "Video Generation", desc: "Camera Moves & Motion" },
    { num: "04", name: "Audio Design", desc: "Voices, Foley & Score" },
    { num: "05", name: "Editing & Grade", desc: "Pacing, Color & Export" },
  ];

  return (
    <div className="my-8 rounded-2xl border border-light-muted/20 bg-light-surface p-6 sm:p-8 shadow-sm">
      <div className="text-center mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
          Visual Production Pipeline
        </span>
        <h3 className="text-lg sm:text-xl font-bold text-light-text mt-1">
          The 5 Phases of Modern AI Filmmaking
        </h3>
      </div>

      {/* Accessible SVG Diagram */}
      <svg
        viewBox="0 0 1000 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto hidden sm:block"
        role="img"
        aria-labelledby="diagram-title diagram-desc"
      >
        <title id="diagram-title">The 5 Phases of AI Filmmaking Pipeline</title>
        <desc id="diagram-desc">
          Sequential diagram from Phase 1 Pre-production to Phase 2 Asset Pre-visualization, Phase 3 Video Generation, Phase 4 Audio Design, and Phase 5 Editorial Assembly.
        </desc>

        {/* Connecting Arrows */}
        <path d="M 175 80 L 225 80" stroke="#F5A524" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 375 80 L 425 80" stroke="#F5A524" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 575 80 L 625 80" stroke="#F5A524" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M 775 80 L 825 80" stroke="#F5A524" strokeWidth="2" strokeDasharray="4 4" />

        {/* Phase Cards */}
        {phases.map((p, i) => {
          const x = 25 + i * 200;
          return (
            <g key={p.num} transform={`translate(${x}, 20)`}>
              <rect
                width="150"
                height="120"
                rx="16"
                fill="#F8F7F4"
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />
              <circle cx="75" cy="30" r="14" fill="#F5A524" fillOpacity="0.2" />
              <text
                x="75"
                y="35"
                fill="#92400E"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
              >
                {p.num}
              </text>
              <text
                x="75"
                y="70"
                fill="#111827"
                fontSize="13"
                fontWeight="bold"
                textAnchor="middle"
              >
                {p.name}
              </text>
              <text
                x="75"
                y="92"
                fill="#4B5563"
                fontSize="10"
                textAnchor="middle"
              >
                {p.desc}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Mobile Stacked View */}
      <div className="sm:hidden space-y-3">
        {phases.map((p) => (
          <div
            key={p.num}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-light-bg border border-light-muted/15"
          >
            <span className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-800 font-bold text-xs flex items-center justify-center flex-shrink-0">
              {p.num}
            </span>
            <div>
              <p className="text-sm font-bold text-light-text">{p.name}</p>
              <p className="text-xs text-light-muted">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
