import { useState, useEffect } from "react"
import type { VocabBook, VocabUnit } from "../data/vocabData"
import { fetchBooks } from "../data/supabaseApi"

export default function VocabularyPage({
  onSelectUnit,
  onBack,
}: {
  onSelectUnit: (book: VocabBook, unit: VocabUnit) => void
  onBack: () => void
}) {
  const [selectedBook, setSelectedBook] = useState<VocabBook | null>(null)
  const [books, setBooks] = useState<VocabBook[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data)
      setLoading(false)
    })
  }, [])

  if (selectedBook) {
    return (
      <div className="min-h-screen bg-cream font-body text-ink">
        <div className="bg-ink">
          <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-4 sm:px-10">
            <button
              onClick={() => setSelectedBook(null)}
              className="flex items-center gap-2 font-display text-lg font-bold text-cream/70 transition-colors hover:text-honey"
            >
              ← Quay lại
            </button>
            <div className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl border-[2px] border-ink font-kana text-base font-bold text-white"
                style={{ background: selectedBook.color }}
              >
                本
              </span>
              <span className="font-display text-xl font-extrabold text-cream">
                {selectedBook.title}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-10">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
            Chọn bài học
          </h1>
          <p className="mt-3 max-w-lg font-body text-lg font-medium text-ink-soft">
            Mỗi bài chứa bộ flashcard từ vựng riêng. Chạm để bắt đầu ôn tập.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {selectedBook.units.map((unit, idx) => (
              <button
                key={unit.id}
                onClick={() => onSelectUnit(selectedBook, unit)}
                className="book-card group flex flex-col items-start gap-3 rounded-[2rem] border-[4px] border-ink bg-white p-7 text-left shadow-[6px_6px_0_0_#1c1a17] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_12px_0_0_#f5a623]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className="grid h-14 w-14 place-items-center rounded-2xl border-[3px] border-ink font-display text-2xl font-extrabold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{ background: selectedBook.color }}
                >
                  {idx + 1}
                </div>
                <h3 className="font-display text-xl font-extrabold sm:text-2xl">
                  {unit.name}
                </h3>
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border-[3px] border-ink px-3 py-1 font-display text-xs font-bold text-white"
                  style={{ background: selectedBook.color }}
                >
                  {unit.words.length} từ
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <div className="bg-ink">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-4 sm:px-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 font-display text-lg font-bold text-cream/70 transition-colors hover:text-honey"
          >
            ← Quay lại
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍯</span>
            <span className="font-display text-2xl font-extrabold text-cream">
              Từ vựng
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-10">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
          Chọn giáo trình
        </h1>
        <p className="mt-3 max-w-lg font-body text-lg font-medium text-ink-soft">
          Mỗi cuốn sách chứa bộ flashcard từ vựng theo từng bài. Chạm để xem các bài.
        </p>

        {loading ? (
          <div className="mt-10 flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-[4px] border-ink/20 border-t-honey" />
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {books.map((book, idx) => {
              const totalWords = book.units.reduce((s, u) => s + u.words.length, 0)
              return (
                <button
                  key={book.id}
                  onClick={() => setSelectedBook(book)}
                className="book-card group flex gap-5 rounded-[2rem] border-[4px] border-ink bg-white p-6 text-left shadow-[6px_6px_0_0_#1c1a17] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_12px_0_0_#f5a623]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div
                  className="flex h-28 w-20 shrink-0 items-center justify-center rounded-xl border-[3px] border-ink font-display text-3xl font-extrabold text-white shadow-[3px_3px_0_0_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:rotate-[-3deg] group-hover:scale-105 sm:h-32 sm:w-24"
                  style={{ background: book.color }}
                >
                  <span className="font-kana text-4xl sm:text-5xl">本</span>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                    {book.title}
                  </h3>
                  <p className="mt-1 font-body text-sm font-semibold text-ink-soft">
                    {book.subtitle}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span
                      className="inline-flex items-center rounded-full border-[3px] border-ink px-3 py-1 font-display text-xs font-bold text-white"
                      style={{ background: book.color }}
                    >
                      {book.units.length} bài
                    </span>
                    <span className="inline-flex items-center rounded-full border-[2px] border-ink/30 bg-cream px-3 py-1 font-display text-xs font-bold text-ink-soft">
                      {totalWords} từ
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
        )}
      </div>
    </div>
  )
}
