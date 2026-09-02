import { useState } from "react"
import beeImg from "./imports/bee.png"
import JarSelection from "./pages/JarSelection"
import VocabularyPage from "./pages/VocabularyPage"
import VocabFlashcard from "./pages/VocabFlashcard"
import type { VocabBook, VocabUnit } from "./data/vocabData"

type Page = "landing" | "jars" | "vocab" | "vocab-study"

function Shine() {
  return (
    <span className="pointer-events-none absolute left-4 top-1 h-2.5 w-9 -rotate-6 rounded-full bg-white/70 blur-[1.5px]" />
  )
}

function JellyBee({ className = "" }: { className?: string }) {
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

function HoneyMelt({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative w-full leading-none" style={{ background: from }} aria-hidden="true">
      <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="block h-[46px] w-full sm:h-[66px]">
        <path fill={to}>
          <animate attributeName="d" dur="7s" repeatCount="indefinite" values={WAVE_FRAMES} calcMode="linear" />
        </path>
      </svg>
    </div>
  )
}

const demoCards = [
  { kana: "あ", romaji: "a", word: "あめ", meaning: "rain / candy" },
  { kana: "き", romaji: "ki", word: "きって", meaning: "postage stamp" },
  { kana: "つ", romaji: "tsu", word: "つき", meaning: "the moon" },
  { kana: "ね", romaji: "ne", word: "ねこ", meaning: "cat" },
  { kana: "は", romaji: "ha", word: "はな", meaning: "flower" },
]

function DemoFlashcard() {
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = demoCards[i]

  const next = () => {
    setFlipped(false)
    setTimeout(() => setI((p) => (p + 1) % demoCards.length), 120)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative h-64 w-full max-w-sm cursor-pointer [perspective:1200px] sm:h-72"
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-[2.5rem] border-[5px] border-ink bg-cream [backface-visibility:hidden] shadow-[10px_12px_0_0_#1c1a17]">
            <span className="font-kana text-8xl font-black text-ink sm:text-9xl">{card.kana}</span>
            <span className="mt-2 font-body text-sm font-bold uppercase tracking-[0.3em] text-ink-soft">
              chạm để lật
            </span>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-[2.5rem] border-[5px] border-ink bg-ink text-cream [backface-visibility:hidden] shadow-[10px_12px_0_0_#f5a623]" style={{ transform: "rotateY(180deg)" }}>
            <span className="font-display text-6xl font-extrabold text-honey sm:text-7xl">{card.romaji}</span>
            <span className="font-kana text-3xl">{card.word}</span>
            <span className="font-body text-base font-semibold text-honey-light">{card.meaning}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex gap-1.5">
          {demoCards.map((_, idx) => (
            <span
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-7 bg-ink" : "w-2.5 bg-ink/25"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="animate-wobble relative overflow-hidden rounded-full border-[3px] border-ink bg-honey px-7 py-2.5 font-display text-lg font-bold text-ink shadow-[4px_4px_0_0_#1c1a17] transition-all hover:-translate-y-0.5 hover:shadow-[6px_7px_0_0_#1c1a17] active:translate-y-0.5 active:shadow-[2px_2px_0_0_#1c1a17]"
        >
          <Shine />
          Tiếp →
        </button>
      </div>
    </div>
  )
}

const paths = [
  { jp: "ひらがな", title: "Hiragana", desc: "Bảng chữ mềm mại. Bắt đầu từ đây để đọc được mọi từ.", count: "46 chữ", bg: "bg-cream" },
  { jp: "カタカナ", title: "Katakana", desc: "Bảng chữ góc cạnh cho từ mượn, tên riêng và nhấn mạnh.", count: "46 chữ", bg: "bg-honey-light" },
  { jp: "かんじ", title: "Kanji đầu tiên", desc: "100 chữ Hán thân thiện, mỗi chữ kèm câu chuyện dễ nhớ.", count: "100 chữ", bg: "bg-cream" },
]

function LandingPage({ onJoinHive }: { onJoinHive: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ["Học", "Luyện tập", "Tổ ong", "Giới thiệu"]

  return (
    <div className="min-h-full w-full overflow-x-hidden bg-honey font-body text-ink">
      <header className="sticky top-0 z-30">
        <div className="bg-ink text-cream">
          <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-10">
            <div className="flex items-center gap-2.5">
              <div className="h-11 w-11 shrink-0 sm:h-12 sm:w-12">
                <JellyBee className="h-full w-full" />
              </div>
              <span className="font-display text-2xl font-extrabold tracking-tight text-cream">
                Ja<span className="text-honey">bee</span>nese
              </span>
            </div>
            <nav className="hidden items-center gap-7 font-display text-lg font-semibold md:flex">
              {links.map((l) => (
                <a key={l} href="#" className="text-cream/85 transition-colors hover:text-honey">{l}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                onClick={onJoinHive}
                className="relative hidden overflow-hidden rounded-full bg-honey px-6 py-2 font-display text-base font-bold text-ink shadow-[3px_3px_0_0_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 sm:block"
              >
                <Shine />
                Bắt đầu
              </button>

              <button
                aria-label="Menu"
                onClick={() => setMenuOpen((o) => !o)}
                className="grid h-11 w-11 place-items-center rounded-full border-[3px] border-honey bg-ink md:hidden"
              >
                <div className="space-y-1.5">
                  <span className={`block h-0.5 w-5 bg-cream transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
                  <span className={`block h-0.5 w-5 bg-cream transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 w-5 bg-cream transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </div>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="border-t border-cream/20 px-5 py-4 md:hidden">
              <nav className="flex flex-col gap-1 font-display text-xl font-bold text-cream">
                {links.map((l) => (
                  <a key={l} href="#" onClick={() => setMenuOpen(false)} className="rounded-2xl px-3 py-2 transition-colors hover:bg-white/10">{l}</a>
                ))}
                <button
                  onClick={() => { setMenuOpen(false); onJoinHive() }}
                  className="relative mt-2 overflow-hidden rounded-full bg-honey px-6 py-2.5 font-display text-lg font-bold text-ink"
                >
                  <Shine />
                  Bắt đầu
                </button>
              </nav>
            </div>
          )}
        </div>

        <HoneyMelt from="#1c1a17" to="#ffc32b" />
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-12 pt-16 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-16 lg:pb-16 lg:pt-24">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full border-[3px] border-ink bg-white px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_0_#1c1a17] sm:text-sm">
            日本語 · ngọt ngào &amp; đơn giản
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="whitespace-nowrap">Học tiếng Nhật,</span>
            <span className="mt-2 block whitespace-nowrap text-white [-webkit-text-stroke:3px_#1c1a17]">ngọt ngào &amp; dễ dàng.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md font-body text-lg font-medium text-ink-soft sm:text-xl lg:mx-0">
            Bài học kana nhỏ gọn. Mỗi ngày 10 phút là đủ.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={onJoinHive}
              className="animate-wobble relative w-full overflow-hidden rounded-full border-[4px] border-ink bg-white px-8 py-3.5 font-display text-lg font-bold text-ink shadow-[6px_6px_0_0_#1c1a17] transition-all hover:-translate-y-1 hover:shadow-[8px_10px_0_0_#1c1a17] active:translate-y-0.5 sm:w-auto sm:text-xl"
            >
              <Shine />
              Tham gia tổ ong miễn phí
            </button>
            <div className="flex items-center gap-2 font-display font-bold">
              <div className="flex -space-x-2">
                {["#f5a623", "#ffe08a", "#1c1a17"].map((c) => (
                  <span key={c} className="h-8 w-8 rounded-full border-[3px] border-ink" style={{ background: c }} />
                ))}
              </div>
              <span>28k trong tổ ong</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 m-auto h-56 w-56 rounded-full bg-white/40 blur-2xl sm:h-64 sm:w-64" />
          <div className="animate-bob relative">
            <JellyBee className="h-72 w-72 drop-shadow-[8px_12px_0_rgba(28,26,23,0.14)] sm:h-96 sm:w-96" />
          </div>
          {["あ", "ん", "き"].map((k, idx) => (
            <span
              key={k}
              className="absolute font-kana text-3xl font-black text-ink/70"
              style={{ left: `${18 + idx * 30}%`, bottom: "6%", animation: `floatUp ${3 + idx}s ease-in-out ${idx * 0.7}s infinite` }}
            >
              {k}
            </span>
          ))}
        </div>
      </section>

      <HoneyMelt from="#ffc32b" to="#1c1a17" />

      <section className="bg-ink px-5 pb-28 pt-16 text-cream sm:px-10 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-extrabold text-honey sm:text-5xl">Ba con đường ngọt ngào</h2>
          <p className="mt-2 max-w-lg font-body text-lg text-cream/70">
            Đi theo vệt mật ong từ âm thanh đầu tiên đến khi đọc được từ thật.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {paths.map((p) => (
              <article
                key={p.title}
                className={`group flex flex-col rounded-[2rem] border-[4px] border-ink ${p.bg} p-7 text-ink shadow-[8px_8px_0_0_#f5a623] transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_14px_0_0_#f5a623]`}
              >
                <span className="font-kana text-5xl font-black transition-transform duration-300 group-hover:scale-110">{p.jp}</span>
                <h3 className="mt-4 font-display text-3xl font-extrabold">{p.title}</h3>
                <p className="mt-2 flex-1 font-body text-base font-medium text-ink-soft">{p.desc}</p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border-[3px] border-ink bg-honey px-4 py-1.5 font-display text-sm font-bold">{p.count} →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HoneyMelt from="#1c1a17" to="#fff8e6" />

      <section className="bg-cream px-5 py-20 sm:px-10 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <span className="font-display text-lg font-bold uppercase tracking-[0.3em] text-honey-deep">Luyện tập</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Lật thẻ, bắt âm thanh</h2>
            <p className="mx-auto mt-4 max-w-md font-body text-lg font-medium text-ink-soft lg:mx-0">
              Mỗi lần ôn tập là một trò chơi nhỏ. Chạm thẻ để lật ra cách đọc,
              từ thật và nghĩa — rồi bay sang thẻ tiếp theo.
            </p>
            <ul className="mt-6 space-y-3 text-left font-display text-lg font-semibold">
              {["Lặp lại ngắt quãng, âm thầm ghi nhớ", "Âm thanh bản ngữ mỗi thẻ", "Chuỗi streak khiến bạn muốn học tiếp"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border-[3px] border-ink bg-honey text-xs font-black">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <DemoFlashcard />
        </div>
      </section>

      <HoneyMelt from="#fff8e6" to="#ffc32b" />

      <section className="bg-honey px-5 py-20 sm:px-10 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { n: "10 phút", l: "mỗi ngày là đủ" },
              { n: "1,200+", l: "thẻ kana & kanji" },
              { n: "28,431", l: "người học trong tổ" },
            ].map((s) => (
              <div key={s.l} className="rounded-[2rem] border-[4px] border-ink bg-white p-8 text-center shadow-[6px_6px_0_0_#1c1a17]">
                <div className="font-display text-5xl font-extrabold sm:text-6xl">{s.n}</div>
                <div className="mt-2 font-body text-base font-semibold text-ink-soft">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 rounded-[2.5rem] border-[5px] border-ink bg-ink px-6 py-12 text-center text-cream shadow-[10px_12px_0_0_#ffffff] sm:px-8 sm:py-14">
            <div className="h-24 w-24">
              <JellyBee className="h-full w-full" />
            </div>
            <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-honey sm:text-5xl">
              Sẵn sàng để tiếng Nhật dính như mật ong chưa?
            </h2>
            <p className="max-w-md font-body text-lg text-cream/70">
              Không thẻ tín dụng, không áp lực. Chỉ có bạn, chú ong thân thiện và 5 chữ đầu tiên.
            </p>
            <button
              onClick={onJoinHive}
              className="animate-wobble relative overflow-hidden rounded-full bg-honey px-9 py-4 font-display text-xl font-bold text-ink shadow-[6px_6px_0_0_#ffffff] transition-all hover:-translate-y-1 active:translate-y-0.5"
            >
              <Shine />
              Tham gia tổ ong — miễn phí
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-ink px-5 py-12 text-cream sm:px-10 lg:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-xl font-extrabold text-cream">
            <div className="h-9 w-9">
              <JellyBee className="h-full w-full" />
            </div>
            Ja<span className="text-honey">bee</span>nese
          </div>
          <p className="font-body text-sm font-semibold text-cream/60">Làm bằng mật ong · がんばって! · © 2026</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const [page, setPage] = useState<Page>("landing")
  const [selectedBook, setSelectedBook] = useState<VocabBook | null>(null)
  const [selectedUnit, setSelectedUnit] = useState<VocabUnit | null>(null)

  const goToJars = () => {
    setPage("jars")
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    setPage("landing")
    window.scrollTo(0, 0)
  }

  if (page === "jars") {
    return (
      <JarSelection
        onSelect={(id) => {
          if (id === "vocabulary") {
            setPage("vocab")
            window.scrollTo(0, 0)
          }
        }}
        onBack={goHome}
      />
    )
  }

  if (page === "vocab") {
    return (
      <VocabularyPage
        onSelectUnit={(book, unit) => {
          setSelectedBook(book)
          setSelectedUnit(unit)
          setPage("vocab-study")
          window.scrollTo(0, 0)
        }}
        onBack={goToJars}
      />
    )
  }

  if (page === "vocab-study" && selectedBook && selectedUnit) {
    return (
      <VocabFlashcard
        unit={selectedUnit}
        bookColor={selectedBook.color}
        bookShadow={selectedBook.shadow}
        bookTitle={selectedBook.title}
        onBack={() => {
          setPage("vocab")
          window.scrollTo(0, 0)
        }}
      />
    )
  }

  return <LandingPage onJoinHive={goToJars} />
}
