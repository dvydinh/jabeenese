import { useState } from "react"
import { hiraganaData, katakanaData } from "../data/kanaData"

export default function KanaChartPage({ type }: { type: "hiragana" | "katakana" }) {
  const isHiragana = type === "hiragana"
  const data = isHiragana ? hiraganaData : katakanaData
  const bgColor = isHiragana ? "bg-cream" : "bg-honey-light"
  const themeColor = isHiragana ? "#f5a623" : "#f5a623" // shadow color
  
  return (
    <div className={`min-h-screen pb-20 ${bgColor} font-body text-ink`}>
      <div className="mx-auto max-w-5xl px-5 pt-10 sm:px-10">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
          {isHiragana ? "Bảng Hiragana" : "Bảng Katakana"}
        </h1>
        <p className="mt-3 max-w-lg font-body text-lg font-medium text-ink-soft">
          {isHiragana
            ? "Hiragana là bảng chữ cái cơ bản nhất, dùng cho các từ thuần Nhật và ngữ pháp."
            : "Katakana được dùng chủ yếu cho từ mượn tiếng nước ngoài, tên riêng và nhấn mạnh."}
        </p>

        <div className="mt-12 overflow-x-auto pb-8">
          <div className="inline-flex flex-col gap-4 min-w-max">
            {/* Header row (A I U E O) */}
            <div className="grid grid-cols-[3rem_repeat(5,4.5rem)] gap-3 sm:grid-cols-[4rem_repeat(5,5.5rem)] sm:gap-4 lg:grid-cols-[4rem_repeat(5,6rem)]">
              <div /> {/* Empty top-left cell */}
              {["a", "i", "u", "e", "o"].map(vowel => (
                <div key={vowel} className="flex justify-center font-display text-xl font-bold uppercase text-ink/40">
                  {vowel}
                </div>
              ))}
            </div>

            {/* Grid rows */}
            {data.map((row, rIdx) => {
              // The first character of the row usually defines the consonant (e.g. k, s, t)
              // We can infer it from the first item's romaji, minus the vowel
              const firstRomaji = row[0].romaji
              let consonant = firstRomaji.length > 1 ? firstRomaji.slice(0, -1) : ""
              if (rIdx === 0) consonant = "" // a i u e o row
              if (rIdx === 7) consonant = "y" // ya yu yo row
              if (rIdx === 10) consonant = "n" // n row

              return (
                <div key={rIdx} className="grid grid-cols-[3rem_repeat(5,4.5rem)] gap-3 sm:grid-cols-[4rem_repeat(5,5.5rem)] sm:gap-4 lg:grid-cols-[4rem_repeat(5,6rem)]">
                  {/* Row label */}
                  <div className="flex items-center justify-center font-display text-xl font-bold uppercase text-ink/40">
                    {consonant}
                  </div>

                  {/* Kana cells */}
                  {row.map((char, cIdx) => (
                    char.empty ? (
                      <div key={cIdx} className="rounded-3xl border-[3px] border-dashed border-ink/10" />
                    ) : (
                      <div
                        key={cIdx}
                        className="group relative flex aspect-square flex-col items-center justify-center rounded-3xl border-[4px] border-ink bg-white shadow-[4px_4px_0_0_#1c1a17] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#f5a623]"
                      >
                        <span className="font-kana text-3xl font-black text-ink transition-transform group-hover:scale-110 sm:text-4xl lg:text-5xl">
                          {char.kana}
                        </span>
                        <span className="absolute bottom-2 font-display text-xs font-bold text-ink-soft sm:bottom-3 sm:text-sm">
                          {char.romaji}
                        </span>
                      </div>
                    )
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
