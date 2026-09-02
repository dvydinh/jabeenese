import beeImg from "../imports/bee.png"

export function Shine() {
  return (
    <span className="pointer-events-none absolute left-4 top-1 h-2.5 w-9 -rotate-6 rounded-full bg-white/70 blur-[1.5px]" />
  )
}

export function JellyBee({ className = "" }: { className?: string }) {
  return (
    <img
      src={beeImg}
      alt="Linh vật ong"
      className={`select-none object-contain ${className}`}
      draggable={false}
    />
  )
}

function wavePath(phase: number) {
  const N = 48
  let d = `M0 80 L0 ${(40 + 18 * Math.sin(phase)).toFixed(1)}`
  for (let i = 1; i <= N; i++) {
    const x = (1200 * i) / N
    const y = 40 + 18 * Math.sin((i / N) * Math.PI * 4 + phase)
    d += ` L${x.toFixed(1)} ${y.toFixed(1)}`
  }
  return d + " L1200 80 Z"
}

const WAVE_FRAMES = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI]
  .map(wavePath)
  .join(";")

export function HoneyMelt({ from, to, reverse = false }: { from: string; to: string; reverse?: boolean }) {
  return (
    <div className={`relative w-full leading-none ${reverse ? "rotate-180" : ""}`} style={{ background: from }} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block h-[46px] w-full sm:h-[66px]">
        <path fill={to}>
          <animate attributeName="d" dur="7s" repeatCount="indefinite" values={WAVE_FRAMES} calcMode="linear" />
        </path>
      </svg>
    </div>
  )
}
