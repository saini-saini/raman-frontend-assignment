import logoImage from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'
import { BackButton } from './FloatingControls'

export default function TopBar() {
  return (
    <header className="mb-[12px] sm:mb-[20px] relative z-40 flex items-center justify-between px-[22px] pt-4 sm:pt-6 shrink-0">
      <div className="flex items-center gap-3">
        <BackButton className="md:hidden shrink-0" />
        <img
          src={logoImage}
          alt="NEXTCAR — Drive Next"
          className="h-[40px] sm:h-[54px] lg:h-[64px] w-auto object-contain dark:invert-0 invert transition-all duration-300"
          draggable={false}
        />
      </div>
      <ThemeToggle />
    </header>
  )
}
