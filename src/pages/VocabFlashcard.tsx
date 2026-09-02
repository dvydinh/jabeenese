import { useState } from "react"
import type { VocabUnit, VocabWord, KanjiInfo } from "../data/vocabData"

type StudyMode = "meaning" | "reading" | "word"

const STUDY_MODES: { id: StudyMode; label: string; desc: string; icon: string }[] = [
  { id: "meaning", label: "Học nghĩa", desc: "Mặt trước: từ gốc + cách đọc → Lật: nghĩa", icon: "🇻🇳" },
  { id: "reading", label: "Học cách đọc", desc: "Mặt trước: từ gốc + nghĩa → Lật: cách đọc", icon: "🔤" },
  { id: "word", label: "Học từ gốc", desc: "Mặt trước: cách đọc + nghĩa → Lật: từ gốc", icon: "🈶" },
]

function getFrontBack(word: VocabWord, mode: StudyMode) {
  switch (mode) {
    case "meaning":
      return {
        frontMain: word.japanese,
        frontSub: word.reading,
        backMain: word.meaning,
        backSub: null,
      }
    case "reading":
      return {
        frontMain: word.japanese,
        frontSub: word.meaning,
        backMain: word.reading,
        backSub: null,
      }
    case "word":
      return {
        frontMain: word.reading,
        frontSub: word.meaning,
        backMain: word.japanese,
        backSub: null,
      }
  }
}

function KanjiPopup({
  info,
  onClose,
}: {
  info: KanjiInfo
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="kanji-popup w-full max-w-md rounded-[2.5rem] border-[5px] border-ink bg-white p-8 shadow-[10px_12px_0_0_#f5a623] sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <span className="font-kana text-8xl font-black text-ink sm:text-9xl">
            {info.character}
          </span>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border-[3px] border-ink bg-cream font-display text-lg font-bold transition-all hover:bg-honey"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border-[3px] border-ink bg-honey-light p-5">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-ink-soft">
              Hán Việt
            </span>
            <p className="mt-1 font-display text-3xl font-extrabold text-ink">
              {info.hanViet}
            </p>
          </div>

          <div className="rounded-2xl border-[3px] border-ink bg-cream p-5">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-ink-soft">
              Bộ thủ
            </span>
            <p className="mt-1 font-display text-xl font-bold text-ink">
              {info.radical}
            </p>
          </div>

          <div className="rounded-2xl border-[3px] border-ink bg-white p-5">
            <span className="font-display text-sm font-bold uppercase tracking-widest text-ink-soft">
              Câu chuyện ghi nhớ
            </span>
            <p className="mt-2 font-body text-lg font-medium leading-relaxed text-ink">
              {info.story}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ClickableKanji({
  text,
  kanjiList,
  className = "",
}: {
  text: string
  kanjiList?: KanjiInfo[]
  className?: string
}) {
  const [popup, setPopup] = useState<KanjiInfo | null>(null)

  if (!kanjiList || kanjiList.length === 0) {
    return <span className={className}>{text}</span>
  }

  const kanjiMap = new Map(kanjiList.map((k) => [k.character, k]))

  return (
    <>
      <span className={className}>
        {Array.from(text).map((char, idx) => {
          const info = kanjiMap.get(char)
          if (info) {
            return (
              <span
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setPopup(info)
                }}
                className="cursor-pointer rounded-lg transition-all duration-200 hover:bg-honey/40 hover:px-1"
                title={`${info.hanViet} — bấm để xem chi tiết`}
              >
                {char}
              </span>
            )
          }
          return <span key={idx}>{char}</span>
        })}
      </span>
      {popup && <KanjiPopup info={popup} onClose={() => setPopup(null)} />}
    </>
  )
}

export default function VocabFlashcard({
  unit,
  bookColor,
  bookShadow,
  bookTitle,
  onBack,
}: {
  unit: VocabUnit
  bookColor: string
  bookShadow: string
  bookTitle: string
  onBack: () => void
}) {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [mode, setMode] = useState<StudyMode>("meaning")
  const [showModeSelect, setShowModeSelect] = useState(false)
  const word = unit.words[i]
  const { frontMain, frontSub, backMain } = getFrontBack(word, mode)

  const goTo = (next: number) => {
    setFlipped(false)
    setTimeout(() => setI(next), 150)
  }

  const next = () => goTo((i + 1) % unit.words.length)
  const prev = () => goTo((i - 1 + unit.words.length) % unit.words.length)

  const isFrontKanji = mode === "meaning" || mode === "reading"
  const isBackKanji = mode === "word"

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-ink font-body text-cream">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-display text-base font-bold text-cream/60 transition-colors hover:text-honey sm:text-lg"
        >
          ← Quay lại
        </button>

        <div className="flex items-center gap-2 text-center">
          <span
            className="hidden h-8 w-8 place-items-center rounded-lg border-[2px] border-white/20 font-kana text-xs font-bold text-white sm:grid"
            style={{ background: bookColor }}
          >
            本
          </span>
          <span className="font-display text-sm font-bold text-cream/70 sm:text-base">
            {bookTitle} · {unit.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowModeSelect((s) => !s)}
            className="rounded-full border-[2px] border-cream/20 bg-white/10 px-3 py-1.5 font-display text-sm font-bold text-cream transition-all hover:border-honey hover:bg-honey/20 sm:px-4"
          >
            {STUDY_MODES.find((m) => m.id === mode)?.icon}{" "}
            <span className="hidden sm:inline">
              {STUDY_MODES.find((m) => m.id === mode)?.label}
            </span>
          </button>
          <span className="font-display text-sm font-bold text-cream/40">
            {i + 1}/{unit.words.length}
          </span>
        </div>
      </div>

      {showModeSelect && (
        <div className="absolute left-0 right-0 top-14 z-50 mx-auto w-full max-w-md px-4 sm:top-16">
          <div className="rounded-[2rem] border-[4px] border-ink bg-white p-4 text-ink shadow-[8px_8px_0_0_#f5a623]">
            <p className="mb-3 text-center font-display text-lg font-extrabold">
              Chọn chế độ học
            </p>
            {STUDY_MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setMode(m.id)
                  setFlipped(false)
                  setShowModeSelect(false)
                }}
                className={`mb-2 flex w-full items-center gap-3 rounded-2xl border-[3px] p-4 text-left transition-all ${
                  mode === m.id
                    ? "border-ink bg-honey shadow-[3px_3px_0_0_#1c1a17]"
                    : "border-ink/20 bg-cream hover:border-ink hover:bg-honey-light"
                }`}
              >
                <span className="text-2xl">{m.icon}</span>
                <div>
                  <span className="font-display text-base font-extrabold">{m.label}</span>
                  <p className="font-body text-xs font-medium text-ink-soft">{m.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-4 sm:px-8">
        <div
          className="relative w-full max-w-lg cursor-pointer [perspective:1400px]"
          style={{ height: "min(65vh, 500px)" }}
          onClick={() => setFlipped((f) => !f)}
        >
          <div
            className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
            style={{
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[3rem] border-[5px] border-white/20 bg-gradient-to-br from-white/15 to-white/5 p-8 [backface-visibility:hidden] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {isFrontKanji ? (
                <ClickableKanji
                  text={frontMain}
                  kanjiList={word.kanji}
                  className="font-kana text-7xl font-black text-cream sm:text-8xl lg:text-9xl"
                />
              ) : (
                <span className="font-kana text-6xl font-black text-cream sm:text-7xl lg:text-8xl">
                  {frontMain}
                </span>
              )}
              <div className="h-[3px] w-20 rounded-full bg-cream/20" />
              <span className="font-body text-xl font-semibold text-cream/60 sm:text-2xl">
                {frontSub}
              </span>
              <span className="mt-2 rounded-full border-[2px] border-cream/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-cream/30">
                chạm để lật
              </span>
            </div>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[3rem] border-[5px] p-8 [backface-visibility:hidden]"
              style={{
                transform: "rotateY(180deg)",
                background: `linear-gradient(135deg, ${bookColor}, ${bookShadow})`,
                borderColor: bookShadow,
                boxShadow: `0 20px 60px rgba(0,0,0,0.3)`,
              }}
            >
              {isBackKanji ? (
                <ClickableKanji
                  text={backMain}
                  kanjiList={word.kanji}
                  className="font-kana text-7xl font-black text-white sm:text-8xl lg:text-9xl"
                />
              ) : mode === "reading" ? (
                <span className="font-kana text-6xl font-black text-white sm:text-7xl lg:text-8xl">
                  {backMain}
                </span>
              ) : (
                <span className="text-center font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                  {backMain}
                </span>
              )}
              <span className="mt-2 rounded-full bg-white/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-white/60">
                đã lật ✓
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 sm:mt-8">
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-cream/20 bg-white/10 font-display text-xl font-bold text-cream transition-all hover:border-honey hover:bg-honey/20 active:scale-90 sm:h-14 sm:w-14"
          >
            ←
          </button>

          <div className="flex gap-1">
            {unit.words.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  setFlipped(false)
                  setI(idx)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === i ? "w-6 bg-honey" : "w-2 bg-cream/20 hover:bg-cream/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="grid h-12 w-12 place-items-center rounded-full border-[3px] border-honey bg-honey font-display text-xl font-bold text-ink shadow-[0_4px_15px_rgba(255,195,43,0.3)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,195,43,0.4)] active:scale-90 sm:h-14 sm:w-14"
          >
            →
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:mt-6">
          {unit.words.map((w, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                setFlipped(false)
                setI(idx)
              }}
              className={`rounded-xl border-[2px] px-3 py-1.5 font-kana text-sm font-bold transition-all ${
                idx === i
                  ? "border-honey bg-honey text-ink"
                  : "border-cream/15 bg-white/5 text-cream/50 hover:border-cream/30 hover:bg-white/10 hover:text-cream"
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
