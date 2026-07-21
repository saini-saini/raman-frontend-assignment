import { BackIcon, CheckIcon, DownloadIcon, ShareIcon } from './Icons'

const circleBase =
  'flex items-center justify-center rounded-full border transition-all duration-200 backdrop-blur-sm'

export function BackButton({ className = '' }) {
  return (
    <button
      type="button"
      aria-label="Go back"
      className={`premium-icon-btn flex items-center justify-center h-11 w-11 text-white/85 hover:text-white ${className}`}
    >
      <BackIcon className="h-4 w-4 relative z-10" />
    </button>
  )
}

function ActionButton({ children, variant = 'default', ariaLabel, className = '' }) {
  const styles =
    variant === 'primary'
      ? `${circleBase} h-11 w-11 border-racing-red bg-racing-red text-white shadow-[0_0_24px_rgba(227,30,36,0.55)] hover:bg-racing-red-bright`
      : `premium-icon-btn flex items-center justify-center h-10 w-10 text-white/85 hover:text-white`

  return (
    <button type="button" aria-label={ariaLabel} className={`${styles} ${className}`}>
      {children}
    </button>
  )
}

export function ActionButtons({ className = '', vertical = true }) {
  return (
    <div className={`flex ${vertical ? 'flex-col gap-2.5' : 'flex-row gap-2'} ${className}`}>
      <ActionButton ariaLabel="Download">
        <DownloadIcon className="h-4 w-4" />
      </ActionButton>
      <ActionButton ariaLabel="Share">
        <ShareIcon className="h-4 w-4" />
      </ActionButton>
      <ActionButton variant="primary" ariaLabel="Confirm">
        <CheckIcon className="h-4 w-4" />
      </ActionButton>
    </div>
  )
}

export default function FloatingControls() {
  return null
}
