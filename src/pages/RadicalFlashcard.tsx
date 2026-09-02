import { useState, useEffect } from "react"
import type { RadicalInfo } from "../data/vocabData"
import { Shine } from "../components/SharedUI"

export default function RadicalFlashcard({
  strokes,
  radicals,
  onBack,
}: {
  strokes: number
  radicals: RadicalInfo[]
  onBack: () => void
}) {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (radicals.length === 0) return
      if (e.key === "ArrowLeft") {
        setFlipped(false)
        setI((curr) => (curr - 1 + radicals.length) % radicals.length)
      }
      if (e.key === "ArrowRight") {
        setFlipped(false)
        setI((curr) => (curr + 1) % radicals.length)
      }
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault()
        setFlipped((f) => !f)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [radicals.length])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.error(err))
    } else {
      document.exitFullscreen().catch((err) => console.error(err))
    }
  }

  if (radicals.length === 0) {
    return (
      <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink p-6 font-body text-cream">
        <h2 className="font-display text-3xl font-extrabold text-purple-400">
          Chưa có dữ liệu
        </h2>
        <button onClick={onBack} className="mt-8 rounded-full bg-purple-400 px-6 py-3 font-display text-xl font-bold text-ink">Quay lại</button>
      </div>
    )
  }

  const rad = radicals[i]

  const goTo = (next: number) => {
    setFlipped(false)
    setTimeout(() => setI(next), 150)
  }
  const next = () => goTo((i + 1) % radicals.length)
  const prev = () => goTo((i - 1 + radicals.length) % radicals.length)

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-cream font-body text-ink">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-display text-base font-bold text-ink/60 transition-colors hover:text-ink sm:text-lg"
        >
          ← Quay lại
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleFullscreen}
            className="hidden items-center gap-2 rounded-full border-[2px] border-ink/20 bg-ink/5 px-4 py-1.5 font-display text-sm font-bold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-cream sm:flex"
            title="Bật / tắt toàn màn hình (phím F)"
          >
            ⛶ Toàn màn hình
          </button>
          
          <div className="flex items-center gap-2 rounded-full border-[2px] border-ink bg-purple-200 px-4 py-1.5 font-display text-sm font-bold text-ink shadow-[2px_2px_0_0_#1c1a17]">
            <span className="font-extrabold">Bộ {strokes} nét</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div
          className="relative h-[24rem] w-full max-w-sm cursor-pointer [perspective:1200px] sm:h-[28rem] sm:max-w-md lg:h-[32rem] lg:max-w-lg"
          onClick={() => setFlipped((f) => !f)}
        >
          <div
            className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
            style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
          >
            {/* Front: Bo & Ten Bo */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-[3rem] border-[5px] border-ink bg-cream p-8 [backface-visibility:hidden] shadow-[10px_12px_0_0_#1c1a17] sm:p-12"
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-4">
                <span className="font-kana text-8xl font-black text-ink sm:text-[10rem] lg:text-[12rem]">
                  {rad.bo}
                </span>
                <span className="font-display text-2xl font-bold text-ink-soft sm:text-3xl">
                  {rad.ten_bo}
                </span>
              </div>
              <div className="mt-auto font-body text-sm font-bold uppercase tracking-[0.3em] text-ink-soft/60">
                chạm để lật
              </div>
            </div>

            {/* Back: Nghia & Note */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-[3rem] border-[5px] border-ink bg-ink p-8 text-cream [backface-visibility:hidden] shadow-[10px_12px_0_0_#f5a623] sm:p-12"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
                <span className="font-display text-5xl font-extrabold text-honey sm:text-6xl">
                  {rad.nghia}
                </span>
                {rad.note && (
                  <p className="font-body text-xl font-medium text-cream/80 sm:text-2xl leading-relaxed">
                    {rad.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Progress Tracker */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-white font-display text-xl font-bold text-ink shadow-[4px_4px_0_0_#1c1a17] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#1c1a17] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#1c1a17] sm:h-14 sm:w-14"
          >
            ←
          </button>

          <div className="flex gap-1.5">
            {radicals.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === i ? "w-7 bg-ink" : "w-2.5 bg-ink/25"
                }`}
              />
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="animate-wobble relative overflow-hidden rounded-full border-[3px] border-ink bg-honey px-7 py-2.5 font-display text-lg font-bold text-ink shadow-[4px_4px_0_0_#1c1a17] transition-all hover:-translate-y-0.5 hover:shadow-[6px_7px_0_0_#1c1a17] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#1c1a17]"
          >
            <Shine />
            Tiếp →
          </button>
        </div>
      </div>
    </div>
  )
}
