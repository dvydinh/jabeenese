import { useState } from "react"
import beeImg from "./imports/bee.png"
import JarSelection from "./pages/JarSelection"
import VocabularyPage from "./pages/VocabularyPage"
import VocabFlashcard from "./pages/VocabFlashcard"
import RadicalSelectionPage from "./pages/RadicalSelectionPage"
import RadicalFlashcard from "./pages/RadicalFlashcard"
import KanaChartPage from "./pages/KanaChartPage"
import Navbar from "./components/Navbar"
import { JellyBee, HoneyMelt, Shine } from "./components/SharedUI"
import type { VocabBook, VocabUnit, RadicalInfo } from "./data/vocabData"

type Page = "landing" | "jars" | "vocab" | "vocab-study" | "radicals" | "radicals-study" | "hiragana" | "katakana"

const paths = [
  { id: "hiragana", jp: "ひらがな", title: "Hiragana", desc: "Bảng chữ mềm mại. Bắt đầu từ đây để đọc được mọi từ.", count: "46 chữ", bg: "bg-cream" },
  { id: "katakana", jp: "カタカナ", title: "Katakana", desc: "Bảng chữ góc cạnh cho từ mượn, tên riêng và nhấn mạnh.", count: "46 chữ", bg: "bg-honey-light" },
  { id: "kanji", jp: "かんじ", title: "Kanji đầu tiên", desc: "100 chữ Hán thân thiện, mỗi chữ kèm câu chuyện dễ nhớ.", count: "100 chữ", bg: "bg-cream" },
]

function LandingPage({ onJoinHive, onPathSelect }: { onJoinHive: () => void; onPathSelect: (id: string) => void }) {
  return (
    <div className="min-h-full w-full overflow-x-hidden bg-honey font-body text-ink">
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
              <button
                key={p.title}
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
              từ thật và nghĩa rồi bay sang thẻ tiếp theo.
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
              Tham gia tổ ong miễn phí
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
  const [selectedStrokes, setSelectedStrokes] = useState<number | null>(null)
  const [selectedRadicalsList, setSelectedRadicalsList] = useState<RadicalInfo[]>([])

  const goToJars = () => {
    setPage("jars")
    window.scrollTo(0, 0)
  }

  const goHome = () => {
    setPage("landing")
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    if (page === "vocab" || page === "radicals") {
      setPage("jars")
      window.scrollTo(0, 0)
    } else {
      goHome()
    }
  }

  const handlePathSelect = (id: string) => {
    if (id === "kanji") {
      alert("Tính năng học Kanji theo lộ trình đang được xây dựng. Coming soon! 🚧")
    } else {
      setPage(id as Page)
      window.scrollTo(0, 0)
    }
  }

  const isStudy = page === "vocab-study" || page === "radicals-study"
  const meltToColor = page === "landing" ? "#ffc32b" : page === "katakana" ? "#ffe08a" : "#fff8e6"

  return (
    <>
      {!isStudy && (
        <Navbar
          meltToColor={meltToColor}
          onLogoClick={goHome}
          onBack={page !== "landing" ? handleBack : undefined}
        />
      )}

      {page === "landing" && (
        <LandingPage onJoinHive={goToJars} onPathSelect={handlePathSelect} />
      )}

      {page === "hiragana" && (
        <KanaChartPage type="hiragana" />
      )}

      {page === "katakana" && (
        <KanaChartPage type="katakana" />
      )}

      {page === "jars" && (
        <JarSelection
          onSelect={(id) => {
            if (id === "vocabulary") {
              setPage("vocab")
              window.scrollTo(0, 0)
            } else if (id === "radicals") {
              setPage("radicals")
              window.scrollTo(0, 0)
            } else if (id === "kanji") {
              alert("Tính năng học Kanji theo lộ trình đang được xây dựng. Coming soon! 🚧")
            }
          }}
          onBack={goHome}
        />
      )}

      {page === "vocab" && (
        <VocabularyPage
          onSelectUnit={(book, unit) => {
            setSelectedBook(book)
            setSelectedUnit(unit)
            setPage("vocab-study")
            window.scrollTo(0, 0)
          }}
          onBack={goToJars}
        />
      )}

      {page === "radicals" && (
        <RadicalSelectionPage
          onSelectGroup={(strokes, radicals) => {
            setSelectedStrokes(strokes)
            setSelectedRadicalsList(radicals)
            setPage("radicals-study")
            window.scrollTo(0, 0)
          }}
          onBack={goToJars}
        />
      )}

      {page === "vocab-study" && selectedBook && selectedUnit && (
        <VocabFlashcard
          bookId={selectedBook.id}
          unit={selectedUnit}
          bookColor={selectedBook.color}
          bookShadow={selectedBook.shadow}
          bookTitle={selectedBook.title}
          onBack={() => {
            setPage("vocab")
            window.scrollTo(0, 0)
          }}
        />
      )}

      {page === "radicals-study" && selectedStrokes !== null && (
        <RadicalFlashcard
          strokes={selectedStrokes}
          radicals={selectedRadicalsList}
          onBack={() => {
            setPage("radicals")
            window.scrollTo(0, 0)
          }}
        />
      )}
    </>
  )
}
