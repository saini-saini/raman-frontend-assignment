import CarImage from './CarImage'
import HeroTitle from './HeroTitle'
import StatsPanel from './StatsPanel'
import { MobileNavigation } from './SideNavigation'
import { leftNavItems, rightNavItems, leftStats, rightStats } from '../data/dashboardData'

export default function HeroSection() {
  return (
    <>
      {/* ── Mobile (< md / < 769px) ── */}
      <section className="relative z-10 flex flex-col items-center px-4 py-2 md:hidden">
        <HeroTitle />

        <CarImage variant="mobile" />

        <div className="mt-4 px-4 grid w-full max-w-xs sm:max-w-sm mx-auto grid-cols-1 sm:grid-cols-2 gap-y-5 sm:gap-x-6 sm:gap-y-6">
          <StatsPanel stats={leftStats} align="left" />
          <StatsPanel stats={rightStats} align="right" />
        </div>
      </section>

      {/* ── Desktop & Tablet (md+) ── */}
      <section className="relative z-10 hidden flex-col items-center px-4 sm:px-6 pt-2 md:flex">
        <HeroTitle />

        <div className="mt-4 sm:mt-6 grid w-full max-w-[960px] grid-cols-[1fr_auto_1fr] items-center justify-center gap-1 sm:gap-4 lg:gap-8">
          <div className="flex justify-end pr-2 sm:pr-4 lg:pr-8">
            <StatsPanel stats={leftStats} align="left" />
          </div>

          <div className="flex justify-center shrink-0">
            <CarImage variant="desktop" />
          </div>

          <div className="flex justify-start pl-2 sm:pl-4 lg:pl-8">
            <StatsPanel stats={rightStats} align="right" />
          </div>
        </div>
      </section>
    </>
  )
}
