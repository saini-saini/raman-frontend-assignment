import carImage from '../assets/car.png'

export default function CarImage({ variant = 'desktop' }) {
  const isMobile = variant === 'mobile'

  const ring = (
    <div
      className={`relative overflow-hidden rounded-full bg-[#141416] dark:bg-[#0d0d0d] car-portal-shadow transition-all duration-300 ${
        isMobile
          ? 'h-[min(62vw,240px)] w-[min(62vw,240px)]'
          : 'h-[min(26vw,340px)] w-[min(26vw,340px)] min-h-[200px] min-w-[200px]'
      }`}
    >
      <img
        src={carImage}
        alt="Aston Martin sports car front view"
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover object-[center_42%]"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-black/45 dark:to-black/50 transition-colors duration-300" />
      <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] dark:shadow-[inset_0_0_60px_rgba(0,0,0,0.35)] transition-all duration-300" />
    </div>
  )

  if (isMobile) {
    return (
      <div className="relative my-3 flex items-center justify-center w-full z-10">
        <div className="absolute left-1/2 top-1/2 h-[min(62vw,240px)] w-[min(62vw,240px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.04] dark:bg-white/[0.03] blur-3xl transition-colors duration-300" />
        {/* Figma background bezel (366.52 x 365.2) - Desktop/Tablet only */}
        <div className="car-bg-bezel absolute h-[107.8%] w-[107.8%] rounded-full z-0 hidden md:block" />
        <div className="relative z-10">
          {ring}
        </div>
      </div>
    )
  }

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute h-[115%] w-[115%] rounded-full bg-black/[0.04] dark:bg-white/[0.03] blur-3xl transition-colors duration-300" />
      {/* Figma background bezel (366.52 x 365.2) */}
      <div className="car-bg-bezel absolute h-[107.8%] w-[107.8%] rounded-full z-0 pointer-events-none" />
      <div className="relative z-10">
        {ring}
      </div>
    </div>
  )
}
