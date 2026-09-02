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
  { id: "radicals", label: "Bộ thủ", jp: "部首", emoji: "🫕", available: true },
  { id: "grammar", label: "Ngữ pháp", jp: "文法", emoji: "🧈", available: false },
  { id: "kanji", label: "Kanji", jp: "漢字", emoji: "🍱", available: false },
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

          <div className="mt-16 flex flex-col">
            {jars.map((jar, idx) => (
              <SkillRow key={jar.id} jar={jar} idx={idx} onSelect={onSelect} />
            ))}
          </div>

          <div className="mt-20 flex items-center justify-center gap-2 font-display text-lg font-bold text-ink-soft">
            <span className="inline-block animate-pulse">✨</span>
            Nhiều hương vị sắp ra mắt
            <span className="inline-block animate-pulse">✨</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillRow({
  jar,
  idx,
  onSelect,
}: {
  jar: JarItem
  idx: number
  onSelect: (id: string) => void
}) {
  const isEven = idx % 2 === 0

  return (
    <div
      className={`group flex flex-col items-center gap-8 border-b-[3px] border-ink/10 py-12 last:border-b-0 sm:gap-16 sm:py-20 lg:gap-24 ${
        isEven ? "sm:flex-row" : "sm:flex-row-reverse"
      }`}
    >
      {/* Hình ảnh minh họa */}
      <div className="flex flex-1 justify-center">
        <div className="relative flex aspect-square w-56 items-center justify-center rounded-[4rem] border-[6px] border-ink bg-cream shadow-[10px_12px_0_0_#1c1a17] transition-all duration-500 hover:-translate-y-4 hover:rotate-3 hover:shadow-[16px_20px_0_0_#a78bfa] sm:w-64 lg:w-80 lg:rounded-[5rem]">
          <span className="text-7xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-110 sm:text-8xl lg:text-9xl">
            {jar.emoji}
          </span>
          {/* Lớp phủ tạo hiệu ứng bóng lưỡng (glossy) cho khối vuông */}
          <div className="pointer-events-none absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-60 lg:rounded-[4.5rem]" />
        </div>
      </div>

      {/* Thông tin & Nút */}
      <div
        className={`flex flex-1 flex-col items-center text-center sm:items-start sm:text-left ${
          isEven ? "sm:items-start sm:text-left" : "sm:items-end sm:text-right"
        }`}
      >
        <span className="font-kana text-3xl font-black text-ink/20 sm:text-4xl lg:text-5xl">
          {jar.jp}
        </span>
        <h2 className="mt-2 font-display text-4xl font-extrabold text-ink sm:text-5xl lg:text-6xl">
          {jar.label}
        </h2>
        <p className="mt-4 max-w-sm font-body text-lg font-medium text-ink-soft sm:mt-6 sm:text-xl">
          {jar.available
            ? `Khám phá hương vị tuyệt hảo của ${jar.label} và làm giàu kho tàng tiếng Nhật của bạn!`
            : "Hương vị này đang được ong thợ miệt mài ủ, hãy quay lại sau nhé!"}
        </p>

        <div className="mt-8 sm:mt-10">
          {jar.available ? (
            <button
              onClick={() => onSelect(jar.id)}
              className="relative overflow-hidden rounded-full border-[5px] border-ink bg-[#FFB347] px-10 py-4 font-display text-2xl font-black text-ink shadow-[0_8px_0_0_#1c1a17,0_15px_30px_rgba(255,179,71,0.5)] transition-all hover:-translate-y-2 hover:shadow-[0_12px_0_0_#1c1a17,0_20px_40px_rgba(255,179,71,0.6)] active:translate-y-2 active:shadow-[0_0px_0_0_#1c1a17] sm:px-12 sm:py-5 sm:text-3xl"
            >
              {/* Bóng bẩy (glossy overlay) cho nút */}
              <div className="absolute inset-x-0 -top-4 bottom-1/2 rounded-full bg-white/40 blur-sm" />
              <div className="relative z-10 flex items-center gap-3">
                Bắt đầu
                <span className="text-3xl sm:text-4xl">🐝</span>
              </div>
            </button>
          ) : (
            <div className="rounded-full border-[4px] border-ink/20 bg-cream px-10 py-4 font-display text-xl font-bold text-ink/40 shadow-[0_6px_0_0_rgba(28,26,23,0.1)] sm:px-12 sm:py-5 sm:text-2xl">
              Sắp ra mắt
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
