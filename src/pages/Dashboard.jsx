import { leftNavItems, rightNavItems } from '../data/dashboardData'
import BackgroundEffects from '../components/BackgroundEffects'
import FloatingControls, { BackButton } from '../components/FloatingControls'
import HeroSection from '../components/HeroSection'
import LapTimeline from '../components/LapTimeline'
import RightControls from '../components/RightControls'
import SideNavigation, { MobileNavigation } from '../components/SideNavigation'
import TopBar from '../components/TopBar'

export default function Dashboard() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-12 bg-[#f4f4f6] dark:bg-[#050505] text-[#141416] dark:text-white transition-colors duration-300">
      <BackgroundEffects />
      <TopBar />
      <RightControls />
      <FloatingControls />

      <SideNavigation items={leftNavItems} position="left" />
      <SideNavigation items={rightNavItems} position="right" />

      <main className="relative z-10 flex flex-1 flex-col">
        <HeroSection />

        <LapTimeline />
      </main>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden pointer-events-auto">
        <MobileNavigation leftItems={leftNavItems} rightItems={rightNavItems} />
      </div>
    </div>
  )
}
