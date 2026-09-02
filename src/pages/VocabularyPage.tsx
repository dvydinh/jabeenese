import { vocabBooks, type VocabBook } from "../data/vocabData"

export default function VocabularyPage({
  onSelectBook,
  onBack,
}: {
  onSelectBook: (book: VocabBook) => void
  onBack: () => void
}) {
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
            <span className="text-2xl">🍯</span>
            <span className="font-display text-2xl font-extrabold text-cream">
              Từ vựng
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-10">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
          Pick a textbook
        </h1>
        <p className="mt-3 max-w-lg font-body text-lg font-medium text-ink-soft">
          Each book is a collection of vocabulary flashcards. Tap a book to start
          studying.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {vocabBooks.map((book, idx) => (
            <button
              key={book.id}
              onClick={() => onSelectBook(book)}
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
                <span
                  className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border-[3px] border-ink px-3 py-1 font-display text-xs font-bold text-white"
                  style={{ background: book.color }}
                >
                  {book.wordCount} words
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
