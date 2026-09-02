import beeImg from "../imports/bee.png"

type JarItem = {
  id: string
  label: string
  jp: string
  available: boolean
}

const jars: JarItem[] = [
  { id: "grammar", label: "Ngữ pháp", jp: "文法", available: false },
  { id: "vocabulary", label: "Từ vựng", jp: "語彙", available: true },
  { id: "reading", label: "Đọc hiểu", jp: "読解", available: false },
  { id: "listening", label: "Nghe hiểu", jp: "聴解", available: false },
  { id: "kanji", label: "Kanji", jp: "漢字", available: false },
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
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-10">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 font-display text-lg font-bold text-ink/70 transition-colors hover:text-ink"
        >
          ← Back to home
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="animate-bob h-28 w-28 sm:h-36 sm:w-36">
            <img
              src={beeImg}
              alt="Bee mascot"
              className="h-full w-full select-none object-contain"
              draggable={false}
            />
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            What would you like
            <span className="mt-1 block text-white [-webkit-text-stroke:3px_#1c1a17]">
              to taste?
            </span>
          </h1>
          <p className="mt-4 max-w-md font-body text-lg font-medium text-ink-soft">
            Pick a honey jar to begin your sweet journey
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jars.map((jar, idx) => (
            <button
              key={jar.id}
              onClick={() => {
                if (jar.available) {
                  onSelect(jar.id)
                }
              }}
              className={`jar-card group relative flex flex-col items-center gap-4 rounded-[2rem] border-[4px] border-ink bg-white p-8 text-center shadow-[6px_6px_0_0_#1c1a17] transition-all duration-300 ${
                jar.available
                  ? "cursor-pointer hover:-translate-y-2 hover:shadow-[8px_12px_0_0_#f5a623]"
                  : "cursor-not-allowed opacity-60"
              }`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <span className="text-6xl transition-transform duration-300 group-hover:scale-110 sm:text-7xl">
                🍯
              </span>
              <span className="font-kana text-2xl font-black text-ink/40">
                {jar.jp}
              </span>
              <span className="font-display text-2xl font-extrabold">
                {jar.label}
              </span>
              {!jar.available && (
                <span className="rounded-full border-[2px] border-ink/20 bg-cream px-3 py-1 font-display text-xs font-bold text-ink-soft">
                  Coming soon
                </span>
              )}
              {jar.available && (
                <span className="rounded-full border-[3px] border-ink bg-honey px-4 py-1.5 font-display text-sm font-bold transition-all group-hover:bg-honey-deep">
                  Start →
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
