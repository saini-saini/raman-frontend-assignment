import { BackButton, ActionButtons } from './FloatingControls'
import sparklesImage from '../assets/sparkles.png'

export default function HeroTitle() {
  return (
    <div className="relative z-10 w-full text-center">
      {/* Relative container around h1 to align buttons on far left/right vertically centered */}
      <div className="relative w-full flex items-center justify-center">
        {/* Sparkles/dust background overlay from Figma */}
        <img
          src={sparklesImage}
          alt=""
          className="absolute left-1/2 bottom-[clamp(-22px,-1.6vw,-12px)] h-[clamp(120px,13vw,190px)] w-[clamp(450px,48vw,690px)] -translate-x-1/2 pointer-events-none object-contain mix-blend-screen opacity-95 z-0 select-none"
          draggable={false}
        />

        {/* Left Side: Back Button (Desktop only, positioned at margin) */}
        <BackButton className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex" />

        {/* Center: Title H1 with responsive fluid font size */}
        <h1 className="font-shrikhand mx-auto font-normal italic text-[28px] sm:text-[38px] lg:text-[clamp(40px,4.3vw,60px)] leading-[1.1] sm:leading-[1] lg:leading-[clamp(32px,3vw,39px)] tracking-[0.01em] uppercase text-[#141416] dark:text-white relative z-10 transition-colors duration-300">
          ENGINEERED FOR{' '}
          <span className="text-racing-red">PASSION</span>
        </h1>

        {/* Right Side: Action Buttons (Desktop only, positioned at margin) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden lg:flex">
          <ActionButtons vertical={false} />
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 sm:mt-5">
        <p className="font-display text-[13px] font-normal tracking-[0.04em] text-[#141416]/75 dark:text-white/55 sm:text-[15px] transition-colors duration-300">
          Precision. Power. Performance.
        </p>
        <div className="h-[3px] w-10 rounded-full bg-racing-red" />
      </div>
    </div>
  )
}
