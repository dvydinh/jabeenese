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
            ← Home
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-honey-deep/30 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-10 sm:pt-16">
          <div className="flex flex-col items-center text-center">
            <div className="jelly-bounce h-36 w-36 sm:h-44 sm:w-44">
              <img
                src={beeImg}
                alt="Bee mascot"
                className="h-full w-full select-none object-contain drop-shadow-[6px_10px_0_rgba(28,26,23,0.12)]"
                draggable={false}
              />
            </div>

            <h1 className="mt-8 font-display text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
              What would you like
              <span className="mt-2 block text-white [-webkit-text-stroke:3px_#1c1a17]">
                to taste?
              </span>
            </h1>
            <p className="mt-5 max-w-md font-body text-xl font-semibold text-ink-soft">
              Pick a honey jar to begin your sweet journey 🐝
            </p>
          </div>

          <div className="mt-14 flex justify-center">
            <div className="grid w-full max-w-3xl grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3">
              {jars.map((jar, idx) => (
                <button
                  key={jar.id}
                  onClick={() => {
                    if (jar.available) onSelect(jar.id)
                  }}
                  className={`jar-card group relative flex flex-col items-center gap-3 rounded-[2.5rem] border-[5px] border-ink bg-white px-6 py-10 text-center transition-all duration-300 sm:gap-4 sm:px-8 sm:py-12 ${
                    jar.available
                      ? "cursor-pointer shadow-[8px_8px_0_0_#1c1a17] hover:-translate-y-3 hover:shadow-[10px_14px_0_0_#f5a623]"
                      : "cursor-not-allowed opacity-50 shadow-[6px_6px_0_0_#ccc]"
                  } ${idx >= 3 ? "md:col-span-1" : ""}`}
                  style={{
                    animationDelay: `${idx * 100}ms`,
                    ...(idx === 3 ? { gridColumn: undefined } : {}),
                  }}
                >
                  <span className="jar-emoji text-7xl transition-transform duration-300 sm:text-8xl">
                    {jar.emoji}
                  </span>
                  <span className="font-kana text-2xl font-black text-ink/30 sm:text-3xl">
                    {jar.jp}
                  </span>
                  <span className="font-display text-2xl font-extrabold sm:text-3xl">
                    {jar.label}
                  </span>
                  {!jar.available && (
                    <span className="rounded-full border-[3px] border-ink/20 bg-cream px-4 py-1.5 font-display text-sm font-bold text-ink-soft">
                      Coming soon
                    </span>
                  )}
                  {jar.available && (
                    <span className="rounded-full border-[3px] border-ink bg-honey px-5 py-2 font-display text-base font-bold shadow-[3px_3px_0_0_#1c1a17] transition-all duration-300 group-hover:bg-honey-deep group-hover:shadow-[4px_5px_0_0_#1c1a17]">
                      Start →
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 flex items-center justify-center gap-2 font-display text-lg font-bold text-ink-soft">
            <span className="inline-block animate-pulse">✨</span>
            More flavors coming soon
            <span className="inline-block animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}
