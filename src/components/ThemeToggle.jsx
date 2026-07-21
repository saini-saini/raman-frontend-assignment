import { useTheme } from '../context/ThemeContext'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleTheme()
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative z-50 cursor-pointer pointer-events-auto flex items-center justify-between w-[98px] h-[46px] p-[3px] rounded-full border border-black/15 dark:border-white/10 bg-white/70 dark:bg-[#3636364D] shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 hover:border-racing-red/40 ${className}`}
    >
      <span
        className={`flex h-[37px] w-[37px] items-center justify-center rounded-full transition-all duration-300 ${
          !isDark
            ? 'bg-racing-red text-white shadow-[0_0_14px_rgba(227,30,36,0.55)]'
            : 'text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white'
        }`}
      >
        <SunIcon className="h-[18px] w-[18px]" />
      </span>
      <span
        className={`flex h-[37px] w-[37px] items-center justify-center rounded-full transition-all duration-300 ${
          isDark
            ? 'bg-racing-red text-white shadow-[0_0_14px_rgba(227,30,36,0.55)]'
            : 'text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white'
        }`}
      >
        <MoonIcon className="h-[18px] w-[18px]" />
      </span>
    </button>
  )
}
