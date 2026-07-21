import { laps } from '../data/dashboardData'

// Node coordinates matching the gentle ascending curve in Figma (in a 1000x130 coordinate space where y=130 is bottom baseline)
const nodePositions = [
  { id: '01', xPercent: '8%', x: 80, y: 98, topPercent: `${(98 / 130) * 100}%` },
  { id: '02', xPercent: '29%', x: 290, y: 81, topPercent: `${(81 / 130) * 100}%` },
  { id: '03', xPercent: '50%', x: 500, y: 64, topPercent: `${(64 / 130) * 100}%` },
  { id: '04', xPercent: '71%', x: 710, y: 43, topPercent: `${(43 / 130) * 100}%` },
  { id: '05', xPercent: '92%', x: 920, y: 24, topPercent: `${(24 / 130) * 100}%` },
]

function TelemetryGraph() {
  return (
    <svg
      className="absolute inset-x-0 top-0 h-full w-full overflow-visible"
      viewBox="0 0 1000 130"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e31e24" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#e31e24" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Smooth ascending telemetry curve gradient fill */}
      <path
        d="M 0,110 C 30,104 50,101 80,98 C 170,90 200,87 290,81 C 380,74 410,70 500,64 C 590,56 620,51 710,43 C 800,35 830,30 920,24 C 960,21 985,19 1000,18 L 1000,130 L 0,130 Z"
        fill="url(#graphGradient)"
      />

      {/* Vertical dotted drop lines from each curve point down to baseline y=130 */}
      {nodePositions.map((pos, idx) => (
        <line
          key={pos.id}
          x1={pos.x}
          y1={pos.y}
          x2={pos.x}
          y2={130}
          stroke={idx === 2 ? '#e31e24' : 'currentColor'}
          strokeWidth={idx === 2 ? '1.5' : '1'}
          strokeDasharray="3 4"
          className={idx === 2 ? '' : 'text-black/25 dark:text-white/20 transition-colors duration-300'}
        />
      ))}

      {/* Smooth ascending dashed red curve line */}
      <path
        d="M 0,110 C 30,104 50,101 80,98 C 170,90 200,87 290,81 C 380,74 410,70 500,64 C 590,56 620,51 710,43 C 800,35 830,30 920,24 C 960,21 985,19 1000,18"
        fill="none"
        stroke="#e31e24"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LapNodeItem({ lap, position }) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
      style={{ left: position.xPercent, top: position.topPercent }}
    >
      {/* Circle dot on curve */}
      <div
        className={`flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
          lap.active
            ? 'h-6 w-6 bg-racing-red shadow-[0_0_22px_rgba(227,30,36,0.9)] ring-4 ring-racing-red/30'
            : 'h-[18px] w-[18px] rounded-full border border-black/25 dark:border-white/25 bg-[#e0e0e6] dark:bg-[#28282c] shadow-[0_2px_8px_rgba(0,0,0,0.15)] hover:scale-110 hover:border-racing-red/50'
        }`}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            lap.active ? 'h-2 w-2 bg-white shadow-[0_0_6px_#fff]' : 'h-2 w-2 bg-[#66666e] dark:bg-[#8e8e96]'
          }`}
        />
      </div>

      {/* Text label directly below baseline */}
      <div className="absolute top-0 mt-[calc(100%+14px)] w-[80px] sm:w-[120px] md:w-[140px] -translate-y-full text-center pointer-events-none" style={{ top: `calc(${( (130 - position.y) / 130 ) * 100}% + 16px)` }}>
        <p
          className={`font-display truncate text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.08em] sm:tracking-[0.14em] xl:text-[11px] transition-colors duration-300 ${
            lap.active ? 'text-racing-red drop-shadow-[0_0_10px_rgba(227,30,36,0.4)]' : 'text-[#141416]/75 dark:text-white/55'
          }`}
        >
          {lap.title}
        </p>
        <p
          className={`font-display mt-0.5 truncate text-[8px] sm:text-[9px] font-medium uppercase tracking-wide transition-colors duration-300 xl:text-[10px] ${
            lap.active ? 'text-[#141416]/85 dark:text-white/85' : 'text-[#141416]/45 dark:text-white/35'
          }`}
        >
          {lap.subtitle}
        </p>
      </div>
    </div>
  )
}

export default function LapTimeline() {
  return (
    <section className="relative z-10 mt-6 block w-full px-0 pb-8 pt-4 md:pb-12 md:pt-6">
      <div className="relative w-full">
        {/* Graph Area */}
        <div className="relative h-[110px] w-full sm:h-[120px] md:h-[125px] xl:h-[135px]">
          <TelemetryGraph />

          {/* Horizontal Baseline separating graph and labels */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-black/15 dark:bg-white/10 transition-colors duration-300" />

          {/* Node Circles and Labels */}
          {laps.map((lap, idx) => (
            <LapNodeItem key={lap.id} lap={lap} position={nodePositions[idx]} />
          ))}
        </div>
      </div>
    </section>
  )
}
