import { useState } from "react"
import type { VocabBook } from "../data/vocabData"

function Shine() {
  return (
    <span className="pointer-events-none absolute left-4 top-1 h-2.5 w-9 -rotate-6 rounded-full bg-white/70 blur-[1.5px]" />
  )
}

export default function VocabFlashcard({
  book,
  onBack,
}: {
  book: VocabBook
  onBack: () => void
}) {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const word = book.words[i]

  const goTo = (next: number) => {
    setFlipped(false)
    setTimeout(() => setI(next), 120)
  }

  const next = () => goTo((i + 1) % book.words.length)
  const prev = () => goTo((i - 1 + book.words.length) % book.words.length)

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <div className="bg-ink">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-5 sm:px-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-display text-lg font-bold text-cream/70 transition-colors hover:text-honey"
          >
            ← Back
          </button>
          <div className="flex items-center gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-lg border-[2px] border-ink font-kana text-sm font-bold text-white"
              style={{ background: book.color }}
            >
              本
            </span>
            <span className="font-display text-xl font-extrabold text-cream">
              {book.title}
            </span>
          </div>
          <span className="ml-auto font-display text-sm font-bold text-cream/50">
            {i + 1} / {book.words.length}
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-12 sm:px-10 sm:py-16">
        <div
          className="relative h-72 w-full max-w-md cursor-pointer [perspective:1200px] sm:h-80"
          onClick={() => setFlipped((f) => !f)}
        >
          <div
            className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
            style={{
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2.5rem] border-[5px] border-ink bg-white [backface-visibility:hidden] shadow-[10px_12px_0_0_#1c1a17]">
              <span className="font-kana text-7xl font-black text-ink sm:text-8xl">
                {word.japanese}
              </span>
              <span className="mt-4 font-body text-sm font-bold uppercase tracking-[0.3em] text-ink-soft">
                tap to reveal
              </span>
            </div>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-[2.5rem] border-[5px] border-ink text-white [backface-visibility:hidden]"
              style={{
                background: book.color,
                transform: "rotateY(180deg)",
                boxShadow: `10px 12px 0 0 ${book.shadow}`,
              }}
            >
              <span className="font-kana text-4xl font-black sm:text-5xl">
                {word.reading}
              </span>
              <div className="h-[3px] w-16 rounded-full bg-white/40" />
              <span className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                {word.meaning}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            onClick={prev}
            className="relative overflow-hidden rounded-full border-[3px] border-ink bg-white px-6 py-2.5 font-display text-lg font-bold text-ink shadow-[4px_4px_0_0_#1c1a17] transition-all hover:-translate-y-0.5 hover:shadow-[6px_7px_0_0_#1c1a17] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#1c1a17]"
          >
            ← Prev
          </button>

          <div className="flex gap-1.5">
            {book.words.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === i ? "w-7 bg-ink" : "w-2.5 bg-ink/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="animate-wobble relative overflow-hidden rounded-full border-[3px] border-ink bg-honey px-6 py-2.5 font-display text-lg font-bold text-ink shadow-[4px_4px_0_0_#1c1a17] transition-all hover:-translate-y-0.5 hover:shadow-[6px_7px_0_0_#1c1a17] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#1c1a17]"
          >
            <Shine />
            Next →
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {book.words.map((w, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFlipped(false)
                setI(idx)
              }}
              className={`rounded-xl border-[2px] border-ink px-3 py-1.5 font-kana text-sm font-bold transition-all ${
                idx === i
                  ? "bg-ink text-cream shadow-[2px_2px_0_0_#f5a623]"
                  : "bg-white text-ink hover:bg-honey-light"
              }`}
            >
              {w.japanese}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
