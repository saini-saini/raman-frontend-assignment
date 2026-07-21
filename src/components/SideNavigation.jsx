import { useState } from 'react'
import { NavIcon } from './Icons'

const LEFT_ARC = [
  { x: 22, y: -72 },
  { x: 0, y: 0 },
  { x: 22, y: 72 },
]

const RIGHT_ARC = [
  { x: -22, y: -72 },
  { x: 0, y: 0 },
  { x: -22, y: 72 },
]

function ArcGuide({ position }) {
  const isLeft = position === 'left'

  return (
    <svg
      className={`pointer-events-none absolute top-1/2 h-[220px] w-[80px] -translate-y-1/2 text-black/25 dark:text-white/22 ${isLeft ? '-left-[52px]' : '-right-[52px]'}`}
      viewBox="0 0 80 220"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={isLeft ? 'M 58 12 Q 8 110 58 208' : 'M 22 12 Q 72 110 22 208'}
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="5 7"
        fill="none"
      />
    </svg>
  )
}

function NavTooltip({ label, position }) {
  const isLeft = position === 'left'

  return (
    <div
      className={`absolute top-1/2 z-30 -translate-y-1/2 whitespace-nowrap pointer-events-none ${
        isLeft ? 'left-[calc(100%+14px)]' : 'right-[calc(100%+14px)]'
      }`}
    >
      <div className="relative">
        <div
          className="absolute top-1/2 h-[10px] w-[10px] -translate-y-1/2 rotate-45 bg-[#414141] z-10"
          style={
            isLeft
              ? { left: '-5px', borderLeft: '1px solid #333333', borderBottom: '1px solid #333333' }
              : { right: '-5px', borderRight: '1px solid #BF0405', borderTop: '1px solid #BF0405' }
          }
        />
        <div className="premium-tooltip-box text-[13px] font-medium tracking-wide text-white">
          {label}
        </div>
      </div>
    </div>
  )
}

function NavButton({ item, position, index }) {
  const [hovered, setHovered] = useState(false)
  const arc = position === 'left' ? LEFT_ARC : RIGHT_ARC
  const offset = arc[index]
  const showTooltip = hovered

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {showTooltip && <NavTooltip label={item.label} position={position} />}
      <button
        type="button"
        aria-label={item.label}
        aria-current={item.active ? 'page' : undefined}
        className="premium-icon-btn flex items-center justify-center h-[52px] w-[52px] text-white/80 hover:text-white hover:bg-racing-red hover:shadow-[0_0_20px_rgba(227,30,36,0.75)] hover:scale-105 transition-all duration-300 group"
      >
        <NavIcon
          name={item.icon}
          className="relative z-10 h-[22px] w-[22px] text-white transition-colors duration-300 group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-[3px] rounded-full bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.4),transparent_55%)] dark:bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.22),transparent_55%)] group-hover:opacity-0 transition-opacity duration-300" />
      </button>
    </div>
  )
}

export default function SideNavigation({ items, position = 'left' }) {
  const positionClasses =
    position === 'left'
      ? 'left-2 sm:left-4 lg:left-10 xl:left-14'
      : 'right-2 sm:right-4 lg:right-10 xl:right-14'

  return (
    <nav
      aria-label={position === 'left' ? 'Primary navigation' : 'Secondary navigation'}
      className={`absolute z-20 hidden h-[220px] w-[52px] md:block ${positionClasses} ${
        position === 'left' ? 'top-[48%]' : 'top-[54%]'
      } -translate-y-1/2`}
    >
      <ArcGuide position={position} />
      {items.map((item, index) => (
        <NavButton key={item.id} item={item} position={position} index={index} />
      ))}
    </nav>
  )
}

export function MobileNavigation({ leftItems, rightItems }) {
  const allItems = [...leftItems, ...rightItems]

  return (
    <nav
      aria-label="Mobile navigation"
      className="relative z-20 mx-auto flex w-fit items-center gap-1 rounded-full border border-black/10 dark:border-white/10 bg-white/85 dark:bg-black/55 px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl md:hidden sm:gap-1.5 sm:px-4 transition-colors duration-300"
    >
      {allItems.map((item) => (
        <button
          key={item.id}
          type="button"
          aria-label={item.label}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-racing-red hover:shadow-[0_0_16px_rgba(227,30,36,0.75)] transition-all duration-300"
        >
          <NavIcon name={item.icon} className="h-5 w-5 text-current" />
        </button>
      ))}
    </nav>
  )
}
