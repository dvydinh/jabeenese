import beeImg from "../imports/bee.png"

type JarItem = {
  id: string
  label: string
  jp: string
  emoji: string
  available: boolean
  color: string
}

const jars: JarItem[] = [
  { id: "vocabulary", label: "Từ vựng", jp: "語彙", emoji: "🍯", available: true, color: "#ffc32b" },
  { id: "grammar", label: "Ngữ pháp", jp: "文法", emoji: "🧈", available: false, color: "#c4b5fd" },
  { id: "kanji", label: "Kanji", jp: "漢字", emoji: "🫕", available: false, color: "#a78bfa" },
  { id: "reading", label: "Đọc hiểu", jp: "読解", emoji: "📖", available: false, color: "#ddd6fe" },
  { id: "listening", label: "Nghe hiểu", jp: "聴解", emoji: "🎧", available: false, color: "#ede9fe" },
]

function FloatingKana({ char, className }: { char: string; className: string }) {
  return (
    <span className={`pointer-events-none absolute hidden font-kana font-black text-ink/[0.04] lg:block ${className}`}>
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
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-4 sm:px-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-display text-lg font-bold text-cream/70 transition-colors hover:text-honey"
          >
            ← Trang chủ
          </button>
        </div>
      </div>

      <div className="relative min-h-[calc(100vh-56px)] overflow-hidden">
        <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-purple-200/20 blur-[80px]" />
        <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-purple-300/15 blur-[80px]" />
        <div className="absolute bottom-10 left-1/4 h-60 w-60 rounded-full bg-honey-deep/20 blur-[60px]" />

        <FloatingKana char="あ" className="left-[5%] top-[15%] text-[10rem] rotate-[-15deg]" />
        <FloatingKana char="カ" className="right-[4%] top-[10%] text-[12rem] rotate-[10deg]" />
        <FloatingKana char="漢" className="left-[3%] bottom-[20%] text-[9rem] rotate-[8deg]" />
        <FloatingKana char="の" className="right-[6%] bottom-[15%] text-[11rem] rotate-[-12deg]" />
        <FloatingKana char="日" className="left-[8%] top-[55%] text-[8rem] rotate-[20deg]" />
        <FloatingKana char="本" className="right-[8%] top-[50%] text-[9rem] rotate-[-8deg]" />

        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-12 sm:px-10 sm:pt-16">
          <div className="flex flex-col items-center text-center">
            <div className="jelly-bounce h-32 w-32 sm:h-40 sm:w-40">
              <img
                src={beeImg}
                alt="Linh vật ong"
                className="h-full w-full select-none object-contain drop-shadow-[6px_10px_0_rgba(28,26,23,0.12)]"
                draggable={false}
              />
            </div>

            <h1 className="mt-8 font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              Bạn muốn nếm thử
              <span className="mt-2 block text-white [-webkit-text-stroke:3px_#1c1a17]">
                hương vị nào?
              </span>
            </h1>
            <p className="mt-5 max-w-md font-body text-xl font-semibold text-ink-soft">
              Chọn một hũ mật ong để bắt đầu hành trình ngọt ngào 🐝
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-[640px] grid-cols-2 gap-5 sm:gap-6 md:max-w-none md:grid-cols-5">
            {jars.map((jar, idx) => (
              <button
                key={jar.id}
                onClick={() => {
                  if (jar.available) onSelect(jar.id)
                }}
                className={`jar-card group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-[2rem] border-[5px] border-ink bg-white text-center transition-all duration-300 sm:gap-3 sm:rounded-[2.5rem] ${
                  jar.available
                    ? "cursor-pointer shadow-[8px_8px_0_0_#1c1a17] hover:-translate-y-3 hover:shadow-[10px_14px_0_0_#a78bfa]"
                    : "cursor-not-allowed opacity-50 shadow-[6px_6px_0_0_#ccc]"
                }`}
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <span className="jar-emoji text-5xl transition-transform duration-300 sm:text-6xl md:text-7xl">
                  {jar.emoji}
                </span>
                <span className="font-kana text-lg font-black text-ink/25 sm:text-xl">
                  {jar.jp}
                </span>
                <span className="font-display text-base font-extrabold leading-tight sm:text-lg md:text-xl">
                  {jar.label}
                </span>
                {!jar.available && (
                  <span className="rounded-full border-[2px] border-ink/15 bg-cream px-3 py-1 font-display text-[10px] font-bold text-ink-soft sm:text-xs">
                    Sắp có
                  </span>
                )}
                {jar.available && (
                  <span className="rounded-full border-[3px] border-ink bg-honey px-4 py-1.5 font-display text-xs font-bold shadow-[3px_3px_0_0_#1c1a17] transition-all duration-300 group-hover:bg-purple-300 group-hover:shadow-[4px_5px_0_0_#7c3aed] sm:text-sm">
                    Bắt đầu →
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-center gap-2 font-display text-lg font-bold text-ink-soft">
            <span className="inline-block animate-pulse">✨</span>
            Nhiều hương vị sắp ra mắt
            <span className="inline-block animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}
