export default function StatsPanel({ stats, align = 'left' }) {
  const panelAlignment = align === 'left' ? 'items-center sm:items-end' : 'items-center sm:items-start'

  return (
    <div className={`flex flex-col gap-5 sm:gap-8 lg:gap-12 xl:gap-14 ${panelAlignment}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center text-center">
          <p className="font-numbers text-[28px] sm:text-[30px] font-bold leading-none tracking-normal text-[#141416] dark:text-white transition-colors duration-300 whitespace-nowrap">
            {stat.value}
          </p>
          <p className="font-display mt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#141416]/75 dark:text-white/55 lg:text-xs transition-colors duration-300">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
