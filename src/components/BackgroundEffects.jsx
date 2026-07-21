import lightEffect from '../assets/light-effect.png'

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#f4f4f6] dark:bg-[#050505] transition-colors duration-300" />

      {/* Figma spotlight beam */}
      <img
        src={lightEffect}
        alt=""
        className="absolute left-1/2 top-0 h-[72%] w-auto min-w-[180px] max-w-none -translate-x-1/2 object-cover object-top opacity-35 dark:opacity-90 mix-blend-multiply dark:mix-blend-screen sm:min-w-[240px] lg:h-[78%] transition-opacity duration-300"
        draggable={false}
      />

      {/* Concentric Figma Background Rings & Shadows (3 Circles) */}
      <div className="absolute left-1/2 top-[315px] sm:top-[325px] md:top-[54%] lg:top-[48%] -translate-x-1/2 -translate-y-1/2">
        {/* Ring 1 (Inner Concentric Circle - 823x821) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.015] dark:bg-white/[0.012] shadow-[inset_0px_48px_47.63px_0px_rgba(0,0,0,0.06)] dark:shadow-[inset_0px_48px_47.63px_0px_rgba(255,255,255,0.12)] transition-all duration-300 w-[70vw] h-[70vw] md:w-[56vw] md:h-[56vw] max-w-[823px] max-h-[821px]"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full border-[1.32px] border-black/[0.18] dark:border-[rgba(187,181,181,0.35)] transition-colors duration-300"
            style={{
              WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 22%, transparent 55%)',
              maskImage: 'linear-gradient(180deg, #000 0%, #000 22%, transparent 55%)',
            }}
          />
        </div>

        {/* Ring 2 (Middle Concentric Circle - 1348x1153) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.012] dark:bg-white/[0.012] shadow-[inset_0px_26.46px_47.63px_0px_rgba(0,0,0,0.04)] dark:shadow-[inset_0px_26.46px_47.63px_0px_rgba(255,255,255,0.06)] transition-all duration-300 w-[100vw] h-[88vw] md:w-[76vw] md:h-[65vw] max-w-[1348px] max-h-[1153px]"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full border-[1.32px] border-black/[0.18] dark:border-[rgba(187,181,181,0.3)] transition-colors duration-300"
            style={{
              WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 18%, transparent 45%)',
              maskImage: 'linear-gradient(180deg, #000 0%, #000 18%, transparent 45%)',
            }}
          />
        </div>

        {/* Ring 3 (Outer Concentric Circle - 1803x1403) */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.012] dark:bg-white/[0.012] shadow-[inset_0px_26.46px_47.63px_0px_rgba(0,0,0,0.04)] dark:shadow-[inset_0px_26.46px_47.63px_0px_rgba(255,255,255,0.06)] transition-all duration-300 w-[130vw] h-[112vw] md:w-[96vw] md:h-[75vw] max-w-[1803px] max-h-[1403px]"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-full border-[1.32px] border-black/[0.16] dark:border-[rgba(187,181,181,0.28)] transition-colors duration-300"
            style={{
              WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 15%, transparent 38%)',
              maskImage: 'linear-gradient(180deg, #000 0%, #000 15%, transparent 38%)',
            }}
          />
        </div>
      </div>

      {/* Bottom red glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-racing-red/15 dark:from-racing-red/30 via-racing-red/[0.04] dark:via-racing-red/[0.07] to-transparent transition-colors duration-300" />
    </div>
  )
}
