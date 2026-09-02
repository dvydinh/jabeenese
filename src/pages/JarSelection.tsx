import beeImg from "../imports/bee.png"

type JarItem = {
  id: string
  label: string
  jp: string
  emoji: string
  available: boolean
}

const jars: JarItem[] = [
  { id: "vocabulary", label: "Từ vựng", jp: "語彙", emoji: "🍯", available: true },
  { id: "grammar", label: "Ngữ pháp", jp: "文法", emoji: "🧈", available: false },
  { id: "kanji", label: "Kanji", jp: "漢字", emoji: "🫕", available: false },
  { id: "reading", label: "Đọc hiểu", jp: "読解", emoji: "📖", available: false },
  { id: "listening", label: "Nghe hiểu", jp: "聴解", emoji: "🎧", available: false },
]

function FloatingKana({ char, className }: { char: string; className: string }) {
  return (
    <span className={`pointer-events-none absolute hidden select-none font-kana font-black text-ink/[0.04] lg:block ${className}`}>
      {char}
    </span>
  )
}

export default function JarSelection({
  onSelect,
  onBack,
}: {
  onSelect: (id: string) => void
  onBack: () => void
}) {
  return (
    <div className="min-h-screen bg-honey font-body text-ink">
      <div className="bg-ink">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-4 sm:px-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-display text-lg font-bold text-cream/70 transition-colors hover:text-honey"
          >
            ← Trang chủ
          </button>
        </div>
      </div>

      <div className="relative min-h-[calc(100vh-56px)] overflow-hidden">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-purple-200/20 blur-[100px]" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-purple-300/15 blur-[100px]" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-honey-deep/20 blur-[80px]" />

        <FloatingKana char="あ" className="left-[3%] top-[12%] text-[12rem] rotate-[-15deg]" />
        <FloatingKana char="カ" className="right-[2%] top-[8%] text-[14rem] rotate-[10deg]" />
        <FloatingKana char="漢" className="left-[2%] bottom-[18%] text-[11rem] rotate-[8deg]" />
        <FloatingKana char="の" className="right-[4%] bottom-[12%] text-[13rem] rotate-[-12deg]" />
        <FloatingKana char="日" className="left-[6%] top-[50%] text-[10rem] rotate-[20deg]" />
        <FloatingKana char="本" className="right-[6%] top-[45%] text-[11rem] rotate-[-8deg]" />

        <div className="relative mx-auto max-w-5xl px-5 pb-20 pt-10 sm:px-10 sm:pt-14">
          <div className="flex flex-col items-center text-center">
            <div className="jelly-bounce h-28 w-28 sm:h-36 sm:w-36">
              <img
                src={beeImg}
                alt="Linh vật ong"
                className="h-full w-full select-none object-contain drop-shadow-[6px_10px_0_rgba(28,26,23,0.12)]"
                draggable={false}
              />
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:mt-8 sm:text-5xl lg:text-6xl">
              Bạn muốn nếm thử
              <span className="mt-1 block text-white [-webkit-text-stroke:3px_#1c1a17] sm:mt-2">
                hương vị nào?
              </span>
            </h1>
            <p className="mt-4 max-w-md font-body text-lg font-semibold text-ink-soft">
              Chọn một hũ mật ong để bắt đầu hành trình ngọt ngào 🐝
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-[520px] grid-cols-2 gap-4 sm:mt-12 sm:gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-6">
            {jars.slice(0, 3).map((jar, idx) => (
              <JarCard key={jar.id} jar={jar} idx={idx} onSelect={onSelect} />
            ))}
          </div>
          <div className="mx-auto mt-4 grid max-w-[520px] grid-cols-2 gap-4 sm:mt-5 sm:gap-5 lg:mt-6 lg:max-w-[66%] lg:gap-6">
            {jars.slice(3).map((jar, idx) => (
              <JarCard key={jar.id} jar={jar} idx={idx + 3} onSelect={onSelect} />
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 font-display text-lg font-bold text-ink-soft">
            <span className="inline-block animate-pulse">✨</span>
            Nhiều hương vị sắp ra mắt
            <span className="inline-block animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function JarCard({
  jar,
  idx,
  onSelect,
}: {
  jar: JarItem
  idx: number
  onSelect: (id: string) => void
}) {
  return (
    <button
      onClick={() => {
        if (jar.available) onSelect(jar.id)
      }}
      className={`jar-card group relative flex aspect-square flex-col items-center justify-center gap-3 rounded-[2.5rem] border-[5px] border-ink bg-white text-center transition-all duration-300 sm:gap-4 sm:rounded-[3rem] ${
        jar.available
          ? "cursor-pointer shadow-[8px_8px_0_0_#1c1a17] hover:-translate-y-3 hover:shadow-[10px_14px_0_0_#a78bfa]"
          : "cursor-not-allowed opacity-50 shadow-[6px_6px_0_0_#ccc]"
      }`}
      style={{ animationDelay: `${idx * 80}ms` }}
    >
      <span className="jar-emoji text-6xl transition-transform duration-300 sm:text-7xl lg:text-8xl">
        {jar.emoji}
      </span>
      <span className="font-kana text-xl font-black text-ink/25 sm:text-2xl">
        {jar.jp}
      </span>
      <span className="font-display text-xl font-extrabold leading-tight sm:text-2xl lg:text-3xl">
        {jar.label}
      </span>
      {!jar.available && (
        <span className="rounded-full border-[2px] border-ink/15 bg-cream px-3 py-1 font-display text-xs font-bold text-ink-soft sm:text-sm">
          Sắp có
        </span>
      )}
      {jar.available && (
        <span className="rounded-full border-[3px] border-ink bg-honey px-5 py-2 font-display text-sm font-bold shadow-[3px_3px_0_0_#1c1a17] transition-all duration-300 group-hover:bg-purple-300 group-hover:shadow-[4px_5px_0_0_#7c3aed] sm:text-base">
          Bắt đầu →
        </span>
      )}
    </button>
  )
}
